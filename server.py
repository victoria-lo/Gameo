import torch
import torch.nn as nn
import torch.nn.functional as F
import pandas as pd

import os
from threading import Thread
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util
from flask.json import JSONEncoder
from dotenv import load_dotenv

load_dotenv()


# ====================================== PYTORCH STUFF =================================================================

class MF(nn.Module):
    def __init__(self, num_users, num_items, emb_size=100):
        super(MF, self).__init__()
        self.num_users = num_users
        self.num_items = num_items
        self.user_emb = nn.Embedding(num_users, emb_size)
        self.item_emb = nn.Embedding(num_items, emb_size)
        self.user_emb.weight.data.uniform_(0, 0.5)
        self.item_emb.weight.data.uniform_(0, 0.5)

    def forward(self, u, v):
        u = self.user_emb(u)
        v = self.item_emb(v)
        return (u * v).sum(1)


game_ratings = pd.read_csv("game_ratings.csv")
num_users = len(game_ratings['Username'].unique())
num_games = len(game_ratings['Title'].unique())
model = MF(num_users, num_games, emb_size=100)


def train_epocs(model, epochs=10, lr=0.01, wd=0.0, unsqueeze=False):
    optimizer = torch.optim.Adam(model.parameters(), lr=lr, weight_decay=wd)
    model.train()
    for i in range(epochs):
        usernames = torch.LongTensor(game_ratings.UserId.values)
        game_titles = torch.LongTensor(game_ratings.TitleId.values)
        ratings = torch.FloatTensor(game_ratings.Userscore.values)
        if unsqueeze:
            ratings = ratings.unsqueeze(1)
        y_hat = model(usernames, game_titles)
        loss = F.mse_loss(y_hat, ratings)
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        print(loss.item())

# ======================================================================================================================


def train():
    global model
    model = MF(len(game_ratings['Username'].unique()), len(game_ratings['Title'].unique()), emb_size=100)
    train_epocs(model, epochs=10, lr=0.01)


def predict(user_id):
    user = torch.tensor([user_id])
    games = torch.tensor(game_ratings['TitleId'].unique().tolist())
    predictions = model(user, games)
    sort_by_indices = predictions.argsort()
    recommendations = game_ratings['Title'].unique()[sort_by_indices][:30]
    return recommendations


def added_rating(title, userscore, username):
    global game_ratings

    i = -1

    username_exist = username in game_ratings['Username'].unique()
    if not username_exist:
        user_id = len(game_ratings['Username'].unique())
    else:
        user_id = game_ratings[game_ratings['Username'] == username]['UserId'].values[0]
        user_ratings = game_ratings[game_ratings['Username'] == username]['Title'].values
        try:
            i = list(user_ratings).index(title)
        except ValueError:
            print("Game hasn't been rated by this user.")

    game_exist = username in game_ratings['Title'].unique()
    if not game_exist:
        title_id = len(game_ratings['Title'].unique())
    else:
        title_id = game_ratings[game_ratings['Title'] == title]['TitleId'].values[0]

    if i == -1:
        new_row = pd.DataFrame({"Title": [title],
                                "Userscore": [userscore],
                                "Username": [username], # for gameo users, usernames will be their email
                                "UserId": [user_id],
                                "TitleId": [title_id]
                                })

        # append row to the dataframe
        game_ratings = game_ratings.append(new_row, ignore_index=True)
        print("new row", game_ratings)
    else:
        row_index = list(game_ratings[game_ratings['Username'] == username]['Title'].index)[i]
        game_ratings.at[row_index, 'Userscore'] = userscore  # edit rating
        print("edit row", game_ratings)

    game_ratings.to_csv('game_ratings.csv', index=False)  # overwrite new changes


# define a custom encoder point to the json_util provided by pymongo (or its dependency bson)
class CustomJSONEncoder(JSONEncoder):
    def default(self, obj): return json_util.default(obj)


app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)
app.json_encoder = CustomJSONEncoder

client = MongoClient(os.environ.get('MONGODB_URI'))
db = client.gameo
User = db.users
Game = db.games


@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')


@app.route('/favicon.ico', methods=["GET"])
def favicon():
    return app.send_static_file('favicon.ico')


# ====================================== POST METHODS =================================================
@app.route('/user', methods=["POST"])
def add_user():
    req_body = request.get_json()
    post_data = {
        'email': req_body['email'],
        'name': req_body['name'],
        'games': [],
        'wishlist': [],
    }
    User.insert_one(post_data)
    return jsonify({'user': post_data})




# ====================================== GET METHODS ==================================================
@app.route('/user', methods=["GET"])
def get_user():
    email = request.args.get('email')
    _id = request.args.get('id')
    user = User.find_one({'email': email}) if email else User.find_one({'_id': _id})
    if not user:
        abort(404)
    return jsonify({'user': user})


@app.route('/game', methods=["GET"])
def get_game():
    email = request.args.get('email') #user ID

    user = User.find_one({'email': email})
    if not user:
        abort(404)

    # get new recommendations
    return jsonify(predict(email))


# ====================================== PATCH METHODS ==================================================
@app.route('/game', methods=["PATCH"])
def add_game():
    email = request.args.get('email') #user ID
    add_to_list = request.args.get('list')
    if add_to_list != 'games' and add_to_list != 'wishlist':
        print("bo list")
        abort(400)
    req_body = request.get_json()
    post_data = {
        'game_id': req_body['game_id'], #not MongoDB ID
        'title': req_body['title'],
        'rating': None
    }

    user = User.find_one_and_update({'email': email}, {'$push': {add_to_list: post_data}})
    if not user:
        print("bo user")
        abort(404)
    return jsonify({'user': user})


@app.route('/remove', methods=["PATCH"])
def delete_game():
    email = request.args.get('email')
    new_list = request.get_json()['list']

    user = User.find_one_and_update({'email': email}, {'$set': new_list})

    print(user)

    if not user:
        print("bo user")
        abort(404)
    return jsonify({'user': user})


@app.route('/rate', methods=["PATCH"])
def rate_game():
    email = request.args.get('email')
    game_id = request.args.get('gameId')
    new_list = request.get_json()['list']

    user = User.find_one_and_update({'email': email}, {'$set': {'games': new_list}})

    if not user:
        print("bo user")
        abort(404)

    for game in new_list:
        if int(game['game_id']) == int(game_id):
            # update rating to dataframe
            added_rating(game['title'], int(game['rating']), email)

    # re train model
    train()

    return jsonify({'user': user})


if __name__ == "__main__":
    # Only for debugging while developing
    Thread(target=train).start()
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

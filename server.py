from abc import ABC

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


def added_rating(title, platform, userscore, username, user_id, title_id):
    global game_ratings
    new_row = {'Title': title,
               'Platform': platform,
               'Userscore': userscore,
               'Username': username,  # for gameo users, usernames will be their email
               'UserId': user_id,
               'TitleId': title_id}
    # append row to the dataframe
    game_ratings = game_ratings.append(new_row, ignore_index=True)
    game_ratings.to_csv('game_ratings.csv')  # overwrite new changes


# define a custom encoder point to the json_util provided by pymongo (or its dependency bson)
class CustomJSONEncoder(JSONEncoder):
    def default(self, obj): return json_util.default(obj)


app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)
app.json_encoder = CustomJSONEncoder

client = MongoClient(os.environ.get('MONGODB_URI'))
db = client.gameo
User = db.users


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


if __name__ == "__main__":
    # Only for debugging while developing
    Thread(target=train).start()
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

import os
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util
from flask.json import JSONEncoder
from dotenv import load_dotenv
load_dotenv()


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
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


---
id: add-game
title: Add Game
---

:::note

This tutorial assumes you already have a server.py file with Python Flask and PyMongo set up. If you haven't already, read the [Overview](endpoint-summary.md) before reading this section.

:::

When a user adds a game to their library or wishlist, we update their data with the following steps:

1. The request passes the user's email and array (i.e. games or wishlist) that is to be updated as queries.
2. If the list query is neither "games" nor "wishlist", return 400 error.
3. Else, get the game properties needed to push to the array from the request body. Initialize its rating as None.
4. Use MongoDB's `find_one_and_update` to find the user by email and push the game to the list specified.

The code will be as follows:

```python
@app.route('/game', methods=["PATCH"])
def add_game():
    email = request.args.get('email') #user email
    add_to_list = request.args.get('list')
    if add_to_list != 'games' and add_to_list != 'wishlist':
        print("no such list")
        abort(400)
    req_body = request.get_json()
    post_data = {
        'game_id': req_body['game_id'],
        'title': req_body['title'],
        'rating': None
    }

    user = User.find_one_and_update({'email': email}, {'$push': {add_to_list: post_data}})
    if not user:
        print("no user")
        abort(404)
    return jsonify({'user': user})

```

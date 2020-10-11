---
id: rate-game
title: Rate Game
---

:::note

This tutorial assumes you already have a server.py file with Python Flask and PyMongo set up. If you haven't already, read the [Overview](endpoint-summary.md) before reading this section.

:::

When a user rates a game in their library, we update their data with the following steps:

1. The request passes the user's email and gameId as queries. A new list with a game rated is in the request body.
2. Use MongoDB's `find_one_and_update` to find the user by email and replace the list with the new list.
3. Get the rated game from the list and update its rating in the dataframe to re-train our model.

The code will be as follows:

```python
@app.route('/rate', methods=["PATCH"])
def rate_game():
    email = request.args.get('email')
    game_id = request.args.get('gameId')
    new_list = request.get_json()['list']

    user = User.find_one_and_update({'email': email}, {'$set': {'games': new_list}})

    if not user:
        print("no user")
        abort(404)

    for game in new_list:
        if int(game['game_id']) == int(game_id):
            # update rating to dataframe
            added_rating(game['title'], int(game['rating']), email)

    # re train model
    train()

    return jsonify({'user': user})
```

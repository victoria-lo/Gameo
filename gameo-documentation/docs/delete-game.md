---
id: delete-game
title: Remove Game
slug: /remove-game
---

:::note

This tutorial assumes you already have a server.py file with Python Flask and PyMongo set up. If you haven't already, read the [Overview](endpoint-summary.md) before reading this section.

:::

When a user removes a game from their library or wishlist, we update their data with the following steps:

1. The request passes the user's email as a query and a new list with a game removed in the request body.
2. Use MongoDB's `find_one_and_update` to find the user by email and replace the list with the new list.

The code will be as follows:

```python
@app.route('/remove', methods=["PATCH"])
def delete_game():
    email = request.args.get('email')
    new_list = request.get_json()['list']

    user = User.find_one_and_update({'email': email}, {'$set': new_list})

    if not user:
        print("no user")
        abort(404)
    return jsonify({'user': user})
```

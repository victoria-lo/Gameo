---
id: get-user
title: Get User
---

:::note

This tutorial assumes you already have a server.py file with Python Flask and PyMongo set up. If you haven't already, read the [Overview](endpoint-summary.md) before reading this section.

:::

When an existing user signs into Gameo, we get this user from the database with the following steps:

1. The request passes the user's email or id as queries.
2. Using MongoDB's `find_one`, find the user data with the corresponding email or id.
3. Return the user if found, else return 404.

The code will be as follows:

```python
@app.route('/user', methods=["GET"])
def get_user():
    email = request.args.get('email')
    _id = request.args.get('id')
    user = User.find_one({'email': email}) if email else User.find_one({'_id': _id})
    if not user:
        abort(404)
    return jsonify({'user': user})

```

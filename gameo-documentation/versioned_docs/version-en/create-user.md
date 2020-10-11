---
id: create-user
title: Create User
---

:::note

This tutorial assumes you already have a server.py file with Python Flask and PyMongo set up. If you haven't already, read the [Overview](endpoint-summary.md) before reading this section.

:::

When a new user creates a Gameo account, we create and add this new user to the database with the following steps:

1. The request sends the user's email and name for the new user data.
2. The games and wishlist properties are initialized as empty arrays.
3. Finally, using the MongoDB method `insert_one`, we can add the new user to the database.

The code will be as follows:

```python
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
```

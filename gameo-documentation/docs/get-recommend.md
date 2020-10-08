---
id: get-recommend
title: Get Recommendations
---

:::note

This tutorial assumes you already have a server.py file with Python Flask and PyMongo set up. If you haven't already, read the [Overview](endpoint-summary.md) before reading this section.

:::

When a user wants to view recommended games, we retrive the information with the following steps:

1. The request passes the user's email as a query.
2. Use MongoDB's `find_one` to find the user by email. Return 404 error if not found.
3. Else, return the result of the `predict` function.

The code will be as follows:

```python
@app.route('/game', methods=["GET"])
def get_game():
    email = request.args.get('email') #user ID

    user = User.find_one({'email': email})
    if not user:
        abort(404)

    # get new recommendations
    return jsonify(predict(email))
```

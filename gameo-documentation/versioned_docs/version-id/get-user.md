---
id: get-user
title: Dapatkan Pengguna
slug: /dapatkan-pengguna
---

:::note

Tutorial ini mengasumsikan Anda sudah memiliki file server.py dengan Python Flask dan pengaturan PyMongo. Jika Anda belum melakukannya, baca [Gambaran](./gambaran) sebelum membaca bagian ini.

:::

Ketika pengguna yang sudah ada masuk ke Gameo, kami mendapatkan pengguna ini dari database dengan langkah-langkah berikut:

1. Permintaan melewati email atau id pengguna sebagai kueri.
2. Dengan menggunakan `find_one` MongoDB, temukan data pengguna dengan email atau id yang sesuai.
3. Kembalikan pengguna jika ditemukan, jika tidak kembalikan 404.

Kodenya adalah sebagai berikut:

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

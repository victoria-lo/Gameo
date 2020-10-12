---
id: create-user
title: Buat Pengguna
slug: /buat-pengguna
---

:::note

Tutorial ini mengasumsikan Anda sudah memiliki file server.py dengan Python Flask dan pengaturan PyMongo. Jika Anda belum melakukannya, baca [Gambaran](./gambaran) sebelum membaca bagian ini.

:::

Ketika pengguna baru membuat akun Gameo, kami membuat dan menambahkan pengguna baru ini ke database dengan langkah-langkah berikut:

1. Permintaan mengirimkan email dan nama pengguna untuk data pengguna baru.
2. Properti game dan wishlist diinisialisasi sebagai array kosong.
3. Terakhir, dengan menggunakan metode MongoDB `insert_one`, kita dapat menambahkan pengguna baru ke database.

Kodenya adalah sebagai berikut:

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

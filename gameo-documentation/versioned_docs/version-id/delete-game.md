---
id: delete-game
title: Hapus Game
slug: /hapus-game
---

:::note

Tutorial ini mengasumsikan Anda sudah memiliki file server.py dengan Python Flask dan pengaturan PyMongo. Jika Anda belum melakukannya, baca [Gambaran](./gambaran) sebelum membaca bagian ini.

:::

Saat pengguna menghapus game dari pustaka atau daftar keinginan mereka, kami memperbarui data mereka dengan langkah-langkah berikut:

1. Permintaan meneruskan email pengguna sebagai kueri dan daftar baru dengan game yang dihapus di badan permintaan.
2. Gunakan `find_one_and_update` MongoDB untuk menemukan pengguna melalui email dan mengganti daftar dengan daftar baru.

Kodenya adalah sebagai berikut:

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

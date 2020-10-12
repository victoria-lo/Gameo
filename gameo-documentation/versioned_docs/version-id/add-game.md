---
id: add-game
title: Tambahkan Game
slug: /tambahkan-game
---

:::note

Tutorial ini mengasumsikan Anda sudah memiliki file server.py dengan Python Flask dan pengaturan PyMongo. Jika Anda belum melakukannya, baca [Gambaran](./gambaran) sebelum membaca bagian ini.

:::

Saat pengguna menambahkan game ke pustaka atau daftar keinginan mereka, kami memperbarui data mereka dengan langkah-langkah berikut:

1. Permintaan melewati email dan array pengguna (yaitu game atau daftar keinginan) yang akan diperbarui sebagai kueri.
2. Jika kueri daftar bukan "game" atau "wishlist", kembalikan 400 kesalahan.
3. Lain, dapatkan properti game yang diperlukan untuk mendorong ke array dari isi permintaan. Inisialisasi peringkatnya sebagai Tidak Ada.
4. Gunakan `find_one_and_update` MongoDB untuk menemukan pengguna melalui email dan mendorong permainan ke daftar yang ditentukan.

Kodenya adalah sebagai berikut:

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

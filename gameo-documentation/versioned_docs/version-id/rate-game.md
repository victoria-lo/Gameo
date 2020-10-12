---
id: rate-game
title: Nilai Game
slug: /nilai-game
---

:::note

Tutorial ini mengasumsikan Anda sudah memiliki file server.py dengan Python Flask dan pengaturan PyMongo. Jika Anda belum melakukannya, baca [Gambaran](./gambaran) sebelum membaca bagian ini.

:::

Saat pengguna memberi peringkat game di perpustakaan mereka, kami memperbarui data mereka dengan langkah-langkah berikut:

1. Permintaan melewati email pengguna dan gameId sebagai kueri. Daftar baru dengan peringkat game ada di badan permintaan.
2. Gunakan `find_one_and_update` MongoDB untuk menemukan pengguna melalui email dan mengganti daftar dengan daftar baru.
3. Dapatkan game berperingkat dari daftar dan perbarui peringkatnya dalam kerangka data untuk melatih ulang model kita.

Kodenya adalah sebagai berikut:

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

---
id: get-recommend
title: Dapatkan Rekomendasi
slug: /dapatkan-rekomendasi
---

:::note

Tutorial ini mengasumsikan Anda sudah memiliki file server.py dengan Python Flask dan pengaturan PyMongo. Jika Anda belum melakukannya, baca [Gambaran](./gambaran) sebelum membaca bagian ini.

:::

Saat pengguna ingin melihat game yang direkomendasikan, kami mengambil informasi dengan langkah-langkah berikut:

1. Permintaan melewati email pengguna sebagai kueri.
2. Gunakan `find_one` MongoDB untuk menemukan pengguna melalui email. Kembalikan kesalahan 404 jika tidak ditemukan.
3. Jika tidak, kembalikan hasil dari fungsi `prediksi`.

Kodenya adalah sebagai berikut:

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

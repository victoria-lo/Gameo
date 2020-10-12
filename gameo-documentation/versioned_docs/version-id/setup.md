---
id: setup
title: Mempersiapkan Set Data untuk PyTorch
slug: /mempersiapkan-set-data-untuk-pytorch
---

## Membersihkan Set Data

Kami menggunakan 2 set data untuk membangun model PyTorch.

### 1. Set Data Info Game Metakritik

Kumpulan data ini berisi semua video game yang diterbitkan dari 1998-2018. Berikut cuplikan tampilannya:

| Unnamed | 0   | Judul                                | Tahun | Penerbit               | Genre                                     | Platform       | Metascore | Avg_Userscore | No_Players |
| ------- | --- | ------------------------------------ | ----- | ---------------------- | ----------------------------------------- | -------------- | --------- | ------------- | ---------- |
| 0       | 0   | The Legend of Zelda: Ocarina of Time | 1998  | Nintendo               | Action Adventure;Fantasy                  | Nintendo64     | 99        | 9.1           | 1 Player   |
| 1       | 1   | Tony Hawk's Pro Skater 2             | 2000  | NeversoftEntertainment | Sports;Alternative;Skateboarding          | PlayStation 98 | 7.4       | 1-2           |
| 2       | 2   | Grand Theft Auto IV                  | 2008  | RockstarNorth          | Action Adventure;Modern;Modern;Open-World | PlayStation3   | 98        | 7.5           | 1 Player   |

Agar mesin rekomendasi kami tetap up-to-date, kami hanya tertarik pada judul game setelah tahun 2010. Jadi mari kita bersihkan dataset ini.

#### Impor pandas

Pertama kita mengimpor panda, paket Python yang digunakan untuk manipulasi dan analisis data.

```python
import pandas as pd
```

#### Membaca dan Memfilter Data

Kemudian, kami menggunakan panda untuk membaca file dataset yang telah kami impor.

```python
games_df = pd.read_csv("game_info.csv")
```

Kumpulan data ini berisi beberapa nilai Tahun yang nihil. Pilih hanya yang tidak nol dan setelah tahun 2010.

```python
games_df = games_df[games_df['Year'].notnull()]
games_df=games_df.loc[games_df.Year>=2010.0].reset_index(drop=True)
```

Terakhir, mari kita hapus kolom 'Unnamed' karena itu berlebihan dan ganti nama dataframe yang telah dibersihkan menjadi `df`.

```python
df = games_df.drop(columns=['Unnamed'], axis=1)
```

Di bawah ini adalah cuplikan dari tampilan `df`:

| Indeks | Judul                | Tahun | Penerbit         | Genre                                     | Platform     | Metascore | Avg_Userscore | No_Players            |
| ------ | -------------------- | ----- | ---------------- | ----------------------------------------- | ------------ | --------- | ------------- | --------------------- |
| 0      | Super Mario Galaxy 2 | 2010  | NintendoEADTokyo | Action;Platformer;Platformer;3D           | Wii          | 97        | 9.1           | No Online Multiplayer |
| 1      | Grand Theft Auto V   | 2014  | RockstarNorth    | Action Adventure;Modern;Open-World        | XboxOne      | 97        | 7.8           | Up to 30              |
| 2      | Grand Theft Auto V   | 2013  | RockstarNorth    | Modern;Action Adventure;Modern;Open-World | PlayStation3 | 97        | 8.3           | Up to 16              |

### 2. Peringkat Pengguna Game Metacritic

Kumpulan data ini berisi penilaian dan komentar pengguna untuk game tertentu. Kami hanya tertarik untuk melihat judul game di kolom `df`, `username` dan `userscore` kami. Sebelum dibersihkan, kumpulan data tersebut terlihat seperti cuplikan berikut:

| Unnamed | 0   | Judul                                | Platform   | Userscore | Komentar                                          | Nama Pengguna |
| ------- | --- | ------------------------------------ | ---------- | --------- | ------------------------------------------------- | ------------- |
| 0       | 0   | The Legend of Zelda: Ocarina of Time | Nintendo64 | 10        | Everything in OoT is so near at perfection, it... | SirCaestus    |
| 1       | 1   | The Legend of Zelda: Ocarina of Time | Nintendo64 | 10        | I won't bore you with what everyone is already... | Kaistlin      |
| 2       | 2   | The Legend of Zelda: Ocarina of Time | Nintendo64 | 10        | Anyone who gives the masterpiece below a 7 or ... | Jacody        |

#### Membaca dan Memfilter Data

Sama dengan dataset sebelumnya, kami menggunakan pandas untuk membaca file data.

```python
user_df=pd.read_csv("metacritic_game_user_comments.csv")
```

Kemudian kami menghapus kolom yang tidak kami butuhkan.

```python
user_df = user_df.drop(columns=['Unnamed', 'Platform','Comment'], axis=1)
```

Dan kami hanya memilih data dengan Judul yang ada di kolom Judul `df`, karena kami hanya ingin peringkat pengguna untuk game setelah 2010. Dataframe terakhir yang dibersihkan disebut `users`.

```python
users = user_df.loc[user_df['Title'].isin(df['Title'])].reset_index(drop=True)
```

Cuplikan dari kumpulan data yang dibersihkan terlihat seperti:

| Indeks | Judul                | Userscore | Nama Pengguna   |
| ------ | -------------------- | --------- | --------------- |
| 0      | Super Mario Galaxy 2 | 10        | S.Kumar         |
| 1      | Super Mario Galaxy 2 | 8         | ThePlasmaQuasar |
| 2      | Super Mario Galaxy 2 | 10        | juanandesign    |

## Ekspor Set Data untuk Model

Untuk bekerja dengan kumpulan data dengan mudah, lebih baik menggunakan id berkelanjutan untuk mengidentifikasi judul dan pengguna game.

### Menyandikan Kolom

Kita dapat membuat fungsi untuk menyandikan kolom pandas dengan id.

```python
def encode_column(column):
    """ Encodes a pandas column with continous IDs"""
    keys = column.unique()
    key_to_id = {key:idx for idx,key in enumerate(keys)}
    return key_to_id, np.array([key_to_id[x] for x in column]), len(keys)
```

### Menyandikan Bingkai Data

Kemudian, encode dataframe ʻusers`untuk kolom`Title` dan ʻUsername` dengan fungsi berikut.

```python
def encode_df(users):
   """Encodes rating data with continuous user and game title ids"""
   game_ids, users['TitleId'], num_games = encode_column(users['Title'])
   user_ids,users['UserId'], num_users = encode_column(users['Username'])
   return users, num_users, num_games, user_ids, game_ids
```

### Ekspor ke csv

Jalankan fungsinya dan ekspor dataset baru ke csv.

```python
users, num_users, num_games, user_ids, game_ids = encode_df(users)
users.to_csv('game_ratings.csv')
```

File csv ini akan digunakan untuk melatih dan melatih ulang model dengan PyTorch. Di bawah ini adalah cuplikannya:

| Indeks | Judul                | Userscore | Nama pengguna   | UserId | TitleId |
| ------ | -------------------- | --------- | --------------- | ------ | ------- |
| 0      | Super Mario Galaxy 2 | 10        | S.Kumar         | 0      | 0       |
| 1      | Super Mario Galaxy 2 | 8         | ThePlasmaQuasar | 1      | 0       |
| 2      | Super Mario Galaxy 2 | 10        | juanandesign    | 2      | 0       |

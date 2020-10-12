---
id: training
title: Menerapkan Model
slug: /menerapkan-model
---

:::important

Sebelum mengikuti tutorial, Anda harus memiliki:

- PyTorch dipasang di mesin Anda. Baca petunjuknya [di sini](https://pytorch.org/get-started/locally/).
- File CSV dengan set data dari [Mempersiapkan Set Data untuk PyTorch](setup.md).

:::

## Model Faktorisasi Matriks di PyTorch

Mengambil ide dari Faktorisasi Matriks, mari kita terapkan ini di PyTorch.

Pertama, mari impor beberapa modul yang diperlukan.

```
import torch
import torch.nn as nn
import torch.nn.functional as F
from sklearn.model_selection import train_test_split
```

Selanjutnya, mari kita buat kelas Model Faktorisasi Matriks.

```python
class MF(nn.Module):
    def __init__(self, num_users, num_items, emb_size=100):
        super(MF, self).__init__()
        self.user_emb = nn.Embedding(num_users, emb_size)
        self.item_emb = nn.Embedding(num_items, emb_size)

        # initializing our matrices with a positive number generally will yield better results
        self.user_emb.weight.data.uniform_(0, 0.5)
        self.item_emb.weight.data.uniform_(0, 0.5)

    def forward(self, u, v):
        u = self.user_emb(u)
        v = self.item_emb(v)
        return (u*v).sum(1)  # taking the dot product
```

Untuk membuat contoh model kita, kita cukup memanggilnya seperti ini:
:::note
Variabel **num_users** dan **num_items** masing-masing mewakili jumlah pengguna unik dan item unik dalam kumpulan data.
:::

```python
model = MF(num_users, num_items, emb_size=100)
```

Saat ini, seperti inilah kumpulan data tersebut:

![dataset.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1602020247881/bfBpkQD4Z.png)

Item di sini adalah game yang ingin kami rekomendasikan kepada pengguna.

Setelah model dibuat, kita dapat melanjutkan untuk membagi kumpulan data untuk melatih dan menguji model kita. Pembagian umum adalah tes 20% dan pelatihan 80%.

```python
train_df, valid_df = train_test_split(dataset, test_size=0.2)

# resetting indices to avoid indexing errors
train_df = train_df.reset_index(drop=True)
test_df = valid_df.reset_index(drop=True)
```

Sekarang, kami ingin membuat fungsi pelatihan untuk melatih model.

```python
def train_epocs(model, epochs=10, lr=0.01, wd=0.0):
    optimizer = torch.optim.Adam(model.parameters(), lr=lr, weight_decay=wd)
    model.train()
    for i in range(epochs):
        usernames = torch.LongTensor(train_df.UserId.values)
        game_titles = torch.LongTensor(train_df.TitleId.values)
        ratings = torch.FloatTensor(train_df.Userscore.values)
        y_hat = model(usernames, game_titles)
        loss = F.mse_loss(y_hat, ratings)
        optimizer.zero_grad()  # reset gradient
        loss.backward()
        optimizer.step()
        print(loss.item())
    test(model)
```

Di setiap iterasi, fungsi pelatihan memperbarui model kita untuk mendekati MSE yang lebih kecil (mean squared error). Ini adalah gagasan penurunan gradien.

Dan terakhir, kami ingin membuat fungsi pengujian kami, yang akan dipanggil tepat setelah pelatihan selesai.

```python
def test(model):
    model.eval()
    usernames = torch.LongTensor(test_df.UserId.values)
    game_titles = torch.LongTensor(test_df.TitleId.values)
    ratings = torch.FloatTensor(test_df.Userscore.values)
    y_hat = model(usernames, game_titles)
    loss = F.mse_loss(y_hat, ratings)
    print("test loss %.3f " % loss.item())
```

Kami dapat melihat bahwa meskipun MSE terendah model kami dalam kumpulan data pelatihan kami adalah sekitar 3.776, MSE aktual berdasarkan kumpulan data pengujian kami adalah sekitar 8.778. Secara umum, ini adalah hasil yang normal, tetapi perbedaan besar antara MSE pelatihan dan pengujian kemungkinan menunjukkan bahwa model kami terlalu pas.

![result.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1602021212841/Qy7kiRGDS.png)

## Prediksi Model

Dan sekarang, kami siap menggunakan model kami untuk prediksi! Misalnya, untuk memprediksi rating game untuk pengguna user id 10, kita dapat menjalankan baris berikut:

```python
user = torch.tensor([10])
games = torch.tensor(game_ratings['TitleId'].unique().tolist())
predictions = model(user, games).tolist()
print(predictions)
```

Perhatikan bahwa beberapa prediksi melebihi 10. Untuk mengatasinya, kita cukup menormalkan hasil kita seperti ini:

```python
normalized_predictions = [i/max(predictions)*10 for i in predictions]
print(normalized_predictions)
```

Terakhir, kami dapat merekomendasikan beberapa game dengan mengurutkan daftar prediksi kami:

```python
sortedIndices = predictions.argsort()
recommendations = dataset['Title'].unique()[sortedIndices][:30]  # taking top 30 games
print(recommendations)
```

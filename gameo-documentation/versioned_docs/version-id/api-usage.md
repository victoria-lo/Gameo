---
id: api-usage
title: Penggunaan API
slug: /penggunaan-api
---

## Twitch

Salah satu kelemahan terbesar dari pemfilteran kolaboratif adalah masalah **start dingin**. Masalah ini muncul ketika hanya ada sedikit atau tidak ada data untuk digunakan untuk memprediksi preferensi pengguna.
Ini berarti bagi pengguna baru, kami perlu mencari cara lain untuk merekomendasikan game.

Ingat **Pemfilteran Demografis** dari salah satu [algoritme mesin rekomendasi](./pemfilteran-kolaboratif).
Jenis pemfilteran ini dapat mengatasi masalah ini secara efektif, dan untuk melakukan ini, kami telah memasukkan penggunaan Twitch's API untuk mengambil beberapa game paling trending yang sedang dimainkan.

Dokumentasi resmi untuk API dapat ditemukan [di sini](https://dev.twitch.tv/docs/api/).

:::tip
Sebelum menggunakan API, pastikan Anda telah menyiapkan **client id** dan **auth token**. Mereka harus disertakan di header panggilan API.
:::

```javascript
/* Example using axios */
axios.get(url, {
  headers: {
    "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID,
    Authorization: "Bearer " + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
  },
});
```

Rute yang kami gunakan adalah mendapatkan [Game Teratas](https://dev.twitch.tv/docs/api/reference#get-top-games).
Secara default, API akan mengembalikan 20 game teratas, tetapi tampaknya terlalu sedikit dan untungnya, API mendukung parameter kueri opsional untuk menyesuaikannya.

:::caution
Beberapa judul yang dikembalikan oleh Twitch API bukanlah game.
:::

Mempertimbangkan bahwa Twitch API dapat berisi judul yang bukan game sebenarnya (mis., Hanya Mengobrol), panggilan API yang dihasilkan yang kami putuskan untuk digunakan mengambil 60 game teratas.

`https: //api.twitch.tv/helix/games/top? first = 60`

Untuk memfilter judul yang sebenarnya bukan game, kami menggunakan rute lain [Kategori Pencarian](https://dev.twitch.tv/docs/api/reference#search-categories).
Secara khusus, kami ingin mencari dua kategori non-game, IRL dan materi iklan.

```
https://api.twitch.tv/helix/search/categories?query=IRL
https://api.twitch.tv/helix/search/categories?query=creative
```

Misalkan 60 game awal kita disimpan dalam array yang disebut **topGames**, dan **notGames** adalah array yang berisi hasil dari dua panggilan API di atas, filter sederhana akan membantu:

```javascript
topGames = topGames.filter((el) => !notGames.find((rm) => rm.name === el.name));
```

Panggilan API ini akan dilakukan segera setelah komponen untuk menampilkan informasi ini dipasang. Kita bisa mencapai ini menggunakan hook useEffect seperti ini:

:::note
**getTopGames** adalah janji yang menyelesaikan rangkaian game top yang kami inginkan.
:::

```javascript
const [topGames, setTopGames] = useState([]);

useEffect(() => {
  getTopGames().then((result) => {
    setTopGames(result);
  });
}, []);
```

:::note
Hook **useEffect** bisa dianggap setara dengan metode siklus hidup **componentDidMount** dan **componentDidUpdate** bergantung pada apa yang ada di dalam parameter array.
Parameter array menentukan **dependensi** yang akan mengontrol kapan fungsi dijalankan. Jika parameter array kosong, maka useEffect pada dasarnya adalah componentDidMount karena tidak memiliki dependensi dan hanya dijalankan satu kali saat komponen dipasang.
Jika tidak, ia bertindak sebagai componentDidUpdate dan dijalankan setiap kali variabel dependensi diubah.
:::

## RAWG

Karena Twitch API tidak memberi kami metadata dari sebuah game, kami memutuskan untuk menggunakan [RAWG API](https://rawg.io/apidocs) untuk melakukan pekerjaan itu.

:::note
Tidak seperti Twitch's API, menggunakan RAWG API tidak memerlukan token autentikasi atau kunci api apa pun.
:::

Pertama, kita akan mencari game tersebut menggunakan rute [Games](https://api.rawg.io/docs/#tag/games) dan memasukkan nama game sebagai kueri penelusuran.

```
https://api.rawg.io/api/games?search=" + game.name
```

Ini akan mengembalikan daftar objek permainan, dan yang pertama dalam daftar adalah yang kita inginkan. Sekarang, kami ingin melakukan panggilan API lain yang akan memberi kami metadata untuk game tersebut.
Cuplikan kode berikut menunjukkan seperti apa janji itu.

```javascript
if (res.data.results.length > 0) {
  const game = res.data.results[0];
  axios
    .get("https://api.rawg.io/api/games/" + game.id)
    .then((res) => {
      if (res && res.data) {
        const info = res.data;
        resolve(res.data);
      }
    })
    .catch((err) => {
      reject(err);
    });
} else reject("No game found");
```

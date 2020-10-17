(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{109:function(a,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return u}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function c(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var p=i.a.createContext({}),o=function(a){var e=i.a.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},b=function(a){var e=o(a.components);return i.a.createElement(p.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},l=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,c=a.parentName,p=m(a,["components","mdxType","originalType","parentName"]),b=o(n),l=t,u=b["".concat(c,".").concat(l)]||b[l]||d[l]||r;return n?i.a.createElement(u,s(s({ref:e},p),{},{components:n})):i.a.createElement(u,s({ref:e},p))}));function u(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,c=new Array(r);c[0]=l;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=a,s.mdxType="string"==typeof a?a:t,c[1]=s;for(var p=2;p<r;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},90:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return m})),n.d(e,"default",(function(){return o}));var t=n(2),i=n(6),r=(n(0),n(109)),c={id:"api-usage",title:"Penggunaan API",slug:"/penggunaan-api"},s={unversionedId:"api-usage",id:"version-id/api-usage",isDocsHomePage:!1,title:"Penggunaan API",description:"Twitch",source:"@site/versioned_docs\\version-id\\api-usage.md",slug:"/penggunaan-api",permalink:"/Gameo/docs/id/penggunaan-api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-id/api-usage.md",version:"id",sidebar:"version-id/docs",previous:{title:"Nilai Game",permalink:"/Gameo/docs/id/nilai-game"},next:{title:"Memperbarui Rekomendasi",permalink:"/Gameo/docs/id/memperbarui-rekomendasi"}},m=[{value:"Twitch",id:"twitch",children:[]},{value:"RAWG",id:"rawg",children:[]}],p={rightToc:m};function o(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"twitch"},"Twitch"),Object(r.b)("p",null,"Salah satu kelemahan terbesar dari pemfilteran kolaboratif adalah masalah ",Object(r.b)("strong",{parentName:"p"},"start dingin"),". Masalah ini muncul ketika hanya ada sedikit atau tidak ada data untuk digunakan untuk memprediksi preferensi pengguna.\nIni berarti bagi pengguna baru, kami perlu mencari cara lain untuk merekomendasikan game."),Object(r.b)("p",null,"Ingat ",Object(r.b)("strong",{parentName:"p"},"Pemfilteran Demografis")," dari salah satu ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"./pemfilteran-kolaboratif"}),"algoritme mesin rekomendasi"),".\nJenis pemfilteran ini dapat mengatasi masalah ini secara efektif, dan untuk melakukan ini, kami telah memasukkan penggunaan Twitch's API untuk mengambil beberapa game paling trending yang sedang dimainkan."),Object(r.b)("p",null,"Dokumentasi resmi untuk API dapat ditemukan ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://dev.twitch.tv/docs/api/"}),"di sini"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sebelum menggunakan API, pastikan Anda telah menyiapkan ",Object(r.b)("strong",{parentName:"p"},"client id")," dan ",Object(r.b)("strong",{parentName:"p"},"auth token"),". Mereka harus disertakan di header panggilan API."))),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'/* Example using axios */\naxios.get(url, {\n  headers: {\n    "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID,\n    Authorization: "Bearer " + process.env.REACT_APP_TWITCH_AUTH_TOKEN,\n  },\n});\n')),Object(r.b)("p",null,"Rute yang kami gunakan adalah mendapatkan ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://dev.twitch.tv/docs/api/reference#get-top-games"}),"Game Teratas"),".\nSecara default, API akan mengembalikan 20 game teratas, tetapi tampaknya terlalu sedikit dan untungnya, API mendukung parameter kueri opsional untuk menyesuaikannya."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Beberapa judul yang dikembalikan oleh Twitch API bukanlah game."))),Object(r.b)("p",null,"Mempertimbangkan bahwa Twitch API dapat berisi judul yang bukan game sebenarnya (mis., Hanya Mengobrol), panggilan API yang dihasilkan yang kami putuskan untuk digunakan mengambil 60 game teratas."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https: //api.twitch.tv/helix/games/top? first = 60")),Object(r.b)("p",null,"Untuk memfilter judul yang sebenarnya bukan game, kami menggunakan rute lain ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://dev.twitch.tv/docs/api/reference#search-categories"}),"Kategori Pencarian"),".\nSecara khusus, kami ingin mencari dua kategori non-game, IRL dan materi iklan."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"https://api.twitch.tv/helix/search/categories?query=IRL\nhttps://api.twitch.tv/helix/search/categories?query=creative\n")),Object(r.b)("p",null,"Misalkan 60 game awal kita disimpan dalam array yang disebut ",Object(r.b)("strong",{parentName:"p"},"topGames"),", dan ",Object(r.b)("strong",{parentName:"p"},"notGames")," adalah array yang berisi hasil dari dua panggilan API di atas, filter sederhana akan membantu:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"topGames = topGames.filter((el) => !notGames.find((rm) => rm.name === el.name));\n")),Object(r.b)("p",null,"Panggilan API ini akan dilakukan segera setelah komponen untuk menampilkan informasi ini dipasang. Kita bisa mencapai ini menggunakan hook useEffect seperti ini:"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"getTopGames")," adalah janji yang menyelesaikan rangkaian game top yang kami inginkan."))),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"const [topGames, setTopGames] = useState([]);\n\nuseEffect(() => {\n  getTopGames().then((result) => {\n    setTopGames(result);\n  });\n}, []);\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Hook ",Object(r.b)("strong",{parentName:"p"},"useEffect")," bisa dianggap setara dengan metode siklus hidup ",Object(r.b)("strong",{parentName:"p"},"componentDidMount")," dan ",Object(r.b)("strong",{parentName:"p"},"componentDidUpdate")," bergantung pada apa yang ada di dalam parameter array.\nParameter array menentukan ",Object(r.b)("strong",{parentName:"p"},"dependensi")," yang akan mengontrol kapan fungsi dijalankan. Jika parameter array kosong, maka useEffect pada dasarnya adalah componentDidMount karena tidak memiliki dependensi dan hanya dijalankan satu kali saat komponen dipasang.\nJika tidak, ia bertindak sebagai componentDidUpdate dan dijalankan setiap kali variabel dependensi diubah."))),Object(r.b)("h2",{id:"rawg"},"RAWG"),Object(r.b)("p",null,"Karena Twitch API tidak memberi kami metadata dari sebuah game, kami memutuskan untuk menggunakan ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://rawg.io/apidocs"}),"RAWG API")," untuk melakukan pekerjaan itu."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Tidak seperti Twitch's API, menggunakan RAWG API tidak memerlukan token autentikasi atau kunci api apa pun."))),Object(r.b)("p",null,"Pertama, kita akan mencari game tersebut menggunakan rute ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://api.rawg.io/docs/#tag/games"}),"Games")," dan memasukkan nama game sebagai kueri penelusuran."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'https://api.rawg.io/api/games?search=" + game.name\n')),Object(r.b)("p",null,"Ini akan mengembalikan daftar objek permainan, dan yang pertama dalam daftar adalah yang kita inginkan. Sekarang, kami ingin melakukan panggilan API lain yang akan memberi kami metadata untuk game tersebut.\nCuplikan kode berikut menunjukkan seperti apa janji itu."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'if (res.data.results.length > 0) {\n  const game = res.data.results[0];\n  axios\n    .get("https://api.rawg.io/api/games/" + game.id)\n    .then((res) => {\n      if (res && res.data) {\n        const info = res.data;\n        resolve(res.data);\n      }\n    })\n    .catch((err) => {\n      reject(err);\n    });\n} else reject("No game found");\n')))}o.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return b}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),d=function(e){var a=i.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return i.a.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},u=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(t),u=n,b=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return t?i.a.createElement(b,o(o({ref:a},m),{},{components:t})):i.a.createElement(b,o({ref:a},m))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var m=2;m<r;m++)s[m]=t[m];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(2),i=t(6),r=(t(0),t(109)),s={id:"training",title:"Menerapkan Model",slug:"/menerapkan-model"},o={unversionedId:"training",id:"version-id/training",isDocsHomePage:!1,title:"Menerapkan Model",description:"Sebelum mengikuti tutorial, Anda harus memiliki:",source:"@site/versioned_docs\\version-id\\training.md",slug:"/menerapkan-model",permalink:"/docs/id/menerapkan-model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-id/training.md",version:"id",sidebar:"version-id/docs",previous:{title:"Mempersiapkan Set Data untuk PyTorch",permalink:"/docs/id/mempersiapkan-set-data-untuk-pytorch"},next:{title:"Gambaran",permalink:"/docs/id/gambaran"}},l=[{value:"Model Faktorisasi Matriks di PyTorch",id:"model-faktorisasi-matriks-di-pytorch",children:[]},{value:"Prediksi Model",id:"prediksi-model",children:[]}],m={rightToc:l};function d(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sebelum mengikuti tutorial, Anda harus memiliki:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"PyTorch dipasang di mesin Anda. Baca petunjuknya ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://pytorch.org/get-started/locally/"}),"di sini"),"."),Object(r.b)("li",{parentName:"ul"},"File CSV dengan set data dari ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/id/mempersiapkan-set-data-untuk-pytorch"}),"Mempersiapkan Set Data untuk PyTorch"),".")))),Object(r.b)("h2",{id:"model-faktorisasi-matriks-di-pytorch"},"Model Faktorisasi Matriks di PyTorch"),Object(r.b)("p",null,"Mengambil ide dari Faktorisasi Matriks, mari kita terapkan ini di PyTorch."),Object(r.b)("p",null,"Pertama, mari impor beberapa modul yang diperlukan."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nfrom sklearn.model_selection import train_test_split\n")),Object(r.b)("p",null,"Selanjutnya, mari kita buat kelas Model Faktorisasi Matriks."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"class MF(nn.Module):\n    def __init__(self, num_users, num_items, emb_size=100):\n        super(MF, self).__init__()\n        self.user_emb = nn.Embedding(num_users, emb_size)\n        self.item_emb = nn.Embedding(num_items, emb_size)\n\n        # initializing our matrices with a positive number generally will yield better results\n        self.user_emb.weight.data.uniform_(0, 0.5)\n        self.item_emb.weight.data.uniform_(0, 0.5)\n\n    def forward(self, u, v):\n        u = self.user_emb(u)\n        v = self.item_emb(v)\n        return (u*v).sum(1)  # taking the dot product\n")),Object(r.b)("p",null,"Untuk membuat contoh model kita, kita cukup memanggilnya seperti ini:"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Variabel ",Object(r.b)("strong",{parentName:"p"},"num_users")," dan ",Object(r.b)("strong",{parentName:"p"},"num_items")," masing-masing mewakili jumlah pengguna unik dan item unik dalam kumpulan data."))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"model = MF(num_users, num_items, emb_size=100)\n")),Object(r.b)("p",null,"Saat ini, seperti inilah kumpulan data tersebut:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1602020247881/bfBpkQD4Z.png",alt:"dataset.PNG"}))),Object(r.b)("p",null,"Item di sini adalah game yang ingin kami rekomendasikan kepada pengguna."),Object(r.b)("p",null,"Setelah model dibuat, kita dapat melanjutkan untuk membagi kumpulan data untuk melatih dan menguji model kita. Pembagian umum adalah tes 20% dan pelatihan 80%."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"train_df, valid_df = train_test_split(dataset, test_size=0.2)\n\n# resetting indices to avoid indexing errors\ntrain_df = train_df.reset_index(drop=True)\ntest_df = valid_df.reset_index(drop=True)\n")),Object(r.b)("p",null,"Sekarang, kami ingin membuat fungsi pelatihan untuk melatih model."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"def train_epocs(model, epochs=10, lr=0.01, wd=0.0):\n    optimizer = torch.optim.Adam(model.parameters(), lr=lr, weight_decay=wd)\n    model.train()\n    for i in range(epochs):\n        usernames = torch.LongTensor(train_df.UserId.values)\n        game_titles = torch.LongTensor(train_df.TitleId.values)\n        ratings = torch.FloatTensor(train_df.Userscore.values)\n        y_hat = model(usernames, game_titles)\n        loss = F.mse_loss(y_hat, ratings)\n        optimizer.zero_grad()  # reset gradient\n        loss.backward()\n        optimizer.step()\n        print(loss.item())\n    test(model)\n")),Object(r.b)("p",null,"Di setiap iterasi, fungsi pelatihan memperbarui model kita untuk mendekati MSE yang lebih kecil (mean squared error). Ini adalah gagasan penurunan gradien."),Object(r.b)("p",null,"Dan terakhir, kami ingin membuat fungsi pengujian kami, yang akan dipanggil tepat setelah pelatihan selesai."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'def test(model):\n    model.eval()\n    usernames = torch.LongTensor(test_df.UserId.values)\n    game_titles = torch.LongTensor(test_df.TitleId.values)\n    ratings = torch.FloatTensor(test_df.Userscore.values)\n    y_hat = model(usernames, game_titles)\n    loss = F.mse_loss(y_hat, ratings)\n    print("test loss %.3f " % loss.item())\n')),Object(r.b)("p",null,"Kami dapat melihat bahwa meskipun MSE terendah model kami dalam kumpulan data pelatihan kami adalah sekitar 3.776, MSE aktual berdasarkan kumpulan data pengujian kami adalah sekitar 8.778. Secara umum, ini adalah hasil yang normal, tetapi perbedaan besar antara MSE pelatihan dan pengujian kemungkinan menunjukkan bahwa model kami terlalu pas."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1602021212841/Qy7kiRGDS.png",alt:"result.PNG"}))),Object(r.b)("h2",{id:"prediksi-model"},"Prediksi Model"),Object(r.b)("p",null,"Dan sekarang, kami siap menggunakan model kami untuk prediksi! Misalnya, untuk memprediksi rating game untuk pengguna user id 10, kita dapat menjalankan baris berikut:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"user = torch.tensor([10])\ngames = torch.tensor(game_ratings['TitleId'].unique().tolist())\npredictions = model(user, games).tolist()\nprint(predictions)\n")),Object(r.b)("p",null,"Perhatikan bahwa beberapa prediksi melebihi 10. Untuk mengatasinya, kita cukup menormalkan hasil kita seperti ini:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"normalized_predictions = [i/max(predictions)*10 for i in predictions]\nprint(normalized_predictions)\n")),Object(r.b)("p",null,"Terakhir, kami dapat merekomendasikan beberapa game dengan mengurutkan daftar prediksi kami:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"sortedIndices = predictions.argsort()\nrecommendations = dataset['Title'].unique()[sortedIndices][:30]  # taking top 30 games\nprint(recommendations)\n")))}d.isMDXComponent=!0}}]);
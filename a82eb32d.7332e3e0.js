(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{109:function(e,a,n){"use strict";n.d(a,"a",(function(){return m})),n.d(a,"b",(function(){return s}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var a=i.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):u(u({},a),e)),n},m=function(e){var a=b(e.components);return i.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(n),d=t,s=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?i.a.createElement(s,u(u({ref:a},l),{},{components:n})):i.a.createElement(s,u({ref:a},l))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=d;var u={};for(var c in a)hasOwnProperty.call(a,c)&&(u[c]=a[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return u})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return b}));var t=n(2),i=n(6),r=(n(0),n(109)),o={id:"intro",title:"Gambaran",slug:"/"},u={unversionedId:"intro",id:"version-id/intro",isDocsHomePage:!1,title:"Gambaran",description:"Gameo adalah mesin rekomendasi game yang membantu siapa saja untuk menemukan dan memainkan game. Menggunakan model berbasis faktorisasi matriks yang dibangun dengan PyTorch, Gameo merekomendasikan pengguna game melalui pemfilteran kolaboratif.",source:"@site/versioned_docs\\version-id\\overview.md",slug:"/",permalink:"/docs/id/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-id/overview.md",version:"id",sidebar:"version-id/docs",next:{title:"Pemfilteran Kolaboratif",permalink:"/docs/id/pemfilteran-kolaboratif"}},c=[{value:"Tentang Dokumentasi Ini",id:"tentang-dokumentasi-ini",children:[]},{value:"Prasyarat",id:"prasyarat",children:[]},{value:"Topik yang Dicakup",id:"topik-yang-dicakup",children:[{value:"1. Integrasi dan Implementasi PyTorch",id:"1-integrasi-dan-implementasi-pytorch",children:[]},{value:"2. Titik Akhir untuk Data Pengguna",id:"2-titik-akhir-untuk-data-pengguna",children:[]},{value:"3. Membuat Website Gameo dengan React",id:"3-membuat-website-gameo-dengan-react",children:[]}]},{value:"Teknologi yang Digunakan",id:"teknologi-yang-digunakan",children:[]}],l={rightToc:c};function b(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Gameo adalah mesin rekomendasi game yang membantu siapa saja untuk menemukan dan memainkan game. Menggunakan model berbasis faktorisasi matriks yang dibangun dengan PyTorch, Gameo merekomendasikan pengguna game melalui pemfilteran kolaboratif."),Object(r.b)("p",null,"Gameo dimulai sebagai proyek yang dibangun untuk ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://developercircles2020.devpost.com/?utm_source=social-facebook&utm_medium=devc&utm_campaign=organic&utm_content=post-url&utm_offering=business-tools&utm_product=DevC-CommunityChallenge-Launch_09102020&utm_event=2020DevCCommunityChallengeLaunch&eventSource=OrganicSocialDevC"}),"Tantangan Komunitas Developer Circles 2020 Facebook"),"."),Object(r.b)("h2",{id:"tentang-dokumentasi-ini"},"Tentang Dokumentasi Ini"),Object(r.b)("p",null,"Dokumentasi ini berfungsi sebagai tutorial tentang bagaimana Gameo dibuat dan digunakan. Silakan baca tutorial dalam urutan yang disajikan di sidebar navigasi. Untuk membaca tutorial dalam bahasa lain, pilih versi di bawah ini:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"../en"}),"Inggris")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"./"}),"Bahasa Indonesia"))),Object(r.b)("h2",{id:"prasyarat"},"Prasyarat"),Object(r.b)("p",null,"Karena tutorial ini ditujukan untuk programmer yang lebih mahir, prasyarat berikut sangat penting untuk mengikuti tutorial ini:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pemahaman dasar hingga menengah di React"),Object(r.b)("li",{parentName:"ul"},"Pemahaman menengah hingga mahir dalam JavaScript dan Python"),Object(r.b)("li",{parentName:"ul"},"Pemahaman dasar dalam Machine Learning")),Object(r.b)("h2",{id:"topik-yang-dicakup"},"Topik yang Dicakup"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sebelum mengikuti tutorial, Anda harus memiliki yang berikut:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Sebuah aplikasi pemula dibuat dengan Create React App"),Object(r.b)("li",{parentName:"ul"},"Python 3.8 diinstal di mesin Anda"),Object(r.b)("li",{parentName:"ul"},"IDE untuk Python dan JavaScript")))),Object(r.b)("p",null,"Tutorial ini akan membahas topik-topik berikut secara berurutan:"),Object(r.b)("h3",{id:"1-integrasi-dan-implementasi-pytorch"},Object(r.b)("a",Object(t.a)({parentName:"h3"},{href:"./pemfilteran-kolaboratif"}),"1. Integrasi dan Implementasi PyTorch")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pemfilteran Kolaboratif: Cara kerja Sistem Rekomendasi kami"),Object(r.b)("li",{parentName:"ul"},"Mempersiapkan set data dan penyiapan PyTorch"),Object(r.b)("li",{parentName:"ul"},"Menerapkan Model: Data pelatihan, membangun dengan PyTorch")),Object(r.b)("h3",{id:"2-titik-akhir-untuk-data-pengguna"},Object(r.b)("a",Object(t.a)({parentName:"h3"},{href:"./gambaran"}),"2. Titik Akhir untuk Data Pengguna")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Titik akhir database untuk pembaruan data pengguna yang disimpan di MongoDB Atlas")),Object(r.b)("h3",{id:"3-membuat-website-gameo-dengan-react"},Object(r.b)("a",Object(t.a)({parentName:"h3"},{href:"./penggunaan-api"}),"3. Membuat Website Gameo dengan React")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ambil dan tampilkan data dari API"),Object(r.b)("li",{parentName:"ul"},"Simpan dan perbarui peringkat game pengguna"),Object(r.b)("li",{parentName:"ul"},"Ambil game yang direkomendasikan untuk setiap pengguna")),Object(r.b)("h2",{id:"teknologi-yang-digunakan"},"Teknologi yang Digunakan"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"React 16.13.1"),Object(r.b)("li",{parentName:"ul"},"Python 3.8"),Object(r.b)("li",{parentName:"ul"},"Python Flask 1.1.2"),Object(r.b)("li",{parentName:"ul"},"Pymongo 3.11.0"),Object(r.b)("li",{parentName:"ul"},"Pandas 1.1.3")),Object(r.b)("hr",null),Object(r.b)("p",null,"Dibuat dengan \u2764\ufe0f oleh ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/victoria-lo"}),"Victoria")," and ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/steffy-lo"}),"Steffy"),"."))}b.isMDXComponent=!0}}]);
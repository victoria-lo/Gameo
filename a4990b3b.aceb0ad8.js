(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{109:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),m=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=m(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(r),l=t,b=s["".concat(o,".").concat(l)]||s[l]||d[l]||i;return r?a.a.createElement(b,u(u({ref:n},p),{},{components:r})):a.a.createElement(b,u({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=l;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},86:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return m}));var t=r(2),a=r(6),i=(r(0),r(109)),o={id:"update-recommend",title:"Memperbarui Rekomendasi",slug:"/memperbarui-rekomendasi"},u={unversionedId:"update-recommend",id:"version-id/update-recommend",isDocsHomePage:!1,title:"Memperbarui Rekomendasi",description:"Untuk hasil yang lebih baik, pengguna akan diminta untuk memberi peringkat setidaknya 3 game sebelum mereka dapat melihatnya",source:"@site/versioned_docs\\version-id\\update-recommend.md",slug:"/memperbarui-rekomendasi",permalink:"/docs/id/memperbarui-rekomendasi",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-id/update-recommend.md",version:"id",sidebar:"version-id/docs",previous:{title:"Penggunaan API",permalink:"/docs/id/penggunaan-api"}},c=[],p={rightToc:c};function m(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Untuk hasil yang lebih baik, pengguna akan diminta untuk ",Object(i.b)("strong",{parentName:"p"},"memberi peringkat setidaknya 3 game")," sebelum mereka dapat melihatnya\ndaftar rekomendasi yang dipersonalisasi."),Object(i.b)("p",null,"Setiap rating baru dari sebuah game setelahnya akan ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"./nilai-game"}),"mengirim permintaan")," agar model tersebut dilatih ulang, yang memungkinkan rekomendasi baru yang diperbarui."))}m.isMDXComponent=!0}}]);
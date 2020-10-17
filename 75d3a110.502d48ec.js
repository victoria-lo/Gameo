(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(a),h=r,p=d["".concat(o,".").concat(h)]||d[h]||b[h]||n;return a?i.a.createElement(p,l(l({ref:t},c),{},{components:a})):i.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var r=a(2),i=a(6),n=(a(0),a(109)),o={id:"collaborative-filtering",title:"Collaborative Filtering"},l={unversionedId:"collaborative-filtering",id:"version-en/collaborative-filtering",isDocsHomePage:!1,title:"Collaborative Filtering",description:"Before we get started with the actual implementation, let's go through some concepts with building a recommendation engine.",source:"@site/versioned_docs\\version-en\\collab.md",slug:"/collaborative-filtering",permalink:"/docs/collaborative-filtering",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-en/collab.md",version:"en",sidebar:"version-en/docs",previous:{title:"Overview",permalink:"/docs/en"},next:{title:"Preparing Dataset for PyTorch",permalink:"/docs/preparing-dataset-for-pytorch"}},s=[{value:"1. Demographic Filtering",id:"1-demographic-filtering",children:[]},{value:"2. Content-Based Filtering",id:"2-content-based-filtering",children:[]},{value:"3. Collaborative Filtering",id:"3-collaborative-filtering",children:[]},{value:"Matrix Factorization",id:"matrix-factorization",children:[]}],c={rightToc:s};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Before we get started with the actual implementation, let's go through some concepts with building a recommendation engine."),Object(n.b)("p",null,"There are essentially 3 types of algorithm that your recommendation engine could use when recommending an item to a user:"),Object(n.b)("h3",{id:"1-demographic-filtering"},"1. Demographic Filtering"),Object(n.b)("p",null,"This type of filtering looks at the general trends and popularity of an item based on users with similar demographics. This means that users with similar demographics are recommended the same items and personalized recommendations are very limited."),Object(n.b)("h3",{id:"2-content-based-filtering"},"2. Content-Based Filtering"),Object(n.b)("p",null,"The underlying algorithm for this type of filtering looks at the similarity of items based on its metadata. For example, for games, the metadata would be things like platforms, genres, and publisher. Therefore, if a user liked a PC action RPG game that is published by Valve, then most likely he or she would like another game that has similar metadata (i.e., games that are published by Valve and are action RPG PC games). This means that personalized recommendations are now involved, since games that the user liked is used to determine games that the user will probably like too."),Object(n.b)("p",null,"The only problem with this type of filtering is the fact that items are recommended in a limited pattern, that is through its metadata."),Object(n.b)("h3",{id:"3-collaborative-filtering"},"3. Collaborative Filtering"),Object(n.b)("p",null,"The final type of filtering can be broken to two types."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"User-based: matches users to items based on other users. Specifically, other users that are determined to be similar to the user by the algorithm. This means given a user and another user that is found to be similar to the user, what the other user liked is recommended to the user."),Object(n.b)("li",{parentName:"ul"},"Item-based: matches users to items based on items' similarity with items that the user has rated. This means if a user liked item X, and item X is found to be highly similar to item Y, then item Y will be recommended to the user.")),Object(n.b)("p",null,"The best type of recommendation engine would obviously integrate all 3 types but in this tutorial, we'll focus on the last type: collaborative filtering, since it is arguably the strongest type."),Object(n.b)("h2",{id:"matrix-factorization"},"Matrix Factorization"),Object(n.b)("p",null,"A class of collaborative filtering algorithm that we'll be looking at is called Matrix Factorization. The end goal of matrix factorization is basically to build a matrix of users and items filled with known and predicted ratings."),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1602010200173/AJgPxWM3N.png",alt:"matrix.PNG"}))),Object(n.b)("p",null,"Starting with our original matrix of only known ratings, we want to determine the two factor matrices that would produce our original matrix. These two matrices would in turn represent information of the users, items, and the relationships between them. One being the matrix that quantitatively represent the users (user matrix), where each row of the matrix is a vector of size ",Object(n.b)("em",{parentName:"p"},"k")," that represents a single user, and the other being the item matrix, where each column is a vector of size ",Object(n.b)("em",{parentName:"p"},"k")," that represents a single item."),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"k"))," is called the ",Object(n.b)("strong",{parentName:"p"},"embedding size")," and is a ",Object(n.b)("strong",{parentName:"p"},"hyperparameter")," that is tuned in the matrix factorization model. A larger embedding size would allow for the model to capture more complex relationships and information, but may lead to ",Object(n.b)("strong",{parentName:"p"},"overfitting"),"."))),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1602012678397/oVxbAaNJc.png",alt:"mf.PNG"}))))}m.isMDXComponent=!0}}]);
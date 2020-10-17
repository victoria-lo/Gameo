(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,j=m["".concat(l,".").concat(p)]||m[p]||O[p]||b;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(109)),l={id:"endpoint-summary",title:"Overview",slug:"/overview"},c={unversionedId:"endpoint-summary",id:"version-en/endpoint-summary",isDocsHomePage:!1,title:"Overview",description:"User Data Schema",source:"@site/versioned_docs\\version-en\\endpoint-summary.md",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-en/endpoint-summary.md",version:"en",sidebar:"version-en/docs",previous:{title:"Implementing the Model",permalink:"/docs/implementing-the-model"},next:{title:"Create User",permalink:"/docs/create-user"}},i=[{value:"User Data Schema",id:"user-data-schema",children:[]},{value:"Endpoints",id:"endpoints",children:[]}],o={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"user-data-schema"},"User Data Schema"),Object(b.b)("p",null,"All Gameo users will create an account, which is stored in a database cloud sevice called ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mongodb.com/cloud/atlas"}),"MongoDB Atlas"),". A typical user in Gameo will have the following data stored:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_","id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Automatically generated by MongoDB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'{$oid: "5f7a2df58b5ab52efb5d55d4"}'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User's name under account"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"John Doe"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User's email registered with account"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"johndoe@example.com"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"games"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of games user has played and added to library"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'[{game_id: 4291, rating: "9", title: "Counter-Strike: Global Offensive"}, {game_id: 23598, rating: "10", title: "League of Legends"}]'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wishlist"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of games user has added to their wishlist"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Same as above")))),Object(b.b)("h2",{id:"endpoints"},"Endpoints"),Object(b.b)("p",null,"Endpoints enables user interaction with the MongoDB Atlas database in order to constantly update their game preferences and store new games that they have added to their library or wishlist."),Object(b.b)("p",null,"PyMongo is the Python wrapper for MongoDB to work in Python. See their official documentation ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://pymongo.readthedocs.io/en/stable/"}),"here"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tutorial"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POST"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creates a new user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/create-user"}),"Create User"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GET"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gets a user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/get-user"}),"Get User"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GET"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/game"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gets game recommendations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/get-recommend"}),"Get Recommendations"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PATCH"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/game"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adds a game to user's game library or wishlist"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/add-game"}),"Add Game"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PATCH"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/remove"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Removes a game from user's game library or wishlist"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/remove-game"}),"Remove Game"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PATCH"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/rate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates user's rating for a game"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/rate-game"}),"Rate Game"))))))}d.isMDXComponent=!0}}]);
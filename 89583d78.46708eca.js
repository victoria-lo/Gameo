(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?r.a.createElement(p,c(c({ref:t},s),{},{components:a})):r.a.createElement(p,c({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(109)),o={id:"intro",title:"Overview",slug:"/en"},c={unversionedId:"intro",id:"version-en/intro",isDocsHomePage:!1,title:"Overview",description:"Gameo is a game recommendation engine that helps anyone to discover and play games. Using a matrix factorization-based model built with PyTorch, Gameo recommends users games via collaborative filtering.",source:"@site/versioned_docs\\version-en\\overview.md",slug:"/en",permalink:"/Gameo/docs/en",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-en/overview.md",version:"en",sidebar:"version-en/docs",next:{title:"Collaborative Filtering",permalink:"/Gameo/docs/collaborative-filtering"}},l=[{value:"About This Documentation",id:"about-this-documentation",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Topics Covered",id:"topics-covered",children:[{value:"1. PyTorch Integration and Implementation",id:"1-pytorch-integration-and-implementation",children:[]},{value:"2. Endpoints for User Data",id:"2-endpoints-for-user-data",children:[]},{value:"3. Creating Gameo Website with React",id:"3-creating-gameo-website-with-react",children:[]}]},{value:"Technologies Used",id:"technologies-used",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Gameo is a game recommendation engine that helps anyone to discover and play games. Using a matrix factorization-based model built with PyTorch, Gameo recommends users games via collaborative filtering."),Object(i.b)("p",null,"Gameo started as a project built for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developercircles2020.devpost.com/?utm_source=social-facebook&utm_medium=devc&utm_campaign=organic&utm_content=post-url&utm_offering=business-tools&utm_product=DevC-CommunityChallenge-Launch_09102020&utm_event=2020DevCCommunityChallengeLaunch&eventSource=OrganicSocialDevC"}),"Facebook's 2020 Developer Circles Community Challenge"),"."),Object(i.b)("h2",{id:"about-this-documentation"},"About This Documentation"),Object(i.b)("p",null,"This documentation serves as a tutorial for how Gameo is built and used. Please read the tutorial in the order presented in the navigation sidebar. To read the tutorial in other languages, please select the version below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./en"}),"English")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./id/"}),"Indonesian"))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Because this tutorial is aimed towards more advanced programmers, the following prerequisites are essential to follow this tutorial:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Basic to intermediate understanding in React"),Object(i.b)("li",{parentName:"ul"},"Intermediate to advanced understanding in JavaScript and Python"),Object(i.b)("li",{parentName:"ul"},"Basic understanding in Machine Learning")),Object(i.b)("h2",{id:"topics-covered"},"Topics Covered"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Before following the tutorial, you should have the following:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"A starter app created with Create React App"),Object(i.b)("li",{parentName:"ul"},"Python 3.8 installed in your machine"),Object(i.b)("li",{parentName:"ul"},"IDE for Python and JavaScript")))),Object(i.b)("p",null,"This tutorial will cover the following topics in order:"),Object(i.b)("h3",{id:"1-pytorch-integration-and-implementation"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/Gameo/docs/collaborative-filtering"}),"1. PyTorch Integration and Implementation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Collaborative Filtering: How our Recommendation System works"),Object(i.b)("li",{parentName:"ul"},"Preparing dataset and PyTorch setup"),Object(i.b)("li",{parentName:"ul"},"Implementing the Model: Training data, building with PyTorch")),Object(i.b)("h3",{id:"2-endpoints-for-user-data"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/Gameo/docs/overview"}),"2. Endpoints for User Data")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database endpoints for updates to user data stored in MongoDB Atlas")),Object(i.b)("h3",{id:"3-creating-gameo-website-with-react"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"api-usage"}),"3. Creating Gameo Website with React")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fetch and display data from APIs"),Object(i.b)("li",{parentName:"ul"},"Save and update user game ratings"),Object(i.b)("li",{parentName:"ul"},"Fetch recommended games for each user")),Object(i.b)("h2",{id:"technologies-used"},"Technologies Used"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React 16.13.1"),Object(i.b)("li",{parentName:"ul"},"Python 3.8"),Object(i.b)("li",{parentName:"ul"},"Python Flask 1.1.2"),Object(i.b)("li",{parentName:"ul"},"Pymongo 3.11.0"),Object(i.b)("li",{parentName:"ul"},"Pandas 1.1.3")),Object(i.b)("hr",null),Object(i.b)("p",null,"Made with \u2764\ufe0f by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/victoria-lo"}),"Victoria")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/steffy-lo"}),"Steffy"),"."))}b.isMDXComponent=!0}}]);
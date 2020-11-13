(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(6),r=(n(0),n(90)),i={id:"configuration",title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"As said in Overview js-dos bundle is a ZIP archive with game files",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/v7/build/docs/configuration",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/configuration.md",version:"current",sidebar:"someSidebar",previous:{title:"Command Interface (CI)",permalink:"/v7/build/docs/command-interface"},next:{title:"Mobile support",permalink:"/v7/build/docs/mobile-support"}},s=[{value:".jsdos/dosbox.conf",id:"jsdosdosboxconf",children:[]},{value:".jsdos/jsdos.json",id:"jsdosjsdosjson",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As said in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/v7/build/docs/"}),"Overview")," ",Object(r.b)("inlineCode",{parentName:"p"},"js-dos bundle")," is a ",Object(r.b)("strong",{parentName:"p"},"ZIP")," archive with game files\nand configuration files."),Object(r.b)("h3",{id:"jsdosdosboxconf"},".jsdos/dosbox.conf"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"File ",Object(r.b)("inlineCode",{parentName:"p"},".jsdos/dosbox.conf")," is required. js-dos would not start if this file does not exist."))),Object(r.b)("p",null,"This file is a regular ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.dosbox.com/wiki/Dosbox.conf"}),"dosbox configuration"),". Not\nall features are supported, but we will work on it."),Object(r.b)("h3",{id:"jsdosjsdosjson"},".jsdos/jsdos.json"),Object(r.b)("p",null,"This file contains additional configuration that does not exist in the dosbox configuration file.\nFor example, it's used to configure ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"gestures"}),"gestures mapping"),". If you used ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"game-studio"}),"game studio"),"\nto create bundles then it will also contain all information from ",Object(r.b)("inlineCode",{parentName:"p"},"dosbox.conf"),". And it looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n// ...\n  "gestures": [\n    {\n      "joystickId": 0,\n      "event": "dir:up",\n      "mapTo": 265\n    },\n// ...\n')),Object(r.b)("p",null,"This file can contain any configuration that you want. You can access it with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"command-interface"}),"Command Interface"),".\nFor example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const ci = await Dos(/*element*/).run(/*bundle url*/);\nconst config = await ci.config();\nconsole.log(config.gestures);\n")),Object(r.b)("p",null,"This snippet will print information about gestures that config has. It's a very powerful feature, it can be used\nto add new optional features to js-dos. Read how to add client-side features in emulators-ui ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"contributing-emulators-ui"}),"Contributing")," guide."))}l.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
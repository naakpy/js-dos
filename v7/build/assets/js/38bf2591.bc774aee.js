"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>o});var r=n(2263),a=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},6067:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>m});var r=n(4034),a=(n(7294),n(3905)),i=n(4996);const o={id:"iframe",title:"In iframe"},s=void 0,l={unversionedId:"iframe",id:"iframe",isDocsHomePage:!1,title:"In iframe",description:"iframe integraion is a fastest way to embed a game on your web page. Open DOS Zone repository",source:"@site/docs/iframe.md",sourceDirName:".",slug:"/iframe",permalink:"/v7/build/docs/iframe",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/iframe.md",tags:[],version:"current",frontMatter:{id:"iframe",title:"In iframe"},sidebar:"someSidebar",previous:{title:"npx create-dosbox",permalink:"/v7/build/docs/create-dosbox"},next:{title:"In browser",permalink:"/v7/build/docs/browser"}},p=[{value:"Iframe example",id:"iframe-example",children:[]},{value:"Client ID",id:"client-id",children:[]},{value:"DOS Zone",id:"dos-zone",children:[]}],c={toc:p};function m({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"iframe integraion is a fastest way to embed a game on your web page. Open ",(0,a.kt)("a",{parentName:"p",href:"https://dos.zone"},"DOS Zone")," repository\nand search for game, for example '",(0,a.kt)("strong",{parentName:"p"},"Digger"),"'. Then you need to press on code ",(0,a.kt)("inlineCode",{parentName:"p"},"</>")," button:"),(0,a.kt)("img",{alt:"Code button",src:(0,i.Z)("img/code-button.jpg")}),(0,a.kt)("p",null,"It will open a frame whith html5 code that ",(0,a.kt)("strong",{parentName:"p"},"you need to paste on your website"),":"),(0,a.kt)("img",{alt:"Code frame",src:(0,i.Z)("img/code-frame.jpg")}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To receive input you should focus the iframe (by click or using js):"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"iframe.focus();\n")))),(0,a.kt)("h2",{id:"iframe-example"},"Iframe example"),(0,a.kt)("p",null,"Example of web page that uses iframe integration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="examples/iframe.html"',title:'"examples/iframe.html"'},"{}\n")),(0,a.kt)("h2",{id:"client-id"},"Client ID"),(0,a.kt)("p",null,"iframe intergation also support passing client id. To do this you need to\nmodify iframe src. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymous=1")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymous=0"),". In that case\nyou need handle auth client request in parent window, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'    const clientIdListener = async (e: any) => {\n        if (e.data.message !== "dz-client-id") {\n            return;\n        }\n        const gesture = e.data.gesture;\n\n        let user = getLoggedUser();\n        if (user === null && gesture) {\n            user = await login();\n        }\n\n        if (user === null) {\n            iframe.contentWindow?.postMessage({\n                message: "dz-client-id-response",\n            }, "*");\n        } else {\n            iframe.contentWindow?.postMessage({\n                message: "dz-client-id-response",\n                namespace: user.namespace,\n                id: user.id,\n            }, "*");\n        }\n    };\n\n    window.addEventListener("message", clientIdListener);\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"dos-zone"},"DOS Zone"),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"doszone"},"dos.zone"),"."))}m.isMDXComponent=!0}}]);
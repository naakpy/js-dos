(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(90)),c={id:"dos-worker",title:"DOS Worker"},i={unversionedId:"dos-worker",id:"dos-worker",isDocsHomePage:!1,title:"DOS Worker",description:"DOS Worker is worker version of DOS Direct backend. It runs in own browser thread, so it's never",source:"@site/docs/dos-worker.md",slug:"/dos-worker",permalink:"/v7/build/docs/dos-worker",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/dos-worker.md",version:"current",sidebar:"someSidebar",previous:{title:"DOS Direct",permalink:"/v7/build/docs/dos-direct"},next:{title:"DOS Sokol",permalink:"/v7/build/docs/dos-sokol"}},s=[],u={rightToc:s};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DOS Worker is worker version of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/v7/build/docs/dos-direct"}),"DOS Direct")," backend. It runs in own browser thread, so it's never\nblock the browser. ",Object(a.b)("strong",{parentName:"p"},"This version is recommended to use in most cases.")),Object(a.b)("p",null,"You can create it like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const ci = await emulators.dosWorker(bundle);\n")),Object(a.b)("p",null,"Read ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/v7/build/docs/estimating-performance"}),"Estimating perfomrance")," if you want to compare perfomances of Direct and Worker versions/"))}p.isMDXComponent=!0},90:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,i(i({ref:r},u),{},{components:t})):o.a.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
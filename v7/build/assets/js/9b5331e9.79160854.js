"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>o});var r=n(2263),i=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},2940:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>c,toc:()=>l,default:()=>u});var r=n(4034),i=(n(7294),n(3905));n(4996);const a={id:"multiple-instances",title:"Multiple Instances"},o=void 0,c={unversionedId:"multiple-instances",id:"multiple-instances",isDocsHomePage:!1,title:"Multiple Instances",description:"Each call to Dos constructor creates new js-dos instance that works independently.",source:"@site/docs/multiple-instances.md",sourceDirName:".",slug:"/multiple-instances",permalink:"/v7/build/docs/multiple-instances",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/multiple-instances.md",tags:[],version:"current",frontMatter:{id:"multiple-instances",title:"Multiple Instances"},sidebar:"someSidebar",previous:{title:"Command Interface (CI)",permalink:"/v7/build/docs/command-interface"},next:{title:"Backward compatibility",permalink:"/v7/build/docs/backward-compability"}},l=[],s={toc:l};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each call to ",(0,i.kt)("inlineCode",{parentName:"p"},"Dos")," constructor creates new js-dos instance that works independently."),(0,i.kt)("p",null,"In example below you can see 4 DOS games on single page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="examples/multiple-instances.html"',title:'"examples/multiple-instances.html"'},"{}\n")))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),a=(t(0),t(115));const o={title:"Addons",slug:"/addons"},s={unversionedId:"addons/_index",id:"addons/_index",isDocsHomePage:!1,title:"Addons",description:"Similar to the original UpSet and UpSetR, UpSet allows to render boxplot for showing numerical aggregates of sets and set combinations.",source:"@site/docs/addons/_index.mdx",slug:"/addons",permalink:"/docs/addons",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/addons/_index.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Themes + Colors",permalink:"/docs/components/themes"},next:{title:"BoxPlot",permalink:"/docs/addons/boxplot"}},l=[{value:"Install",id:"install",children:[]},{value:"Example",id:"example",children:[]}],i={toc:l};function c({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Similar to the original UpSet and UpSetR, ",Object(a.b)("inlineCode",{parentName:"p"},"UpSet")," allows to render boxplot for showing numerical aggregates of sets and set combinations."),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/addons @upsetjs/react\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/addons @upsetjs/react\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction BoxPlot() {\n  const [selection, setSelection] = useState(null);\n\n  const elems = useMemo(\n    () => [\n      { name: '1', sets: ['one', 'two', 'three'], value: Math.random() },\n      { name: '2', sets: ['one', 'two'], value: Math.random() },\n      { name: '3', sets: ['one'], value: Math.random() },\n      { name: '4', sets: ['two'], value: Math.random() },\n      { name: '5', sets: ['one', 'two', 'three'], value: Math.random() },\n      { name: '6', sets: ['three'], value: Math.random() },\n      { name: '7', sets: ['one', 'three'], value: Math.random() },\n      { name: '8', sets: ['one', 'three'], value: Math.random() },\n      { name: '9', sets: ['three'], value: Math.random() },\n      { name: '10', sets: ['two', 'three'], value: Math.random() },\n      { name: '11', sets: ['one'], value: Math.random() },\n      { name: '12', sets: ['one', 'three'], value: Math.random() },\n      { name: '13', sets: ['one', 'three'], value: Math.random() },\n    ],\n    []\n  );\n  const sets = useMemo(() => extractSets(elems), []);\n\n  return (\n    <UpSetJS\n      sets={sets}\n      width={780}\n      height={500}\n      selection={selection}\n      onHover={setSelection}\n      setAddons={[boxplotAddon('value', elems)]}\n      combinationAddons={[boxplotAddon('value', elems, { orient: 'vertical' })]}\n    />\n  );\n}\n")))}c.isMDXComponent=!0},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.a.createElement(b,l(l({ref:n},c),{},{components:t})):a.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
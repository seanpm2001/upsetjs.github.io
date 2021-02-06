(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=(t(0),t(115));const s={title:"Karnaugh Map"},o={unversionedId:"getting-started/karnaughmap",id:"getting-started/karnaughmap",isDocsHomePage:!1,title:"Karnaugh Map",description:"Install Upset.js",source:"@site/docs/getting-started/karnaughmap.mdx",slug:"/getting-started/karnaughmap",permalink:"/docs/getting-started/karnaughmap",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/getting-started/karnaughmap.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Venn Diagrams",permalink:"/docs/getting-started/venndiagram"},next:{title:"Components",permalink:"/docs/components"}},c=[{value:"Install Upset.js",id:"install-upsetjs",children:[]},{value:"Defining your elements",id:"defining-your-elements",children:[]},{value:"Extract the sets",id:"extract-the-sets",children:[]},{value:"Result",id:"result",children:[]},{value:"Bundle version",id:"bundle-version",children:[]}],i={toc:c};function l({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"install-upsetjs"},"Install Upset.js"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/react react react-dom\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/react react react-dom\n")),Object(a.b)("h2",{id:"defining-your-elements"},"Defining your elements"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"const elems = useMemo(\n  () => [\n    { name: 'A', sets: ['S1', 'S2'] },\n    { name: 'B', sets: ['S1'] },\n    { name: 'C', sets: ['S2'] },\n    { name: 'D', sets: ['S1', 'S3'] },\n  ],\n  []\n);\n")),Object(a.b)("h2",{id:"extract-the-sets"},"Extract the sets"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"// import { extractSets, generateCombinations } from '@upsetjs/react';\nconst sets = useMemo(() => extractSets(elems), [elems]);\nconst combinations = useMemo(() => generateCombinations(sets), [sets]);\n")),Object(a.b)("h2",{id:"result"},"Result"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractSets, generateCombinations, KarnaughMap } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const sets = useMemo(() => extractSets(elems), [elems]);\n  const combinations = useMemo(() => generateCombinations(sets), [sets]);\n\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <KarnaughMap\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={400}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),Object(a.b)("h2",{id:"bundle-version"},"Bundle version"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/bundle\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/bundle\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { extractSets, generateCombinations, renderKarnaughMap } from '@upsetjs/bundle';\n\nconst elems = [\n  { name: 'A', sets: ['S1', 'S2'] },\n  { name: 'B', sets: ['S1'] },\n  { name: 'C', sets: ['S2'] },\n  { name: 'D', sets: ['S1', 'S3'] },\n];\nconst sets = useMemo(() => extractSets(elems), [elems]);\nconst combinations = useMemo(() => generateCombinations(sets), [sets]);\n\nlet selection = null;\n\nfunction onHover(set) {\n  selection = set;\n  rerender();\n}\n\nfunction rerender() {\n  const props = { sets, combinations, width: 780, height: 400, selection, onHover };\n  renderKarnaughMap(document.body, props);\n}\n\nrerender();\n")))}l.isMDXComponent=!0},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return l}));var s=t(3),r=(t(0),t(128));const a={id:"_index",title:"Quick Start",slug:"/getting-started"},i={unversionedId:"getting-started/_index",id:"getting-started/_index",isDocsHomePage:!1,title:"Quick Start",description:"Install Upset.js",source:"@site/docs/getting-started/_index.mdx",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/getting-started/_index.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Data",permalink:"/docs/data"},next:{title:"Venn Diagrams",permalink:"/docs/getting-started/venndiagram"}},o=[{value:"Install Upset.js",id:"install-upsetjs",children:[]},{value:"Defining your elements",id:"defining-your-elements",children:[]},{value:"Extract the sets",id:"extract-the-sets",children:[]},{value:"Result",id:"result",children:[]},{value:"Interactivity",id:"interactivity",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Bundle version",id:"bundle-version",children:[]}],c={toc:o};function l({components:e,...n}){return Object(r.b)("wrapper",Object(s.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install-upsetjs"},"Install Upset.js"),Object(r.b)("p",null,"UpSet.js comes with an React based version ",Object(r.b)("inlineCode",{parentName:"p"},"@upsetjs/react")," and a pure Vanilla JavaScript version ",Object(r.b)("inlineCode",{parentName:"p"},"@upsetjs/bundle"),".\nIn addition, there is a Vue.js wrapper at ",Object(r.b)("inlineCode",{parentName:"p"},"@upsetjs/vue"),". All of them have the same feature set and interface.\nThe bundle version has no framework dependencies and can be used in general cases. In the followign the React version is shown, later also the bundled version."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/react react react-dom\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/react react react-dom\n")),Object(r.b)("h2",{id:"defining-your-elements"},"Defining your elements"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"const elems = useMemo(\n  () => [\n    { name: 'A', sets: ['S1', 'S2'] },\n    { name: 'B', sets: ['S1'] },\n    { name: 'C', sets: ['S2'] },\n    { name: 'D', sets: ['S1', 'S3'] },\n  ],\n  []\n);\n")),Object(r.b)("h2",{id:"extract-the-sets"},"Extract the sets"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"// import { extractCombinations } from '@upsetjs/react';\nconst { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n")),Object(r.b)("h2",{id:"result"},"Result"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  return <UpSetJS sets={sets} combinations={combinations} width={780} height={400} />;\n}\n")),Object(r.b)("h2",{id:"interactivity"},"Interactivity"),Object(r.b)("p",null,"By specifying ",Object(r.b)("inlineCode",{parentName:"p"},"onHover")," and ",Object(r.b)("inlineCode",{parentName:"p"},"selection")," UpSet.js is fully interactive. As an alternative there is also the ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," property."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <UpSetJS\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={400}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),Object(r.b)("h2",{id:"queries"},"Queries"),Object(r.b)("p",null,"Similar to the original UpSetR, UpSet.js allows to specify queries by a set of elements which are then highlighted in the plot.\nThe first query is shown in full detail while others are shown using small indicators."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  const queries = useMemo(\n    () => [\n      { name: 'Q1', color: 'steelblue', elems: elems.slice(0, 2) },\n      { name: 'Q2', color: 'red', elems: elems.slice(2) },\n    ],\n    [elems]\n  );\n\n  return <UpSetJS sets={sets} combinations={combinations} width={780} height={400} queries={queries} />;\n}\n")),Object(r.b)("h2",{id:"bundle-version"},"Bundle version"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/bundle\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/bundle\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { extractCombinations, renderUpSetJS } from '@upsetjs/bundle';\n\nconst elems = [\n  { name: 'A', sets: ['S1', 'S2'] },\n  { name: 'B', sets: ['S1'] },\n  { name: 'C', sets: ['S2'] },\n  { name: 'D', sets: ['S1', 'S3'] },\n];\nconst { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\nlet selection = null;\n\nfunction onHover(set) {\n  selection = set;\n  rerender();\n}\n\nfunction rerender() {\n  const props = { sets, combinations, width: 780, height: 400, selection, onHover };\n  renderUpSetJS(document.body, props);\n}\n\nrerender();\n")))}l.isMDXComponent=!0},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var s=t(0),r=t.n(s);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),m=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(t),b=s,d=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return t?r.a.createElement(d,o(o({ref:n},l),{},{components:t})):r.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
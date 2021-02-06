(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=(t(0),t(115));const i={title:"Venn Diagram"},o={unversionedId:"components/venndiagram",id:"components/venndiagram",isDocsHomePage:!1,title:"Venn Diagram",description:"For comparison and convenience reasons UpSet.js also has a Venn Diagram component for rendering two or three sets.",source:"@site/docs/components/venndiagram.mdx",slug:"/components/venndiagram",permalink:"/docs/components/venndiagram",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/components/venndiagram.mdx",version:"current",sidebar:"someSidebar",previous:{title:"UpSet.js Plot",permalink:"/docs/components/upsetjs"},next:{title:"Karnaugh Map",permalink:"/docs/components/karnaughmap"}},c=[{value:"Skeleton",id:"skeleton",children:[]},{value:"Title",id:"title",children:[]},{value:"Interactivity",id:"interactivity",children:[]},{value:"Click",id:"click",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Small Sets",id:"small-sets",children:[]}],s={toc:c};function l({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For comparison and convenience reasons UpSet.js also has a Venn Diagram component for rendering two or three sets."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Default() {\n  return <VennDiagram sets={GameOfThronesDataSet.sets} width={780} height={500} />;\n}\n")),Object(a.b)("h2",{id:"skeleton"},"Skeleton"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Skeleton() {\n  return <VennDiagramSkeleton width={780} height={500} />;\n}\n")),Object(a.b)("h2",{id:"title"},"Title"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'// import React from \'react\';\n\nfunction Title() {\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      title="Game of Thrones"\n      description="Information about the characters of the tv series Game of Thrones"\n    />\n  );\n}\n')),Object(a.b)("h2",{id:"interactivity"},"Interactivity"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Interactivity() {\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),Object(a.b)("h2",{id:"click"},"Click"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Click() {\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      selection={selection}\n      onClick={setSelection}\n    />\n  );\n}\n")),Object(a.b)("h2",{id:"queries"},"Queries"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Queries() {\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      queries={GameOfThronesDataSet.queries}\n      queryLegend\n    />\n  );\n}\n")),Object(a.b)("h2",{id:"small-sets"},"Small Sets"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction SmallSets() {\n  return (\n    <div>\n      <VennDiagram\n        width={780}\n        height={500}\n        sets={asSets([\n          { name: 'one', elems: [1, 2, 3, 5, 7, 8, 11, 12, 13] },\n          { name: 'two', elems: [1, 2, 4, 5, 10] },\n          { name: 'three', elems: [1, 5, 6, 7, 8, 9, 10, 12, 13] },\n        ])}\n      />\n      <VennDiagram\n        width={780}\n        height={500}\n        sets={asSets([\n          { name: 'one', elems: [1, 2, 3] },\n          { name: 'two', elems: [1, 2, 4, 5] },\n          { name: 'three', elems: [1, 5] },\n        ])}\n      />\n    </div>\n  );\n}\n")))}l.isMDXComponent=!0},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),m=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=m(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
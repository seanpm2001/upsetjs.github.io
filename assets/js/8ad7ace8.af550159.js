(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),i=(t(0),t(128));const o={title:"UpSet.js Plot"},a={unversionedId:"components/upsetjs",id:"components/upsetjs",isDocsHomePage:!1,title:"UpSet.js Plot",description:"`jsx live",source:"@site/docs/components/upsetjs.mdx",slug:"/components/upsetjs",permalink:"/docs/components/upsetjs",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/components/upsetjs.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Components",permalink:"/docs/components"},next:{title:"Venn Diagram",permalink:"/docs/components/venndiagram"}},s=[{value:"Skeleton",id:"skeleton",children:[]},{value:"Title",id:"title",children:[]},{value:"Interactivity",id:"interactivity",children:[]},{value:"Click",id:"click",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Small Sets",id:"small-sets",children:[]},{value:"Addons",id:"addons",children:[]}],c={toc:s};function l({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Default() {\n  return <UpSetJS sets={GameOfThronesDataSet.sets} width={780} height={500} />;\n}\n")),Object(i.b)("h2",{id:"skeleton"},"Skeleton"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Skeleton() {\n  return <UpSetJSSkeleton width={780} height={500} />;\n}\n")),Object(i.b)("h2",{id:"title"},"Title"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'// import React from \'react\';\n\nfunction Title() {\n  return (\n    <UpSetJS\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      title="Game of Thrones"\n      description="Information about the characters of the tv series Game of Thrones"\n    />\n  );\n}\n')),Object(i.b)("h2",{id:"interactivity"},"Interactivity"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Interactivity() {\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <UpSetJS sets={GameOfThronesDataSet.sets} width={780} height={500} selection={selection} onHover={setSelection} />\n  );\n}\n")),Object(i.b)("h2",{id:"click"},"Click"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Click() {\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <UpSetJS sets={GameOfThronesDataSet.sets} width={780} height={500} selection={selection} onClick={setSelection} />\n  );\n}\n")),Object(i.b)("h2",{id:"queries"},"Queries"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Queries() {\n  return (\n    <UpSetJS\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      queries={GameOfThronesDataSet.queries}\n      queryLegend\n    />\n  );\n}\n")),Object(i.b)("h2",{id:"small-sets"},"Small Sets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction SmallSets() {\n  return (\n    <div>\n      <UpSetJS\n        width={780}\n        height={500}\n        sets={asSets([\n          { name: 'one', elems: [1, 2, 3, 5, 7, 8, 11, 12, 13] },\n          { name: 'two', elems: [1, 2, 4, 5, 10] },\n          { name: 'three', elems: [1, 5, 6, 7, 8, 9, 10, 12, 13] },\n        ])}\n      />\n      <UpSetJS\n        width={780}\n        height={500}\n        sets={asSets([\n          { name: 'one', elems: [1, 2, 3] },\n          { name: 'two', elems: [1, 2, 4, 5] },\n          { name: 'three', elems: [1, 5] },\n        ])}\n      />\n    </div>\n  );\n}\n")),Object(i.b)("h2",{id:"addons"},"Addons"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Addons() {\n  const SetAddon = ({ width, height }) => {\n    return <rect x={1} y={1} width={width - 2} height={height - 2} fill=\"red\"></rect>;\n  };\n\n  const SetAddon2 = ({ width, height }) => {\n    return <rect x={1} y={1} width={width - 2} height={height - 2} fill=\"green\"></rect>;\n  };\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <UpSetJS\n      width={780}\n      height={500}\n      sets={GameOfThronesDataSet.sets}\n      selection={selection}\n      onHover={setSelection}\n      setAddons={[\n        {\n          name: 'red',\n          size: 40,\n          render: SetAddon,\n        },\n        {\n          name: 'green',\n          position: 'before',\n          size: 20,\n          render: SetAddon2,\n        },\n      ]}\n      combinationAddons={[\n        {\n          name: 'red',\n          size: 40,\n          render: SetAddon,\n        },\n        {\n          name: 'green',\n          position: 'before',\n          size: 20,\n          render: SetAddon2,\n        },\n      ]}\n    />\n  );\n}\n")))}l.isMDXComponent=!0},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return t?i.a.createElement(h,s(s({ref:n},l),{},{components:t})):i.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
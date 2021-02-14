(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(128)),o=n(131);const i={title:"Plot Title",hide_table_of_contents:!0},c={unversionedId:"examples/title",id:"examples/title",isDocsHomePage:!1,title:"Plot Title",description:"Basic example showing a UpSet.js Plot with title.",source:"@site/docs/examples/title.mdx",slug:"/examples/title",permalink:"/docs/examples/title",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/examples/title.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Queries",permalink:"/docs/examples/queries"},next:{title:"Static Data",permalink:"/docs/examples/staticData"}},l=[],s={toc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Basic example showing a UpSet.js Plot with title."),Object(a.b)(o.a,{name:"title",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";var r=n(0),a=n(130);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},130:function(e,t,n){"use strict";var r=n(0);const a=n.n(r).a.createContext(void 0);t.a=a},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(17),i=n(129);function c({name:e}){const{siteConfig:t}=Object(o.default)(),{isDarkTheme:n}=Object(i.a)(),r=`${t.organizationName}/${t.projectName}/tree/${t.customFields.branch}/examples/${e}`;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:`https://codesandbox.io/s/github/${r}`},"Open in CodeSandbox")),a.a.createElement("li",null,a.a.createElement("a",{href:`https://github.com/${r}`},"Show Source"))),a.a.createElement("iframe",{title:"Example Preview",className:"embedded-iframe",src:`https://codesandbox.io/embed/github/${r}?autoresize=1&fontsize=14&theme=${n?"dark":"light"}`},"Example Preview not available"))}}}]);
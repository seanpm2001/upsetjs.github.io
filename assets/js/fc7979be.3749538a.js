(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(128)),a=n(131);const i={title:"Venn Diagram (Colored)",hide_table_of_contents:!0},c={unversionedId:"examples/vennColored",id:"examples/vennColored",isDocsHomePage:!1,title:"Venn Diagram (Colored)",description:"Basic example showing colored Venn Diagram.",source:"@site/docs/examples/vennColored.mdx",slug:"/examples/vennColored",permalink:"/docs/examples/vennColored",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/examples/vennColored.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Venn Diagram",permalink:"/docs/examples/venn"},next:{title:"Venn Diagram (Queries)",permalink:"/docs/examples/vennQueries"}},l=[],s={toc:l};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Basic example showing colored Venn Diagram."),Object(o.b)(a.a,{name:"vennColored",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";var r=n(0),o=n(130);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},130:function(e,t,n){"use strict";var r=n(0);const o=n.n(r).a.createContext(void 0);t.a=o},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(17),i=n(129);function c({name:e}){const{siteConfig:t}=Object(a.default)(),{isDarkTheme:n}=Object(i.a)(),r=`${t.organizationName}/${t.projectName}/tree/${t.customFields.branch}/examples/${e}`;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:`https://codesandbox.io/s/github/${r}`},"Open in CodeSandbox")),o.a.createElement("li",null,o.a.createElement("a",{href:`https://github.com/${r}`},"Show Source"))),o.a.createElement("iframe",{title:"Example Preview",className:"embedded-iframe",src:`https://codesandbox.io/embed/github/${r}?autoresize=1&fontsize=14&theme=${n?"dark":"light"}`},"Example Preview not available"))}}}]);
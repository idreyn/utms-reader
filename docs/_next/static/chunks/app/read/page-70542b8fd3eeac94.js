(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323,593],{2483:function(e,t,n){Promise.resolve().then(n.t.bind(n,8920,23)),Promise.resolve().then(n.bind(n,5905)),Promise.resolve().then(n.t.bind(n,3389,23)),Promise.resolve().then(n.t.bind(n,8564,23)),Promise.resolve().then(n.t.bind(n,391,23)),Promise.resolve().then(n.t.bind(n,4235,23)),Promise.resolve().then(n.t.bind(n,7842,23)),Promise.resolve().then(n.t.bind(n,1497,23)),Promise.resolve().then(n.bind(n,4013))},4013:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return c},useThemeContext:function(){return u}});var r=n(9268),o=n(6006);let s={light:{text:"black",background:"white"},dark:{text:"white",background:"black"}},l="\n  (function() {\n    function getInitialThemeName() {\n        const persistedThemeName = window.localStorage.getItem('theme-name');\n        const hasPersistedPreference = typeof persistedThemeName === 'string';\n        // If the user has explicitly chosen light or dark,\n        // let's use it. Otherwise, this value will be null.\n        if (hasPersistedPreference) {\n          return persistedThemeName;\n        }\n        // If they haven't been explicit, let's check the media\n        // query\n        const mql = window.matchMedia('(prefers-color-scheme: dark)');\n        const hasMediaQueryPreference = typeof mql.matches === 'boolean';\n        if (hasMediaQueryPreference) {\n          return mql.matches ? 'dark' : 'light';\n        }\n        // If they are using a browser/OS that doesn't support\n        // color themes, let's default to 'light'.\n        return 'light';\n    }\n    const themeName = getInitialThemeName();\n    const root = document.documentElement;\n    root.style.setProperty(\n      '--color-text',\n      themeName === 'light'\n        ? '".concat(s.light.text,"'\n        : '").concat(s.dark.text,"'\n    );\n    root.style.setProperty(\n      '--color-background',\n      themeName === 'light'\n        ? '").concat(s.light.background,"'\n        : '").concat(s.dark.background,"'\n    );\n    root.style.setProperty('--initial-theme-name', themeName);\n  })()\n"),i=o.createContext({theme:"dark",setTheme:e=>void 0}),a=e=>{let t=window.document.documentElement;t.style.setProperty("--color-text",s[e].text),t.style.setProperty("--color-background",s[e].background),window.localStorage.setItem("theme-name",e)},c=e=>{let{children:t}=e,[n,s]=(0,o.useState)(null),c=(0,o.useCallback)(e=>{s(e),a(e)},[]);return(0,o.useEffect)(()=>{let e=window.document.documentElement,t=e.style.getPropertyValue("--initial-theme-name");s(t)},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Provider,{value:{theme:n,setTheme:c},children:[(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:l}}),t]})})},u=()=>o.useContext(i)},5905:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeToggle:function(){return c}});var r=n(9268),o=n(6006),s=n(4821),l=n(4013),i=n(8273),a=n.n(i);let c=e=>{let{iconSize:t=20}=e,{theme:n,setTheme:i}=(0,l.useThemeContext)(),c=(0,o.useRef)(null),u=(0,o.useCallback)(()=>{if(c.current){let e=c.current;e.classList.add(a().sunset);let t=setTimeout(()=>{e.classList.remove(a().sunset),e.classList.add(a().sunrise),i("dark"===n?"light":"dark"),setTimeout(()=>{e.classList.remove(a().sunrise)},150)},150);return()=>clearTimeout(t)}return()=>{}},[n,i]),m=null===n;return(0,r.jsx)("button",{className:a().button,disabled:m,onClick:u,style:{opacity:m?0:1,height:t},children:(0,r.jsxs)("div",{className:a().icons,ref:c,style:{flexDirection:"dark"===n?"column-reverse":"column",height:2*t,animationDuration:"".concat(300,"ms")},children:[(0,r.jsx)(s.EWX,{size:t}),(0,r.jsx)(s.Dq,{size:t})]})})}},7842:function(e){e.exports={bodyText:"Chapter_bodyText___qLTB"}},4235:function(e){e.exports={chapterQuickNav:"ChapterQuickNav_chapterQuickNav__EXp_8",previous:"ChapterQuickNav_previous__EhnLJ",contents:"ChapterQuickNav_contents__HfJVg",next:"ChapterQuickNav_next__HJcYI"}},3389:function(e){e.exports={globalHeader:"GlobalHeader_globalHeader__DLp2y",title:"GlobalHeader_title__9a1ng"}},391:function(e){e.exports={readingLayout:"ReadingLayout_readingLayout__5k9Ea"}},1497:function(e){e.exports={list:"TableOfContents_list___kN7F",section:"TableOfContents_section__pER9C"}},8273:function(e){e.exports={button:"ThemeToggle_button__gkZcV",icons:"ThemeToggle_icons__FZpzS",sunrise:"ThemeToggle_sunrise__HzKp2",sunset:"ThemeToggle_sunset__16B9S"}},8564:function(e){e.exports={style:{fontFamily:"'__Vollkorn_f42854', '__Vollkorn_Fallback_f42854'",fontStyle:"normal"},className:"__className_f42854"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},3270:function(e,t,n){"use strict";n.d(t,{w_:function(){return a}});var r=n(6006),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function a(e){return function(t){return r.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,o=e.attr,s=e.size,a=e.title,c=i(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[739,920,667,488,744],function(){return e(e.s=2483)}),_N_E=e.O()}]);
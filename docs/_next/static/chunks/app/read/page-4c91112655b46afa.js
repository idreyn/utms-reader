(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323,593],{3334:function(e,t,n){Promise.resolve().then(n.bind(n,7970)),Promise.resolve().then(n.t.bind(n,8920,23)),Promise.resolve().then(n.t.bind(n,4235,23)),Promise.resolve().then(n.t.bind(n,7842,23)),Promise.resolve().then(n.bind(n,5905)),Promise.resolve().then(n.t.bind(n,3389,23)),Promise.resolve().then(n.t.bind(n,1497,23)),Promise.resolve().then(n.bind(n,4013))},7970:function(e,t,n){"use strict";n.r(t),n.d(t,{ReadingLayout:function(){return x}});var r=n(9268),s=n(8564),o=n.n(s),a=n(6888),i=n.n(a),l=n(1230),c=n.n(l);n(6006);var u=n(391),d=n.n(u),h=n(5846),m=n.n(h),_=n(3389),g=n.n(_),f=n(5905);let b=()=>(0,r.jsxs)("header",{className:g().globalHeader,children:[(0,r.jsx)("div",{className:g().title,children:(0,r.jsx)(m(),{href:"/",children:"Upon the Mirror Sea"})}),(0,r.jsx)(f.ThemeToggle,{})]}),p=(0,r.jsx)(c(),{id:"da060b8d56404e0",children:".tex{font-family:".concat(i().style.fontFamily,"}")}),x=e=>{let{pre:t=null,body:n,post:s=null,useSerifBodyFont:a=!1}=e;return(0,r.jsxs)("div",{className:d().readingLayout,children:[(0,r.jsx)(b,{}),t,p,(0,r.jsx)("main",{className:a?o().className:"",children:n}),s]})}},4013:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return c},useThemeContext:function(){return u}});var r=n(9268),s=n(6006);let o={light:{text:"black",background:"white"},dark:{text:"white",background:"black"}},a="\n  (function() {\n    function getInitialThemeName() {\n        const persistedThemeName = window.localStorage.getItem('theme-name');\n        const hasPersistedPreference = typeof persistedThemeName === 'string';\n        // If the user has explicitly chosen light or dark,\n        // let's use it. Otherwise, this value will be null.\n        if (hasPersistedPreference) {\n          return persistedThemeName;\n        }\n        // If they haven't been explicit, let's check the media\n        // query\n        const mql = window.matchMedia('(prefers-color-scheme: dark)');\n        const hasMediaQueryPreference = typeof mql.matches === 'boolean';\n        if (hasMediaQueryPreference) {\n          return mql.matches ? 'dark' : 'light';\n        }\n        // If they are using a browser/OS that doesn't support\n        // color themes, let's default to 'light'.\n        return 'light';\n    }\n    const themeName = getInitialThemeName();\n    const root = document.documentElement;\n    root.style.setProperty(\n      '--color-text',\n      themeName === 'light'\n        ? '".concat(o.light.text,"'\n        : '").concat(o.dark.text,"'\n    );\n    root.style.setProperty(\n      '--color-background',\n      themeName === 'light'\n        ? '").concat(o.light.background,"'\n        : '").concat(o.dark.background,"'\n    );\n    root.style.setProperty('--initial-theme-name', themeName);\n  })()\n"),i=s.createContext({theme:"dark",setTheme:e=>void 0}),l=e=>{let t=window.document.documentElement;t.style.setProperty("--color-text",o[e].text),t.style.setProperty("--color-background",o[e].background),window.localStorage.setItem("theme-name",e)},c=e=>{let{children:t}=e,[n,o]=(0,s.useState)(null),c=(0,s.useCallback)(e=>{o(e),l(e)},[]);return(0,s.useEffect)(()=>{let e=window.document.documentElement,t=e.style.getPropertyValue("--initial-theme-name");o(t)},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.Provider,{value:{theme:n,setTheme:c},children:[(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:a}}),t]})})},u=()=>s.useContext(i)},5905:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeToggle:function(){return c}});var r=n(9268),s=n(6006),o=n(4821),a=n(4013),i=n(8273),l=n.n(i);let c=e=>{let{iconSize:t=20}=e,{theme:n,setTheme:i}=(0,a.useThemeContext)(),c=(0,s.useRef)(null),u=(0,s.useCallback)(()=>{if(c.current){let e=c.current;e.classList.add(l().sunset);let t=setTimeout(()=>{e.classList.remove(l().sunset),e.classList.add(l().sunrise),i("dark"===n?"light":"dark"),setTimeout(()=>{e.classList.remove(l().sunrise)},150)},150);return()=>clearTimeout(t)}return()=>{}},[n,i]);(0,s.useEffect)(()=>{document.body.classList.add(l().animatedBody)},[]);let d=null===n;return(0,r.jsx)("button",{"aria-label":"dark"===n?"Light mode":"Dark mode",className:l().button,disabled:d,onClick:u,style:{opacity:d?0:1,height:t},children:(0,r.jsxs)("div",{className:l().icons,ref:c,style:{flexDirection:"dark"===n?"column-reverse":"column",height:2*t,animationDuration:"".concat(300,"ms")},children:[(0,r.jsx)(o.EWX,{size:t}),(0,r.jsx)(o.Dq,{size:t})]})})}},7842:function(e){e.exports={bodyText:"Chapter_bodyText___qLTB"}},4235:function(e){e.exports={chapterQuickNav:"ChapterQuickNav_chapterQuickNav__EXp_8",previous:"ChapterQuickNav_previous__EhnLJ",contents:"ChapterQuickNav_contents__HfJVg",next:"ChapterQuickNav_next__HJcYI"}},3389:function(e){e.exports={globalHeader:"GlobalHeader_globalHeader__DLp2y",title:"GlobalHeader_title__9a1ng"}},391:function(e){e.exports={readingLayout:"ReadingLayout_readingLayout__5k9Ea"}},1497:function(e){e.exports={list:"TableOfContents_list___kN7F",section:"TableOfContents_section__pER9C"}},8273:function(e){e.exports={button:"ThemeToggle_button__gkZcV",icons:"ThemeToggle_icons__FZpzS",sunrise:"ThemeToggle_sunrise__HzKp2",sunset:"ThemeToggle_sunset__16B9S",animatedBody:"ThemeToggle_animatedBody__uIEja"}}},function(e){e.O(0,[739,920,190,667,488,744],function(){return e(e.s=3334)}),_N_E=e.O()}]);
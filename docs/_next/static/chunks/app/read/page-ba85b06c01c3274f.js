(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323,593],{4074:function(e,t,n){Promise.resolve().then(n.bind(n,7970)),Promise.resolve().then(n.t.bind(n,8920,23)),Promise.resolve().then(n.t.bind(n,4235,23)),Promise.resolve().then(n.t.bind(n,7842,23)),Promise.resolve().then(n.bind(n,5905)),Promise.resolve().then(n.t.bind(n,3389,23)),Promise.resolve().then(n.bind(n,4318)),Promise.resolve().then(n.t.bind(n,1497,23)),Promise.resolve().then(n.bind(n,3387))},7970:function(e,t,n){"use strict";n.r(t),n.d(t,{ReadingLayout:function(){return b}});var o=n(9268),r=n(8564),s=n.n(r),i=n(6888),a=n.n(i),l=n(1230),c=n.n(l);n(6006);var u=n(391),d=n.n(u),h=n(5846),m=n.n(h),_=n(4821),g=n(3389),f=n.n(g),p=n(5905);let y=()=>(0,o.jsxs)("header",{className:f().globalHeader,children:[(0,o.jsx)("div",{className:f().title,children:(0,o.jsx)(m(),{href:"/",children:"Upon the Mirror Sea"})}),(0,o.jsxs)("div",{className:f().icons,children:[(0,o.jsx)(p.ThemeToggle,{iconSize:20}),(0,o.jsx)("a",{href:"/rss.xml",style:{height:20},title:"RSS feed",children:(0,o.jsx)(_.PLL,{size:20})})]})]}),x=(0,o.jsx)(c(),{id:"da060b8d56404e0",children:".tex{font-family:".concat(a().style.fontFamily,"}")}),b=e=>{let{pre:t=null,body:n,post:r=null,useSerifBodyFont:i=!1}=e;return(0,o.jsxs)("div",{className:d().readingLayout,children:[(0,o.jsx)(y,{}),t,x,(0,o.jsx)("main",{className:i?s().className:"",children:n}),r]})}},4318:function(e,t,n){"use strict";n.r(t),n.d(t,{Redirect:function(){return l}});var o=n(9268),r=n(6006),s=n(5846),i=n.n(s),a=n(7970);let l=e=>{let{href:t}=e;(0,r.useEffect)(()=>{window.location.replace(t)},[t]);let n=(0,o.jsxs)("p",{children:["Redirecting you now. If this doesn't work,"," ",(0,o.jsx)(i(),{href:t,children:"click here"}),"."]});return(0,o.jsx)(a.ReadingLayout,{body:n})}},3387:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return u},useThemeContext:function(){return d}});var o=n(9268),r=n(6006);let s="A serialized science fiction novel about psychedelics, surveillance, and first contact with ourselves.";"".concat("Upon the Mirror Sea"," is ").concat(s.charAt(0).toLowerCase()).concat(s.slice(1));let i={light:{text:"black",background:"white",incomplete:"#aaa"},dark:{text:"white",background:"black",incomplete:"#333"}},a="\n  (function() {\n    function getInitialThemeName() {\n        const persistedThemeName = window.localStorage.getItem('theme-name');\n        const hasPersistedPreference = typeof persistedThemeName === 'string';\n        // If the user has explicitly chosen light or dark,\n        // let's use it. Otherwise, this value will be null.\n        if (hasPersistedPreference) {\n          return persistedThemeName;\n        }\n        // If they haven't been explicit, let's check the media\n        // query\n        const mql = window.matchMedia('(prefers-color-scheme: dark)');\n        const hasMediaQueryPreference = typeof mql.matches === 'boolean';\n        if (hasMediaQueryPreference) {\n          return mql.matches ? 'dark' : 'light';\n        }\n        // If they are using a browser/OS that doesn't support\n        // color themes, let's default to 'light'.\n        return 'light';\n    }\n    const themeName = getInitialThemeName();\n    const root = document.documentElement;\n    root.style.setProperty(\n      '--color-text',\n      themeName === 'light'\n        ? '".concat(i.light.text,"'\n        : '").concat(i.dark.text,"'\n    );\n    root.style.setProperty(\n      '--color-background',\n      themeName === 'light'\n        ? '").concat(i.light.background,"'\n        : '").concat(i.dark.background,"'\n    );\n    root.style.setProperty(\n      '--color-incomplete',\n      themeName === 'light'\n        ? '").concat(i.light.incomplete,"'\n        : '").concat(i.dark.incomplete,"'\n    );\n    root.style.setProperty('--initial-theme-name', themeName);\n  })()\n"),l=r.createContext({theme:"dark",setTheme:e=>void 0}),c=e=>{let t=window.document.documentElement;t.style.setProperty("--color-text",i[e].text),t.style.setProperty("--color-background",i[e].background),t.style.setProperty("--color-incomplete",i[e].incomplete),window.localStorage.setItem("theme-name",e)},u=e=>{let{children:t}=e,[n,s]=(0,r.useState)(null),i=(0,r.useCallback)(e=>{s(e),c(e)},[]);return(0,r.useEffect)(()=>{let e=window.document.documentElement,t=e.style.getPropertyValue("--initial-theme-name");s(t)},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.Provider,{value:{theme:n,setTheme:i},children:[(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:a}}),t]})})},d=()=>r.useContext(l)},5905:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeToggle:function(){return c}});var o=n(9268),r=n(6006),s=n(4821),i=n(3387),a=n(8273),l=n.n(a);let c=e=>{let{iconSize:t=20}=e,{theme:n,setTheme:a}=(0,i.useThemeContext)(),c=(0,r.useRef)(null),u=(0,r.useCallback)(()=>{if(c.current){let e=c.current;e.classList.add(l().sunset);let t=setTimeout(()=>{e.classList.remove(l().sunset),e.classList.add(l().sunrise),a("dark"===n?"light":"dark"),setTimeout(()=>{e.classList.remove(l().sunrise)},150)},150);return()=>clearTimeout(t)}return()=>{}},[n,a]);(0,r.useEffect)(()=>{document.body.classList.add(l().animatedBody)},[]);let d=null===n;return(0,o.jsx)("button",{title:"Switch to ".concat("dark"===n?"light":"dark"," mode"),className:l().button,disabled:d,onClick:u,style:{opacity:d?0:1,height:t},children:(0,o.jsxs)("div",{className:l().icons,ref:c,style:{flexDirection:"dark"===n?"column-reverse":"column",height:2*t,animationDuration:"".concat(300,"ms")},children:[(0,o.jsx)(s.EWX,{size:t}),(0,o.jsx)(s.Dq,{size:t})]})})}},7842:function(e){e.exports={bodyText:"Chapter_bodyText___qLTB"}},4235:function(e){e.exports={chapterQuickNav:"ChapterQuickNav_chapterQuickNav__EXp_8",previous:"ChapterQuickNav_previous__EhnLJ",contents:"ChapterQuickNav_contents__HfJVg",next:"ChapterQuickNav_next__HJcYI"}},3389:function(e){e.exports={globalHeader:"GlobalHeader_globalHeader__DLp2y",title:"GlobalHeader_title__9a1ng",icons:"GlobalHeader_icons__MEPIw"}},391:function(e){e.exports={readingLayout:"ReadingLayout_readingLayout__5k9Ea"}},1497:function(e){e.exports={list:"TableOfContents_list___kN7F",section:"TableOfContents_section__pER9C",incomplete:"TableOfContents_incomplete__YXuRX"}},8273:function(e){e.exports={button:"ThemeToggle_button__gkZcV",icons:"ThemeToggle_icons__FZpzS",sunrise:"ThemeToggle_sunrise__HzKp2",sunset:"ThemeToggle_sunset__16B9S",animatedBody:"ThemeToggle_animatedBody__uIEja"}}},function(e){e.O(0,[739,920,190,667,488,744],function(){return e(e.s=4074)}),_N_E=e.O()}]);
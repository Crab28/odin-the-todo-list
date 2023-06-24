(()=>{"use strict";var n={473:(n,t,e)=>{e.d(t,{Z:()=>v});var i=e(81),o=e.n(i),a=e(645),r=e.n(a),s=e(667),l=e.n(s),d=new URL(e(156),e.b),c=new URL(e(867),e.b),p=new URL(e(498),e.b),u=new URL(e(944),e.b),b=r()(o()),f=l()(d),h=l()(c),m=l()(p),g=l()(u);b.push([n.id,`.main-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    max-width: 1200px;\n    padding: 40px;\n    gap: 20px;\n}\n\n#add-task-btn {\n    width: 30%;\n    margin: 0 auto;\n    padding: 10px 0;\n    border: 1px dashed var(--alt);\n    font-size: 1rem;\n    border-radius: 3px;\n}\n\n#add-task-btn:active {\n    transform: scale(0.99);\n}\n\n#project-title {\n    width: 100%;\n}\n\n.task-checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.task-header {\n    width: 100%;\n    padding-left: 34px;\n    display: grid;\n    grid-template-columns: repeat(4, 25%);\n}\n\n.task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.task-container {\n    display: flex;\n    width: 100%;\n    gap: 12px;\n    align-items: center;\n}\n\n.task-box {\n    border: 1px solid var(--dark);\n    width: 100%;\n    height: 30px;\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(4, 25%);\n    padding: 0 10px;\n    gap: 5px;\n}\n\n.task-buttons ul {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-right: 20px;\n    gap: 10px;\n}\n\n.task-buttons .btn {\n    height: 30px;\n    width: 36px;\n    background-color: #eee;\n    padding: 0;\n}\n\n.task-buttons .btn-icon {\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 96%;\n    width: 96%;\n    opacity: 0.5;\n}\n\n.task-buttons .btn-icon:hover {\n    opacity: 1;\n    transform: scale(0.99);\n}\n\n.task-buttons .btn-trash {\n    background-image: url(${f});\n}\n\n.task-buttons .btn-important {\n    background-image: url(${h});\n}\n\n.task-buttons .btn-edit {\n    background-image: url(${m});\n}\n\n.task-buttons .btn-view {\n    background-image: url(${g});\n}`,""]);const v=b},239:(n,t,e)=>{e.d(t,{Z:()=>m});var i=e(81),o=e.n(i),a=e(645),r=e.n(a),s=e(667),l=e.n(s),d=new URL(e(850),e.b),c=new URL(e(728),e.b),p=new URL(e(408),e.b),u=r()(o()),b=l()(d),f=l()(c),h=l()(p);u.push([n.id,`\nheader {\n    background-color: var(--lightest);\n    padding: 16px 0;\n    color: var(--darkest);\n    border-bottom: 2px solid var(--dark);\n}\n\n.header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\nheader .btn {\n    height: 46px;\n    width: 46px;\n    border-radius: 4px;\n    background-color: var(--lightest);\n}\n\nheader .btn:hover {\n    background-color: var(--light);\n}\n\nheader .btn .btn-icon {\n    background-image: url(${b});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 100%;\n    width: 100%;\n    filter: invert(51%) sepia(9%) saturate(5511%) hue-rotate(327deg) brightness(81%) contrast(91%);\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 70px;\n    height: 34px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--lightest);\n    background-image: url(${f}), url(${h});\n    background-position: left center, right center;\n    background-repeat: no-repeat, no-repeat;\n    background-size: 60% 60%, 60% 60%;\n    -webkit-transition: .4s;\n    transition: .4s;\n    border: 2px solid var(--dark);\n}\n\n.slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 6px;\n    bottom: 2px;\n    background-color: var(--dark);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n/*\ninput:checked + .slider {\n    background-color: #2196F3;\n}\n  \ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n*/\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(28px);\n    -ms-transform: translateX(28px);\n    transform: translateX(28px);\n}\n  \n  /* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n}\n  \n.slider.round:before {\n    border-radius: 50%;\n}`,""]);const m=u},462:(n,t,e)=>{e.d(t,{Z:()=>u});var i=e(81),o=e.n(i),a=e(645),r=e.n(a),s=e(667),l=e.n(s),d=new URL(e(953),e.b),c=r()(o()),p=l()(d);c.push([n.id,`.aside-content {\n    max-width: 300px;\n    width: 100%;\n    background-color: var(--plain);\n    padding: 18px 20px 5px;\n}\n\n.aside-block {\n    margin-bottom: 5px;\n}\n\n.aside-block:first-of-type {\n    margin-bottom: 20px;\n}\n\n.aside-block-list li {\n    padding: 10px 0;\n    padding-left: 20px;\n    cursor: pointer;\n    width: 100%;\n}\n\n.aside-block-list li:hover,\n.aside-block-list li:hover .btn {\n    background-color: var(--lightest);\n}\n\n.aside-block .btn {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: translateX(-10px);\n    padding: 10px 0;\n}\n\n.aside-block .btn:hover {\n    text-decoration: underline;\n}\n\n.aside-block .btn .btn-icon {\n    background-image: url(${p});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 20px;\n    width: 20px;\n    margin-right: 4px;\n}`,""]);const u=c},917:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),a=e(645),r=e.n(a)()(o());r.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=r},426:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),a=e(645),r=e.n(a)()(o());r.push([n.id,":root {\n    --alt: #588B8B;\n    --dark: #C8553D;\n    --normal: #F28F3B;\n    --light: #ffd5c2;\n    --lightest: #ffebe1;\n    --plain: #ffffff;\n}\n\n*, body {\n    font-family: 'Times New Roman', Times, Arial, serif;\n}\n\nbody {\n    background-color: #eee;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh3 {\n    font-size: 1.6rem;\n}\n\nh4 {\n    font-size: 1.2rem;\n}\n\n.btn {\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-color: var(--plain);\n}\n\n.btn:active {\n    transform: scale(0.97);\n}\n\n.container {\n    display: flex;\n    height: 100%;\n}\n\naside {\n    background-color: var(--plain);\n    height: 100%;\n    width: 20%;\n    display: flex;\n    justify-content: flex-end;\n}\n\nmain {\n    height: 100%;\n    width: 80%;\n}",""]);const s=r},204:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),a=e(645),r=e.n(a)()(o());r.push([n.id,"#task-creation-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#task-creation-box {\n    width: 400px;\n    background-color: var(--plain);\n    border-radius: 5px;\n    padding: 30px;\n}\n\n#task-creation-box form {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n#task-creation-box form hr {\n    width: 100%;\n}\n\n#task-creation-box form fieldset {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n}\n\n#task-creation-box form fieldset .form-item {\n    display: flex;\n    flex-direction: column;\n}\n\n#task-creation-box form fieldset .form-item label {\n    margin-bottom: 5px;\n    margin-top: 10px;\n}\n\n#task-creation-box form fieldset .form-item:last-child {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 50%;\n    width: 100%;\n    margin: 0 auto;\n    margin-top: 5px;\n}\n\n#task-creation-box form fieldset .form-item:not(:last-child) input {\n    padding: 5px 10px;\n    outline: none;\n}\n\n#task-creation-box form fieldset input[type=checkbox] {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n#task-creation-box form fieldset .form-item textarea {\n    outline: none;\n    padding: 6px 10px;\n}\n\n#task-creation-box form .form-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding-top: 5px;\n}\n\n#task-creation-box form .form-buttons .btn {\n    padding: 8px 30px;\n    background-color: var(--normal);\n    font-size: 0.9rem;\n    border-radius: 5px;\n    color: var(--plain);\n}\n\n#task-creation-box form .form-buttons .submit-btn {\n    background-color: var(--alt);\n    color: var(--plain);\n}",""]);const s=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);i&&r[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var a={},r=[],s=0;s<n.length;s++){var l=n[s],d=i.base?l[0]+i.base:l[0],c=a[d]||0,p="".concat(d," ").concat(c);a[d]=c+1;var u=e(p),b={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(b);else{var f=o(b,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=e(a[r]);t[s].references--}for(var l=i(n,o),d=0;d<a.length;d++){var c=e(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},850:(n,t,e)=>{n.exports=e.p+"2d4061552fac064ed076.svg"},498:(n,t,e)=>{n.exports=e.p+"8d317290131028fe10cf.svg"},953:(n,t,e)=>{n.exports=e.p+"b254db15a65e85097053.svg"},867:(n,t,e)=>{n.exports=e.p+"3285837e5ef183a119a1.svg"},944:(n,t,e)=>{n.exports=e.p+"b2c0c5c5ea9e88b87db7.svg"},156:(n,t,e)=>{n.exports=e.p+"bcf8d6ff346603c8a51a.svg"},408:(n,t,e)=>{n.exports=e.p+"2afd3e7710652f944bcf.svg"},728:(n,t,e)=>{n.exports=e.p+"a3d8e77d0f79f95ade8c.svg"}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!n;)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),i=e(795),o=e.n(i),a=e(569),r=e.n(a),s=e(565),l=e.n(s),d=e(216),c=e.n(d),p=e(589),u=e.n(p),b=e(917),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),t()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals;var h=e(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var g=e(239),v={};v.styleTagTransform=u(),v.setAttributes=l(),v.insert=r().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=c(),t()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var x=e(462),k={};k.styleTagTransform=u(),k.setAttributes=l(),k.insert=r().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=c(),t()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var y=e(473),w={};w.styleTagTransform=u(),w.setAttributes=l(),w.insert=r().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=c(),t()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var T=e(204),Z={};function E(n,t,e){const i=document.createElement("li");return i.classList.add("task-container"),i.textContent=e,i}Z.styleTagTransform=u(),Z.setAttributes=l(),Z.insert=r().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=c(),t()(T.Z,Z),T.Z&&T.Z.locals&&T.Z.locals;class L{constructor(n,t,e,i,o,a){this.title=n,this.description=t,this.note=e,this.duedate=i,this.priority=o,this.complete=a}}const j=(()=>{let n=[{id:0,title:"Default",tasks:[]}];return{createTask:(t,e,i,o,a)=>{let r=new L(t,e,i,o,a),s=n[0].tasks;(function(n){const t=document.getElementById("task-list"),e=function(n,t){const e=document.createElement("li");return e.classList.add("task-container"),e}();e.innerHTML='\n    <input type="checkbox" name="task-checkbox" class="task-checkbox">\n    <div class="task-box">\n        <div class="task-title">\n        </div>\n        <div class="task-note">\n        </div>\n        <div class="task-due">\n        </div>\n        <div class="task-buttons">\n            <ul>\n                <li><button class="btn"><div class="btn-icon btn-view"></div></button></li>\n                <li><button class="btn"><div class="btn-icon btn-edit"></div></button></li>\n                <li><button class="btn"><div class="btn-icon btn-trash"></div></button></li>\n                <li><button class="btn"><div class="btn-icon btn-important"></div></button></li>\n            </ul>\n        </div>\n    </div>';const i=e.querySelector(".task-title"),o=e.querySelector(".task-note"),a=e.querySelector(".task-due");i.appendChild(E(0,0,n.title)),o.appendChild(E(0,0,n.note)),a.appendChild(function(n){const t=document.createElement("time");return t.dateTime=n,t.textContent=n,t}(n.duedate)),t.appendChild(e)})(r),s.push(r)}}})();document.getElementById("header").innerHTML='\n    <div class="header-content">\n        <button type="button" class="btn">\n            <div class="btn-icon"></div>\n        </button>\n        <h1>The Big To-Do</h1>\n        <label class="switch">\n            <input type="checkbox">\n            <span class="slider round"></span>\n        </label>\n    </div>',document.getElementById("aside").innerHTML='\n    <div class="aside-content">\n        <div class="aside-block">\n            <h3>Main</h3>\n            <hr>\n            <ul class="aside-block-list">\n                <li>All Tasks</li>\n                <li>Today</li>\n                <li>Weekly</li>\n                <li>Important</li>\n            </ul>\n        </div>\n        <div class="aside-block">\n            <h3>Projects</h3>\n            <hr>\n            <ul class="aside-block-list">\n                <li>Default</li>\n            </ul>\n            <button type="button" class="btn">\n                <div class="btn-icon"></div>\n                <span>Add Project</span>\n            </button>\n        </div>\n    </div>',document.getElementById("main").innerHTML='\n    <div class="main-content">\n        <div id="project-title">\n            <h2>Default</h2>\n            <hr>\n        </div>\n        <div class="task-header">\n            <h4>Title</h4>\n            <h4>Note</h4>\n            <h4>Due</h4>\n        </div>\n        <ul class="task-list" id="task-list">\n        </ul>\n        <button class="btn" id="add-task-btn">Add Task</button>\n    </div>',document.getElementById("add-task-btn").addEventListener("click",(()=>{!function(){const n=document.getElementById("container"),t=document.createElement("div");t.id="task-creation-container",t.innerHTML='\n    <div id="task-creation-box">\n        <form>\n            <fieldset>\n                <legend>New Task</legend>\n                <hr>\n                <div class="form-item">\n                    <label for="title">Title</label>\n                    <input type="text" name="title" id="title">\n                </div>\n                <div class="form-item">\n                    <label for="description">Description</label>\n                    <textarea name="description" id="description" cols="30" rows="5"></textarea>\n                </div>\n                <div class="form-item">\n                    <label for="duedate">Due Date</label>\n                    <input type="datetime" name="duedate" id="duedate">\n                </div>\n                <div class="form-item">\n                    <label for="notes">Notes</label>\n                    <input type="text" name="notes" id="notes">\n                </div>\n                <div class="form-item">\n                    <label for="important">Important</label>\n                    <input type="checkbox" name="important" id="important">\n                </div>\n            </fieldset>\n            <hr>\n            <div class="form-buttons">\n                <button type="submit" class="btn submit-btn">Create</button>\n                <button type="button" class="btn">Cancel</button>\n            </div>\n        </form>\n    </div>',n.appendChild(t)}()})),j.createTask("title","description","notenote","6-23-2024",!0,!1),j.createTask("title2","description2","notenote","6-23-2024",!0,!1),j.createTask("title3","description3","notenote","6-23-2024",!0,!1),j.createTask("title4","description5","notenote","6-23-2024",!0,!1)})()})();
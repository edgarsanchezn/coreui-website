(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[19],{1305:function(t,e,a){"use strict";a.r(e);var n=a(812),r=a(619),o=a(1),c=a.n(o),i=a(618);e.default=function(){var t=Object(o.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(r.a)(t,2),a=e[0],u=e[1],l=Object(o.useState)("top-right"),s=Object(r.a)(l,2),m=s[0],b=s[1],f=Object(o.useState)(!0),h=Object(r.a)(f,2),d=h[0],p=h[1],y=Object(o.useState)(5e3),E=Object(r.a)(y,2),v=E[0],j=E[1],O=Object(o.useState)(!0),g=Object(r.a)(O,2),k=g[0],S=g[1],w=Object(o.useState)(!0),A=Object(r.a)(w,2),T=A[0],N=A[1],x=a.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return c.a.createElement(i.j,null,c.a.createElement(i.n,null,"Toasts."),c.a.createElement(i.k,null,c.a.createElement(i.w,null,c.a.createElement(i.wb,null,c.a.createElement(i.u,{sm:"12",lg:"6"},c.a.createElement(i.J,null,c.a.createElement("h5",null,"Add toast with following props:"),c.a.createElement(i.K,{variant:"custom-checkbox",className:"my-2 mt-4"},c.a.createElement(i.T,{id:"autohide",checked:d,onChange:function(t){p(t.target.checked)},custom:!0}),c.a.createElement(i.cb,{variant:"custom-checkbox",htmlFor:"autohide"},"Autohide of the toast")),d&&c.a.createElement(i.K,{className:"my-2"},c.a.createElement(i.cb,{htmlFor:"ccyear"},"Time to autohide"),c.a.createElement(i.S,{type:"number",value:v,onChange:function(t){j(Number(t.target.value))}})),c.a.createElement(i.K,{className:"my-2"},c.a.createElement(i.cb,{htmlFor:"ccyear"},"Position"),c.a.createElement("select",{className:"form-control",value:m,onChange:function(t){b(t.target.value)}},["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return c.a.createElement("option",{key:e},t)})))),c.a.createElement(i.K,{variant:"custom-checkbox",className:"my-2"},c.a.createElement(i.T,{id:"fade",checked:T,onChange:function(t){N(t.target.checked)},custom:!0}),c.a.createElement(i.cb,{variant:"custom-checkbox",htmlFor:"fade"},"fade")),c.a.createElement(i.K,{variant:"custom-checkbox",className:"my-2"},c.a.createElement(i.T,{id:"close",custom:!0,checked:k,onChange:function(t){S(t.target.checked)}}),c.a.createElement(i.cb,{variant:"custom-checkbox",htmlFor:"close"},"closeButton")),c.a.createElement(i.f,{className:"mr-1 w-25",color:"success",onClick:function(){u([].concat(Object(n.a)(a),[{position:m,autohide:d&&v,closeButton:k,fade:T}]))}},"Add toast"))),c.a.createElement(i.u,{sm:"12",lg:"6"},Object.keys(x).map((function(t){return c.a.createElement(i.Rb,{position:t,key:"toaster"+t},x[t].map((function(e,a){return c.a.createElement(i.Ob,{key:"toast"+a,show:!0,autohide:e.autohide,fade:e.fade},c.a.createElement(i.Qb,{closeButton:e.closeButton},"Toast title"),c.a.createElement(i.Pb,null,"This is a toast in ".concat(t," positioned toaster number ").concat(a+1,".")))})))})))))))}},619:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(620);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(u){r=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},620:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(621);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(t,e):void 0}}},621:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},812:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(621);var r=a(620);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=19.63fb29ea.chunk.js.map
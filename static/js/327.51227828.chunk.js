"use strict";(self.webpackChunkmovies_library=self.webpackChunkmovies_library||[]).push([[327],{347:function(t,e,r){r.d(e,{Bg:function(){return f},L_:function(){return v},_k:function(){return i},bI:function(){return l},yw:function(){return d}});var n=r(861),a=r(687),c=r.n(a),o=r(44),s="13d1d6108716c95692977ae4bce9cff7";function i(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(c().mark((function t(){var e,r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.ZP.get("/trending/all/day?api_key=".concat(s));case 2:return e=t.sent,r=e.data,n=r.results,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return p=(0,n.Z)(c().mark((function t(e){var r,n,a,i,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,t.next=3,o.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=").concat(r));case 3:return n=t.sent,a=n.data,i=a.results,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.ZP.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,n=r.data,a=n.cast,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,n=r.data,a=n.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.ZP.defaults.baseURL="https://api.themoviedb.org/3"},163:function(t,e,r){r.d(e,{l:function(){return o}});var n=r(689),a=r(731),c=r(184),o=function(t){var e=t.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{className:"md:flex md:flex-wrap justify-center p-3 gap-4",children:e.map((function(t){var e=t.id,n=t.title,o=t.poster_path,s=t.original_name,i=t.original_title;return(0,c.jsx)("li",{className:"lg:basis-1/6 md:basis-1/4 shadow-xl ",children:(0,c.jsxs)(a.rU,{className:"flex flex-col",to:"/movies/".concat(e),state:{from:r},children:[(0,c.jsx)("img",{className:"object-cover ease-out duration-300 hover:scale-105 hover:cursor-zoom-in rounded-md border ",src:"https://image.tmdb.org/t/p/original/".concat(o),alt:n}),(0,c.jsx)("h3",{className:"my-2 text-center font-semibold",children:null!==s&&void 0!==s?s:i})]})},e)}))})}},327:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var n=r(861),a=r(885),c=r(687),o=r.n(c),s=r(731),i=r(689),u=r(347),l=r(791),p=r(596),f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=l.createContext&&l.createContext(f),d=function(){return d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},d.apply(this,arguments)},h=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function v(t){return t&&t.map((function(t,e){return l.createElement(t.tag,d({key:e},t.attr),v(t.child))}))}function x(t){return function(e){return l.createElement(y,d({attr:d({},t.attr)},e),v(t.child))}}function y(t){var e=function(e){var r,n=t.attr,a=t.size,c=t.title,o=h(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),l.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,o,{className:r,style:d(d({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return void 0!==m?l.createElement(m.Consumer,null,(function(t){return e(t)})):e(f)}function g(t){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(t)}var b=r(184),w=function(t){var e=t.onSubmit,r=(0,l.useState)(""),n=(0,a.Z)(r,2),c=n[0],o=n[1];return(0,b.jsx)("header",{className:"sticky top-0 left-0 z-50 flex justify-center items-center min-h-min px-6 py-3 bg-sky-700 shadow-xl",children:(0,b.jsxs)("form",{className:"flex items-center w-full bg-white rounded truncate max-w-lg",onSubmit:function(t){t.preventDefault();var r=c.trim();if(""===r)return p.Am.info("Insert correct request",{position:"top-right",autoClose:2e3,hideProgressBar:!1,pauseOnHover:!0,draggable:!0,theme:"light"});e(r),o("")},children:[(0,b.jsx)("button",{className:"inline-flex justify-center items-center w-12 h-12 border-0 opacity-60 cursor-pointer outline-0 ease-out duration-200 hover:opacity-100",type:"submit",children:(0,b.jsx)(g,{className:"w-5 h-5 fill-black"})}),(0,b.jsx)("input",{className:"inline-block w-full text-xl outline-none px-1 placeholder:text-lg",type:"text",name:"query",autoComplete:"off",value:c,autoFocus:!0,placeholder:"Search movies",onChange:function(t){return o(t.currentTarget.value.toLowerCase())}})]})})},j=r(163),k=r(293);function N(){var t,e=(0,l.useState)([]),r=(0,a.Z)(e,2),c=r[0],f=r[1],m=(0,s.lr)(),d=(0,a.Z)(m,2),h=d[0],v=d[1],x=null!==(t=h.get("query"))&&void 0!==t?t:"";return(0,l.useEffect)((function(){function t(){return(t=(0,n.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.bI)(x);case 3:if(e=t.sent,f(e),e.length){t.next=8;break}return p.Am.info("".concat(x," not found")),t.abrupt("return");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}""!==x&&function(){t.apply(this,arguments)}()}),[x]),(0,b.jsxs)("main",{children:[(0,b.jsx)(w,{onSubmit:function(t){v(""!==t?{query:t}:{})}}),c&&(0,b.jsx)(j.l,{movies:c}),(0,b.jsx)(l.Suspense,{fallback:(0,b.jsx)(k.a,{}),children:(0,b.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=327.51227828.chunk.js.map
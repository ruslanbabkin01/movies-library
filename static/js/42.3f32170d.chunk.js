"use strict";(self.webpackChunkmovies_library=self.webpackChunkmovies_library||[]).push([[42],{5347:function(t,e,n){n.d(e,{Bg:function(){return l},L_:function(){return v},_k:function(){return i},bI:function(){return p},yw:function(){return d}});var r=n(5861),a=n(4687),c=n.n(a),s=n(1044).ZP.create({baseURL:"https://api.themoviedb.org/3"}),u={NODE_ENV:"production",PUBLIC_URL:"/movies-library",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY;function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/trending/all/day?api_key=".concat(u));case 2:return e=t.sent,n=e.data,r=n.results,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function t(e){var n,r,a,i,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,t.next=3,s("/search/movie?api_key=".concat(u,"&query=").concat(e,"&page=").concat(n));case 3:return r=t.sent,a=r.data,i=a.results,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,r=n.data,a=r.cast,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,r=n.data,a=r.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9042:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(5861),a=n(885),c=n(4687),s=n.n(c),u=n(5347),i=n(2791),o=n(7689),p=n(7596),f=n(184);function l(){var t=(0,o.UO)().movieId,e=(0,i.useState)([]),n=(0,a.Z)(e,2),c=n[0],l=n[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.L_)(t);case 3:n=e.sent,l(n),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0,console.log(r.message),p.Am.error(r.message);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,f.jsx)(f.Fragment,{children:c.length>0?(0,f.jsx)("ul",{className:"flex flex-col gap-5 py-0 px-4 md:px-16",children:c.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,f.jsxs)("li",{className:"p-1 ",children:[(0,f.jsxs)("h4",{className:"mb-2",children:["Author:",(0,f.jsx)("span",{className:"ml-2 font-medium",children:n})]}),(0,f.jsx)("p",{className:"mb-2 tracking-wide",children:r})]},e)}))}):(0,f.jsx)("p",{className:"m-3  text-2xl font-semibold text-center text-red-500",children:"We dont have any reviews for this movie"})})}}}]);
//# sourceMappingURL=42.3f32170d.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{8934:function(t,n,e){e.d(n,{Bg:function(){return l},L_:function(){return y},_k:function(){return i},bI:function(){return p},yw:function(){return v}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1044),s="13d1d6108716c95692977ae4bce9cff7";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/trending/all/day?api_key=".concat(s));case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(u().mark((function t(n){var e,r,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,t.next=3,c.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(n,"&page=").concat(e));case 3:return r=t.sent,a=r.data.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,r=e.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3"},1134:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(5861),a=e(885),u=e(4687),c=e.n(u),s=e(3160),i=e(6731),o=e(7689),p=e(8934),f=e(2791),l=e(7596),h=e(184);function v(){var t,n=(0,f.useState)(null),e=(0,a.Z)(n,2),u=e[0],v=e[1],d=(0,i.lr)(),y=(0,a.Z)(d,2),x=y[0],k=y[1],w=null!==(t=x.get("query"))&&void 0!==t?t:"";return(0,f.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.bI)(w);case 3:if(n=t.sent,v(n),n.length){t.next=8;break}return l.Am.info("".concat(w," not found")),t.abrupt("return");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}""!==w&&function(){t.apply(this,arguments)}()}),[w]),(0,h.jsxs)("main",{children:[(0,h.jsx)(s.wD,{onSubmit:function(t){k(""!==t?{query:t}:{})}}),u&&(0,h.jsx)(s.lH,{movies:u}),(0,h.jsx)(f.Suspense,{fallback:(0,h.jsx)(s.aN,{}),children:(0,h.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=134.5141bfdd.chunk.js.map
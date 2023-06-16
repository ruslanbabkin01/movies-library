"use strict";(self.webpackChunkmovies_library=self.webpackChunkmovies_library||[]).push([[687],{5347:function(e,t,n){n.d(t,{Bg:function(){return f},L_:function(){return v},_k:function(){return o},bI:function(){return l},yw:function(){return m}});var r=n(5861),s=n(4687),a=n.n(s),i=n(1044).ZP.create({baseURL:"https://api.themoviedb.org/3"}),c={NODE_ENV:"production",PUBLIC_URL:"/movies-library",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY;function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/trending/all/day?api_key=".concat(c));case 2:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(a().mark((function e(t){var n,r,s,o,u=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,i("/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=").concat(n));case 3:return r=e.sent,s=r.data,o=s.results,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,r=n.data,s=r.cast,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,r=n.data,s=r.results,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6728:function(e,t,n){n.d(t,{_:function(){return a}});var r=n(885),s=n(2791),a=function(e,t){var n=(0,s.useState)((function(){var n;try{var r;n=JSON.parse(null!==(r=localStorage.getItem(e))&&void 0!==r?r:t)}catch(s){n=t}return n})),a=(0,r.Z)(n,2),i=a[0],c=a[1];return(0,s.useEffect)((function(){localStorage.setItem(e,JSON.stringify(i))}),[i,e]),[i,c]}},2671:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(5861),s=n(885),a=n(4687),i=n.n(a),c=n(6731),o=n(7689),u=n(2791),l=n(5347),d=n(2982),f=n(7352),p=n(6728),m=n(184),x=function(e){var t=e.movie,n=(0,p._)("currentMovie"),r=(0,s.Z)(n,2),a=r[0],i=r[1],c=(0,p._)("watchedMovies",[]),o=(0,s.Z)(c,2),l=o[0],x=o[1],v=(0,p._)("queueMovies",[]),h=(0,s.Z)(v,2),b=h[0],g=h[1],w=(0,u.useState)(!1),j=(0,s.Z)(w,2),y=j[0],_=j[1],N=(0,u.useState)(!1),k=(0,s.Z)(N,2),S=k[0],Z=k[1];function O(e,t,n){n(!!e.find((function(e){return e.id===t})))}(0,u.useEffect)((function(){i(t.id),O(l,a,_),O(b,a,Z)}),[a,t.id,b,i,Z,_,l]);var E={background:"red"};return(0,m.jsxs)("div",{className:"max-w-lg sm:max-w-3xl xl:max-w-full mb-3 mx-auto sm:flex  xl:w-9/12 ",children:[(0,m.jsx)("div",{className:"max-w-xs  lg:max-w-sm mx-auto flex items-center mb-2 sm:mb-0 ",children:(0,m.jsx)("img",{className:" object-cover rounded",src:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):f,alt:t.title})}),(0,m.jsxs)("div",{className:" text-center sm:p-4 sm:text-left",children:[(0,m.jsxs)("h2",{className:"font-bold text-xl mb-2 md:text-2xl",children:[t.title,(0,m.jsxs)("span",{children:["(",Number.parseInt(t.release_date),")"]})]}),(0,m.jsxs)("p",{className:"mb-2 font-semibold text-lg",children:["Rating:"," ",(0,m.jsx)("span",{className:"text-red-500",children:t.vote_average.toFixed(1)})]}),(0,m.jsx)("h3",{className:"text-lg font-semibold ",children:"Overview"}),(0,m.jsx)("p",{className:"mb-2",children:t.overview}),(0,m.jsx)("h4",{className:"font-semibold text-lg",children:"Genres"}),(0,m.jsx)("p",{className:"mb-5 lg:mb-16",children:t.genres.map((function(e){return e.name})).join("  ")}),(0,m.jsxs)("ul",{className:"flex gap-4 justify-center xl:gap-10 xl:justify-start",children:[(0,m.jsx)("li",{children:(0,m.jsx)("button",{onClick:function(){return function(e){if(l.find((function(t){return t.id===e}))){var n=l.filter((function(t){return t.id!==e}));return x((0,d.Z)(n)),void _(!1)}x([].concat((0,d.Z)(l),[t])),_(!0)}(t.id)},className:"bg-blue-500 p-2 rounded hover:bg-red-600 text-white focus:bg-red-600",style:y?E:void 0,children:y?"Remove from watched":"Add to watched"})}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{onClick:function(){return function(e){if(b.find((function(t){return t.id===e}))){var n=b.filter((function(t){return t.id!==e}));return g((0,d.Z)(n)),void Z(!1)}g([].concat((0,d.Z)(b),[t])),Z(!0)}(t.id)},className:"bg-blue-500 p-2 rounded hover:bg-red-600 text-white focus:bg-red-600",style:S?E:void 0,children:S?"Remove from queue":"Add to queue"})})]})]})]})},v=n(9293),h=n(7596);function b(){var e,t,n=(0,u.useState)(),a=(0,s.Z)(n,2),d=a[0],f=a[1],p=(0,o.UO)().movieId,b=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Bg)(p);case 3:t=e.sent,f(t),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0,console.log(n.message),h.Am.error(n.message);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p]);var g={background:"red",color:"white"};return(0,m.jsxs)("div",{className:"mx-auto",children:[(0,m.jsx)(c.OL,{className:"inline-block px-6 py-1 mb-3 ml-20 rounded cursor-pointer bg-blue-500 text-white hover:bg-red-600 focus:text-white focus:bg-red-600",to:b,children:"Back"}),d&&(0,m.jsx)(x,{movie:d}),(0,m.jsx)("h2",{className:"mb-4 text-center font-semibold text-lg",children:"Additional information"}),(0,m.jsxs)("ul",{className:"flex justify-center gap-4 mb-5",children:[(0,m.jsx)("li",{className:"",children:(0,m.jsx)(c.OL,{style:function(e){return e.isActive?g:void 0},className:"text-white bg-blue-500 py-2 px-5 rounded cursor-pointer hover:bg-red-600 focus:bg-red-600",to:"cast",children:"Cast"})}),(0,m.jsx)("li",{className:"mx-5",children:(0,m.jsx)(c.OL,{style:function(e){return e.isActive?g:void 0},className:"text-white bg-blue-500 py-2 px-5 rounded cursor-pointer hover:bg-red-600 focus:bg-red-600",to:"reviews",children:"Reviews"})})]}),(0,m.jsx)(u.Suspense,{fallback:(0,m.jsx)(v.a,{}),children:(0,m.jsx)(o.j3,{})})]})}},7352:function(e,t,n){e.exports=n.p+"static/media/defMovie.249934598d45d323b4bc.webp"}}]);
//# sourceMappingURL=687.e1ef5049.chunk.js.map
(this["webpackJsonpyesterdays-weather"]=this["webpackJsonpyesterdays-weather"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(6),o=n.n(a),i=(n(11),n(4)),s=(n(12),n(1)),u=n.n(s),l=n(3),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY2,p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LOCATION_KEY;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY);var j=function(e){console.log(e.lat);var t=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.lat,"&lon=").concat(e.long,"&exclude=hourly,daily,minutely,alerts&units=metric&appid=").concat(d)).then((function(e){return e.json()})).catch((function(){return null}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(t()),t()},O=function(e){var t=function(){var t=Object(l.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Math.floor(Date.now()/1e3-86400),console.log(n),t.next=4,fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(e.lat,"&lon=").concat(e.long,"&dt=").concat(n,"&units=metric&appid=").concat(h)).then((function(e){return e.json()})).catch((function(){return null}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(t()),t()},f=function(e){var t=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=".concat(e.lat,"&longitude=").concat(e.long,"&localityLanguage=en&key=").concat(p)).then((function(e){return e.json()})).catch((function(){return null}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(t()),t()},b=n(0),v=function(e){var t=e.location;console.log(t);var n=Object(r.useState)(null),c=Object(i.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(null),d=Object(i.a)(s,2),h=d[0],p=d[1],v=Object(r.useState)(null),_=Object(i.a)(v,2),g=_[0],m=_[1];Object(r.useEffect)((function(){console.log(t),null!==t&&(console.log("have location"),S(),x(),E())}),[t]);var S=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t).then((function(e){return o(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t).then((function(e){return p(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t).then((function(e){return m(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(g),console.log(h),console.log(a);return Object(b.jsxs)("div",{className:"container",children:[null!==g?Object(b.jsx)("div",{children:Object(b.jsxs)("h2",{children:["Location: ",g.locality]})}):"loading",function(){var e="";if(null!==h&&null!==o){var t=Math.round(h.current.temp-a.current.temp);return console.log(t),e=t>0?"This time yesterday was it warmer than today by ".concat(t," Celsius."):t<0?"It is ".concat(-1*t," Celsius warmer today than this time yesterday."):"It is about the same temperature today as it was this time yesterday."}return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})})}(),Object(b.jsxs)("div",{className:"card-container",children:[null!==h?Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h3",{children:"Yesterday"}),Object(b.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(h.current.weather[0].icon,"@2x.png"),alt:""}),Object(b.jsxs)("h4",{children:["Temperature 24 hours ago: ",h.current.temp," Celsius"]}),Object(b.jsxs)("h4",{children:["Felt like: ",h.current.feels_like," Celsius"]}),Object(b.jsxs)("h4",{children:["Weather conditions: ",h.current.weather[0].description]})]}):"loading",null!==a?Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h3",{children:"Today"}),Object(b.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(a.current.weather[0].icon,"@2x.png"),alt:""}),Object(b.jsxs)("p",{children:["Temperature now: ",a.current.temp," Celsius"]}),Object(b.jsxs)("p",{children:["Feels like: ",a.current.feels_like," Celsius"]}),Object(b.jsxs)("p",{children:["Weather conditions: ",a.current.weather[0].description]})]}):"loading"]})]})};var _=function(){var e,t,n=Object(r.useState)(null),c=Object(i.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(""),u=Object(i.a)(s,2),l=u[0],d=u[1];Object(r.useEffect)((function(){h()}),[]);var h=function(){window.navigator.geolocation.getCurrentPosition((function(n){e=n.coords.latitude,t=n.coords.longitude,o({lat:e,long:t})}),(function(e){return d(e.message)}))},p=function(){return l?Object(b.jsx)("div",{children:l}):null};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("h1",{children:"Yesterday's weather"})}),Object(b.jsxs)("main",{children:[Object(b.jsx)(v,{location:a}),Object(b.jsx)(p,{})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.c6a5e31b.chunk.js.map
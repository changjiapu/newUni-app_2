(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1ea1":function(t,e,n){"use strict";n.r(e);var o=n("b566");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("5026");var u,c,a=n("2877"),f=Object(a["a"])(o["default"],u,c,!1,null,null,null);e["default"]=f.exports},5026:function(t,e,n){"use strict";var o=n("73ac"),r=n.n(o);r.a},"55f0":function(t,e,n){"use strict";n("0cb7");var o=c(n("f3d3")),r=c(n("1ea1")),u=c(n("37d1"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,o.default.prototype.$store=u.default,r.default.mpType="app";var i=new o.default(a({store:u.default},r.default));i.$mount()},"73ac":function(t,e,n){},b566:function(t,e,n){"use strict";n.r(e);var o=n("ff02"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},ff02:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){var e=t.getStorageSync("userId"),n=t.getStorageSync("token"),o=t.getStorageSync("shopId");e&&(this.$store.commit("SET_SHOPID",o),this.$store.commit("SET_USERID",e),this.$store.commit("SET_TOKEN",n))},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=n}).call(this,n("6e42")["default"])}},[["55f0","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Account_center/Account_center"],{1357:function(t,n,e){"use strict";e.r(n);var c=e("c2dd"),o=e("4d17");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("624b");var a=e("2877"),r=Object(a["a"])(o["default"],c["a"],c["b"],!1,null,"4ec2813d",null);n["default"]=r.exports},"4c55":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("b607");var c={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{tuichu:function(){var n=this;t.showModal({title:"",content:"是否确认退出",success:function(e){e.confirm?(n.$store.commit("SET_SHOPID",""),n.$store.commit("SET_USERID",""),t.setStorageSync("userId",""),t.setStorageSync("shopId",""),t.reLaunch({url:"/pages/logn/logn"})):e.cancel&&console.log("用户点击取消")}})}}};n.default=c}).call(this,e("6e42")["default"])},"4d17":function(t,n,e){"use strict";e.r(n);var c=e("4c55"),o=e.n(c);for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);n["default"]=o.a},"624b":function(t,n,e){"use strict";var c=e("9f16"),o=e.n(c);o.a},"9f16":function(t,n,e){},c2dd:function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("navigator",{staticClass:"item",attrs:{url:"/pages/cz_psssword/cz_psssword"}},[e("image",{attrs:{src:"../../static/shurumima_10.png",mode:""}}),e("text",[t._v("修改登录密码")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("view",{staticClass:"btn",attrs:{eventid:"10015b92-0"},on:{click:function(n){t.tuichu()}}},[t._v("退出登录")])],1)},o=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return o})},f672:function(t,n,e){"use strict";e("0cb7");var c=u(e("b0ce")),o=u(e("1357"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(o.default))}},[["f672","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user_center/user_center"],{"1a60":function(t,a,e){},"2d0c":function(t,a,e){"use strict";e.r(a);var s=e("916c"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);a["default"]=n.a},"455b":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content"},[e("view",{staticClass:"head"},[t.imglist?e("image",{staticClass:"img_1",attrs:{src:t.imgURl+t.imglist,mode:""}}):e("image",{staticClass:"img_1",attrs:{src:"../../static/touxiang_03.png",mode:""}}),e("view",{staticClass:"msg"},[e("text",[t._v(t._s(t.nickName?t.nickName:"未填写"))]),e("text",[t._v(t._s(t.spec_name?t.spec_name:"未填写"))])]),e("image",{staticClass:"img_2",attrs:{src:"../../static/baigou.png",mode:"",eventid:"452c5c46-0"},on:{click:t.gotoUserMsg}})]),e("view",{staticClass:"liubai"}),e("view",{staticClass:"list"},[e("navigator",{staticClass:"list_item",attrs:{url:"/pages/myOrder/myOrder"}},[e("image",{attrs:{src:"../../static/wodedingdan_06.png",mode:""}}),e("text",[t._v("我的订单")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("view",{staticClass:"list_item",attrs:{eventid:"452c5c46-1"},on:{click:function(a){t.ruzhu()}}},[e("image",{attrs:{src:"../../static/shangjiaruzhu_26.png",mode:""}}),e("text",[t._v("商家入驻")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/callCenter/callCenter"}},[e("image",{attrs:{src:"../../static/lianxikefu_12.png",mode:""}}),e("text",[t._v("联系客服")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/gonggaoFabu/gonggaoFabu"}},[e("image",{attrs:{src:"../../static/fabugonggao_16.png",mode:""}}),e("text",[t._v("发布公告")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/complain/complain"}},[e("image",{attrs:{src:"../../static/yijianfankui_18.png",mode:""}}),e("text",[t._v("意见反馈")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})]),e("navigator",{staticClass:"list_item",attrs:{url:"/pages/Account_center/Account_center"}},[e("image",{attrs:{src:"../../static/zhnaghushezhi_09.png",mode:""}}),e("text",[t._v("账户设置")]),e("image",{attrs:{src:"../../static/gengduo_41.png",mode:""}})])],1)])},n=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return n})},"5a3c":function(t,a,e){"use strict";var s=e("1a60"),n=e.n(s);n.a},"7c05":function(t,a,e){"use strict";e.r(a);var s=e("455b"),n=e("2d0c");for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);e("5a3c");var c=e("2877"),r=Object(c["a"])(n["default"],s["a"],s["b"],!1,null,"ab6ffafa",null);a["default"]=r.exports},"916c":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=e("a021"),n=e("2f62"),i=e("b607");function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},s=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.forEach(function(a){r(t,a,e[a])})}return t}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o={data:function(){return{shopStatus:-1,imgURl:"",imglist:"",nickName:"",spec_name:""}},onShow:function(){this.imgURl=s.imgURl,this.getUserById(),this.getShopStatusByUserId(this.userId)},computed:c({},(0,n.mapState)(["userId"])),methods:{getShopStatusByUserId:function(t){var a=this;(0,i.getShopStatusByUserId)(t).then(function(t){0==t.data.code&&(a.shopStatus=t.data.data.shopStatus)})},ruzhu:function(){0!=this.shopStatus?1!=this.shopStatus?2!=this.shopStatus?t.navigateTo({url:"/pages/merchant/merchant"}):t.showModal({title:"",content:"入驻失败是否重新入驻",success:function(a){a.confirm?t.navigateTo({url:"/pages/merchant/merchant"}):a.cancel&&console.log("用户点击取消")}}):t.showToast({title:"已经入驻成功",icon:"none",duration:1e3}):t.showToast({title:"入住信息审核中",icon:"none",duration:1e3})},getUserById:function(){var t=this;(0,i.getUserById)(this.userId).then(function(a){t.imglist=a.data.data.userPhoto,t.spec_name=a.data.data.specName,t.nickName=a.data.data.nickName})},gotoUserMsg:function(){t.navigateTo({url:"/pages/userMsg/userMsg"})}}};a.default=o}).call(this,e("6e42")["default"])},a985:function(t,a,e){"use strict";e("0cb7");var s=i(e("b0ce")),n=i(e("7c05"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))}},[["a985","common/runtime","common/vendor"]]]);
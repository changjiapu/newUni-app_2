(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commodity_management/commodity_management"],{"29dd":function(t,e,i){"use strict";i.r(e);var o=i("b056"),a=i("c4be");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("fc08");var s=i("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,"3420de1c",null);e["default"]=c.exports},4326:function(t,e,i){"use strict";i("0cb7");var o=n(i("b0ce")),a=n(i("29dd"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},b056:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"title"},[i("view",{staticClass:"tianjia",attrs:{eventid:"3281b45c-0"},on:{click:t.gotoAdd}},[i("image",{attrs:{src:"../../static/shangchuandianpu_03.png",mode:""}}),i("text",[t._v("添加商品")])])]),i("view",{staticClass:"product"},t._l(t.productList,function(e,o){return i("view",{key:o,staticClass:"item"},[i("image",{attrs:{src:t.imgURl+e.imgList[0],mode:""}}),i("text",[t._v(t._s(e.productName))]),1==e.publishStatus?i("text",{staticClass:"shangjia"},[t._v("已上架")]):t._e(),0==e.publishStatus?i("text",{staticClass:"shangjia2"},[t._v("未上架")]):t._e(),i("view",{staticClass:"price"},[i("text",[t._v("￥"+t._s(e.price))]),i("view",{staticClass:"yuan",attrs:{eventid:"3281b45c-1-"+o},on:{click:function(i){t.isShowChange(e.productId)}}},[i("text",{staticClass:"yuandian"}),i("text",{staticClass:"yuandian"}),i("text",{staticClass:"yuandian"})])])])})),t.isShow?i("view",{staticClass:"zhedang",attrs:{eventid:"3281b45c-6"},on:{click:function(e){e.stopPropagation(),t.isShowChange2()}}},[i("view",{staticClass:"edit"},[i("view",{staticClass:"item",attrs:{eventid:"3281b45c-2"},on:{click:function(e){t.compile()}}},[i("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),i("text",[t._v("编辑")])]),i("view",{staticClass:"item",attrs:{eventid:"3281b45c-3"},on:{click:t.Delete}},[i("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),i("text",[t._v("删除")])]),i("view",{staticClass:"item",attrs:{eventid:"3281b45c-4"},on:{click:function(e){t.putaway()}}},[i("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),i("text",[t._v("上架")])]),i("view",{staticClass:"item",attrs:{eventid:"3281b45c-5"},on:{click:function(e){t.soldOut()}}},[i("image",{attrs:{src:"../../static/bianji_07.png",mode:""}}),i("text",[t._v("下架")])])])]):t._e()])},a=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a})},c4be:function(t,e,i){"use strict";i.r(e);var o=i("fe13"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},fbed:function(t,e,i){},fc08:function(t,e,i){"use strict";var o=i("fbed"),a=i.n(o);a.a},fe13:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("a021"),a=i("b607"),n=i("2f62");function s(t){return u(t)||r(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){h(t,e,i[e])})}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{shopStatus:-1,imgURl:"",productId:"",productList:[],isShow:!1,pageNo:1,sortWay:0}},onShow:function(){this.shopId&&(this.imgURl=o.imgURl,this.getShopStatusByUserId(this.userId),this.productList=[],this.pageNo=1,this.getProductByShopId(this.pageNo,10,this.shopId,this.sortWay))},onReachBottom:function(){this.pageNo++,this.getProductByShopId(this.pageNo,10,this.shopId,this.sortWay)},computed:d({},(0,n.mapState)(["userId","shopId"])),methods:{isShowChange2:function(){this.isShow=!1},getShopStatusByUserId:function(t){var e=this;(0,a.getShopStatusByUserId)(t).then(function(t){0==t.data.code&&(e.shopStatus=t.data.data.shopStatus)})},getProductByShopId:function(e,i,o,n){var c=this;(0,a.getProductByShopId)(e,i,o,n).then(function(e){0==e.data.code&&(0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.productList=[].concat(s(c.productList),s(e.data.data.list)))})},isShowChange:function(t){this.productId=t,this.isShow=!0},compile:function(){this.isShow=!1,t.navigateTo({url:"/pages/addProduct/addProduct?id="+this.productId})},Delete:function(){var e=this;(0,a.delProductById)(this.productId).then(function(i){0==i.data.code&&(t.showToast({title:"删除成功",icon:"none",duration:1e3}),e.productList=[],e.getProductByShopId(e.pageNo,10,e.shopId,e.sortWay))}),this.isShow=!1},putaway:function(){var e=this,i=1;(0,a.shelvesProduct)(this.productId,i).then(function(i){0==i.data.code&&(t.showToast({title:"上架成功",icon:"none",duration:1e3}),e.productList=[],e.getProductByShopId(e.pageNo,10,e.shopId,e.sortWay))}),this.isShow=!1},soldOut:function(){var e=this,i=0;(0,a.shelvesProduct)(this.productId,i).then(function(i){0==i.data.code&&(t.showToast({title:"下架成功",icon:"none",duration:1e3}),e.productList=[],e.getProductByShopId(e.pageNo,10,e.shopId,e.sortWay))}),this.isShow=!1},gotoAdd:function(){-1!=this.shopStatus?0!=this.shopStatus?2!=this.shopStatus?t.navigateTo({url:"/pages/addProduct/addProduct"}):t.showToast({title:"商家入驻驳回，请重新入驻",icon:"none",duration:1e3}):t.showToast({title:"信息审核中",icon:"none",duration:1e3}):t.showToast({title:"还为入驻商家",icon:"none",duration:1e3})}}};e.default=l}).call(this,i("6e42")["default"])}},[["4326","common/runtime","common/vendor"]]]);
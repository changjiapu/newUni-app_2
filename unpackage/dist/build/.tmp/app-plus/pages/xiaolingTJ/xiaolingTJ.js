(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaolingTJ/xiaolingTJ"],{1158:function(t,e,n){"use strict";var a=n("ad22"),o=n.n(a);o.a},"3a6d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),t._l(t.productList,function(e,a){return n("view",{key:a},[n("text",{staticClass:"title"},[t._v(t._s(e.productName))]),n("text",[t._v(t._s(e.orderCount))]),n("text",[t._v(t._s(e.saleCount))]),n("text",[t._v("￥"+t._s(e.salePrice))])])}),n("view",[n("text",{staticClass:"title"},[t._v("总计")]),n("text",[t._v(t._s(t.totalOrderCount))]),n("text",[t._v(t._s(t.totalSaleCount))]),n("text",[t._v("￥"+t._s(t.totalSalePrice))])])],2)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("text",[t._v("产品名称")]),n("text",[t._v("销售笔数")]),n("text",[t._v("销售数量")]),n("text",[t._v("销售金额")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},6498:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62"),o=n("b607");function r(t){return c(t)||u(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{totalOrderCount:"",totalSaleCount:"",totalSalePrice:"",pageNo:1,productList:[]}},onLoad:function(){this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,"","")},computed:l({},(0,a.mapState)(["userId","shopId"])),onReachBottom:function(){this.pageNo++,this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,"","")},methods:{getSaleProductAnalysisByShopId:function(e,n,a,i,u){var c=this;(0,o.getSaleProductAnalysisByShopId)(e,n,a,i,u).then(function(e){0==e.data.code&&(0==e.data.data.saleList.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.totalOrderCount=e.data.data.totalOrderCount,c.totalSaleCount=e.data.data.totalSaleCount,c.totalSalePrice=e.data.data.totalSalePrice,c.productList=[].concat(r(c.productList),r(e.data.data.saleList.list)))})}}};e.default=d}).call(this,n("6e42")["default"])},"82df":function(t,e,n){"use strict";n.r(e);var a=n("3a6d"),o=n("d223");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1158");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"fd4b03b6",null);e["default"]=u.exports},ad22:function(t,e,n){},d223:function(t,e,n){"use strict";n.r(e);var a=n("6498"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},d934:function(t,e,n){"use strict";n("0cb7");var a=r(n("b0ce")),o=r(n("82df"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))}},[["d934","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouruTJ/shouruTJ"],{"2cb8":function(t,e,a){"use strict";a.r(e);var i=a("ba2e"),o=a("bfde");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("8dbc");var s=a("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"0588f1f2",null);e["default"]=r.exports},"7d1e":function(t,e,a){"use strict";a("0cb7");var i=n(a("b0ce")),o=n(a("2cb8"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},"8dbc":function(t,e,a){"use strict";var i=a("dce6"),o=a.n(i);o.a},ba2e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"liubai"}),a("view",{staticClass:"title"},[a("picker",{attrs:{mode:"date",eventid:"7f7950b2-0"},on:{change:t.bindPickerChange}},[a("image",{attrs:{src:"../../static/rili_13.png"}})]),a("text",{staticClass:"date"},[t._v(t._s(t.isDate))]),a("text",{staticClass:"tabs",attrs:{eventid:"7f7950b2-1"},on:{click:function(e){t.ishowList()}}},[t._v("全部产品")])],1),a("view",{staticClass:"liubai"}),t._m(0),t._l(t.productList,function(e,i){return a("view",{key:i,staticClass:"item"},[a("text",{staticClass:"title2"},[t._v(t._s(e.productName))]),a("text",[t._v(t._s(e.orderCount))]),a("text",[t._v(t._s(e.saleCount))]),a("text",[t._v("￥"+t._s(e.salePrice))])])}),a("view",{staticClass:"item"},[a("text",{staticClass:"title2"},[t._v("总计")]),a("text",[t._v(t._s(t.totalOrderCount))]),a("text",[t._v(t._s(t.totalSaleCount))]),a("text",[t._v("￥"+t._s(t.totalSalePrice))])]),t.ishow?a("view",{staticClass:"content2"},t._l(t.categoryList,function(e,i){return a("view",{key:i,staticClass:"list",attrs:{eventid:"7f7950b2-2-"+i},on:{click:function(a){t.categoryChange(e.categoryId)}}},[t._v(t._s(e.categoryName))])})):t._e()],2)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"item"},[a("text",[t._v("产品名称")]),a("text",[t._v("销售笔数")]),a("text",[t._v("销售数量")]),a("text",[t._v("销售金额")])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},bfde:function(t,e,a){"use strict";a.r(e);var i=a("fbbc"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},dce6:function(t,e,a){},fbbc:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62"),o=a("b607");function n(t){return c(t)||r(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){l(t,e,a[e])})}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={data:function(){return{categoryList:[],productList:[],totalOrderCount:"",totalSaleCount:"",totalSalePrice:"",pageNo:1,categoryId:"",ishow:!1,winHeight:"",isDate:"",startTime:""}},onLoad:function(){var e=this;this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime),this.getProductCategory(1,1),this.isDate=this.getNowFormatDate(),t.getSystemInfo({success:function(t){e.winHeight=t.screenHeight}})},onReachBottom:function(){this.pageNo++,this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime)},computed:u({},(0,i.mapState)(["userId","shopId"])),methods:{getProductCategory:function(t,e){var a=this;(0,o.getProductCategory)(t,e).then(function(t){0==t.data.code&&(a.categoryList=t.data.data.cateGories)})},categoryChange:function(t){this.categoryId=t,this.productList=[],this.ishow=!1,this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime)},getNowFormatDate:function(){var t=new Date,e="-",a=t.getFullYear(),i=t.getMonth()+1,o=t.getDate();i>=1&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o);var n=a+e+i+e+o;return n},getSaleProductAnalysisByShopId:function(e,a,i,s,r){var c=this;(0,o.getSaleProductAnalysisByShopId)(e,a,i,s,r).then(function(e){0==e.data.code&&(0==e.data.data.saleList.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),c.totalOrderCount=e.data.data.totalOrderCount,c.totalSaleCount=e.data.data.totalSaleCount,c.totalSalePrice=e.data.data.totalSalePrice,c.productList=[].concat(n(c.productList),n(e.data.data.saleList.list)))})},ishowList:function(){this.ishow=!this.ishow},bindPickerChange:function(t){this.isDate=t.detail.value,this.startTime=t.detail.value,this.productList=[],this.getSaleProductAnalysisByShopId(this.pageNo,20,this.shopId,this.categoryId,this.startTime),console.log(t)}}};e.default=d}).call(this,a("6e42")["default"])}},[["7d1e","common/runtime","common/vendor"]]]);
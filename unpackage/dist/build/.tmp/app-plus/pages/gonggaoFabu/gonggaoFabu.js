(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gonggaoFabu/gonggaoFabu"],{2583:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"LG"},[a("text",[t._v("上传公告图片")]),0==t.img3.length?a("text",{staticClass:"lg_img",attrs:{eventid:"4ecfa638-0"},on:{click:t.paizhao3}},[t._v("点击上传")]):a("image",{staticClass:"lg_img",attrs:{src:t.img3[0],mode:""}})]),a("view",{staticClass:"liubai"}),a("view",{staticClass:"input"},[a("text",{staticStyle:{width:"150rpx"}},[t._v("公告标题:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入标题",eventid:"4ecfa638-1"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("view",{staticClass:"liubai"}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textInput",attrs:{value:"",placeholder:"发布你的招聘,租房,等便民信息的内容.时间.地点",eventid:"4ecfa638-2"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),a("view",{staticClass:"liubai"}),a("view",{staticClass:"input"},[a("text",{staticStyle:{width:"150rpx"}},[t._v("联系电话:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入发布信息人的电话",eventid:"4ecfa638-3"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),a("view",{staticClass:"liubai"}),a("view",{staticClass:"btn",attrs:{eventid:"4ecfa638-4"},on:{click:function(e){t.fabu()}}},[t._v("立即发布")])])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"33ab":function(t,e,a){"use strict";a("0cb7");var n=o(a("b0ce")),i=o(a("a2f5"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"66da":function(t,e,a){"use strict";a.r(e);var n=a("b508"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},8314:function(t,e,a){"use strict";var n=a("a4a6"),i=a.n(n);i.a},a2f5:function(t,e,a){"use strict";a.r(e);var n=a("2583"),i=a("66da");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("8314");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"13af1524",null);e["default"]=c.exports},a4a6:function(t,e,a){},b508:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("a021"),i=a("2f62"),o=a("b607");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){c(t,e,a[e])})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){return{img3:[],title:"",content:"",imageId:"",phone:""}},onLoad:function(){},computed:s({},(0,i.mapState)(["userId","shopId"])),methods:{fabu:function(){if(this.imageId)if(this.title)if(this.content){if(this.phone){var e=/^[1][3,4,5,7,8][0-9]{9}$/;if(!e.test(this.phone))return void t.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}var a={title:this.title,content:this.content,imageId:this.imageId,shopId:this.shopId,userId:this.userId,phone:this.phone,noticeType:0};(0,o.addNotice)(a).then(function(e){0==e.data.code?(t.showToast({title:"公告发布成功",icon:"none",duration:1e3}),setTimeout(function(e){t.navigateBack({data:1})},1500)):t.showToast({title:"发布失败",icon:"none",duration:1e3})})}else t.showModal({title:"",content:"请输入公告内容",showCancel:!1});else t.showModal({title:"",content:"请输入公告标题",showCancel:!1});else t.showModal({title:"",content:"请上传公告图片",showCancel:!1})},paizhao3:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){e.img3=a.tempFilePaths,t.uploadFile({url:n.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(a){var n=JSON.parse(a.data);0==n.code&&(console.log(a),e.imageId=n.data,t.showToast({title:"上传成功"}))}})}})}}};e.default=l}).call(this,a("6e42")["default"])}},[["33ab","common/runtime","common/vendor"]]]);
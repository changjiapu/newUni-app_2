(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"283f":function(e,t,a){"use strict";a("0cb7");var n=s(a("b0ce")),o=s(a("bc76"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(o.default))},"64a3":function(e,t,a){},7111:function(e,t,a){"use strict";a.r(t);var n=a("d3af"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},8004:function(e,t,a){"use strict";var n=a("64a3"),o=a.n(n);o.a},bc76:function(e,t,a){"use strict";a.r(t);var n=a("fc85"),o=a("7111");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("8004");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"66382620",null);t["default"]=r.exports},d3af:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("b607"),o={data:function(){return{title:"Hello",yueduxieyi:!1,iphone:"",password:"",password2:""}},onLoad:function(){},methods:{addUserBySystem:function(){var t=this,a=/^[1][3,4,5,7,8][0-9]{9}$/;if(!a.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.password)if(this.password.length<6)e.showModal({title:"",content:"密码不能小于6位",showCancel:!1});else if(this.password==this.password2){var o={phone:this.iphone,password:this.password,userType:1};(0,n.addUserBySystem)(o).then(function(a){0==a.data.code?(e.showToast({title:"注册成功",duration:2e3}),e.setStorageSync("token",a.data.data.token),e.setStorageSync("userId",a.data.data.userId),t.$store.commit("SET_TOKEN",a.data.data.token),t.$store.commit("SET_USERID",a.data.data.token),e.reLaunch({url:"/pages/index/index"})):e.showToast({title:a.data.msg,icon:"none",duration:2e3})})}else e.showModal({title:"",content:"两次输入的密码不一致",showCancel:!1});else e.showModal({title:"",content:"请输入密码",showCancel:!1})},tongyixieyi:function(){this.yueduxieyi=!this.yueduxieyi}}};t.default=o}).call(this,a("6e42")["default"])},fc85:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"item"},[a("text",[e._v("手机号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.iphone,expression:"iphone"}],attrs:{type:"number",value:"",placeholder:"请输入手机号",maxlength:"11",eventid:"0570b592-0"},domProps:{value:e.iphone},on:{input:function(t){t.target.composing||(e.iphone=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",[e._v("设置密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",value:"",placeholder:"请输入6-20位密码",maxlength:"20",eventid:"0570b592-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",[e._v("确认密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",value:"",placeholder:"请确认密码",eventid:"0570b592-2"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),a("view",{staticClass:"btn",attrs:{eventid:"0570b592-3"},on:{click:function(t){e.addUserBySystem()}}},[e._v("提交并注册")])])},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})}},[["283f","common/runtime","common/vendor"]]]);
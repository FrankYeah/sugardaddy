(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{1067:function(t,e,n){var content=n(1069);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("d1d12230",content,!0,{sourceMap:!1})},1068:function(t,e,n){"use strict";n(1067)},1069:function(t,e,n){var o=n(43)(!1);o.push([t.i,".input-input[data-v-8f29fa00]{width:calc(100% - 16px);padding:10px 0 10px 12px;color:#333;background:#fff;border:1px solid #e0e0e0;border-radius:4px}.input-input[data-v-8f29fa00]::-moz-placeholder{color:#8d8d8d}.input-input[data-v-8f29fa00]:-ms-input-placeholder{color:#8d8d8d}.input-input[data-v-8f29fa00]::placeholder{color:#8d8d8d}.input-input-false[data-v-8f29fa00]{border:1px solid red}.input-hint[data-v-8f29fa00]{margin-top:4px;color:red;font-size:12px}",""]),t.exports=o},1070:function(t,e,n){"use strict";n.r(e);var o={layout:"default",components:{},props:{value:{type:String},hint:{type:String},type:{type:String},placeholder:{type:String},isFalse:{type:Boolean}},data:function(){return{sonValue:""}},created:function(){},mounted:function(){},destroyed:function(){},computed:{},methods:{},watch:{}},r=(n(1068),n(49)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input"},[n("input",{class:["input-input",{"input-input-false":t.isFalse}],attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("update:value",e.target.value)}}}),t._v(" "),t.isFalse?n("div",{staticClass:"input-hint"},[t._v(t._s(t.hint))]):t._e()])}),[],!1,null,"8f29fa00",null);e.default=component.exports},1081:function(t,e,n){var content=n(1102);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("046d24cb",content,!0,{sourceMap:!1})},1101:function(t,e,n){"use strict";n(1081)},1102:function(t,e,n){var o=n(43)(!1);o.push([t.i,".f-password[data-v-6ecf49db]{display:flex;flex-direction:column;justify-content:center;align-items:center}.f-password-title[data-v-6ecf49db]{margin-top:63px;font-weight:600;font-size:24px;color:#000}.f-password-input[data-v-6ecf49db]{width:400px;margin-top:24px}.f-password-text[data-v-6ecf49db]{margin:14px 0 30px;font-size:12px}",""]),t.exports=o},1137:function(t,e,n){"use strict";n.r(e);var o=n(23),r=(n(127),{head:{title:"Dashboard"},layout:"default",auth:!1,components:{inputMain:n(1070).default},props:{},data:function(){return{mail:"",isMailFalse:!1}},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},destroyed:function(){},computed:{},methods:{send:function(){this.isMailFalse=!1,this.mail?this.$message({message:"更改密碼信件已送出",type:"success"}):this.isMailFalse=!0}},watch:{}}),l=(n(1101),n(49)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f-password"},[n("div",{staticClass:"f-password-title"},[t._v("忘記密碼")]),t._v(" "),n("inputMain",{staticClass:"f-password-input",attrs:{value:t.mail,hint:"請輸入完整郵件名稱",type:"text",isFalse:t.isMailFalse,placeholder:"E-mail"},on:{"update:value":function(e){t.mail=e}}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"btn-main",on:{click:function(e){return t.send()}}},[t._v("傳送驗證信")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f-password-text"},[t._v("\n    請注意："),n("br"),t._v("\n    1. 每次更改密碼連結的有效時間為60分鐘，請務必把握時間。"),n("br"),t._v("\n    2. 若您收到多封更改密碼的信件，請以最新那封為主，舊的信都會失效。\n  ")])}],!1,null,"6ecf49db",null);e.default=component.exports}}]);
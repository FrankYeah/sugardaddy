(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1071:function(e,t,r){var content=r(1074);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("a5042c2a",content,!0,{sourceMap:!1})},1073:function(e,t,r){"use strict";r(1071)},1074:function(e,t,r){var o=r(43)(!1);o.push([e.i,".textarea-input[data-v-6be1322d]{width:calc(100% - 16px);height:161px;padding:10px 0 10px 12px;color:#333;background:#fff;border:1px solid #e0e0e0;border-radius:4px}.textarea-input[data-v-6be1322d]::-moz-placeholder{color:#8d8d8d}.textarea-input[data-v-6be1322d]:-ms-input-placeholder{color:#8d8d8d}.textarea-input[data-v-6be1322d]::placeholder{color:#8d8d8d}.textarea-input-false[data-v-6be1322d]{border:1px solid red}.textarea-hint[data-v-6be1322d]{margin-top:4px;color:red;font-size:12px}",""]),e.exports=o},1094:function(e,t,r){"use strict";r.r(t);var o={layout:"default",components:{},props:{value:{type:String},hint:{type:String},type:{type:String},placeholder:{type:String},isFalse:{type:Boolean}},data:function(){return{sonValue:""}},created:function(){},mounted:function(){},destroyed:function(){},computed:{},methods:{},watch:{}},d=(r(1073),r(49)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"textarea"},[r("textarea",{class:["textarea-input",{"textarea-input-false":e.isFalse}],attrs:{type:e.type,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("update:value",t.target.value)}}}),e._v(" "),e.isFalse?r("div",{staticClass:"textarea-hint"},[e._v(e._s(e.hint))]):e._e()])}),[],!1,null,"6be1322d",null);t.default=component.exports}}]);
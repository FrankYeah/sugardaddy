(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1103:function(t,e,o){var content=o(1132);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("47d4bfd0",content,!0,{sourceMap:!1})},1131:function(t,e,o){"use strict";o(1103)},1132:function(t,e,o){var n=o(43)(!1);n.push([t.i,".message-list-title[data-v-66ab7134]{margin:63px 0 5px;font-weight:600;font-size:24px;color:#000;text-align:center}.message-list-outer[data-v-66ab7134]{width:985px;display:flex;justify-content:space-between;flex-wrap:wrap;margin:auto}.message-list-box[data-v-66ab7134]{width:440px;margin-top:24px;padding:16px;background:#fff;border:1px solid #e0e0e0;border-radius:12px}.message-list-row[data-v-66ab7134]{display:flex;justify-content:space-between;align-items:center}.message-list-head[data-v-66ab7134]{font-weight:600;font-size:16px;color:#000}.message-list-date[data-v-66ab7134]{color:#bebebe}.message-list-text[data-v-66ab7134]{margin-top:9px;color:#bebebe}.message-list-more[data-v-66ab7134]{margin-top:24px;color:#f83669;text-decoration:underline;text-align:right;cursor:pointer}.message-list-more[data-v-66ab7134]:hover{opacity:.8}@media(max-width:1023px){.message-list[data-v-66ab7134]{margin-bottom:40px}.message-list-title[data-v-66ab7134]{margin:40px 0 0;font-size:24px}.message-list-outer[data-v-66ab7134]{flex-direction:column;align-items:center;width:100%}.message-list-box[data-v-66ab7134]{max-width:440px;width:calc(100% - 48px);margin-top:24px;padding:16px 13px 28px}.message-list-row[data-v-66ab7134]{flex-direction:column;align-items:flex-start}.message-list-head[data-v-66ab7134]{font-size:16px}.message-list-date[data-v-66ab7134]{margin-top:8px}.message-list-text[data-v-66ab7134]{margin-top:12px}}",""]),t.exports=n},1176:function(t,e,o){"use strict";o.r(e);var n=o(23),r=(o(127),{head:{title:"SugarDaddy"},auth:!1,layout:"default",components:{},props:{},data:function(){return{messages:[{head:"標題訊息",date:"2022/05/16",text:"標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文"},{head:"標題訊息",date:"2022/05/16",text:"標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文"},{head:"標題訊息",date:"2022/05/16",text:"標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文標題內文"}]}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},destroyed:function(){},computed:{},methods:{goToInfo:function(t){this.$router.push({path:"message-info",query:{num:"".concat(t)}})}},watch:{}}),d=(o(1131),o(49)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"message-list"},[o("div",{staticClass:"message-list-title"},[t._v("站內訊息")]),t._v(" "),o("div",{staticClass:"message-list-outer"},t._l(t.messages,(function(e,n){return o("div",{key:n,staticClass:"message-list-box"},[o("div",{staticClass:"message-list-row"},[o("div",{staticClass:"message-list-head"},[t._v(t._s(e.head))]),t._v(" "),o("div",{staticClass:"message-list-date"},[t._v(t._s(e.date))])]),t._v(" "),o("div",{staticClass:"message-list-text"},[t._v(t._s(e.text))]),t._v(" "),o("div",{staticClass:"message-list-more",on:{click:function(e){return t.goToInfo(n)}}},[t._v("閱讀更多")])])})),0)])}),[],!1,null,"66ab7134",null);e.default=component.exports}}]);
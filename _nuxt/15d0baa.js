(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1103:function(t,e,n){var content=n(1134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("a7493116",content,!0,{sourceMap:!1})},1133:function(t,e,n){"use strict";n(1103)},1134:function(t,e,n){var o=n(43)(!1);o.push([t.i,".message-info[data-v-16369178]{margin-bottom:32px}.message-info-title[data-v-16369178]{margin-top:32px;font-weight:600;font-size:24px;text-align:center;color:#000}.message-info-outer[data-v-16369178]{width:688px;height:570px;padding:28px 24px;margin:32px auto 0;background:#fff}.message-info-row[data-v-16369178]{display:flex;justify-content:space-between;align-items:center}.message-info-return[data-v-16369178]{color:#8d8d8d;cursor:pointer}.message-info-return[data-v-16369178]:hover{opacity:.8}.message-info-date[data-v-16369178]{color:#bebebe}.message-info-text[data-v-16369178]{margin-top:39px;color:#8d8d8d}@media(max-width:1023px){.message-info[data-v-16369178]{margin-bottom:40px}.message-info-title[data-v-16369178]{margin:40px 0 24px}.message-info-outer[data-v-16369178]{width:calc(100% - 94px);height:auto;padding:28px 23px 58px;margin:0 auto}.message-info-row[data-v-16369178]{flex-direction:column;align-items:flex-start}.message-info-date[data-v-16369178],.message-info-text[data-v-16369178]{margin-top:16px}}",""]),t.exports=o},1178:function(t,e,n){"use strict";n.r(e);var o=n(19),r=(n(100),{head:{title:"SugarDaddy"},auth:!1,layout:"default",components:{},props:{},data:function(){return{title:"標題訊息",postTime:"2022/05/16",content:"\n      這是一個在包養界打滾多年的大叔，在這一行的所見所聞。<br>\n      包養這件事，在台灣社會有各種的道德爭議，始終拿不上檯面。但私底下卻從不曾斷絕。近年來，包養的途徑，從以前的飯局、酒店。到現在的網站，交友軟體。是越來越方便。<br><br>\n\n      這一行很多陷阱，也很多坑。我被騙過，也看人被騙過。看過男人騙女人，女人騙男人。這行待久了，認識的大叔妹子越來越多，因為資訊本行，所以就架個私人論壇，大家在裡面交流。<br><br>\n\n      現在的包養網站，很多只管收錢，其他一概不管。這一行的亂象也很多。我想讓真心想找的對象的男男女女減少被騙的機會，於是考慮公開架站。有很多事要做。不過這些機制跟資料\n      需要時間慢慢累積。<br><br>\n\n      這個部落格，算是紀錄我過往的日子。有我的心得，有故事的紀錄。有網站的設計理念。大家可以參考，翻閱，吐槽。只要不是惡意的批評我盡量回應。<br><br>\n      "}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("/api/bulletin/".concat(t.$route.query.num)).then((function(e){console.log(e.data),t.title=e.data.title,t.postTime=e.data.postTime,t.content=e.data.content})).catch((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()},destroyed:function(){},computed:{},methods:{back:function(){this.$router.push("/message-list")}},watch:{}}),c=(n(1133),n(49)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-info"},[n("div",{staticClass:"message-info-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"message-info-outer"},[n("div",{staticClass:"message-info-row"},[n("div",{staticClass:"message-info-return",on:{click:t.back}},[t._v("＜ 返回")]),t._v(" "),n("div",{staticClass:"message-info-date"},[t._v(t._s(t.postTime.substr(0,10)))])]),t._v(" "),n("div",{staticClass:"message-info-text",domProps:{innerHTML:t._s(t.content)}})])])}),[],!1,null,"16369178",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7],{340:function(t,e,o){var content=o(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("0e8e45e0",content,!0,{sourceMap:!1})},341:function(t,e,o){var content=o(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("9f8c2466",content,!0,{sourceMap:!1})},342:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("64984c5d",content,!0,{sourceMap:!1})},347:function(t,e,o){"use strict";o.r(e),o.d(e,"MusicPlayer",(function(){return n})),o.d(e,"Music",(function(){return l}));var r=o(365),l={CountryRoad:{key:"CountryRoad",opus:"audio/country_road.opus"},KoKeKo:{key:"KoKeKo",opus:"audio/ko_ke_ko.opus"},OkiDokiBoomer:{key:"OkiDokiBoomer",opus:"audio/oki_doki_boomer.opus"},PadowoPadowo:{key:"PadowoPadowo",opus:"audio/padowo_padowo.opus"},PapaTutuWawa:{key:"PapaTutuWawa",opus:"audio/papa_tutu_wawa.opus"},uwuesketit:{key:"uwuesketit",opus:"audio/uwuesketit.opus"}};function n(){this.current=null,this.playing=!1}n.prototype={choose:function(t){this.current&&this.playing&&this.stop();var e=l[t].opus;this.current=new r.a(e).toDestination()},play:function(){this.playing?console.warn("Already playing"):this.current?this._playOpus():console.warn("No music is chosen")},_playOpus:function(){this.playing=this.current,this.playing.loaded?this.playing.start():this.playing.autostart=!0},stop:function(){this.playing?this._stopOpus():console.warn("No music is playing")},_stopOpus:function(){this.playing.stop(),this.playing=!1}}},348:function(t,e,o){"use strict";o(340)},349:function(t,e,o){var r=o(39)(!1);r.push([t.i,".crazy[data-v-bc45fcdc]{-webkit-text-stroke:1px navy;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.flat[data-v-bc45fcdc]{position:absolute;left:0;right:0;z-index:5}.flat.top-10[data-v-bc45fcdc]{top:10px}.flat.top-50[data-v-bc45fcdc]{top:50px}.flat.bottom-25[data-v-bc45fcdc]{bottom:25px}.meow-btn[data-v-bc45fcdc]{cursor:pointer!important}",""]),t.exports=r},350:function(t,e,o){"use strict";o(341)},351:function(t,e,o){var r=o(39)(!1);r.push([t.i,".action-bar[data-v-56fb9c18]{width:100%}",""]),t.exports=r},355:function(t,e,o){"use strict";o(342)},356:function(t,e,o){var r=o(39)(!1);r.push([t.i,".action-bar[data-v-5ceef356]{width:100%}",""]),t.exports=r},357:function(t,e,o){"use strict";o.r(e);var r=o(18),l=(o(90),o(10),o(41),o(42),o(237),o(16),o(61),o(59),o(360),o(361)),n=o.n(l),c=o(339),f=o.n(c),m=o(347);f.a.prototype.add=function(t){Object.assign(this,this.plus(t))},f.a.prototype.sub=function(t){Object.assign(this,this.minus(t))};var d=parseInt("800"),h=parseInt("1000"),v={20191215:m.Music.OkiDokiBoomer.key,12e5:m.Music.KoKeKo.key,201607:m.Music.PapaTutuWawa.key,2020:m.Music.PadowoPadowo.key,913:m.Music.uwuesketit.key},x={name:"Pop",data:function(){return{ready:!1,recovery:!1,bot:!1,nextToken:"",count:new f.a(0),accumulator:new f.a(0),pressing:!1,lastPressed:0,testing:false,music:null}},computed:{buttonImage:function(){return this.count.gt(913)?this.pressing?"./image/button/pressed-uwu.png":"./image/button/release-uwu.png":this.pressing?"./image/button/pressed.png":"./image/button/release.png"},height:function(){return"undefined"!=typeof window?window.innerHeight-150:750},statusMessage:function(){return this.count.gt(913)?"ù w ú":"Awww (๑ºωº)"}},mounted:function(){var t=this;this.push(),localStorage.getItem("bot")&&(this.bot=Boolean(localStorage.getItem("bot"))),localStorage.getItem("count")&&(this.count=new f.a(localStorage.getItem("count"))),window.addEventListener("keydown",this.meow),window.addEventListener("keyup",this.release),Promise.resolve().then(o.bind(null,347)).then((function(e){var o=e.MusicPlayer;t.music=new o;var r=Object.keys(v).reverse().find((function(e){return t.count.gt(e)}));void 0!==r?t.music.choose(v[r]):t.music.choose(m.Music.CountryRoad.key)}))},beforeDestroy:function(){window.addEventListener("keydown",this.meow),window.addEventListener("keyup",this.release)},methods:{meow:function(){var t=this;if(!this.pressing&&(this.pressing=!0,this.count.add(1),this.accumulator.add(1),localStorage.setItem("count",this.count.toString()),this.music)){var e=Object.keys(v).find((function(e){return t.count.eq(e)}));void 0!==e&&this.music.choose(v[e]),this.music.playing||(this.music.play(),this.music.playing.loop=!0)}},release:function(){var t=this;this.pressing=!1,this.lastPressed=(new Date).getTime(),setTimeout((function(){var e=(new Date).getTime();!t.pressing&&t.music&&t.music.playing&&t.music.playing.loaded&&e-t.lastPressed>=3e3&&t.music.stop()}),5e3)},getAppend:function(){var t;return this.accumulator.gt(d)?(t=d,this.accumulator.sub(d)):(t=this.accumulator,this.accumulator=new f.a(0)),t},unpackResult:function(t,e){var o=t.data;"new_token"in o&&(this.nextToken=o.new_token),200!==t.status&&"new_token"in o||this.accumulator.add(e)},post:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,l,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r="",o.next=5;break;case 4:r=o.sent;case 5:return l=n.a.stringify({token:e.nextToken,count:t.toString(),captcha_token:r}),o.prev=6,o.next=9,e.$axios.post("/pop?".concat(l));case 9:200===(c=o.sent).status?(e.ready||(e.ready=!0),e.recovery&&t.eq(0)&&(e.recovery=!1),e.unpackResult(c,t)):201===c.status&&(e.recovery&&(e.recovery=!1),e.unpackResult(c,t)),o.next=18;break;case 13:o.prev=13,o.t0=o.catch(6),e.recovery=!0,e.nextToken="",e.accumulator.add(t);case 18:case"end":return o.stop()}}),o,null,[[6,13]])})))()},push:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.bot||!t.accumulator.gt(0)&&t.ready&&!t.recovery){e.next=3;break}return e.next=3,t.post(t.getAppend());case 3:setTimeout(t.push,h);case 4:case"end":return e.stop()}}),e)})))()}}},w=(o(348),o(74)),y=o(107),_=o.n(y),k=o(159),O=o(402),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto text-center",attrs:{width:"90%",height:"90%","max-width":t.height,"max-height":t.height}},[o("h1",{staticClass:"crazy flat top-10"},[t._v("PopSenzawa")]),t._v(" "),o("h2",{staticClass:"crazy flat top-50"},[t._v(t._s(t.statusMessage))]),t._v(" "),o("h2",{staticClass:"crazy flat bottom-25"},[t._v(t._s(t.count))]),t._v(" "),t.testing?t._e():o("v-img",{staticClass:"meow-btn",attrs:{alt:"Meow",width:"100%",height:"100%",src:t.buttonImage},on:{pointerdown:t.meow,pointerup:t.release}})],1)}),[],!1,null,"bc45fcdc",null);e.default=component.exports;_()(component,{VCard:k.a,VImg:O.a})},358:function(t,e,o){"use strict";o.r(e);var r=o(1),l=o(8),n=(o(239),o(238),o(16),o(11),o(19),o(23),o(12),o(24),o(363)),c=o.n(n),f=o(339),m=o.n(f);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"Leaderboard",data:function(){return{leaderboard:{global:new m.a(0),regions:{}}}},computed:{height:function(){return window.innerHeight-150}},mounted:function(){this.listener=this.$sse.create(),this.listener.on("message",this.update),this.listener.connect()},methods:{update:function(t){for(var i in t=c.a.parse(t),this.leaderboard.global=t.global,t.regions)t.regions[i]=new m.a(t.regions[i]);this.leaderboard.regions=Object.entries(t.regions).sort((function(t,e){var a=Object(l.a)(t,2)[1],b=Object(l.a)(e,2)[1];return a.lt(b)?1:-1})).reduce((function(t,e){var o=Object(l.a)(e,2),n=o[0],c=o[1];return h(h({},t),{},Object(r.a)({},n,c))}),{})}}},x=(o(350),o(74)),w=o(107),y=o.n(w),_=o(337),k=o(159),O=o(88),j=o(385),P=o(399),C=o(400),M=o(391),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{flat:""}},[o("v-card-title",[t._v(" Worldwide: "+t._s(t.leaderboard.global))]),t._v(" "),o("v-card",{staticClass:"overflow-y-auto",attrs:{width:"350","max-height":t.height}},[o("v-list",t._l(t.leaderboard.regions,(function(e,r){return o("v-list-item",{key:r},[t._v("\n        "+t._s(r)+": "+t._s(e)+"\n      ")])})),1)],1),t._v(" "),o("v-card-actions",{staticClass:"red action-bar"},[o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"amber darken-4",on:{click:function(e){return t.$emit("close")}}},[o("v-icon",[t._v("mdi-close")])],1)],1)],1)}),[],!1,null,"56fb9c18",null);e.default=component.exports;y()(component,{VBtn:_.a,VCard:k.a,VCardActions:O.a,VCardTitle:O.c,VIcon:j.a,VList:P.a,VListItem:C.a,VSpacer:M.a})},359:function(t,e,o){"use strict";o.r(e);var r={name:"Information",computed:{height:function(){return window.innerHeight-150}}},l=(o(355),o(74)),n=o(107),c=o.n(n),f=o(337),m=o(159),d=o(88),h=o(385),v=o(391),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{flat:""}},[o("v-card-title",[t._v("PopSenzawa (popcat-active)")]),t._v(" "),o("v-card",{staticClass:"overflow-y-auto",attrs:{width:"350","max-height":t.height}},[o("v-card-text",[o("a",{attrs:{href:"https://github.com/supersonictw/popcat-active",rel:"noopener noreferrer",target:"_blank"}},[t._v("\n        popcat-active\n      ")]),t._v("\n      is an opensource project,"),o("br"),t._v("\n      the web client of\n      "),o("a",{attrs:{href:"https://github.com/supersonictw/popcat-echo",rel:"noopener noreferrer",target:"_blank"}},[t._v("\n        popcat-echo")]),t._v(", built by Vue.js 2 and Nuxt.js.\n    ")]),t._v(" "),o("v-card-text",[t._v("\n      The project is not related to real `Senzawa`, it's just for fun and\n      testing.\n      "),o("br"),t._v("\n      The copyright of resources are listed on\n      "),o("a",{attrs:{href:"https://github.com/supersonictw/popcat-active/blob/main/COPYING",rel:"noopener noreferrer",target:"_blank"}},[t._v("COPYING")]),t._v(".\n    ")]),t._v(" "),o("v-card-text",[t._v(" The project NEVER take any profitable. ")])],1),t._v(" "),o("v-card-actions",{staticClass:"cyan action-bar"},[o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"cyan darken-4",on:{click:function(e){return t.$emit("close")}}},[o("v-icon",[t._v("mdi-close")])],1)],1)],1)}),[],!1,null,"5ceef356",null);e.default=component.exports;c()(component,{VBtn:f.a,VCard:m.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VIcon:h.a,VSpacer:v.a})},364:function(t,e,o){var content=o(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("0db157be",content,!0,{sourceMap:!1})},392:function(t,e,o){"use strict";o(364)},393:function(t,e,o){var r=o(39)(!1);r.push([t.i,"#container[data-v-22da00c3]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.board-btn-row[data-v-22da00c3]{width:100%;position:fixed;bottom:30px}",""]),t.exports=r},394:function(t,e,o){var content=o(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("b9f570ac",content,!0,{sourceMap:!1})},395:function(t,e,o){var r=o(39)(!1);r.push([t.i,".container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}",""]),t.exports=r},396:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("3f95a174",content,!0,{sourceMap:!1})},397:function(t,e,o){var r=o(39)(!1);r.push([t.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),t.exports=r},401:function(t,e,o){"use strict";o.r(e);var r=o(357),l=o(358),n={name:"Index",components:{Information:o(359).default,Leaderboard:l.default,Pop:r.default},data:function(){return{info:!1,board:!1}}},c=(o(392),o(74)),f=o(107),m=o.n(f),d=o(337),h=(o(19),o(16),o(75),o(28),o(345),o(394),o(89),o(91),o(0));var v,x=o(157),w=(v="container",h.a.extend({name:"v-".concat(v),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var o=e.props,data=e.data,r=e.children;data.staticClass="".concat(v," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));n.length&&(data.staticClass+=" ".concat(n.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var o,r=e.props,data=e.data,l=e.children,n=data.attrs;return n&&(data.attrs={},o=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(x.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(o||[])}),l)}}),y=o(385),_=(o(11),o(23),o(12),o(24),o(1)),k=(o(49),o(396),o(77)),O=o(76),j=o(166),P=o(48);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var M=Object(P.a)(k.a,O.a,j.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{id:"container"}},[o("pop"),t._v(" "),o("div",{staticClass:"board-btn-row"},[o("v-btn",{attrs:{"x-large":"",rounded:""},on:{click:function(e){t.info=!0}}},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-information")])],1),t._v(" "),o("v-btn",{attrs:{"x-large":"",rounded:""},on:{click:function(e){t.board=!0}}},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-earth")])],1)],1),t._v(" "),o("v-overlay",{model:{value:t.info,callback:function(e){t.info=e},expression:"info"}},[o("information",{on:{close:function(e){t.info=!1}}})],1),t._v(" "),o("v-overlay",{model:{value:t.board,callback:function(e){t.board=e},expression:"board"}},[o("keep-alive",[o("leaderboard",{on:{close:function(e){t.board=!1}}})],1)],1)],1)}),[],!1,null,"22da00c3",null);e.default=component.exports;m()(component,{Pop:o(357).default,Information:o(359).default,Leaderboard:o(358).default}),m()(component,{VBtn:d.a,VContainer:w,VIcon:y.a,VOverlay:M})}}]);
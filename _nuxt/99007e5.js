(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{344:function(e,t,n){"use strict";n.r(t);var r=n(19),o=(n(87),n(60),n(332)),c=n.n(o),l={name:"Index",data:function(){return{listener:null,accumulator:0,nextToken:"",captchaToken:"",leaderboard:{global:null,regions:{}}}},mounted:function(){this.send(),this.listener=this.$sse.create(),this.listener.on("message",this.updateLeaderboard),this.listener.connect()},methods:{meow:function(){this.accumulator++},updateLeaderboard:function(e){this.leaderboard.global=e.global,this.leaderboard.regions=e.regions},send:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.a.stringify({count:e.accumulator,token:e.nextToken,captcha_token:e.captchaToken}),t.next=3,e.$axios.$post("/pop?".concat(n));case 3:"next_token"in(r=t.sent)&&(e.nextToken=r.next_token),setTimeout(e.send,5e3);case 6:case"end":return t.stop()}}),t)})))()}}},d=n(80),h=n(119),m=n.n(h),v=n(328),f=n(151),k=n(96),_=n(342),w=n(343),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"text-center my-10 py-5"},[n("v-btn",{on:{click:e.meow}},[e._v("Meow")])],1),e._v(" "),n("v-card",[n("v-card-title",[e._v(" Worldwide: "+e._s(e.leaderboard.global)+" ")]),e._v(" "),n("v-list",e._l(e.leaderboard.regions,(function(t,r){return n("v-list-item",{key:r},[e._v("\n        "+e._s(r)+": "+e._s(t)+"\n      ")])})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:f.a,VCardTitle:k.b,VList:_.a,VListItem:w.a})}}]);
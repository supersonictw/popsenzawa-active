(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{391:function(n,t,o){"use strict";o.r(t),o.d(t,"MusicPlayer",(function(){return l})),o.d(t,"Music",(function(){return c}));var c={CountryRoad:{key:"Country Road",opus:new(o(385).a)("audio/country_road.opus").toDestination()}};function l(){this.music=null,this.playing=!1}l.prototype={choose:function(n){this.music&&this.playing&&this.stop(),this.music=c[n]},play:function(){this.playing?console.warn("Already playing"):this.music?this._playOpus():console.warn("No music is chosen")},_playOpus:function(){this.playing=this.music.opus,this.playing.loaded?this.playing.start():this.playing.autostart=!0},stop:function(){this.playing?this._stopOpus():console.warn("No music is playing")},_stopOpus:function(){this.playing.stop(),this.playing=!1}}}}]);
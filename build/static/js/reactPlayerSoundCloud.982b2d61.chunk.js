(self.webpackChunkreact_tailwind_css_starter_pack=self.webpackChunkreact_tailwind_css_starter_pack||[]).push([[125],{1801:function(e,t,n){var r,o=n(2122).default,a=n(6690).default,u=n(9728).default,l=n(6115).default,i=n(1655).default,c=n(6389).default,s=n(4704).default,p=Object.create,f=Object.defineProperty,d=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,m=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,h=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var o,a=s(y(t));try{var u=function(){var a=o.value;v.call(e,a)||a===n||f(e,a,{get:function(){return t[a]},enumerable:!(r=d(t,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)u()}catch(l){a.e(l)}finally{a.f()}}return e},b=function(e,t,n){return function(e,t,n){t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},P={};!function(e,t){for(var n in t)f(e,n,{get:t[n],enumerable:!0})}(P,{default:function(){return _}}),e.exports=(r=P,h(f({},"__esModule",{value:!0}),r));var k=function(e,t,n){return n=null!=e?p(m(e)):{},h(!t&&e&&e.__esModule?n:f(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),g=n(135),O=n(365),_=function(e){"use strict";i(n,e);var t=c(n);function n(){var e;return a(this,n),e=t.apply(this,arguments),b(l(e),"callPlayer",g.callPlayer),b(l(e),"duration",null),b(l(e),"currentTime",null),b(l(e),"fractionLoaded",null),b(l(e),"mute",(function(){e.setVolume(0)})),b(l(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(l(e),"ref",(function(t){e.iframe=t})),e}return u(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this;(0,g.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(r){if(n.iframe){var a=r.Widget.Events,u=a.PLAY,l=a.PLAY_PROGRESS,i=a.PAUSE,c=a.FINISH,s=a.ERROR;t||(n.player=r.Widget(n.iframe),n.player.bind(u,n.props.onPlay),n.player.bind(i,(function(){n.duration-n.currentTime<.05||n.props.onPause()})),n.player.bind(l,(function(e){n.currentTime=e.currentPosition/1e3,n.fractionLoaded=e.loadedProgress})),n.player.bind(c,(function(){return n.props.onEnded()})),n.player.bind(s,(function(e){return n.props.onError(e)}))),n.player.load(e,o(o({},n.props.config.options),{},{callback:function(){n.player.getDuration((function(e){n.duration=e/1e3,n.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return k.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}]),n}(k.Component);b(_,"displayName","SoundCloud"),b(_,"canPlay",O.canPlay.soundcloud),b(_,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.982b2d61.chunk.js.map
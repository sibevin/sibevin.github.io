webpackJsonp([6],{"8LjS":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r(this,t),this.initTab=e,this.reset()}return a(t,[{key:"switch",value:function(t){this.currentTab===t?this.reset():this.currentTab=t}},{key:"isTab",value:function(t){return Array.isArray(t)?t.indexOf(this.currentTab)>-1:this.currentTab===t}},{key:"setTab",value:function(t){this.currentTab=t}},{key:"reset",value:function(){this.currentTab=this.initTab}}]),t}()},ut6v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("8LjS");new r.a({el:"#app",data:{tocTb:new a.a("off"),posts:POSTS,tagMap:TAGS,currentPost:POSTS[FILE]}})}},["ut6v"]);
//# sourceMappingURL=post.js.map
webpackJsonp([2],{"+BSN":function(t,e){},"8LjS":function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return r});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s(this,t),this.initTab=e,this.reset()}return i(t,[{key:"switch",value:function(t){this.currentTab===t?this.reset():this.currentTab=t}},{key:"isTab",value:function(t){return Array.isArray(t)?t.indexOf(this.currentTab)>-1:this.currentTab===t}},{key:"setTab",value:function(t){this.currentTab=t}},{key:"reset",value:function(){this.currentTab=this.initTab}}]),t}()},"9c5h":function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return n});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=30,n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;s(this,t),this.reset(e,a)}return i(t,[{key:"reset",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;this._currentPage=1,this._totalCount=t,this._perPageCount=e,this._totalPage=Math.ceil(t/e)}},{key:"hasPrev",value:function(){return 1!=this._currentPage}},{key:"hasNext",value:function(){return 0!==this._totalPage&&this._currentPage!=this._totalPage}},{key:"isFirst2",value:function(){return!this.hasPrev()||2==this._currentPage}},{key:"isLast2",value:function(){return!this.hasNext()||this._currentPage==this._totalPage-1}},{key:"gotoPage",value:function(t){return null!==t&&void 0!==t&&(!(t<1||t>this._totalPage||t===this._currentPage)&&void(this._currentPage=t))}},{key:"fetch",value:function(t){var e,a;return e=1===this._currentPage?0:this._perPageCount*(this._currentPage-1),a=this._currentPage===this._totalPage?this._totalCount-1:this._perPageCount*this._currentPage-1,t.slice(e,a+1)}},{key:"prevPage",get:function(){return this.hasPrev()?this._currentPage-1:null}},{key:"nextPage",get:function(){return this.hasNext()?this._currentPage+1:null}},{key:"lastPage",get:function(){return 0===this._totalPage?1:this._totalPage}},{key:"currentPage",get:function(){return this._currentPage}}]),t}()},Ea3U:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return r});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=function(){function t(e){s(this,t),this.parse()}return i(t,[{key:"parse",value:function(){for(var t={},e=window.location.search.substring(1).split("&"),a=0;a<e.length;a++){var s=e[a].split("=");if(void 0===t[s[0]])t[s[0]]=decodeURIComponent(s[1]);else if("string"==typeof t[s[0]]){var i=[t[s[0]],decodeURIComponent(s[1])];t[s[0]]=i}else t[s[0]].push(decodeURIComponent(s[1]))}this._params=t}},{key:"value",value:function(t){return this._params[t]}}]),t}()},d2o7:function(t,e,a){"use strict";var s=a("9c5h"),i=a("8LjS"),r=a("Ea3U"),n=a("M4fF");e.a={name:"index",data:function(){return{categories:n.keys(CATEGORIES),caCbs:new i.a,posts:POSTS,tagMap:TAGS,caMap:CATEGORIES,paginator:new s.a(0),urlParams:new r.a,queryKeyword:""}},created:function(){var t=this.urlParams.value("c");void 0!=this.caMap[t]?this.caCbs.setTab(t):void 0!=t&&this.caCbs.setTab("error");var e=this.urlParams.value("q");void 0!=e&&(this.queryKeyword=e)},computed:{sortedPosts:function(){var t=this.caCbs,e=n.values(this.posts).filter(function(e){return 1!=e.draft&&t.isTab(e.category)});return n.sortBy(e,["datetime"]).reverse()},filteredPosts:function(){var t=this.queryKeyword.toLowerCase(),e=this.tagMap;return""===t?this.sortedPosts:this.sortedPosts.filter(function(a){var s=[];return s.push(a.title),s.push(a.datetime),s.push(a.category),s=s.concat(a.tags),s=s.concat(n.map(a.tags,function(t){return e[t].name})),s.join(" ").toLowerCase().indexOf(t)>-1})},paginatedPosts:function(){return this.paginator.fetch(this.filteredPosts)}},methods:{switchPage:function(t){this.paginator.gotoPage(t)},getLink:function(t){switch(t.category){case"bm":return t.website;default:return"/posts/"+t.file}},getTarget:function(t){switch(t.category){case"bm":return"_target";default:return"_self"}}},watch:{filteredPosts:function(){this.paginator.reset(this.filteredPosts.length)}}}},eEYS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("py1u");new s.a({el:"#app",render:function(t){return t(i.a)}})},py1u:function(t,e,a){"use strict";function s(t){a("+BSN")}var i=a("d2o7"),r=a("yxUJ"),n=a("VU/8"),c=s,o=n(i.a,r.a,!1,c,null,null);e.a=o.exports},yxUJ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories layout"},[a("div",{staticClass:"lo-page"},[t._m(0),a("div",{staticClass:"cgs-category-list"},t._l(t.categories,function(e){return a("div",{staticClass:"cgs-ca-icon",class:{selected:t.caCbs.isTab(e)}},[a("a",{on:{click:function(a){t.caCbs.switch(e)}}},[a("img",{attrs:{src:"/images/category/"+e+"_50x.svg"}})]),a("div",{staticClass:"cgs-ca-text"},[t._v(t._s(t.caMap[e].name))])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:t.caCbs.isTab("error"),expression:"caCbs.isTab('error')"}],staticClass:"cgs-error-msg"},[t._m(1)]),a("div",{staticClass:"cgs-post-list"},[a("div",{staticClass:"post-list"},t._l(t.paginatedPosts,function(e){return a("div",{staticClass:"pl-entry"},[a("div",{staticClass:"pl-ca"},[a("div",{staticClass:"category-icon"},[a("a",{attrs:{href:"/categories?c="+e.category}},[a("div",{class:"ca-icon-"+e.category})])])]),a("div",{staticClass:"pl-content"},[a("div",{staticClass:"pl-name"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.website,expression:"post.website"}],staticClass:"pl-website",attrs:{target:"_blank",href:e.website}},[a("img",{attrs:{src:"/images/list/weblink_25x.svg"}})]),a("a",{attrs:{href:t.getLink(e),target:t.getTarget(e)}},[t._v(t._s(e.title))])]),a("div",{staticClass:"pl-time"},[t._v(t._s(e.datetime))]),a("div",{staticClass:"pl-tags"},[a("div",{staticClass:"tag-area"},t._l(e.tags,function(e){return a("div",{staticClass:"tag",style:{background:t.tagMap[e].color}},[a("a",{staticClass:"tag-link",attrs:{href:"/tag?t="+e}},[t._v(t._s(t.tagMap[e].name))])])}))])])])}))])]),a("div",{staticClass:"lo-ctrl-panel"},[a("div",{staticClass:"ctrl-panel"},[a("div",{staticClass:"cp-pagination"},[a("div",{staticClass:"cp-pg-col cp-first"}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paginator.hasPrev(),expression:"paginator.hasPrev()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(1)}}},[t._v("1")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isFirst2(),expression:"!paginator.isFirst2()"}],staticClass:"cp-pg-col cp-middle cp-disabled"},[t._v(" <")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isFirst2(),expression:"!paginator.isFirst2()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(t.paginator.prevPage)}}},[t._v(t._s(t.paginator.prevPage))]),a("div",{staticClass:"cp-pg-col cp-middle cp-current cp-number"},[t._v(t._s(t.paginator.currentPage))]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isLast2(),expression:"!paginator.isLast2()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(t.paginator.nextPage)}}},[t._v(t._s(t.paginator.nextPage))]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isLast2(),expression:"!paginator.isLast2()"}],staticClass:"cp-pg-col cp-middle cp-disabled"},[t._v(" <")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paginator.hasNext(),expression:"paginator.hasNext()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(t.paginator.lastPage)}}},[t._v(t._s(t.paginator.lastPage))]),a("div",{staticClass:"cp-pg-col cp-middle cp-sep"}),a("div",{staticClass:"cp-pg-col cp-middle cp-number cp-counter"},[t._v(t._s(t.filteredPosts.length))]),a("div",{staticClass:"cp-pg-col cp-last"})]),a("div",{staticClass:"cp-menu"},[a("div",{staticClass:"cp-first"}),t._m(2),t._m(3),t._m(4),a("div",{staticClass:"cp-middle cp-mu-search-bar"},[a("img",{attrs:{src:"/images/menu/search_48x.svg"},on:{click:function(e){t.$refs.searchInput.focus()}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.queryKeyword,expression:"queryKeyword"}],ref:"searchInput",attrs:{autofocus:"",type:"search"},domProps:{value:t.queryKeyword},on:{input:function(e){e.target.composing||(t.queryKeyword=e.target.value)}}})]),a("div",{staticClass:"cp-last"})])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title"},[a("a",{attrs:{href:"/tags"}},[a("div",{staticClass:"pt-icon"},[a("div",{staticClass:"pt-icon-img cgs-icon"})])]),a("h1",{staticClass:"pt-text"},[t._v("分類")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error-msg"},[a("div",{staticClass:"em-error-code"},[t._v("404")]),a("div",{staticClass:"em-text"},[t._v("我們之間一定有什麼誤會。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cp-middle cp-mu-btn"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/header/trademark_50x.svg"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cp-middle cp-mu-btn"},[a("a",{attrs:{href:"/posts"}},[a("img",{attrs:{src:"/images/menu/paper_48x.svg"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cp-middle cp-mu-btn"},[a("a",{attrs:{href:"/tags"}},[a("img",{attrs:{src:"/images/menu/tags_48x.svg"}})])])}],r={render:s,staticRenderFns:i};e.a=r}},["eEYS"]);
//# sourceMappingURL=categories.5640f7f10fb4b11fc96a.js.map
webpackJsonp([3],{"8p2W":function(t,e){},"9c5h":function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return n});var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),i=30,n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;s(this,t),this.reset(e,a)}return r(t,[{key:"reset",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;this._currentPage=1,this._totalCount=t,this._perPageCount=e,this._totalPage=Math.ceil(t/e)}},{key:"hasPrev",value:function(){return 1!=this._currentPage}},{key:"hasNext",value:function(){return 0!==this._totalPage&&this._currentPage!=this._totalPage}},{key:"isFirst2",value:function(){return!this.hasPrev()||2==this._currentPage}},{key:"isLast2",value:function(){return!this.hasNext()||this._currentPage==this._totalPage-1}},{key:"gotoPage",value:function(t){return null!==t&&void 0!==t&&(!(t<1||t>this._totalPage||t===this._currentPage)&&void(this._currentPage=t))}},{key:"fetch",value:function(t){var e,a;return e=1===this._currentPage?0:this._perPageCount*(this._currentPage-1),a=this._currentPage===this._totalPage?this._totalCount-1:this._perPageCount*this._currentPage-1,t.slice(e,a+1)}},{key:"prevPage",get:function(){return this.hasPrev()?this._currentPage-1:null}},{key:"nextPage",get:function(){return this.hasNext()?this._currentPage+1:null}},{key:"lastPage",get:function(){return 0===this._totalPage?1:this._totalPage}},{key:"currentPage",get:function(){return this._currentPage}}]),t}()},Ea3U:function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return i});var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),i=function(){function t(e){s(this,t),this.parse()}return r(t,[{key:"parse",value:function(){for(var t={},e=window.location.search.substring(1).split("&"),a=0;a<e.length;a++){var s=e[a].split("=");if(void 0===t[s[0]])t[s[0]]=decodeURIComponent(s[1]);else if("string"==typeof t[s[0]]){var r=[t[s[0]],decodeURIComponent(s[1])];t[s[0]]=r}else t[s[0]].push(decodeURIComponent(s[1]))}this._params=t}},{key:"value",value:function(t){return this._params[t]}}]),t}()},KNsj:function(t,e,a){"use strict";function s(t){a("8p2W")}var r=a("av0C"),i=a("eYyC"),n=a("VU/8"),c=s,o=n(r.a,i.a,!1,c,null,null);e.a=o.exports},QNhh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("KNsj");new s.a({el:"#app",render:function(t){return t(r.a)}})},av0C:function(t,e,a){"use strict";var s=a("9c5h"),r=a("Ea3U"),i=a("M4fF");e.a={name:"index",data:function(){return{posts:POSTS,tagMap:TAGS,tagMaxCount:i.maxBy(i.values(TAGS),"count").count,tags:[],paginator:new s.a(i.keys(POSTS).length),urlParams:new r.a,queryKeyword:"",currentTag:"",currentTagData:{},errorMsg:""}},created:function(){var t=this.urlParams.value("t");this.currentTagData=this.tagMap[t],void 0!=this.currentTagData?this.currentTag=t:(this.currentTag=void 0,this.currentTagData={name:"找不到標籤",color:"#000",count:0},this.errorMsg="我們之間一定有什麼誤會。");var e=this.urlParams.value("q");void 0!=e&&(this.queryKeyword=e);var a=i.values(i.mapValues(this.tagMap,function(t,e){return t.tag=e,t}));this.tags=i.sortBy(i.values(a),["name"])},computed:{currentTagName:function(){return" — "+this.currentTagData.name},relatedTags:function(){if(void 0!=this.currentTag){var t=this.currentTag.split("_");return this.tags.filter(function(e){var a=!1,s=!0,r=!1,i=void 0;try{for(var n,c=t[Symbol.iterator]();!(s=(n=c.next()).done);s=!0){var o=n.value;if(e.tag.toLowerCase().indexOf(o)>-1){a=!0;break}}}catch(t){r=!0,i=t}finally{try{!s&&c.return&&c.return()}finally{if(r)throw i}}return a})}return[]},sortedPosts:function(){if(void 0!=this.currentTag){var t=this.currentTag,e=i.values(this.posts).filter(function(e){var a=e.tags.join(" ").toLowerCase().indexOf(t.toLowerCase())>-1;return 1!=e.draft&&a});return i.sortBy(e,["datetime"]).reverse()}return[]},filteredPosts:function(){var t=this.queryKeyword.toLowerCase(),e=this.tagMap;return""===t?this.sortedPosts:this.sortedPosts.filter(function(a){var s=[];return s.push(a.title),s.push(a.datetime),s.push(a.category),s=s.concat(a.tags),s=s.concat(i.map(a.tags,function(t){return e[t].name})),s.join(" ").toLowerCase().indexOf(t)>-1})},paginatedPosts:function(){return this.paginator.fetch(this.filteredPosts)}},methods:{switchPage:function(t){this.paginator.gotoPage(t)},getLink:function(t){switch(t.category){case"bm":return t.website;default:return"/posts/"+t.file}},getTarget:function(t){switch(t.category){case"bm":return"_target";default:return"_self"}}},watch:{filteredPosts:function(){this.paginator.reset(this.filteredPosts.length)}}}},eYyC:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag-page layout"},[a("div",{staticClass:"lo-page"},[a("div",{staticClass:"page-title"},[t._m(0),a("h1",{staticClass:"pt-text",style:{color:t.currentTagData.color}},[t._v("標籤"+t._s(t.currentTagName))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.errorMsg,expression:"errorMsg != ''"}],staticClass:"tgp-error-msg"},[a("div",{staticClass:"error-msg"},[a("div",{staticClass:"em-error-code"},[t._v("404")]),a("div",{staticClass:"em-text"},[t._v(t._s(t.errorMsg))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.relatedTags.length>1,expression:"relatedTags.length > 1"}],staticClass:"tgp-related-tags"},[a("div",{staticClass:"tag-area"},t._l(t.relatedTags,function(e){return a("div",{staticClass:"tag",style:{background:e.color}},[a("a",{staticClass:"tag-link",attrs:{href:"/tag?t="+e.tag}},[t._v(t._s(e.name))])])}))]),a("div",{staticClass:"tgp-post-list"},[a("div",{staticClass:"post-list"},t._l(t.paginatedPosts,function(e){return a("div",{staticClass:"pl-entry"},[a("div",{staticClass:"pl-ca"},[a("div",{staticClass:"category-icon"},[a("a",{attrs:{href:"/categories?c="+e.category}},[a("div",{class:"ca-icon-"+e.category})])])]),a("div",{staticClass:"pl-content"},[a("div",{staticClass:"pl-name"},[a("a",{directives:[{name:"show",rawName:"v-show",value:e.website,expression:"post.website"}],staticClass:"pl-website",attrs:{target:"_blank",href:e.website}},[a("img",{attrs:{src:"/images/list/weblink_25x.svg"}})]),a("a",{attrs:{href:t.getLink(e),target:t.getTarget(e)}},[t._v(t._s(e.title))])]),a("div",{staticClass:"pl-time"},[t._v(t._s(e.datetime))]),a("div",{staticClass:"pl-tags"},[a("div",{staticClass:"tag-area"},t._l(e.tags,function(e){return a("div",{staticClass:"tag",style:{background:t.tagMap[e].color}},[a("a",{staticClass:"tag-link",attrs:{href:"/tag?t="+e}},[t._v(t._s(t.tagMap[e].name))])])}))])])])}))])]),a("div",{staticClass:"lo-ctrl-panel"},[a("div",{staticClass:"ctrl-panel"},[a("div",{staticClass:"cp-pagination"},[a("div",{staticClass:"cp-pg-col cp-first"}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paginator.hasPrev(),expression:"paginator.hasPrev()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(1)}}},[t._v("1")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isFirst2(),expression:"!paginator.isFirst2()"}],staticClass:"cp-pg-col cp-middle cp-disabled"},[t._v(" <")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isFirst2(),expression:"!paginator.isFirst2()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(t.paginator.prevPage)}}},[t._v(t._s(t.paginator.prevPage))]),a("div",{staticClass:"cp-pg-col cp-middle cp-current cp-number"},[t._v(t._s(t.paginator.currentPage))]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isLast2(),expression:"!paginator.isLast2()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(t.paginator.nextPage)}}},[t._v(t._s(t.paginator.nextPage))]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paginator.isLast2(),expression:"!paginator.isLast2()"}],staticClass:"cp-pg-col cp-middle cp-disabled"},[t._v(" <")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paginator.hasNext(),expression:"paginator.hasNext()"}],staticClass:"cp-pg-col cp-middle cp-active cp-number",on:{click:function(e){t.switchPage(t.paginator.lastPage)}}},[t._v(t._s(t.paginator.lastPage))]),a("div",{staticClass:"cp-pg-col cp-middle cp-sep"}),a("div",{staticClass:"cp-pg-col cp-middle cp-number cp-counter"},[t._v(t._s(t.filteredPosts.length))]),a("div",{staticClass:"cp-pg-col cp-last"})]),a("div",{staticClass:"cp-menu"},[a("div",{staticClass:"cp-first"}),t._m(1),t._m(2),a("div",{staticClass:"cp-middle cp-mu-search-bar"},[a("img",{attrs:{src:"/images/menu/search_48x.svg"},on:{click:function(e){t.$refs.searchInput.focus()}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.queryKeyword,expression:"queryKeyword"}],ref:"searchInput",attrs:{autofocus:"",type:"search"},domProps:{value:t.queryKeyword},on:{input:function(e){e.target.composing||(t.queryKeyword=e.target.value)}}})]),a("div",{staticClass:"cp-last"})])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/tags"}},[a("div",{staticClass:"pt-icon"},[a("div",{staticClass:"pt-icon-img tgp-icon"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cp-middle cp-mu-btn"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/header/trademark_50x.svg"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cp-middle cp-mu-btn"},[a("a",{attrs:{href:"/tags"}},[a("img",{attrs:{src:"/images/menu/tags_48x.svg"}})])])}],i={render:s,staticRenderFns:r};e.a=i}},["QNhh"]);
//# sourceMappingURL=tag.js.map
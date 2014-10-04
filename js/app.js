APP_DATA = {};APP_DATA.posts = [{"title":"如何在ruby中轉換integer與bit string","datetime":"2014-02-20 09:52:39","tag":["ruby"],"category":["programming"],"link":"ruby-how-to-convert-integer-to-bit-string","file":"2014-02-20-095239-ruby-how-to-convert-integer-to-bit-string","template":["post"]},{"title":"dup與clone的差異","datetime":"2014-02-20 10:08:54","tag":["ruby"],"category":["programming"],"template":["post"],"link":"ruby-compare-dup-and-clone","file":"2014-02-20-100854-ruby-compare-dup-and-clone"},{"title":"ruby class的initialize","datetime":"2014-02-22 11:28:58","tag":["ruby"],"category":["programming"],"link":"ruby-class-initialize","file":"2014-02-22-112858-ruby-class-initialize","template":["post"]},{"title":"如何在rails的controller中做到before_render","datetime":"2014-02-23 13:00:36","tag":["rails_controller"],"category":["programming"],"link":"rails-how-to-before-render","file":"2014-02-23-130036-rails-how-to-before-render","template":["post"]},{"title":"如何顯示utf8的欄位","tag":["mysql"],"category":["tools"],"datetime":"2014-03-04 13:10:15","template":["post"],"link":"mysql-utf8-display","file":"2014-03-04-131015-mysql-utf8-display"},{"title":"ruby在if中的assignment","datetime":"2014-03-25 12:28:57","tag":["ruby"],"category":["programming"],"link":"ruby-if-assignment","file":"2014-03-25-122857-ruby-if-assignment","template":["post"]},{"title":"ruby module的用法","datetime":"2014-05-04 08:17:14","tag":["ruby"],"category":["programming"],"link":"ruby-module","file":"2014-05-04-081714-ruby-module","template":["post"]},{"title":"測量mysql query的效能","category":["programming"],"tag":["mysql"],"datetime":"2014-08-05 12:45:32","template":["post"],"link":"mysql-profiling-query","file":"2014-08-05-124532-mysql-profiling-query"},{"title":"如何轉換時間字串","category":["programming"],"tag":["ruby"],"datetime":"2014-09-18 09:48:05","template":["post"],"link":"ruby-how-to-parse-time-string","file":"2014-09-18-094805-ruby-how-to-parse-time-string"},{"title":"vim在使用自動補齊的時候會爆","category":["tools"],"tag":["vim"],"datetime":"2014-09-18 11:58:02","template":["post"],"link":"vim-dot-auto-complete-crash","file":"2014-09-18-115802-vim-dot-auto-complete-crash"},{"title":"oh-my-zsh一些實用小技巧","datetime":"2014-09-28 09:48:56","tag":["zsh"],"category":["tools"],"template":["post"],"link":"oh-my-zsh-tips","file":"2014-09-28-094856-oh-my-zsh-tips"}];APP_DATA.tags = {"ruby":{"name":"ruby","count":6},"rails_controller":{"name":"rails_controller","count":1},"rails":{"name":"rails","count":0},"mysql":{"name":"mysql","count":2},"vim":{"name":"vim","count":1},"zsh":{"name":"zsh","count":1}};APP_DATA.categories = {"programming":{"name":"programming","count":8},"tools":{"name":"tools","count":3}};APP = {
  "brand": "魔法師的手帳",
  "author": "Sibevin Wang",
  "footer_trademark": "2014 魔法師的手帳",
  "header_title": "寫程式就像施展魔法一樣"
}
;ROUTES = {
  "/": {
    "template": "layout/home.html",
    "ctrl": "HomeCtrl"
  },
  "/tag": {
    "template": "layout/tag_list.html",
    "ctrl": "TagListCtrl"
  },
  "/tag/:tag": {
    "template": "layout/tag.html",
    "ctrl": "TagCtrl"
  },
  "/post/:year/:month/:day/:link": {
    "template": "layout/post.html",
    "ctrl": "PostCtrl"
  },
  "/post": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  },
  "/post/:keyword": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  },
  "/post/:year/:month": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  },
  "/post/:year/:month/:day": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  }
}
;ROUTES = {
  "/": {
    "template": "layout/home.html",
    "ctrl": "HomeCtrl"
  },
  "/tag": {
    "template": "layout/tag_list.html",
    "ctrl": "TagListCtrl"
  },
  "/tag/:tag": {
    "template": "layout/tag.html",
    "ctrl": "TagCtrl"
  },
  "/post/:year/:month/:day/:link": {
    "template": "layout/post.html",
    "ctrl": "PostCtrl"
  },
  "/post": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  },
  "/post/:keyword": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  },
  "/post/:year/:month": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  },
  "/post/:year/:month/:day": {
    "template": "layout/post_list.html",
    "ctrl": "PostListCtrl"
  }
}
;(function() {
  var blog_app;

  blog_app = angular.module('scsBlogApp', ['ngRoute', 'hljs']);

  blog_app.config([
    "$routeProvider", function($routeProvider) {
      var path, route, _results;
      _results = [];
      for (path in ROUTES) {
        route = ROUTES[path];
        if (route.ctrl) {
          _results.push($routeProvider.when(path, {
            controller: route.ctrl,
            templateUrl: "./" + route.template
          }));
        } else {
          _results.push($routeProvider.when(path, {
            templateUrl: "./" + route.template
          }));
        }
      }
      return _results;
    }
  ]);

  angular.element(document).ready(function() {
    return angular.bootstrap(document, ['scsBlogApp']);
  });

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("FilterPanelCtrl", [
    '$scope', '$filter', function($scope, $filter) {
      var init, initVars, loadCategories, loadTags;
      $scope.onCfAllChange = function() {
        var ca, _i, _len, _ref, _results;
        $scope.fp_data.ca = [];
        $scope.ca_filter_all = true;
        _ref = $scope.categories;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          ca = _ref[_i];
          _results.push($scope.ca_filter[ca.name] = false);
        }
        return _results;
      };
      $scope.onCfChange = function() {
        $scope.fp_data.ca = _.keys(_.omit($scope.ca_filter, function(value) {
          return value === false;
        }));
        if ($scope.fp_data.ca.length > 0) {
          return $scope.ca_filter_all = false;
        } else {
          return $scope.onCfAllChange();
        }
      };
      $scope.onTfAllChange = function() {
        var tag, _i, _len, _ref, _results;
        $scope.fp_data.tag = [];
        $scope.tag_filter_all = true;
        _ref = $scope.tags;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          _results.push($scope.tag_filter[tag.name] = false);
        }
        return _results;
      };
      $scope.onTfChange = function() {
        $scope.fp_data.tag = _.keys(_.omit($scope.tag_filter, function(value) {
          return value === false;
        }));
        if ($scope.fp_data.tag.length > 0) {
          return $scope.tag_filter_all = false;
        } else {
          return $scope.onTfAllChange();
        }
      };
      initVars = function() {
        $scope.ca_filter = {};
        $scope.tag_filter = {};
        $scope.fp_data.ca = [];
        return $scope.fp_data.tag = [];
      };
      loadTags = function() {
        return $scope.tags = _.values(APP_DATA.tags);
      };
      loadCategories = function() {
        return $scope.categories = _.values(APP_DATA.categories);
      };
      init = function() {
        initVars();
        loadTags();
        loadCategories();
        $scope.onCfAllChange();
        return $scope.onTfAllChange();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("HomeCtrl", [
    '$scope', '$filter', function($scope, $filter) {
      var init, initVars, loadCategories, loadPosts, loadTags;
      initVars = function() {};
      loadPosts = function() {
        return $scope.posts = APP_DATA.posts;
      };
      loadTags = function() {
        return $scope.tags = APP_DATA.tags;
      };
      loadCategories = function() {
        return $scope.categories = APP_DATA.categories;
      };
      init = function() {
        $scope.$parent.updateHeaderTitle(APP["header_title"]);
        initVars();
        loadPosts();
        loadTags();
        return loadCategories();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("PostCtrl", [
    '$scope', '$filter', '$routeParams', '$location', function($scope, $filter, $routeParams, $location) {
      var EMPTY_POST, getHtmlLink, init;
      EMPTY_POST = {
        title: "",
        categories: [],
        tags: [],
        datetime: "0000-00-00 00:00:00",
        link: ""
      };
      getHtmlLink = function(post) {
        return post.file;
      };
      init = function() {
        $scope.enableFilterPanel(false);
        $scope.target_post = _.find(APP_DATA.posts, function(post) {
          return post.link === $routeParams.link;
        });
        if ($scope.target_post) {
          $scope.$parent.updateHeaderTitle($scope.target_post.title);
          return $scope.target_html = "posts/" + getHtmlLink($scope.target_post) + ".html";
        } else {
          $scope.$parent.updateHeaderTitle("找不到對應網址的文章…");
          return $scope.target_post = EMPTY_POST;
        }
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("PostListCtrl", [
    '$scope', '$filter', '$routeParams', '$location', function($scope, $filter, $routeParams, $location) {
      var getEndDate, getStartDate, init, isValidDate, isValidMonth, isValidYear;
      isValidYear = function(year_str) {
        return year_str.match(/(\d{4})/);
      };
      isValidMonth = function(month_str) {
        var month_value;
        month_value = parseInt(month_str);
        return month_value > 0 && month_value < 13;
      };
      isValidDate = function(year_str, month_str, day_str) {
        var d;
        d = new Date(year_str + "-" + month_str + "-" + day_str);
        if (Object.prototype.toString.call(d) !== '[object Date]') {
          return false;
        }
        if (isNaN(d)) {
          return false;
        } else {
          return true;
        }
      };
      getStartDate = function(year, month, day) {
        if (month == null) {
          month = 1;
        }
        if (day == null) {
          day = 1;
        }
        year = parseInt(year);
        month = parseInt(month) - 1;
        return new Date(year, month, day);
      };
      getEndDate = function(year, month, day) {
        var d;
        if (month == null) {
          month = null;
        }
        if (day == null) {
          day = null;
        }
        if (month === null) {
          year = parseInt(year);
          month = 0;
          day = 1;
          d = new Date(year + 1, month, day);
        } else if (day === null) {
          month = parseInt(month) - 1;
          day = 1;
          d = new Date(year, month + 1, day);
        } else {
          month = parseInt(month) - 1;
          day = parseInt(day);
          d = new Date(year, month, day + 1);
        }
        return new Date(d - 1);
      };
      init = function() {
        var month, options, query_display, query_type, time_display, year;
        $scope.posts = APP_DATA.posts;
        $scope.enableFilterPanel(true);
        options = {};
        time_display = [];
        if ($routeParams.keyword) {
          if (isValidYear($routeParams.keyword)) {
            query_type = "date";
            query_display = $routeParams.keyword + "年";
            options.start_date = getStartDate($routeParams.keyword);
            options.end_date = getEndDate($routeParams.keyword);
            time_display.push($routeParams.keyword);
          } else {
            query_type = "keyword";
            query_display = '"' + $routeParams.keyword + '"';
            options.keyword = $routeParams.keyword;
          }
        } else if ($routeParams.year) {
          if (isValidYear($routeParams.year)) {
            year = $routeParams.year;
            time_display.push(year);
            if ($routeParams.month && isValidMonth($routeParams.month)) {
              month = $routeParams.month;
              time_display.push(month);
              if ($routeParams.day && isValidDate(year, month, $routeParams.day)) {
                query_type = "date";
                query_display = year + "∙" + month + "∙" + $routeParams.day;
                options.start_date = getStartDate(year, month, $routeParams.day);
                options.end_date = getEndDate(year, month, $routeParams.day);
                time_display.push($routeParams.day);
              } else {
                query_type = "date";
                query_display = year + "年" + month + "月";
                options.start_date = getStartDate(year, month);
                options.end_date = getEndDate(year, month);
              }
            } else {
              query_type = "date";
              query_display = year + "年";
              options.start_date = getStartDate(year);
              options.end_date = getEndDate(year);
            }
          }
        } else {
          query_type = "all";
        }
        switch (query_type) {
          case "date":
            $scope.posts_in_where = "所有" + query_display + "的文章(" + options.start_date + " - " + options.end_date + ")";
            $scope.$parent.updateHeaderTitle("文章列表 – " + query_display);
            $scope.options = options;
            return $scope.title_display = time_display.join("∙");
          case "keyword":
            $scope.posts_in_where = "包含" + query_display + "標題的所有文章";
            $scope.$parent.updateHeaderTitle("文章列表 – 標題包含" + query_display + "的文章");
            $scope.options = options;
            return $scope.title_display = query_display;
          default:
            return $scope.$parent.updateHeaderTitle("文章列表");
        }
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module("scsBlogApp").controller("RootCtrl", [
    '$scope', '$filter', 'TabSwitcher', function($scope, $filter, TabSwitcher) {
      var getDateArr, init, initVars;
      getDateArr = function(post) {
        var date_arr;
        date_arr = post.datetime.match(/(\d{4})-(\d{2})-(\d{2})/);
        return _.rest(date_arr);
      };
      $scope.showTag = function(name) {
        return name.replace(/_/g, " ‣ ");
      };
      $scope.showTagCount = function(tag) {
        if (APP_DATA.tags[tag]) {
          return APP_DATA.tags[tag].count;
        } else {
          return 0;
        }
      };
      $scope.getDateLink = function(post, kind) {
        var date_arr, link, result;
        date_arr = getDateArr(post);
        link = "#/post/";
        result = (function() {
          switch (kind) {
            case "y":
              return (_.initial(date_arr, 2)).join("/");
            case "m":
              return (_.initial(date_arr, 1)).join("/");
            case "d":
              return date_arr.join("/");
          }
        })();
        return link + result;
      };
      $scope.getPostLink = function(post) {
        var date_arr;
        date_arr = getDateArr(post);
        return "#/post/" + date_arr.join("/") + "/" + post.link;
      };
      $scope.getDateValue = function(post, kind) {
        var date_arr, result;
        date_arr = getDateArr(post);
        result = (function() {
          switch (kind) {
            case "y":
              return date_arr[0];
            case "m":
              return date_arr[1];
            case "d":
              return date_arr[2];
          }
        })();
        return result;
      };
      $scope.updateHeaderTitle = function(title) {
        return $scope.header_title = title;
      };
      $scope.enableFilterPanel = function(is_on) {
        return $scope.enable_fp = is_on;
      };
      $scope.showFp = function() {
        return $scope.enable_fp && $scope.menu_ts.isTab("fp");
      };
      $scope.getFilteredPosts = function(all_posts, options) {
        var filtered_posts;
        if (options == null) {
          options = null;
        }
        filtered_posts = $filter("orderBy")(all_posts, "datetime", true);
        if ($scope.fp_data.tag.length > 0) {
          filtered_posts = $filter("filter")(filtered_posts, function(post) {
            var is_in_list, sub_tag, tag, _i, _j, _len, _len1, _ref, _ref1;
            is_in_list = false;
            _ref = post.tag;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              tag = _ref[_i];
              if (__indexOf.call($scope.fp_data.tag, tag) >= 0) {
                is_in_list = true;
                break;
              }
              _ref1 = tag.split("_");
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                sub_tag = _ref1[_j];
                if (__indexOf.call($scope.fp_data.tag, sub_tag) >= 0) {
                  is_in_list = true;
                  break;
                }
              }
              if (is_in_list) {
                break;
              }
            }
            return is_in_list;
          });
        }
        if ($scope.fp_data.ca.length > 0) {
          filtered_posts = $filter("filter")(filtered_posts, function(post) {
            var ca, is_in_list, sub_ca, _i, _j, _len, _len1, _ref, _ref1;
            is_in_list = false;
            _ref = post.category;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              ca = _ref[_i];
              if (__indexOf.call($scope.fp_data.ca, ca) >= 0) {
                is_in_list = true;
                break;
              }
              _ref1 = ca.split("_");
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                sub_ca = _ref1[_j];
                if (__indexOf.call($scope.fp_data.ca, sub_ca) >= 0) {
                  is_in_list = true;
                  break;
                }
              }
              if (is_in_list) {
                break;
              }
            }
            return is_in_list;
          });
        }
        if ($scope.fp_data.keyword !== "") {
          filtered_posts = $filter("filter")(filtered_posts, $scope.fp_data.keyword);
        }
        if (options) {
          if (options.start_date) {
            filtered_posts = $filter("filter")(filtered_posts, function(post) {
              var d;
              d = new Date(post.datetime);
              return d >= options.start_date;
            });
          }
          if (options.end_date) {
            filtered_posts = $filter("filter")(filtered_posts, function(post) {
              var d;
              d = new Date(post.datetime);
              return d < options.end_date;
            });
          }
          if (options.keyword) {
            filtered_posts = $filter("filter")(filtered_posts, options.keyword);
          }
        }
        return filtered_posts;
      };
      initVars = function() {
        $scope.brand = APP["brand"];
        $scope.author = APP["author"];
        $scope.footer_trademark = APP["footer_trademark"];
        $scope.menu_ts = new TabSwitcher("close");
        $scope.enable_fp = true;
        $scope.fp_data = {};
        $scope.fp_data.ca = [];
        $scope.fp_data.tag = [];
        return $scope.fp_data.keyword = "";
      };
      init = function() {
        return initVars();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module("scsBlogApp").controller("TagCtrl", [
    '$scope', '$filter', '$routeParams', '$anchorScroll', '$location', function($scope, $filter, $routeParams, $anchorScroll, $location) {
      var init;
      $scope.scrollTo = function(id) {
        var old;
        old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        return $location.hash(old);
      };
      $scope.getTagList = function(query_tag) {
        var tag, tags, _i, _len, _ref;
        tags = [query_tag];
        _ref = _.keys(APP_DATA.tags);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          if (tag.indexOf(query_tag) > -1) {
            tags.push(tag);
          }
        }
        return _.uniq(tags);
      };
      $scope.getTagPosts = function(all_posts, query_tag) {
        var filtered_posts;
        filtered_posts = $filter("orderBy")(all_posts, "datetime", true);
        filtered_posts = $filter("filter")(filtered_posts, function(post) {
          var is_in_list, tag, _i, _len, _ref;
          is_in_list = false;
          _ref = post.tag;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            tag = _ref[_i];
            if (tag === query_tag) {
              is_in_list = true;
              break;
            }
          }
          return is_in_list;
        });
        return filtered_posts;
      };
      init = function() {
        var _ref;
        $scope.posts = APP_DATA.posts;
        $scope.enableFilterPanel(false);
        if ($routeParams.tag && (_ref = $routeParams.tag, __indexOf.call(_.keys(APP_DATA.tags), _ref) >= 0)) {
          $scope.target_tag = $routeParams.tag;
          return $scope.updateHeaderTitle("文章標籤 – " + $scope.showTag($scope.target_tag));
        } else {
          return $location.path("#/tag");
        }
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("TagListCtrl", [
    '$scope', '$filter', '$routeParams', '$anchorScroll', '$location', function($scope, $filter, $routeParams, $anchorScroll, $location) {
      var init;
      $scope.clearQuery = function() {
        return $scope.query_keyword = "";
      };
      $scope.getFilteredTags = function() {
        var filtered_tags;
        filtered_tags = $filter("orderBy")($scope.tags);
        if ($scope.query_keyword !== "") {
          filtered_tags = $filter("filter")(filtered_tags, $scope.query_keyword);
        }
        return filtered_tags;
      };
      init = function() {
        $scope.updateHeaderTitle("文章標籤");
        $scope.enableFilterPanel(false);
        $scope.tags = _.keys(APP_DATA.tags);
        return $scope.query_keyword = "";
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").directive("tagChooser", function() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        tcUid: "@",
        tcTags: "=",
        tcModel: "=",
        tcAllModel: "=",
        onTcAllChange: "&",
        onTcChange: "&"
      },
      template: '<div class="tag-filter"> <div class="tag-opt"> <input type="checkbox" id="{{tcUid}}_tc_all" name="{{tcUid}}_tag_chooser" value="all" ng-model="tcAllModel" ng-change="onTcAllChange()" /> <label class="tag-label" for="{{tcUid}}_tc_all"> <span class="tag-icon">All</span> </label> </div> <div class="tag-opt" ng-repeat="tag in tcTags | orderBy:\'name\'"> <input type="checkbox" id="{{tcUid}}_tc_{{tag.name}}" name="{{tcUid}}_tag_chooser" value="{{tag.name}}" ng-model="tcModel[tag.name]" ng-change="onTcChange()" /> <label class="tag-label" for="{{tcUid}}_tc_{{tag.name}}"> <span class="tag-icon">{{showTag(tag.name)}}</span> </label> </div> <div class="clearfix" /> </div>',
      controller: function($scope, $element, $attrs) {
        return $scope.showTag = function(name) {
          return name.replace(/_/g, " ‣ ");
        };
      }
    };
  });

}).call(this);
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module("scsBlogApp").factory("TabSwitcher", function() {
    var TabSwitcher;
    TabSwitcher = (function() {
      TabSwitcher.prototype.DEFAULT_TAB = "none";

      TabSwitcher.prototype._init_tab = TabSwitcher.DEFAULT_TAB;

      TabSwitcher.prototype._current_tab = TabSwitcher.DEFAULT_TAB;

      TabSwitcher.prototype.reset = function() {
        return this._current_tab = this._init_tab;
      };

      TabSwitcher.prototype.getTab = function() {
        return this._current_tab;
      };

      TabSwitcher.prototype.setTab = function(tab) {
        return this._current_tab = tab;
      };

      TabSwitcher.prototype.isTab = function(tab) {
        var _ref;
        if (tab instanceof Array) {
          return _ref = this._current_tab, __indexOf.call(tab, _ref) >= 0;
        } else {
          return tab === this._current_tab;
        }
      };

      TabSwitcher.prototype["switch"] = function(tab) {
        if (this.isTab(tab)) {
          return this.reset();
        } else {
          return this.setTab(tab);
        }
      };

      function TabSwitcher(tab) {
        if (tab == null) {
          tab = this.DEFAULT_TAB;
        }
        this._init_tab = tab;
        this.setTab(tab);
      }

      return TabSwitcher;

    })();
    return TabSwitcher;
  });

}).call(this);

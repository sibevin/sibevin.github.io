CATEGORY_DATA = {"tools":{"count":0,"name":"好用工具","code":"tools","desc":"一些工具的使用方式或技巧"},"coding":{"count":0,"name":"程式筆記","code":"coding","desc":"寫程式遇到的問題或是學習用筆記"},"life":{"count":0,"name":"生活隨筆","code":"life","desc":"隨便寫"}};POST_DATA = {};TAG_DATA = {"ruby":{"count":0,"name":"Ruby","code":"ruby","color":"#cc342d","desc":"紅寶石"},"rails":{"count":0,"name":"Rails","code":"rails","color":"#cc342d","desc":"在鐵軌上的紅寶石"},"mysql":{"count":0,"name":"MySQL","code":"mysql","color":"#015a84"},"git":{"count":0,"name":"Git","code":"git","color":"#ef391a"},"ooad":{"count":0,"name":"OOAD","code":"ooad"},"rails_study-group":{"count":0,"name":"Rails > 讀書會","code":"rails_study-group","color":"#cc342d"},"vim":{"count":0,"name":"Vim","code":"vim","color":"#007f00"},"js":{"count":0,"name":"Js","code":"js","color":"#f5f500"},"angularjs":{"count":0,"name":"Angularjs","code":"angularjs","color":"#b94a48"},"jasmine":{"count":0,"name":"Jasmine","code":"jasmine","color":"#772a70"},"note":{"count":0,"name":"筆記","code":"note","color":"#6699ff"},"tips":{"count":0,"name":"技巧","code":"tips","color":"#8f4700"},"cheat-sheet":{"count":0,"name":"小抄","code":"cheat-sheet","color":"#008f6b"},"job":{"count":0,"name":"工作","code":"job","color":"#c7c7c7"},"link":{"count":0,"name":"連結","code":"link","color":"#0174df"},"funny":{"count":0,"name":"有趣","code":"funny","color":"#008f6b"}};(function() {
  var blog_app;

  blog_app = angular.module('scsBlogApp', ['tau-utils', 'focus-if']);

  blog_app.constant("APP_POST_DATA", POST_DATA);

  blog_app.constant("APP_CATEGORY_DATA", CATEGORY_DATA);

  blog_app.constant("APP_TAG_DATA", TAG_DATA);

  angular.element(document).ready(function() {
    return angular.bootstrap(document, ['scsBlogApp']);
  });

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("CategoryListCtrl", [
    '$scope', '$filter', 'APP_CATEGORY_DATA', 'APP_POST_DATA', function($scope, $filter, APP_CATEGORY_DATA, APP_POST_DATA) {
      var init, initVars;
      $scope.getCategories = function() {
        var categories;
        categories = $filter("orderBy")(_.values(APP_CATEGORY_DATA), "name");
        return categories;
      };
      $scope.getCategoryPosts = function() {
        var filtered_posts;
        filtered_posts = [];
        if ($scope.current_category !== void 0) {
          filtered_posts = $filter("filter")(_.values(APP_POST_DATA), function(post) {
            return post.category === $scope.current_category.code;
          });
          $scope.list_count = filtered_posts.length;
          filtered_posts = $filter("orderBy")(filtered_posts, "datetime", true);
        }
        return filtered_posts;
      };
      initVars = function() {
        var ages, nv, params, part, parts;
        params = {};
        if (location.search) {
          parts = location.search.substring(1).split('&');
          ages = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = parts.length; i < len; i++) {
              part = parts[i];
              nv = part.split('=');
              if (!nv[0]) {
                continue;
              }
              results.push(params[nv[0]] = nv[1] || true);
            }
            return results;
          })();
        }
        if (params.c !== void 0 && APP_CATEGORY_DATA[params.c] !== void 0) {
          $scope.current_category = APP_CATEGORY_DATA[params.c];
          $scope.title = "分類 ー " + $scope.current_category.name;
          return $scope.list_count = 0;
        } else {
          $scope.title = "分類";
          return $scope.list_count = Object.keys(APP_CATEGORY_DATA).length;
        }
      };
      init = function() {
        return initVars();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("LayoutCtrl", [
    '$scope', '$filter', 'TabSwitcher', 'APP_TAG_DATA', 'APP_CATEGORY_DATA', 'APP_POST_DATA', function($scope, $filter, TabSwitcher, APP_TAG_DATA, APP_CATEGORY_DATA, APP_POST_DATA) {
      var init, initVars, storePostTagCategoryStr;
      $scope.switchFooter = function(tab, is_switch) {
        if (is_switch == null) {
          is_switch = true;
        }
        if (is_switch) {
          $scope.footer_ts["switch"](tab);
        } else {
          $scope.footer_ts.setTab(tab);
        }
        return $scope.query_keyword = "";
      };
      $scope.getPostTags = function(post) {
        var i, len, ref, tag, tags;
        tags = [];
        ref = post.tags;
        for (i = 0, len = ref.length; i < len; i++) {
          tag = ref[i];
          if (APP_TAG_DATA[tag] !== void 0) {
            tags.push(APP_TAG_DATA[tag]);
          }
        }
        return tags;
      };
      $scope.getPostCategory = function(post) {
        var category;
        category = APP_CATEGORY_DATA[post.category];
        if (category === void 0) {
          category = {
            name: "",
            code: "NONE",
            count: 0
          };
        }
        return category;
      };
      storePostTagCategoryStr = function(post) {
        post.tag_str = _.pluck($scope.getPostTags(post), "name").join();
        post.category_str = $scope.getPostCategory(post).name;
        return post;
      };
      $scope.getSearchPosts = function() {
        var filtered_posts, posts;
        filtered_posts = [];
        if ($scope.query_keyword !== void 0 && $scope.query_keyword !== "") {
          posts = _.map(_.values(APP_POST_DATA), storePostTagCategoryStr);
          filtered_posts = $filter("filter")(posts, $scope.query_keyword);
          $scope.search_count = filtered_posts.length;
          filtered_posts = $filter("orderBy")(filtered_posts, "datetime", true);
        }
        return filtered_posts;
      };
      initVars = function() {
        $scope.footer_ts = new TabSwitcher("close");
        return $scope.display_mode_ts = new TabSwitcher("web");
      };
      init = function() {
        return initVars();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("PostCtrl", [
    '$scope', '$filter', 'APP_POST_DATA', 'CURRENT_FILE', function($scope, $filter, APP_POST_DATA, CURRENT_FILE) {
      var init, initVars;
      initVars = function() {
        return $scope.current_post = APP_POST_DATA[CURRENT_FILE];
      };
      init = function() {
        return initVars();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("PostListCtrl", [
    '$scope', '$filter', 'APP_POST_DATA', function($scope, $filter, APP_POST_DATA) {
      return $scope.getPosts = function() {
        var filtered_posts;
        return filtered_posts = $filter("orderBy")(_.values(APP_POST_DATA), "datetime", true);
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("TagListCtrl", [
    '$scope', '$filter', 'APP_TAG_DATA', 'APP_POST_DATA', function($scope, $filter, APP_TAG_DATA, APP_POST_DATA) {
      var init, initVars;
      $scope.getTags = function() {
        var filtered_tags, tags;
        tags = _.values(APP_TAG_DATA);
        if ($scope.current_tag !== void 0) {
          filtered_tags = $filter("filter")(tags, function(tag) {
            var cand_tag, cand_tags, i, is_match, len;
            cand_tags = $scope.current_tag.code.split("_");
            is_match = false;
            for (i = 0, len = cand_tags.length; i < len; i++) {
              cand_tag = cand_tags[i];
              if (tag.code.match(cand_tag)) {
                is_match = true;
              }
            }
            return is_match;
          });
          tags = filtered_tags;
        }
        tags = $filter("orderBy")(tags, "name");
        return tags;
      };
      $scope.getTagPosts = function() {
        var filtered_posts;
        filtered_posts = [];
        if ($scope.current_tag !== void 0) {
          filtered_posts = $filter("filter")(_.values(APP_POST_DATA), function(post) {
            return _.includes(post.tags, $scope.current_tag.code);
          });
          $scope.list_count = filtered_posts.length;
          filtered_posts = $filter("orderBy")(filtered_posts, "datetime", true);
        }
        return filtered_posts;
      };
      initVars = function() {
        var ages, nv, params, part, parts;
        params = {};
        if (location.search) {
          parts = location.search.substring(1).split('&');
          ages = (function() {
            var i, len, results;
            results = [];
            for (i = 0, len = parts.length; i < len; i++) {
              part = parts[i];
              nv = part.split('=');
              if (!nv[0]) {
                continue;
              }
              results.push(params[nv[0]] = nv[1] || true);
            }
            return results;
          })();
        }
        if (params.t !== void 0 && APP_TAG_DATA[params.t] !== void 0) {
          $scope.current_tag = APP_TAG_DATA[params.t];
          $scope.title = "標籤 ー " + $scope.current_tag.name;
          return $scope.list_count = 0;
        } else {
          $scope.title = "標籤";
          return $scope.list_count = Object.keys(APP_TAG_DATA).length;
        }
      };
      init = function() {
        return initVars();
      };
      return init();
    }
  ]);

}).call(this);
(function() {
  angular.module("scsBlogApp").controller("WorkListCtrl", [
    '$scope', '$filter', 'APP_POST_DATA', function($scope, $filter, APP_POST_DATA) {
      return $scope.getPosts = function() {
        var filtered_posts;
        filtered_posts = $filter("filter")(_.values(APP_POST_DATA), function(post) {
          return _.includes(post.tags, "work");
        });
        $scope.list_count = filtered_posts.length;
        filtered_posts = $filter("orderBy")(filtered_posts, "datetime", true);
        return filtered_posts;
      };
    }
  ]);

}).call(this);

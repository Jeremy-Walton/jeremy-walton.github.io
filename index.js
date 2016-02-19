System.register("index", ["angular2/core", "angular2/platform/browser", "jeremy-walton-github-io"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      JeremyWaltonGithubIo,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      JeremyWaltonGithubIo = $__m.JeremyWaltonGithubIo;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [JeremyWaltonGithubIo],
            template: "\n    <jeremy-walton-github-io></jeremy-walton-github-io>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});

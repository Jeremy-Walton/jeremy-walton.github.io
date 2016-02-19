System.register("index", ["angular2/core", "angular2/platform/browser", "main-app"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      MainApp,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      MainApp = $__m.MainApp;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [MainApp],
            template: "\n    <main-app></main-app>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});

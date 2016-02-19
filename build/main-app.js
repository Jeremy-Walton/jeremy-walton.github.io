System.register("main-app", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      MainApp;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      MainApp = function() {
        function MainApp() {
          console.info('MainApp Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(MainApp, {}, {});
      }();
      $__export("MainApp", MainApp);
      Object.defineProperty(MainApp, "annotations", {get: function() {
          return [new Component({selector: 'main-app'}), new View({templateUrl: 'main-app.html'})];
        }});
    }
  };
});

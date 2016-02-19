System.register("jeremy-walton-github-io", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      JeremyWaltonGithubIo;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      JeremyWaltonGithubIo = function() {
        function JeremyWaltonGithubIo() {
          console.info('JeremyWaltonGithubIo Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(JeremyWaltonGithubIo, {}, {});
      }();
      $__export("JeremyWaltonGithubIo", JeremyWaltonGithubIo);
      Object.defineProperty(JeremyWaltonGithubIo, "annotations", {get: function() {
          return [new Component({selector: 'jeremy-walton-github-io'}), new View({templateUrl: 'jeremy-walton-github-io.html'})];
        }});
    }
  };
});

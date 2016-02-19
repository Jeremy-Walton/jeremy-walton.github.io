import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {JeremyWaltonGithubIo} from 'jeremy-walton-github-io';

@Component({
  selector: 'main'
})

@View({
  directives: [JeremyWaltonGithubIo],
  template: `
    <jeremy-walton-github-io></jeremy-walton-github-io>
  `
})

class Main {

}

bootstrap(Main);

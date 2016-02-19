import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MainApp} from 'main-app';

@Component({
  selector: 'main'
})

@View({
  directives: [MainApp],
  template: `
    <main-app></main-app>
  `
})

class Main {

}

bootstrap(Main);

import {Component, View} from 'angular2/core';

@Component({
  selector: 'main-app'
})

@View({
  templateUrl: 'main-app.html'
})

export class MainApp {

  constructor() {
    console.info('MainApp Component Mounted Successfully');
  }

}

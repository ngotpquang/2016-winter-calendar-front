import { Component, OnInit } from '@angular/core';

import { LoadingPage } from '../loading-indicator/loading-page';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent extends LoadingPage implements OnInit {

  constructor() {
    super('loading');
    console.log(this.loading);
  }

  ngOnInit() {
    console.log(this.loading);
    this.ready();
    console.log(this.loading);
  }

}

import { Component, OnInit } from '@angular/core';

import { LoadingPage } from '../loading-indicator/loading-page';

@Component({
  selector: 'app-root',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent extends LoadingPage implements OnInit {

  constructor() {
    super('loading');
  }

  ngOnInit() {
    this.ready();
  }

}

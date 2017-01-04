import { Component, OnInit } from '@angular/core';

import { CommonFunctions } from '../shared/common-functions';
import { LoadingPage } from '../loading-indicator/loading-page';

@Component({
    selector: 'app-root',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent extends LoadingPage implements OnInit {
    private commonFunctions: CommonFunctions;
    constructor() {
        super('loading');
        this.commonFunctions = new CommonFunctions();
    }

    ngOnInit() {
        if (this.commonFunctions.getUserLogined() != null) {
            this.commonFunctions.changeTitleContent('Your dashboard');
        } else {
            this.commonFunctions.changeTitleContent('Seinfeld Calendar');
        }
        this.ready();
    }

}

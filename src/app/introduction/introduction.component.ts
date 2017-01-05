import { Component, OnInit } from '@angular/core';

import { CommonFunctions } from '../shared/common-functions';

@Component({
    selector: 'app-root',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
    private currentUser;
    private commonFunctions: CommonFunctions;
    constructor() {
        this.commonFunctions = new CommonFunctions();
    }

    ngOnInit() {
        this.commonFunctions.changeBackground(true);
        this.currentUser = localStorage.getItem('currentUser');
        this.commonFunctions.changeTitleContent('Seinfeld Calendar');
    }

}

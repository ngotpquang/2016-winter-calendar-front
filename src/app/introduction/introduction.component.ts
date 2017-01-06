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
        // window.location.reload();
        this.commonFunctions.changeBackground(true);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
        this.commonFunctions.changeTitleContent('Seinfeld Calendar');
    }

}

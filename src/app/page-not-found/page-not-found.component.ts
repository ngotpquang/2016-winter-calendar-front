import { Component, OnInit } from '@angular/core';

import { CommonFunctions } from '../shared/common-functions';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
    private commonFunctions: CommonFunctions;
    constructor() {
        this.commonFunctions = new CommonFunctions();
    }

    ngOnInit() {
        this.commonFunctions.changeBackground(false);
    }

}

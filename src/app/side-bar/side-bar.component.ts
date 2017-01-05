import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    currentUser;
    constructor() { }

    ngOnInit() {
    }

    toggleSideBar(size: string) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        document.getElementById("mySidenav").style.width = size;
        if (size !== '0') {
            document.getElementById("openSideBar").hidden = true;
        } else {
            document.getElementById("openSideBar").hidden = false;
        }
    }
}

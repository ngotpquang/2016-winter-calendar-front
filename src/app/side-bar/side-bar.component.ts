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
        console.log(this.currentUser);
    }

    /* Set the width of the side navigation to 250px */
    toggleSideBar(size: string) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        document.getElementById("mySidenav").style.width = size;
        // let main = <HTMLElement>document.getElementsByTagName('body')[0];
        if (size !== '0') {
            document.getElementById("openSideBar").hidden = true;
        } else {
            document.getElementById("openSideBar").hidden = false;
        }
    }
}

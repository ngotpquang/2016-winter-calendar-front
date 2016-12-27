import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonFunctions } from './shared/common-functions';
import { UserService } from './user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string;
    listButton;
    commonFunctions: CommonFunctions;
    constructor(private router: Router, private userService: UserService) { }
    ngOnInit() {
        this.title = "Seinfeld Calendar";
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            this.commonFunctions = new CommonFunctions();
            this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            this.title = "Your dashboard";
        } else {
            this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
        }

    }
    logout() {
        let currentUser = localStorage.getItem('currentUser');
        this.userService.logOut().subscribe(
            res => {
                console.log(res);
                localStorage.removeItem('currentUser');
                this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
                let defaultButton = document.getElementsByClassName("default-button");
                let logoutButton = <HTMLInputElement>document.getElementById("logout-button");
                if (defaultButton.length != 0) {
                    (<HTMLInputElement>defaultButton[0]).hidden = false;
                    (<HTMLInputElement>defaultButton[1]).hidden = false;
                }
                let titleContent = <HTMLInputElement>document.getElementById("title-content");
                titleContent.innerHTML = "Seinfeld Calendar";
                logoutButton.hidden = true;
                this.router.navigate(['/']);
            },
            error => console.log(error)
        );
    }
    onClick(string) {
        this.router.navigate(['/' + string]);
    }
}

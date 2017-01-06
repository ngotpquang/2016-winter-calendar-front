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
    constructor(private router: Router, private userService: UserService) {
    }
    ngOnInit() {
        this.title = "Seinfeld Calendar";
        this.commonFunctions = new CommonFunctions();
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            this.title = "Your dashboard";
        } else {
            this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
        }

    }

    openModal(showed: boolean): void {
        let modal = document.getElementById('notification-logout');
        let span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    loginModal(showed: boolean): void {
        let modal = document.getElementById('login-modal');
        let span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    logout(): void {
        let currentUser = localStorage.getItem('currentUser');
        this.openModal(true);
        this.userService.logOut().subscribe(
            res => {
                localStorage.removeItem('currentUser');
                this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
                let defaultButton = document.getElementsByClassName("default-button");
                let logoutButton = <HTMLInputElement>document.getElementById("logout-button");
                if (defaultButton.length != 0) {
                    (<HTMLInputElement>defaultButton[0]).hidden = false;
                    (<HTMLInputElement>defaultButton[1]).hidden = false;
                }
                this.commonFunctions.changeTitleContent("Seinfeld Calendar");
                logoutButton.hidden = true;
                this.userService.setLoggedIn(false);
                this.openModal(false);
                this.router.navigate(['/login']);
            },
            error => console.log(error)
        );
    }
    onClick(string): void {
        this.router.navigate(['/' + string]);
    }
}

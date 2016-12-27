import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from './user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string;
    listButton;
    constructor(private router: Router, private userService: UserService) { }
    ngOnInit() {
        this.title = "Seinfeld Calendar";
        this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
    }
    logout() {
        let currentUser = localStorage.getItem('currentUser');
        this.userService.logOut().subscribe(
            res => {
                console.log(res);
                localStorage.removeItem('currentUser');
                let defaultButton = document.getElementsByClassName("default-button");
                let logoutButton = <HTMLInputElement>document.getElementById("logout-button");
                (<HTMLInputElement>defaultButton[0]).hidden = false;
                (<HTMLInputElement>defaultButton[1]).hidden = false;
                let titleContent = <HTMLInputElement>document.getElementById("title-content");
                titleContent.innerHTML = this.title;
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

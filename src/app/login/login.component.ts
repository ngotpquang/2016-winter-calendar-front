import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

import { LoadingPage } from '../loading-indicator/loading-page';
import { UserService } from '../user/user.service';
import { CommonFunctions } from '../shared/common-functions';
import '../rxjs-operator'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoadingPage implements OnInit {
    commonFunctions: CommonFunctions;
    constructor(private router: Router, private userService: UserService) {
        super('loaded');
    }

    ngOnInit() {
        this.commonFunctions = new CommonFunctions();
    }

    public loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
    });

    doLogin() {
        let user = this.loginForm.value;
        this.standby();
        this.userService.logIn(user.email, user.password).subscribe(
            res => {
                this.ready();
                localStorage.setItem('currentUser', JSON.stringify(res.json().data));
                this.userService.setLoggedIn(true);
                this.router.navigate(['/detailview']);
                this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            },
            error => console.log(error)
        );
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

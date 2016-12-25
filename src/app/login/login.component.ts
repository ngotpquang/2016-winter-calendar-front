import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { Angular2TokenService } from 'angular2-token';
import '../rxjs-operator'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router, private tokenService: Angular2TokenService) {
        this.tokenService.init({
            apiPath: 'https://wintercalendar.herokuapp.com/api/v1',

            signInPath: 'auth/sign_in',
            signInRedirect: null,
            signInStoredUrlStorageKey: null,

            signOutPath: 'auth/sign_out',
            validateTokenPath: 'auth/validate_token',
            signOutFailedValidate: false,

            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: window.location.href,

            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,

            oAuthPaths: {
                github: 'auth/github'
            },
            oAuthCallbackPath: 'oauth_callback',
            oAuthWindowType: 'newWindow',

            userTypes: null,

            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    }

    ngOnInit() {
    }

    public loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
    });
    doLogin() {
        let user = this.loginForm.value;
        // if (user.password != "11111111") {
        //     (<HTMLInputElement>document.getElementById('wrong-input')).hidden = false;
        // } else {
        //     (<HTMLInputElement>document.getElementById('wrong-input')).hidden = true;
        //     alert(JSON.stringify(this.loginForm.value));
        //     localStorage.setItem('myStorage', JSON.stringify(this.loginForm.value));
        //     console.log(JSON.parse(localStorage.getItem('myStorage')));
        // }
        console.log(JSON.stringify(this.loginForm.value));
        this.tokenService.signIn({ email: user.email, password: user.password }).subscribe(
            res => {
                console.log(res);
            },
            error => console.log(error)
        );
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

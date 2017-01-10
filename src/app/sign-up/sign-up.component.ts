import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

import { LoadingPage } from '../loading-indicator/loading-page';
import { UserService } from '../user/user.service';
import { CommonFunctions } from '../shared/common-functions';
import '../rxjs-operator'

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends LoadingPage implements OnInit {
    commonFunctions: CommonFunctions;
    isPasswordNotMatch: boolean = false;
    email: string = '';
    submitted: boolean = false;
    constructor(private router: Router, private userService: UserService) {
        super('loaded');
    }

    ngOnInit() {
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeBackground(false);
    }

    public signUpForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
        password_confirmation: new FormControl('', Validators.minLength(8))
    });
    doSignUp(event) {
        let user = this.signUpForm.value;
        if (user.password != user.password_confirmation) {
            this.isPasswordNotMatch = true;
        } else {
            this.commonFunctions.changeBackground(false);
            this.standby();
            this.userService.signUp(user.name, user.email, user.password).subscribe((res) => {
                this.email = user.email;
                console.log(this.email);
                this.ready();
                this.submitted = true;
            },
                (error) => {
                    this.ready();
                    let errorDisplay = JSON.parse(error['_body']);
                    alert(errorDisplay['error']);
                }
            );
        }
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    }
}

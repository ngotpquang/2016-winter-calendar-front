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
        this.commonFunctions.changeBackground(false);
        this.standby();
        this.userService.signUp(user.name, user.email, user.password).subscribe((res) => {
            this.email = user.email;
            console.log(this.email);
            this.ready();
            this.submitted = true;
            /*let confirmed_token = res.json().data;
            console.log(confirmed_token);
            console.log(confirmed_token.confirmed_token);
            this.userService.confirmEmail(confirmed_token.confirmed_token).subscribe((res) => {
              localStorage.setItem('currentUser', JSON.stringify(res.json().data));
              console.log(localStorage.getItem('currentUser'));
              this.userService.setLoggedIn(true);
              this.commonFunctions.changeTitleAfterLogined("Your dashboard");
              this.router.navigate(['/detailview']);
            })*/
        },
            error => console.log(error)
        );
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { CommonFunctions } from '../shared/common-functions';
import '../rxjs-operator'

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    commonFunctions: CommonFunctions;
    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        this.commonFunctions = new CommonFunctions();
    }

    public signUpForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
        password_confirmation: new FormControl('', Validators.minLength(8))
    });
    doSignUp(event) {
        let user = this.signUpForm.value;
        console.log(user);
        this.userService.signUp(user.name, user.email, user.password).subscribe((res) => {
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

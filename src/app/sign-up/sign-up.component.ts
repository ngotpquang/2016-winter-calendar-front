import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

import { UserService } from '../user/user.service'
import '../rxjs-operator'

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    public signUpForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
        password_confirmation: new FormControl('', Validators.minLength(8))
    });
    // constructor(public fb: FormBuilder) { }
    doSignUp(event) {
        // console.log(event);
        let user = this.signUpForm.value;
        console.log(user);
        // var passwordRegrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,200}$/;
        // if (!user.password.match(passwordRegrex)) {
        //     let alert = (<HTMLInputElement>document.getElementById('password-match'));
        //     alert.innerHTML = "Password must be more than 8 characters and contains at least one numeric digit, one uppercase and one lowercase letter"
        //     alert.hidden = false;
        // } else if (user.password != user.confirmPassword) {
        //     (<HTMLInputElement>document.getElementById('password-match')).hidden = false;
        // } else {
        //     (<HTMLInputElement>document.getElementById('password-match')).hidden = true;
        //     alert(JSON.stringify(this.signUpForm.value));
        //     localStorage.setItem('myStorage', JSON.stringify(this.signUpForm.value));
        //     console.log(JSON.parse(localStorage.getItem('myStorage')));
        //     // console.log(localStorage);
        // }
        this.userService.signup(user.name, user.email, user.password, user.password_comfirmation).subscribe((result) => {
            if (result) {
                console.log("Result: " + result);
                this.router.navigate(['']);
            } else {
                console.log("Sign up failed");
            }
        });
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

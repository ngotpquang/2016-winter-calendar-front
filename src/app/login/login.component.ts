import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router';

import { UserService } from '../user/user.service'
import '../rxjs-operator'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) {
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
        this.userService.login(user.email, user.password).subscribe((result) => {
            if (result) {
                console.log(result);
                console.log("1111111111111111111111111");
                console.log(result.headers['_headers']);
                console.log("1111111111111111111111111");
                console.log("Result: " + result);
                this.router.navigate(['']);
            }
            else {
                console.log("Login failed");
            }
        });
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

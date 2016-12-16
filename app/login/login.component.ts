import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/sign-up/sign-up.component.min.css']
})
export class LoginComponent {
    public loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
    });
    // constructor(public fb: FormBuilder) { }
    doLogin() {
        let user = this.loginForm.value;
        if (user.password != "abcdef") {
            (<HTMLInputElement>document.getElementById('wrong-input')).hidden = false;
        } else {
            (<HTMLInputElement>document.getElementById('wrong-input')).hidden = true;
            localStorage.setItem('myStorage', JSON.stringify(this.loginForm.value));
            console.log(JSON.parse(localStorage.getItem('myStorage')));
            console.log(localStorage);
        }
    }

    moveLabelUp(string) {
        let label = document.getElementById("label-" + string);
        label.classList.add('active');
    }
    moveLabelDown(string) {
        let input = (<HTMLInputElement>document.getElementById(string)).value;
        if (input === '' || input === 'blank') {
            let label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    }

    moveLabelAllDown() {
        let inputs = ['email', 'fullName', 'password', 'confirmPassword'];
        for (let input of inputs) {
            if (<HTMLInputElement>document.getElementById(input) != null) {
                (<HTMLInputElement>document.getElementById(input)).value = "";
                let label = document.getElementById("label-" + input);
                label.classList.remove('active');
            }
        }
        (<HTMLInputElement>document.getElementById('wrong-input')).hidden = true;
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

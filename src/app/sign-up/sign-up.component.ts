import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public signUpForm = new FormGroup({
        email: new FormControl('', Validators.required),
        fullName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.minLength(8)),
        confirmPassword: new FormControl('', Validators.minLength(8))
    });
    // constructor(public fb: FormBuilder) { }
    doSignUp(event) {
        // console.log(event);
        let user = this.signUpForm.value;
        console.log(user);
        var passwordRegrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,200}$/;
        if (!user.password.match(passwordRegrex)) {
            let alert = (<HTMLInputElement>document.getElementById('password-match'));
            alert.innerHTML = "Password must be more than 8 characters and contains at least one numeric digit, one uppercase and one lowercase letter"
            alert.hidden = false;
        } else if (user.password != user.confirmPassword) {
            (<HTMLInputElement>document.getElementById('password-match')).hidden = false;
        } else {
            (<HTMLInputElement>document.getElementById('password-match')).hidden = true;
            alert(JSON.stringify(this.signUpForm.value));
            localStorage.setItem('myStorage', JSON.stringify(this.signUpForm.value));
            console.log(JSON.parse(localStorage.getItem('myStorage')));
            // console.log(localStorage);
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
        (<HTMLInputElement>document.getElementById('password-match')).hidden = true;
    }

    displayPassword(string) {
        let passwordInput = <HTMLInputElement>document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text'
    }
}

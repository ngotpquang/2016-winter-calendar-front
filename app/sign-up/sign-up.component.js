"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignUpComponent = (function () {
    function SignUpComponent() {
        this.signUpForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', forms_1.Validators.required),
            fullName: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.minLength(8)),
            confirmPassword: new forms_1.FormControl('', forms_1.Validators.minLength(8))
        });
    }
    SignUpComponent.prototype.doSignUp = function (event) {
        var user = this.signUpForm.value;
        console.log(user);
        var passwordRegrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,200}$/;
        if (!user.password.match(passwordRegrex)) {
            var alert_1 = document.getElementById('password-match');
            alert_1.innerHTML = "Password must be more than 8 characters and contains at least one numeric digit, one uppercase and one lowercase letter";
            alert_1.hidden = false;
        }
        else if (user.password != user.confirmPassword) {
            document.getElementById('password-match').hidden = false;
        }
        else {
            document.getElementById('password-match').hidden = true;
            localStorage.setItem('myStorage', JSON.stringify(this.signUpForm.value));
            console.log(JSON.parse(localStorage.getItem('myStorage')));
            console.log(localStorage);
        }
    };
    SignUpComponent.prototype.moveLabelUp = function (string) {
        var label = document.getElementById("label-" + string);
        label.classList.add('active');
    };
    SignUpComponent.prototype.moveLabelDown = function (string) {
        var input = document.getElementById(string).value;
        if (input === '' || input === 'blank') {
            var label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    };
    SignUpComponent.prototype.moveLabelAllDown = function () {
        var inputs = ['email', 'fullName', 'password', 'confirmPassword'];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            if (document.getElementById(input) != null) {
                document.getElementById(input).value = "";
                var label = document.getElementById("label-" + input);
                label.classList.remove('active');
            }
        }
        document.getElementById('password-match').hidden = true;
    };
    SignUpComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'sign-up',
        templateUrl: 'app/sign-up/sign-up.component.html',
        styleUrls: ['app/sign-up/sign-up.component.min.css']
    }),
    __metadata("design:paramtypes", [])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;

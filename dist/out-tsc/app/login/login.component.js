var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
var LoginComponent = (function () {
    function LoginComponent() {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.minLength(8)),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function () {
        var user = this.loginForm.value;
        if (user.password != "11111111") {
            document.getElementById('wrong-input').hidden = false;
        }
        else {
            document.getElementById('wrong-input').hidden = true;
            alert(JSON.stringify(this.loginForm.value));
            localStorage.setItem('myStorage', JSON.stringify(this.loginForm.value));
            console.log(JSON.parse(localStorage.getItem('myStorage')));
        }
    };
    LoginComponent.prototype.moveLabelUp = function (string) {
        var label = document.getElementById("label-" + string);
        label.classList.add('active');
    };
    LoginComponent.prototype.moveLabelDown = function (string) {
        var input = document.getElementById(string).value;
        if (input === '' || input === 'blank') {
            var label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    };
    LoginComponent.prototype.moveLabelAllDown = function () {
        var inputs = ['email', 'fullName', 'password', 'confirmPassword'];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            if (document.getElementById(input) != null) {
                document.getElementById(input).value = "";
                var label = document.getElementById("label-" + input);
                label.classList.remove('active');
            }
        }
        document.getElementById('wrong-input').hidden = true;
    };
    LoginComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../src/app/login/login.component.js.map
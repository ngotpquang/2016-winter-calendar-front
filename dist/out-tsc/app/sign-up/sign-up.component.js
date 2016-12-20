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
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import '../rxjs-operator';
var SignUpComponent = (function () {
    function SignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.signUpForm = new FormGroup({
            email: new FormControl('', Validators.required),
            fullName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.minLength(8)),
            confirmPassword: new FormControl('', Validators.minLength(8))
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.doSignUp = function (event) {
        var _this = this;
        var user = this.signUpForm.value;
        console.log(user);
        this.userService.signup(user.fullName, user.email, user.password).subscribe(function (result) {
            if (result) {
                _this.router.navigate(['']);
            }
        });
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
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['../login/login.component.scss']
    }),
    __metadata("design:paramtypes", [UserService, Router])
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=../../../../src/app/sign-up/sign-up.component.js.map
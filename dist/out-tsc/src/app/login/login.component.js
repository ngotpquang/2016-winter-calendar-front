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
import { CommonFunctions } from '../shared/common-functions';
import '../rxjs-operator';
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.minLength(8)),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.commonFunctions = new CommonFunctions();
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        var user = this.loginForm.value;
        console.log(JSON.stringify(this.loginForm.value));
        this.userService.logIn(user.email, user.password).subscribe(function (res) {
            localStorage.setItem('currentUser', JSON.stringify(res.json().data));
            _this.router.navigate(['/detailview']);
            _this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            _this.router.navigate(['/detailview']);
        }, function (error) { return console.log(error); });
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
    __metadata("design:paramtypes", [Router, UserService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../src/app/login/login.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { headers } from '../shared/headers';
import '../rxjs-operator';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/sign_in', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) {
            if (res) {
                console.log(res);
                console.log("Response: " + JSON.stringify(res.json()));
                console.log("Response: " + (res.headers));
                _this.loggedIn = true;
            }
            else {
                console.log(res);
            }
            return res;
        });
    };
    UserService.prototype.signup = function (name, email, password, password_comfirmation) {
        var _this = this;
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/', JSON.stringify({ name: name, email: email, password: password, password_comfirmation: password_comfirmation }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
                console.log("Response: " + res);
                _this.loggedIn = true;
            }
            else {
                console.log(res);
            }
            return res;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
export { UserService };
//# sourceMappingURL=../../../../src/app/user/user.service.js.map
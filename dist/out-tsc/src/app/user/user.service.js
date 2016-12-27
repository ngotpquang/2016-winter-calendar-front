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
import { Http, RequestOptions } from '@angular/http';
import { headers } from '../shared/headers';
import '../rxjs-operator';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.logIn = function (email, password) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/sign_in', JSON.stringify({ email: email, password: password }), { headers: headers });
    };
    UserService.prototype.signUp = function (name, email, password) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/sign_up', JSON.stringify({ name: name, email: email, password: password }), { headers: headers });
    };
    UserService.prototype.logOut = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            return this.http
                .delete('https://wintercalendar.herokuapp.com/api/v1/auth/sign_out', new RequestOptions({
                headers: headers,
                body: currentUser
            }));
        }
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
//# sourceMappingURL=../../../../../src/app/user/user.service.js.map
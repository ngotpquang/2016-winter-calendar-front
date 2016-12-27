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
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
var TitleBarComponent = (function () {
    function TitleBarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    TitleBarComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userName = currentUser == null ? null : currentUser.name;
        this.title = 'Seinfeld Calendar';
        this.listButton = JSON.parse(localStorage.getItem('defaultButton'));
    };
    TitleBarComponent.prototype.onClick = function (string) {
        var _this = this;
        if (string.includes('logout')) {
            var currentUser = localStorage.getItem('currentUser');
            this.userService.logout().subscribe(function (res) {
                console.log(res);
                localStorage.removeItem('currentUser');
                localStorage.setItem('defaultButton', JSON.stringify([{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }]));
                _this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
                _this.userName = null;
                _this.router.navigate(['/']);
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/' + string]);
        }
    };
    return TitleBarComponent;
}());
TitleBarComponent = __decorate([
    Component({
        selector: 'app-title-bar',
        templateUrl: './title-bar.component.html',
        styleUrls: ['./title-bar.component.scss']
    }),
    __metadata("design:paramtypes", [Router, UserService])
], TitleBarComponent);
export { TitleBarComponent };
//# sourceMappingURL=../../../../../src/app/title-bar/title-bar.component.js.map
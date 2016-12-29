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
import { CommonFunctions } from './shared/common-functions';
import { UserService } from './user/user.service';
var AppComponent = (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title = "Seinfeld Calendar";
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            this.commonFunctions = new CommonFunctions();
            this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            this.title = "Your dashboard";
        }
        else {
            this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
        }
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        var currentUser = localStorage.getItem('currentUser');
        this.userService.logOut().subscribe(function (res) {
            console.log(res);
            localStorage.removeItem('currentUser');
            _this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
            var defaultButton = document.getElementsByClassName("default-button");
            var logoutButton = document.getElementById("logout-button");
            if (defaultButton.length != 0) {
                defaultButton[0].hidden = false;
                defaultButton[1].hidden = false;
            }
            var titleContent = document.getElementById("title-content");
            titleContent.innerHTML = "Seinfeld Calendar";
            logoutButton.hidden = true;
            _this.router.navigate(['/']);
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.onClick = function (string) {
        this.router.navigate(['/' + string]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [Router, UserService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../../src/app/app.component.js.map
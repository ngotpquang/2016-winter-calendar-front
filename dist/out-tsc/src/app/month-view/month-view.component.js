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
var MonthViewComponent = (function () {
    function MonthViewComponent() {
    }
    MonthViewComponent.prototype.ngOnInit = function () {
        this.displayCalendar(11, 2016);
    };
    MonthViewComponent.prototype.displayCalendar = function (month, fullYear) {
        var today = new Date();
        var result = "";
        var firstDay = new Date(fullYear, month, 1);
        var lastDay = new Date(fullYear, month + 1, 0);
        var spaceBefore = firstDay.getDay() == 0 ? 6 : (firstDay.getDay() - 1);
        for (var i = 0; i < spaceBefore; i++) {
            result += "<li></li>";
        }
        for (var i = 1; i <= lastDay.getDate(); i++) {
            if (i == today.getDate()) {
                result += "<li class='active'>" + i + "</li>";
            }
            else {
                result += "<li>" + i + "</li>";
            }
        }
        var calendar = document.getElementById('calendar');
        calendar.innerHTML = result;
    };
    return MonthViewComponent;
}());
MonthViewComponent = __decorate([
    Component({
        selector: 'app-month-view',
        templateUrl: './month-view.component.html',
        styleUrls: ['./month-view.component.scss']
    }),
    __metadata("design:paramtypes", [])
], MonthViewComponent);
export { MonthViewComponent };
//# sourceMappingURL=../../../../../src/app/month-view/month-view.component.js.map
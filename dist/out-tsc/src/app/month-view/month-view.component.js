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
import { Router, ActivatedRoute } from '@angular/router';
import '../rxjs-operator';
import { GoalService } from '../goal/goal.service';
var MonthViewComponent = (function () {
    function MonthViewComponent(route, router, goalService) {
        this.route = route;
        this.router = router;
        this.goalService = goalService;
    }
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.goalService.getGoalsById(params['id']); })
            .subscribe(function (res) {
            _this.goal = res.json();
            console.log(_this.goal);
            _this.displayCalendar(new Date().getMonth(), new Date().getFullYear());
            _this.displayGoalOnCalendar();
        }, function (error) { return console.log(error); });
    };
    MonthViewComponent.prototype.enableEdit = function () {
        var today = new Date();
        var startDate = new Date(this.goal.start_date);
    };
    MonthViewComponent.prototype.toggleDate = function (id, isPassed) {
        var date = document.getElementById(id);
        if (isPassed) {
            date.classList.add('pass');
        }
        else {
            date.classList.add('fail');
        }
    };
    MonthViewComponent.prototype.displayGoalOnCalendar = function () {
        var calendars = this.goal.calendars;
        var monthName = document.getElementById('monthName');
        var month = this.getMonth(monthName.innerHTML);
        var year = document.getElementById('year');
        for (var i = 1; i <= 42; i++) {
            var day = document.getElementById(i + "");
            for (var _i = 0, calendars_1 = calendars; _i < calendars_1.length; _i++) {
                var calendar = calendars_1[_i];
                var fullDate = new Date(calendar.date_of_calendar);
                var status_1 = calendar.status;
                day.classList.remove('pass');
                day.classList.remove('fail');
                if (day.innerHTML == (fullDate.getDate() + "") && month == fullDate.getMonth() && fullDate.getFullYear() == parseInt(year.innerHTML)) {
                    if (status_1 == "1") {
                        this.toggleDate(i + "", true);
                    }
                    else if (status_1 == "2") {
                        this.toggleDate(i + "", false);
                    }
                    break;
                }
            }
        }
    };
    MonthViewComponent.prototype.getMonthName = function (month) {
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for (var i in monthNames) {
            if (i == month + "") {
                return monthNames[i];
            }
        }
    };
    MonthViewComponent.prototype.getMonth = function (monthName) {
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames.indexOf(monthName);
    };
    MonthViewComponent.prototype.displayCalendar = function (month, fullYear) {
        var monthName = document.getElementById('monthName');
        var year = document.getElementById('year');
        monthName.innerHTML = this.getMonthName(month);
        year.innerHTML = fullYear;
        var today = new Date();
        var firstDay = new Date(fullYear, month, 1);
        var lastDay = month < 11 ? new Date(fullYear, month + 1, 0) : new Date(fullYear + 1, 0, 0);
        var spaceBefore = firstDay.getDay() == 0 ? 6 : (firstDay.getDay() - 1);
        for (var i = 1; i <= spaceBefore; i++) {
            var li = document.getElementById(i + "");
            li.innerHTML = "&nbsp;";
            li.classList.add('hide-background');
        }
        for (var i = spaceBefore + 1; i <= spaceBefore + lastDay.getDate(); i++) {
            var li = document.getElementById(i + "");
            li.classList.remove('hide');
            li.classList.remove('hide-background');
            li.style.cursor = "pointer";
            li.innerHTML = i - spaceBefore + "";
            if (i == (today.getDate() + spaceBefore) && today.getMonth() == month && today.getFullYear() == fullYear) {
                li.classList.add('active');
            }
            else {
                li.classList.remove('active');
            }
        }
        for (var i = spaceBefore + lastDay.getDate() + 1; i <= 42; i++) {
            var li = document.getElementById(i + "");
            li.classList.add('hide');
        }
    };
    MonthViewComponent.prototype.previousMonth = function () {
        var monthName = document.getElementById('monthName');
        var month = this.getMonth(monthName.innerHTML);
        var year = document.getElementById('year');
        var previousMonth = month > 0 ? month - 1 : 11;
        var y = month == 0 ? parseInt(year.innerHTML) - 1 : parseInt(year.innerHTML);
        this.displayCalendar(previousMonth, y);
        this.displayGoalOnCalendar();
    };
    MonthViewComponent.prototype.nextMonth = function () {
        var monthName = document.getElementById('monthName');
        var month = this.getMonth(monthName.innerHTML);
        var year = document.getElementById('year');
        var nextMonth = month < 11 ? month + 1 : 0;
        var y = month == 11 ? parseInt(year.innerHTML) + 1 : parseInt(year.innerHTML);
        this.displayCalendar(nextMonth, y);
        this.displayGoalOnCalendar();
    };
    MonthViewComponent.prototype.displayDate = function (id) {
        var _this = this;
        var date = document.getElementById(id + "");
        var monthName = document.getElementById('monthName');
        var month = this.getMonth(monthName.innerHTML) + 1;
        var year = document.getElementById('year');
        var fullDate = year.innerHTML + "-" + month + "-" + date.innerHTML;
        var markDate = new Date(fullDate).setHours(0, 0, 0, 0);
        var startDate = new Date(this.goal.start_date).setHours(0, 0, 0, 0);
        var today = new Date().setHours(0, 0, 0, 0);
        console.log(markDate + "|" + today + "|" + startDate);
        if (markDate >= startDate && markDate <= today) {
            if (date.classList.item(0) == null || date.classList.item(0) == 'active') {
                if (date.classList.item(1) == 'pass') {
                    date.classList.remove('pass');
                    date.classList.add('fail');
                    this.goalService.markGoal(this.goal.id, fullDate, "2").subscribe(function (res) { console.log(res); _this.goal = res.json(); _this.router.navigate(["/monthview/" + _this.goal.id]); }, function (error) { return console.log(error); });
                }
                else if (date.classList.item(1) == 'fail') {
                    date.classList.remove('fail');
                    this.goalService.markGoal(this.goal.id, fullDate, "0").subscribe(function (res) { console.log(res); _this.goal = res.json(); _this.router.navigate(["/monthview/" + _this.goal.id]); }, function (error) { return console.log(error); });
                }
                else {
                    date.classList.add('pass');
                    this.goalService.markGoal(this.goal.id, fullDate, "1").subscribe(function (res) { console.log(res); _this.goal = res.json(); _this.router.navigate(["/monthview/" + _this.goal.id]); }, function (error) { return console.log(error); });
                }
            }
            else if (date.classList.item(0) == 'pass') {
                date.classList.remove('pass');
                date.classList.add('fail');
                this.goalService.markGoal(this.goal.id, fullDate, "2").subscribe(function (res) { console.log(res); _this.goal = res.json(); _this.router.navigate(["/monthview/" + _this.goal.id]); }, function (error) { return console.log(error); });
            }
            else {
                date.classList.remove('fail');
                this.goalService.markGoal(this.goal.id, fullDate, "0").subscribe(function (res) { console.log(res); _this.goal = res.json(); _this.router.navigate(["/monthview/" + _this.goal.id]); }, function (error) { return console.log(error); });
            }
        }
    };
    return MonthViewComponent;
}());
MonthViewComponent = __decorate([
    Component({
        selector: 'app-month-view',
        templateUrl: './month-view.component.html',
        styleUrls: ['./month-view.component.scss']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        GoalService])
], MonthViewComponent);
export { MonthViewComponent };
//# sourceMappingURL=../../../../../src/app/month-view/month-view.component.js.map
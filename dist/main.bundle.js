webpackJsonp([0,3],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/rxjs-operator.js.map

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    LoggedInGuard.prototype.checkLogin = function (url) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.userService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/logged-in.guard.js.map

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rxjs_operator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goal_goal_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MonthViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonthViewComponent = (function () {
    function MonthViewComponent(route, router, goalService) {
        this.route = route;
        this.router = router;
        this.goalService = goalService;
        this.hiddenWeekdays = true;
        this.timeOut = [42];
    }
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeBackground(false);
        this.openModal(true);
        var currentUser = localStorage.getItem('currentUser');
        var id = this.route.params['_value']['id'];
        // console.log(id);
        this.goalService.getGoalsById(id).subscribe(function (res) {
            _this.goal = res.json();
            _this.commonFunctions.changeTitleContent(_this.goal.goal_name);
            _this.displayCalendar(new Date().getMonth(), new Date().getFullYear());
            _this.displayGoalOnCalendar();
            _this.displayGoalInfor();
            _this.openModal(false);
            _this.hiddenWeekdays = false;
        }, function (error) {
            console.log(error['status']);
            _this.router.navigate(['/pagenotfound']);
        });
    };
    MonthViewComponent.prototype.openModal = function (showed) {
        var modal = document.getElementById('notification-loading');
        var span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }
    };
    MonthViewComponent.prototype.editGoal = function () {
        if (this.goal.is_archived) {
            var displayInfor_1 = document.getElementById("show-infor");
            displayInfor_1.classList.add('visible');
            setTimeout(function () { displayInfor_1.classList.remove('visible'); }, 2000);
        }
        else {
            this.router.navigate(['/editgoal', this.goal.id]);
        }
    };
    MonthViewComponent.prototype.displayGoalInfor = function () {
        var startDate = document.getElementById('start-date');
        var description = document.getElementById('description');
        var repetition = document.getElementById('repetition');
        var bestChain = document.getElementById('best-chain');
        var progress = document.getElementById('progress');
        var currentChain = document.getElementById('current-chain');
        var endDate = document.getElementById('end-date');
        var routeListView = document.getElementById('route-list-view');
        startDate.innerHTML = this.commonFunctions.displayStartDate(this.goal.start_date);
        description.innerHTML = this.goal.description == "" ? "(no description)" : this.goal.description;
        repetition.innerHTML = this.commonFunctions.getRepetitionType(this.goal.repetition.type_of_repetition)
            + ", every " + this.goal.repetition.how_often + this.commonFunctions.getRepetitionName(this.goal.repetition.type_of_repetition);
        if (this.goal.repetition.type_of_repetition == 3) {
            if (this.goal.repetition.type_of_month == "1") {
                repetition.innerHTML += "<br>On the same start day of each month";
            }
            else {
                repetition.innerHTML += "<br>On every " + this.commonFunctions.getDay(new Date(this.goal.start_date));
            }
        }
        else if (this.goal.repetition.type_of_repetition == 2) {
            repetition.innerHTML += "<br>On every " + this.commonFunctions.getDayName(this.goal.repetition.day_of_week);
        }
        currentChain.innerHTML = this.goal.current_chain + " day(s)";
        bestChain.innerHTML = this.goal.best_chain + " day(s)";
        progress.innerHTML = this.goal.progress + " day(s)";
        endDate.innerHTML = this.commonFunctions.getEndDateType(this.goal.end_date.type_of_end_date);
        if (this.goal.end_date.type_of_end_date == 2) {
            endDate.innerHTML = this.commonFunctions.getEndDateType(this.goal.end_date.type_of_end_date) + this.commonFunctions.displayEndDate(this.goal.end_date.specific_end_date) + ".";
        }
        else if (this.goal.end_date.type_of_end_date == 3) {
            endDate.innerHTML = this.commonFunctions.getEndDateType(this.goal.end_date.type_of_end_date) + this.goal.end_date.number_of_event + " event(s)";
        }
        if (this.goal.is_archived == true) {
            routeListView.innerHTML = "Back to archived list";
        }
        else {
            routeListView.innerHTML = "Back to detail view";
        }
    };
    MonthViewComponent.prototype.routeListView = function () {
        if (this.goal.is_archived == true) {
            this.router.navigate(['/archivedgoals']);
        }
        else {
            this.router.navigate(['/detailview']);
        }
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
        // console.log(this.goal.calendars);
        var calendars = this.goal.calendars;
        var monthName = document.getElementById('monthName');
        var month = this.getMonth(monthName.innerHTML);
        var year = document.getElementById('year');
        for (var i = 1; i <= 42; i++) {
            var day = document.getElementById(i + "");
            // console.log('Check: ' + i);
            for (var _i = 0, calendars_1 = calendars; _i < calendars_1.length; _i++) {
                var calendar = calendars_1[_i];
                var fullDate = new Date(calendar.date_of_calendar);
                var status = calendar.status;
                day.classList.remove('pass');
                day.classList.remove('fail');
                if (day.innerHTML == (fullDate.getDate() + "") && month == fullDate.getMonth() && fullDate.getFullYear() == parseInt(year.innerHTML)) {
                    if (status == "1") {
                        this.toggleDate(i + "", true);
                    }
                    else if (status == "2") {
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
        if (this.goal.is_archived == true) {
            // console.log("archived");
            var displayInfor_2 = document.getElementById("show-infor");
            displayInfor_2.classList.add('visible');
            setTimeout(function () { displayInfor_2.classList.remove('visible'); }, 2000);
        }
        else {
            console.log("not archived");
            clearTimeout(this.timeOut[id]);
            var date = document.getElementById(id + "");
            var monthName = document.getElementById('monthName');
            var month = this.getMonth(monthName.innerHTML) + 1;
            var year = document.getElementById('year');
            var fullDate_1 = year.innerHTML + "-" + month + "-" + date.innerHTML;
            var markDate = new Date(fullDate_1).setHours(0, 0, 0, 0);
            var startDate = new Date(this.goal.start_date.split('T')[0]).setHours(0, 0, 0, 0);
            var today = new Date().setHours(0, 0, 0, 0);
            if (this.goal.end_date.type_of_end_date == 2 || this.goal.end_date.type_of_end_date == 3) {
                var endDate = new Date(this.goal.end_date.specific_end_date).setHours(0, 0, 0, 0);
                if (today > endDate) {
                    today = endDate;
                }
            }
            console.log(this.goal.start_date + "|" + new Date(this.goal.start_date.split('T')[0]) + "\n" + new Date(fullDate_1) + "\n" + new Date());
            if (markDate >= startDate && markDate <= today) {
                if (date.classList.item(0) == null || date.classList.item(0) == 'active') {
                    if (date.classList.item(1) == 'pass') {
                        date.classList.remove('pass');
                        date.classList.add('fail');
                        this.timeOut[id] = setTimeout(function () {
                            _this.goalService.markGoal(_this.goal.id, fullDate_1, "2").subscribe(function (res) {
                                console.log(res.json());
                                _this.goal = res.json();
                                _this.displayGoalInfor();
                                _this.router.navigate(["/monthview/" + _this.goal.id]);
                            }, function (error) { return console.log(error); });
                        }, 1000);
                    }
                    else if (date.classList.item(1) == 'fail') {
                        date.classList.remove('fail');
                        this.timeOut[id] = setTimeout(function () {
                            _this.goalService.markGoal(_this.goal.id, fullDate_1, "0").subscribe(function (res) {
                                console.log(res.json());
                                _this.goal = res.json();
                                _this.displayGoalInfor();
                                _this.router.navigate(["/monthview/" + _this.goal.id]);
                            }, function (error) { return console.log(error); });
                        }, 1000);
                    }
                    else {
                        date.classList.add('pass');
                        this.timeOut[id] = setTimeout(function () {
                            _this.goalService.markGoal(_this.goal.id, fullDate_1, "1").subscribe(function (res) {
                                console.log(res.json());
                                _this.goal = res.json();
                                _this.displayGoalInfor();
                                _this.router.navigate(["/monthview/" + _this.goal.id]);
                            }, function (error) { return console.log(error); });
                        }, 1000);
                    }
                }
                else if (date.classList.item(0) == 'pass') {
                    date.classList.remove('pass');
                    date.classList.add('fail');
                    this.timeOut[id] = setTimeout(function () {
                        _this.goalService.markGoal(_this.goal.id, fullDate_1, "2").subscribe(function (res) {
                            console.log(res.json());
                            _this.goal = res.json();
                            _this.displayGoalInfor();
                            _this.router.navigate(["/monthview/" + _this.goal.id]);
                        }, function (error) { return console.log(error); });
                    }, 1000);
                }
                else {
                    date.classList.remove('fail');
                    this.timeOut[id] = setTimeout(function () {
                        _this.goalService.markGoal(_this.goal.id, fullDate_1, "0").subscribe(function (res) {
                            console.log(res.json());
                            _this.goal = res.json();
                            _this.displayGoalInfor();
                            _this.router.navigate(["/monthview/" + _this.goal.id]);
                        }, function (error) { return console.log(error); });
                    }, 1000);
                }
            }
            else {
                var displayInfor_3 = document.getElementById("show-infor1");
                displayInfor_3.classList.add('visible');
                setTimeout(function () { displayInfor_3.classList.remove('visible'); }, 2000);
            }
        }
    };
    MonthViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-month-view',
            template: __webpack_require__(693),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__goal_goal_service__["a" /* GoalService */]) === 'function' && _c) || Object])
    ], MonthViewComponent);
    return MonthViewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/month-view.component.js.map

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonFunctions; });
var CommonFunctions = (function () {
    function CommonFunctions() {
        this.repetitionTypes = ['1', '2', '3', '4'];
        this.repetitionLimitedTimes = ['1', '2', '3'];
    }
    CommonFunctions.prototype.ngOnInit = function () {
    };
    CommonFunctions.prototype.togglePanel = function (panelId, arg) {
        var panel = document.getElementById(panelId);
        if (arg) {
            panel.hidden = true;
        }
        else {
            panel.hidden = false;
        }
    };
    CommonFunctions.prototype.roundUpTime = function () {
        var date = new Date();
        var minute = date.getMinutes() <= 30 ? 30 : 0;
        var hour = date.getMinutes() <= 30 ? date.getHours() : (date.getHours() < 23 ? date.getHours() + 1 : 0);
        var day = (date.getHours() == 23 && date.getMinutes() > 30) ? date.getDate() + 1 : date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        return new Date(year, month, day, hour, minute);
    };
    CommonFunctions.prototype.untilDate = function () {
        var date = new Date();
        var minute = date.getMinutes();
        var hour = date.getHours();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear() + 1;
        return new Date(year, month, day, hour, minute);
    };
    CommonFunctions.prototype.changeRepetitionType = function (startDate) {
        var val = document.getElementById('repetition-type').value;
        switch (val) {
            case this.repetitionTypes[0]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'day(s)';
                break;
            case this.repetitionTypes[1]:
                this.togglePanel('weeklyRepetition', false);
                this.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'week(s)';
                break;
            case this.repetitionTypes[2]:
                document.getElementById('dayDefineValue').innerHTML = this.getDay(startDate);
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', false);
                document.getElementById('repetitionFrequencyType').innerHTML = 'month(s)';
                break;
            case this.repetitionTypes[3]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'year(s)';
                break;
        }
    };
    CommonFunctions.prototype.changeRepetitionLimitedTime = function () {
        var val = document.getElementById('repetition-limited-time').value;
        switch (val) {
            case this.repetitionLimitedTimes[0]:
                this.togglePanel('until-date', true);
                this.togglePanel('number-events', true);
                break;
            case this.repetitionLimitedTimes[1]:
                this.togglePanel('until-date', false);
                this.togglePanel('number-events', true);
                break;
            case this.repetitionLimitedTimes[2]:
                this.togglePanel('until-date', true);
                this.togglePanel('number-events', false);
                break;
        }
    };
    CommonFunctions.prototype.getDay = function (today) {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var orderNumbers = ["first ", "second ", "third ", "fourth "];
        var result = "";
        var days = this.getAllDaysOfMonth(today.getDay(), today.getMonth(), today.getFullYear());
        for (var day in days) {
            if (today.getDate() === days[day].getDate()) {
                if (day == ((days.length - 1) + "")) {
                    result += "last ";
                }
                else {
                    for (var i in orderNumbers) {
                        if (day == i + "") {
                            result += orderNumbers[i];
                        }
                    }
                }
            }
        }
        for (var i in dayNames) {
            if (today.getDay() + "" == i) {
                result += dayNames[i];
            }
        }
        return result;
    };
    CommonFunctions.prototype.getAllDaysOfMonth = function (day, month, fullYear) {
        var d = new Date(), results = [];
        d.setDate(1);
        d.setMonth(month);
        d.setFullYear(fullYear);
        while (d.getDay() !== day) {
            d.setDate(d.getDate() + 1);
        }
        while (d.getMonth() === month) {
            results.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }
        return results;
    };
    CommonFunctions.prototype.changeTitleAfterLogined = function (title) {
        var defaultButton = document.getElementsByClassName("default-button");
        if (defaultButton.length != 0) {
            defaultButton[0].hidden = true;
            defaultButton[1].hidden = true;
        }
        var logoutButton = document.getElementById("logout-button");
        if (logoutButton != null) {
            logoutButton.hidden = false;
        }
        this.changeTitleContent(title);
    };
    CommonFunctions.prototype.changeTitleContent = function (title) {
        var titleContent = document.getElementById("title-content");
        titleContent.innerHTML = title;
    };
    CommonFunctions.prototype.getUserLogined = function () {
        return localStorage.getItem('currentUser');
    };
    CommonFunctions.prototype.getAllGoalsActived = function (goals) {
        var listResult = new Array();
        for (var _i = 0, goals_1 = goals; _i < goals_1.length; _i++) {
            var goal = goals_1[_i];
            if (goal.is_archived != true) {
                listResult.push(goal);
            }
        }
        return listResult;
    };
    CommonFunctions.prototype.getAllGoalsArchived = function (goals) {
        var listResult = new Array();
        for (var _i = 0, goals_2 = goals; _i < goals_2.length; _i++) {
            var goal = goals_2[_i];
            if (goal.is_archived == true) {
                listResult.push(goal);
            }
        }
        return listResult;
    };
    CommonFunctions.prototype.getRepetitionType = function (type) {
        switch (type) {
            case 1:
                return "Daily";
            case 2:
                return "Weekly";
            case 3:
                return "Monthly";
            case 4:
                return "Yearly";
        }
    };
    CommonFunctions.prototype.getRepetitionName = function (type) {
        switch (type) {
            case 1:
                return " day(s)";
            case 2:
                return " week(s)";
            case 3:
                return " month(s)";
            case 4:
                return " year(s)";
        }
    };
    CommonFunctions.prototype.getEndDateType = function (type) {
        switch (type) {
            case 1:
                return "Forever.";
            case 2:
                return "Until ";
            case 3:
                return "For ";
        }
    };
    CommonFunctions.prototype.displayStartDate = function (date) {
        var day = date.split('T')[0];
        day = day.split("-")[2] + "/" + day.split("-")[1] + "/" + day.split("-")[0];
        var time = date.split('T')[1].split('.')[0].split(':')[0] + ":" + date.split('T')[1].split('.')[0].split(':')[1];
        return time + " " + day;
    };
    CommonFunctions.prototype.displayEndDate = function (date) {
        var day = date.split('T')[0];
        day = day.split("-")[2] + "/" + day.split("-")[1] + "/" + day.split("-")[0];
        return day;
    };
    CommonFunctions.prototype.getDayName = function (string) {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var result = "";
        var days = string.split(", ");
        for (var day in days) {
            for (var dayName in dayNames) {
                if (days[day] === dayName) {
                    result += dayNames[dayName] + ", ";
                }
            }
        }
        return result.slice(0, -2);
    };
    CommonFunctions.prototype.changeBackground = function (isIntroduction) {
        var body = document.getElementsByTagName('body')[0];
        if (isIntroduction) {
            if (body.classList.contains('introduction')) {
            }
            else {
                body.classList.add('introduction');
            }
        }
        else {
            body.classList.remove('introduction');
        }
    };
    CommonFunctions.prototype.getListFavoriteGoals = function (goals) {
        var resultGoals = new Array();
        for (var _i = 0, goals_3 = goals; _i < goals_3.length; _i++) {
            var goal = goals_3[_i];
            if (goal.is_favorite == true) {
                resultGoals.push(goal);
            }
        }
        return resultGoals;
    };
    CommonFunctions.prototype.getListNotFavoriteGoals = function (goals) {
        var resultGoals = new Array();
        for (var _i = 0, goals_4 = goals; _i < goals_4.length; _i++) {
            var goal = goals_4[_i];
            if (goal.is_favorite != true) {
                resultGoals.push(goal);
            }
        }
        return resultGoals;
    };
    CommonFunctions.prototype.sortGoals = function (goals, sortType) {
        switch (sortType) {
            case "1":
                return goals.sort(function (goal1, goal2) {
                    var att1 = parseInt(goal1.id);
                    var att2 = parseInt(goal2.id);
                    return att1 - att2;
                });
            case "2":
                return goals.sort(function (goal1, goal2) {
                    var att1 = goal1.goal_name.toLowerCase();
                    var att2 = goal2.goal_name.toLowerCase();
                    if (att1 < att2) {
                        return -1;
                    }
                    if (att1 > att2) {
                        return 1;
                    }
                    return 0;
                });
            case "3":
                return goals.sort(function (goal1, goal2) {
                    var att1 = goal1.start_date.toLowerCase();
                    var att2 = goal2.start_date.toLowerCase();
                    if (att1 < att2) {
                        return -1;
                    }
                    if (att1 > att2) {
                        return 1;
                    }
                    return 0;
                });
            case "4":
                return goals.sort(function (goal1, goal2) {
                    var att1 = goal1.repetition.type_of_repetition;
                    var att2 = goal2.repetition.type_of_repetition;
                    return att1 - att2;
                });
            case "5":
                return goals.sort(function (goal1, goal2) {
                    var att1 = parseInt(goal1.current_chain);
                    var att2 = parseInt(goal2.current_chain);
                    return att1 - att2;
                });
            case "6":
                return goals.sort(function (goal1, goal2) {
                    var att1 = parseInt(goal1.best_chain);
                    var att2 = parseInt(goal2.best_chain);
                    return att1 - att2;
                });
            case "7":
                return goals.sort(function (goal1, goal2) {
                    var att1 = goal1.progress;
                    var att2 = goal2.progress;
                    var result1 = parseFloat(att1.split('/')[0]) / parseFloat(att1.split('/')[1]);
                    var result2 = parseFloat(att2.split('/')[0]) / parseFloat(att2.split('/')[1]);
                    return result1 - result2;
                });
        }
    };
    CommonFunctions.prototype.setFavoriteGoal = function (goals, id) {
        for (var _i = 0, goals_5 = goals; _i < goals_5.length; _i++) {
            var goal = goals_5[_i];
            if (goal.id == id) {
                goal.is_favorite = !goal.is_favorite;
            }
        }
    };
    return CommonFunctions;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/common-functions.js.map

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title = "Seinfeld Calendar";
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__["a" /* CommonFunctions */]();
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            this.title = "Your dashboard";
        }
        else {
            this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
        }
    };
    AppComponent.prototype.openModal = function (showed) {
        var modal = document.getElementById('notification-logout');
        var span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }
    };
    AppComponent.prototype.loginModal = function (showed) {
        var modal = document.getElementById('login-modal');
        var span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        var currentUser = localStorage.getItem('currentUser');
        this.openModal(true);
        this.userService.logOut().subscribe(function (res) {
            localStorage.removeItem('currentUser');
            _this.listButton = [{ route: 'login', value: 'Login' }, { route: 'signup', value: 'Sign Up' }];
            var defaultButton = document.getElementsByClassName("default-button");
            var logoutButton = document.getElementById("logout-button");
            if (defaultButton.length != 0) {
                defaultButton[0].hidden = false;
                defaultButton[1].hidden = false;
            }
            _this.commonFunctions.changeTitleContent("Seinfeld Calendar");
            logoutButton.hidden = true;
            _this.userService.setLoggedIn(false);
            _this.openModal(false);
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.onClick = function (string) {
        this.router.navigate(['/' + string]);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(684),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.component.js.map

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goal_goal_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_page__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArchivedGoalsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchivedGoalsComponent = (function (_super) {
    __extends(ArchivedGoalsComponent, _super);
    function ArchivedGoalsComponent(router, goalService) {
        _super.call(this, 'loading');
        this.router = router;
        this.goalService = goalService;
    }
    ArchivedGoalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeBackground(false);
        this.commonFunctions.changeTitleContent("Archived goals");
        this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
        this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
        this.goalService.getAllGoals(this.isReversed, this.sortType).subscribe(function (res) {
            _this.goals = res.json();
            _this.goals = _this.commonFunctions.getAllGoalsArchived(_this.goals);
            _this.ready();
        }, function (error) { return console.log(error); });
    };
    ArchivedGoalsComponent.prototype.displayMonthView = function (goal) {
        this.router.navigate(['/monthview', goal.id]);
    };
    ArchivedGoalsComponent.prototype.displayYearView = function (goal) {
        this.router.navigate(['/yearview', goal.id]);
    };
    ArchivedGoalsComponent.prototype.showSortMenu = function () {
        var sortModal = document.getElementById('sort-modal');
        var display = sortModal.style.display;
        if (display != 'block') {
            sortModal.style.display = "block";
        }
        else {
            sortModal.style.display = "none";
        }
    };
    ArchivedGoalsComponent.prototype.sort = function () {
        var sortType = document.getElementsByName('sort-type');
        var isReversed = document.getElementById('reverse-order');
        localStorage.setItem('isReversed', isReversed.checked ? '1' : '0');
        this.isReversed = isReversed.checked;
        var sortTypeValue;
        for (var st in sortType) {
            var s = sortType[st];
            if (s.checked) {
                sortTypeValue = s.value;
                this.sortType = sortTypeValue;
                localStorage.setItem('sortType', sortTypeValue);
                break;
            }
        }
        console.log(isReversed.checked + "|" + sortTypeValue);
        var favoriteGoals = this.commonFunctions.sortGoals(this.commonFunctions.getListFavoriteGoals(this.goals), sortTypeValue);
        var notFavoriteGoals = this.commonFunctions.sortGoals(this.commonFunctions.getListNotFavoriteGoals(this.goals), sortTypeValue);
        if (this.isReversed) {
            favoriteGoals.reverse();
            notFavoriteGoals.reverse();
        }
        this.goals = favoriteGoals.concat(notFavoriteGoals);
    };
    ArchivedGoalsComponent.prototype.showContextMenu = function (goalId) {
        var goalPanel = document.getElementById("item-" + goalId);
        var backgroundColor = goalPanel.style.backgroundColor;
        console.log(backgroundColor);
        if (backgroundColor != "rgb(238, 238, 255)") {
            goalPanel.style.backgroundColor = "#eef";
        }
        else {
            goalPanel.style.backgroundColor = "#fff";
        }
        var checks = document.getElementsByClassName('checking');
        var modal = document.getElementById('context-menu');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
        for (var index in checks) {
            if (checks[index].checked == true) {
                modal.style.display = "block";
            }
        }
    };
    ArchivedGoalsComponent.prototype.openLoading = function (showed) {
        var modal = document.getElementById('deleting');
        var span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }
    };
    ArchivedGoalsComponent.prototype.showDeleteMenu = function () {
        var sortModal = document.getElementById('notification-delete');
        var display = sortModal.style.display;
        if (display != 'block') {
            sortModal.style.display = "block";
        }
        else {
            sortModal.style.display = "none";
        }
    };
    ArchivedGoalsComponent.prototype.deleteGoals = function () {
        var _this = this;
        var modal = document.getElementById('context-menu');
        var checks = document.getElementsByClassName('checking');
        var deleteIds = "";
        for (var index in checks) {
            if (checks[index].checked == true) {
                var id = checks[index].value;
                deleteIds += id + ", ";
            }
        }
        this.goalService.deleteGoal(deleteIds).subscribe(function (res) {
            console.log("Deleting goals");
            _this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
            _this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
            _this.goalService.getAllGoals(_this.isReversed, _this.sortType).subscribe(function (res) {
                _this.goals = res.json();
                _this.goals = _this.commonFunctions.getAllGoalsArchived(_this.goals);
                _this.router.navigate(['/archivedgoals']);
            }, function (error) { return console.log(error); });
        }, function (error) {
            console.log(error);
        });
    };
    ArchivedGoalsComponent.prototype.archiveGoals = function () {
        var _this = this;
        var modal = document.getElementById('context-menu');
        var checks = document.getElementsByClassName('checking');
        var archiveIds = "";
        for (var index in checks) {
            if (checks[index].checked == true) {
                var id = checks[index].value;
                archiveIds += id + ", ";
            }
        }
        this.goalService.archiveGoal(archiveIds).subscribe(function (res) {
            console.log("Archiving goals");
            _this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
            _this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
            _this.goalService.getAllGoals(_this.isReversed, _this.sortType).subscribe(function (res) {
                _this.goals = res.json();
                _this.goals = _this.commonFunctions.getAllGoalsArchived(_this.goals);
                _this.router.navigate(['/archivedgoals']);
            }, function (error) { return console.log(error); });
        }, function (error) {
            console.log(error);
        });
    };
    ArchivedGoalsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-archived-goals',
            template: __webpack_require__(685),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__goal_goal_service__["a" /* GoalService */]) === 'function' && _b) || Object])
    ], ArchivedGoalsComponent);
    return ArchivedGoalsComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_page__["a" /* LoadingPage */]));
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/archived-goals.component.js.map

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_page__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_goal__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__goal_goal_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateNewGoalComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateNewGoalComponent = (function (_super) {
    __extends(CreateNewGoalComponent, _super);
    function CreateNewGoalComponent(goalService, router) {
        _super.call(this, 'loaded');
        this.goalService = goalService;
        this.router = router;
        this.createNewGoalForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            goal_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            start_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            type_of_repetition: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('1'),
            how_often: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('1'),
            type_of_end_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('1'),
            autoUpdateFailed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](true),
            specific_end_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            number_of_event: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('1'),
            type_of_month: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Mon: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Tue: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Wed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Thu: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Fri: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Sat: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            day_of_week_Sun: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
        });
    }
    CreateNewGoalComponent.prototype.ngOnInit = function () {
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeTitleContent('Create a new goal');
        this.commonFunctions.changeBackground(false);
    };
    CreateNewGoalComponent.prototype.roundUpTime = function () {
        return this.commonFunctions.roundUpTime();
    };
    CreateNewGoalComponent.prototype.untilDate = function () {
        return this.commonFunctions.untilDate();
    };
    CreateNewGoalComponent.prototype.changeRepetitionType = function () {
        this.commonFunctions.changeRepetitionType(new Date());
    };
    CreateNewGoalComponent.prototype.changeMonthlyType = function () {
        var input = this.createNewGoalForm.value;
        var startDate = new Date(input.start_date);
        document.getElementById('dayDefineValue').innerHTML = this.commonFunctions.getDay(startDate);
    };
    CreateNewGoalComponent.prototype.changeRepetitionLimitedTime = function () {
        this.commonFunctions.changeRepetitionLimitedTime();
    };
    CreateNewGoalComponent.prototype.addNewGoal = function () {
        var _this = this;
        var input = this.createNewGoalForm.value;
        if (input.goal_name != "") {
            this.standby();
            // console.log(input);
            var day_of_week = null;
            if (input.type_of_repetition == 2) {
                day_of_week =
                    (input.day_of_week_Sun == true ? "0, " : "") +
                        (input.day_of_week_Mon == true ? "1, " : "") +
                        (input.day_of_week_Tue == true ? "2, " : "") +
                        (input.day_of_week_Wed == true ? "3, " : "") +
                        (input.day_of_week_Thu == true ? "4, " : "") +
                        (input.day_of_week_Fri == true ? "5, " : "") +
                        (input.day_of_week_Sat == true ? "6, " : "");
            }
            var start_date = void 0;
            if (input.start_date == null) {
                start_date = this.roundUpTime().toString();
            }
            else {
                start_date = input.start_date;
            }
            var specific_end_date = null;
            if (input.type_of_end_date == 2) {
                if (input.specific_end_date == null) {
                    specific_end_date = this.untilDate().toString();
                }
                else {
                    specific_end_date = input.specific_end_date;
                }
            }
            if (input.type_of_repetition == null) {
                input.type_of_repetition = 1;
            }
            if (input.how_often == null) {
                input.how_often = 1;
            }
            if (input.type_of_end_date == null) {
                input.type_of_end_date = 1;
            }
            if (input.autoUpdateFailed == null) {
                input.autoUpdateFailed = false;
            }
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var goal = new __WEBPACK_IMPORTED_MODULE_5__shared_goal__["a" /* Goal */](currentUser.email, currentUser.token, input.goal_name, start_date, input.description, new __WEBPACK_IMPORTED_MODULE_5__shared_goal__["b" /* Repetition */](input.type_of_repetition, input.how_often, day_of_week, input.type_of_month), new __WEBPACK_IMPORTED_MODULE_5__shared_goal__["c" /* EndDate */](input.type_of_end_date, specific_end_date, input.number_of_event), input.autoUpdateFailed);
            this.goalService.addNewGoal(goal).subscribe(function (res) {
                _this.router.navigate(['/detailview']);
            }, function (error) { return console.log(error); });
        }
        else {
            var alert = document.getElementById('goal-name-alert');
            alert.hidden = false;
        }
    };
    CreateNewGoalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-create-new-goal',
            template: __webpack_require__(686),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__goal_goal_service__["a" /* GoalService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], CreateNewGoalComponent);
    return CreateNewGoalComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_page__["a" /* LoadingPage */]));
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/create-new-goal.component.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goal_goal_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_page__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailViewComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailViewComponent = (function (_super) {
    __extends(DetailViewComponent, _super);
    function DetailViewComponent(router, goalService) {
        _super.call(this, 'loading');
        this.router = router;
        this.goalService = goalService;
    }
    DetailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeBackground(false);
        this.commonFunctions.changeTitleContent("Your dashboard");
        this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
        this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
        this.goalService.getAllGoals(this.isReversed, this.sortType).subscribe(function (res) {
            _this.goals = res.json();
            _this.goals = _this.commonFunctions.getAllGoalsActived(_this.goals);
            _this.ready();
        }, function (error) { return console.log(error); });
    };
    DetailViewComponent.prototype.displayMonthView = function (goal) {
        this.router.navigate(['/monthview', goal.id]);
    };
    DetailViewComponent.prototype.displayYearView = function (goal) {
        this.router.navigate(['/yearview', goal.id]);
    };
    DetailViewComponent.prototype.showSortMenu = function () {
        var sortModal = document.getElementById('sort-modal');
        var display = sortModal.style.display;
        if (display != 'block') {
            sortModal.style.display = "block";
        }
        else {
            sortModal.style.display = "none";
        }
    };
    DetailViewComponent.prototype.sort = function () {
        var sortType = document.getElementsByName('sort-type');
        var isReversed = document.getElementById('reverse-order');
        localStorage.setItem('isReversed', isReversed.checked ? '1' : '0');
        this.isReversed = isReversed.checked;
        var sortTypeValue;
        for (var st in sortType) {
            var s = sortType[st];
            if (s.checked) {
                sortTypeValue = s.value;
                this.sortType = sortTypeValue;
                localStorage.setItem('sortType', sortTypeValue);
                break;
            }
        }
        console.log(isReversed.checked + "|" + sortTypeValue);
        var favoriteGoals = this.commonFunctions.sortGoals(this.commonFunctions.getListFavoriteGoals(this.goals), sortTypeValue);
        var notFavoriteGoals = this.commonFunctions.sortGoals(this.commonFunctions.getListNotFavoriteGoals(this.goals), sortTypeValue);
        if (this.isReversed) {
            favoriteGoals.reverse();
            notFavoriteGoals.reverse();
        }
        this.goals = favoriteGoals.concat(notFavoriteGoals);
    };
    DetailViewComponent.prototype.favorite = function (goal) {
        var _this = this;
        this.goalService.setFavorite(goal.id).subscribe(function (res) {
            console.log(res.json());
            var favorite = document.getElementById("fav-" + goal.id);
            if (res.json() == true) {
                console.log(goal.is_favorite);
                favorite.classList.add('color');
            }
            else {
                favorite.classList.remove('color');
            }
            _this.commonFunctions.setFavoriteGoal(_this.goals, goal.id);
            _this.sort();
        }, function (error) { return console.log(error); });
    };
    DetailViewComponent.prototype.showContextMenu = function (goalId) {
        var goalPanel = document.getElementById("item-" + goalId);
        var backgroundColor = goalPanel.style.backgroundColor;
        console.log(backgroundColor);
        if (backgroundColor != "rgb(238, 238, 255)") {
            goalPanel.style.backgroundColor = "#eef";
        }
        else {
            goalPanel.style.backgroundColor = "#fff";
        }
        var checks = document.getElementsByClassName('checking');
        var modal = document.getElementById('context-menu');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
        for (var index in checks) {
            if (checks[index].checked == true) {
                modal.style.display = "block";
            }
        }
    };
    DetailViewComponent.prototype.openLoading = function (showed) {
        var modal = document.getElementById('deleting');
        var span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }
    };
    DetailViewComponent.prototype.showDeleteMenu = function () {
        var sortModal = document.getElementById('notification-delete');
        var display = sortModal.style.display;
        if (display != 'block') {
            sortModal.style.display = "block";
        }
        else {
            sortModal.style.display = "none";
        }
    };
    DetailViewComponent.prototype.deleteGoals = function () {
        var _this = this;
        this.openLoading(true);
        var modal = document.getElementById('context-menu');
        var checks = document.getElementsByClassName('checking');
        var deleteIds = "";
        for (var index in checks) {
            if (checks[index].checked == true) {
                var id = checks[index].value;
                deleteIds += id + ", ";
            }
        }
        this.goalService.deleteGoal(deleteIds).subscribe(function (res) {
            console.log("Deleting goals");
            _this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
            _this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
            _this.goalService.getAllGoals(_this.isReversed, _this.sortType).subscribe(function (res) {
                _this.goals = res.json();
                _this.goals = _this.commonFunctions.getAllGoalsActived(_this.goals);
                _this.router.navigate(['/detailview']);
            }, function (error) { return console.log(error); });
        }, function (error) {
            console.log(error);
        });
    };
    DetailViewComponent.prototype.archiveGoals = function () {
        var _this = this;
        var modal = document.getElementById('context-menu');
        var checks = document.getElementsByClassName('checking');
        var archiveIds = "";
        for (var index in checks) {
            if (checks[index].checked == true) {
                var id = checks[index].value;
                archiveIds += id + ", ";
            }
        }
        this.goalService.archiveGoal(archiveIds).subscribe(function (res) {
            console.log("Archiving goals");
            _this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
            _this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
            _this.goalService.getAllGoals(_this.isReversed, _this.sortType).subscribe(function (res) {
                _this.goals = res.json();
                _this.goals = _this.commonFunctions.getAllGoalsActived(_this.goals);
                _this.router.navigate(['/detailview']);
            }, function (error) { return console.log(error); });
        }, function (error) {
            console.log(error);
        });
    };
    DetailViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-detail-view',
            template: __webpack_require__(687),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__goal_goal_service__["a" /* GoalService */]) === 'function' && _b) || Object])
    ], DetailViewComponent);
    return DetailViewComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_page__["a" /* LoadingPage */]));
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/detail-view.component.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goal_goal_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditGoalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditGoalComponent = (function () {
    function EditGoalComponent(goalService, route, location, router) {
        this.goalService = goalService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.toggleWeekDays = [false, false, false, false, false, false, false];
        this.submitted = false;
        this.isDataLoaded = false;
    }
    ;
    EditGoalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.params['_value']['id'];
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeBackground(false);
        this.goalService.getGoalsById(this.id).toPromise().then(function (data) {
            _this.goal = JSON.parse(data['_body']);
            _this.commonFunctions.changeTitleContent(_this.goal.goal_name);
            _this.toRepetitionUnit();
            var rep = _this.goal.repetition;
            if (rep.type_of_repetition === 2) {
                if (rep.day_of_week != null) {
                    var strDoW = rep.day_of_week.split(',');
                    for (var i = 0; i < strDoW.length; i++) {
                        var index = parseInt(strDoW[i].toString(), 10);
                        _this.toggleWeekDays[index] = true;
                    }
                }
            }
            ;
            _this.setDay();
            _this.setDate();
            _this.isDataLoaded = true;
        }, function (error) {
            console.log(error['status']);
            _this.router.navigate(['/pagenotfound']);
        });
    };
    ;
    EditGoalComponent.prototype.setTempDate = function () {
        var offSet = new Date().getTimezoneOffset();
        var fullTime = new Date(this.goal.start_date).getTime();
        var temp = fullTime + (offSet * 60 * 1000);
        this.goal.start_date = new Date(temp);
    };
    EditGoalComponent.prototype.setDay = function () {
        var date = new Date(this.goal.start_date);
        var numDay = date.getDay();
        switch (numDay) {
            case 0:
                this.day = 'Sunday';
                break;
            case 1:
                this.day = 'Monday';
                break;
            case 2:
                this.day = 'Tuesday';
                break;
            case 3:
                this.day = 'Wednesday';
                break;
            case 4:
                this.day = 'Thursday';
                break;
            case 5:
                this.day = 'Friday';
                break;
            case 6:
                this.day = 'Saturday';
                break;
        }
    };
    EditGoalComponent.prototype.setDate = function () {
        var date = new Date(this.goal.start_date);
        var numDate = date.getDate();
        var num = numDate / 7;
        if (num < 1) {
            this.date = 'first';
        }
        else if (num < 2) {
            this.date = 'second';
        }
        else if (num < 3) {
            this.date = 'third';
        }
        else if (num < 4) {
            this.date = 'forth';
        }
        else {
            this.date = 'last';
        }
    };
    EditGoalComponent.prototype.log = function () {
        console.log(this.goal);
        console.log(this.day);
        console.log(this.date);
    };
    EditGoalComponent.prototype.cancel = function () {
        this.location.back();
    };
    EditGoalComponent.prototype.editGoal = function () {
        var _this = this;
        this.isDataLoaded = false;
        if (this.goal.description == null) {
            this.goal.description = '';
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.goal.token = currentUser.token;
        this.goal.email = currentUser.email;
        this.goalService.editGoal(this.id, this.goal).then(function () { return _this.router.navigate(['/detailview']); });
    };
    EditGoalComponent.prototype.updateDoW = function () {
        if (this.goal.repetition.type_of_repetition === 2) {
            this.goal.repetition.day_of_week = '';
            for (var i = 0; i < this.toggleWeekDays.length; i++) {
                if (this.toggleWeekDays[i]) {
                    this.goal.repetition.day_of_week += '' + i + ', ';
                }
            }
        }
    };
    EditGoalComponent.prototype.toNumber = function () {
        var num = parseInt(this.goal.repetition.type_of_repetition.toString(), 10);
        this.goal.repetition.type_of_repetition = num;
    };
    EditGoalComponent.prototype.toNumber0 = function () {
        var num = parseInt(this.goal.end_date.type_of_end_date.toString(), 10);
        this.goal.end_date.type_of_end_date = num;
    };
    EditGoalComponent.prototype.toNumber1 = function () {
        var num = parseInt(this.goal.end_date.type_of_end_date.toString(), 10);
        this.goal.end_date.type_of_end_date = num;
    };
    EditGoalComponent.prototype.toRepetitionUnit = function () {
        var type = this.goal.repetition.type_of_repetition;
        switch (type) {
            case 1:
                {
                    this.unit = 'day';
                }
                break;
            case 2:
                {
                    this.unit = 'week';
                }
                break;
            case 3:
                {
                    this.unit = 'moth';
                }
                break;
            case 4:
                {
                    this.unit = 'year';
                }
                break;
            default:
                break;
        }
        // console.log(this.unit);
    };
    EditGoalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            moduleId: '' + module.i,
            selector: 'app-edit-goal',
            template: __webpack_require__(688),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__goal_goal_service__["a" /* GoalService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], EditGoalComponent);
    return EditGoalComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/edit-goal.component.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(userService) {
        this.userService = userService;
        this.submitted = false;
        this.wrong = false;
        this.email = '';
        this.loading = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.doSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.userService.forgotPassword(this.email).subscribe(function (res) {
            _this.loading = false;
        }, function (error) {
            _this.wrong = true;
            _this.loading = false;
            _this.submitted = false;
        });
    };
    ForgotPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__(689),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__user_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/forgot-password.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_functions__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IntroductionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroductionComponent = (function () {
    function IntroductionComponent() {
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_1__shared_common_functions__["a" /* CommonFunctions */]();
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        // window.location.reload();
        this.commonFunctions.changeBackground(true);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
        this.commonFunctions.changeTitleContent('Seinfeld Calendar');
    };
    IntroductionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(690),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/introduction.component.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoadingIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent() {
    }
    LoadingIndicatorComponent.prototype.ngOnInit = function () {
    };
    LoadingIndicatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-loading-indicator',
            template: __webpack_require__(691),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingIndicatorComponent);
    return LoadingIndicatorComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/loading-indicator.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_indicator_loading_page__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_operator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rxjs_operator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(router, userService) {
        _super.call(this, 'loaded');
        this.router = router;
        this.userService = userService;
        this.unauthorized = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8)),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.unauthorized = false;
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_5__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeBackground(false);
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        var user = this.loginForm.value;
        this.commonFunctions.changeBackground(false);
        this.standby();
        this.userService.logIn(user.email, user.password).subscribe(function (res) {
            _this.ready();
            localStorage.setItem('currentUser', JSON.stringify(res.json().data));
            _this.userService.setLoggedIn(true);
            var redirect = _this.userService.redirectUrl ? _this.userService.redirectUrl : '/detailview';
            _this.router.navigate([redirect]);
            _this.commonFunctions.changeTitleAfterLogined("Your dashboard");
        }, function (error) {
            console.log(error);
            _this.unauthorized = true;
            _this.ready();
        });
    };
    LoginComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(692),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__loading_indicator_loading_page__["a" /* LoadingPage */]));
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/login.component.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(694),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/page-not-found.component.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(http, route, userService, router) {
        this.http = http;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.type0 = 'password';
        this.type1 = 'password';
        this.passwordMatch = true;
        this.password = '';
        this.passwordConfirm = '';
        this.tokenExpire = false;
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_0__shared_common_functions__["a" /* CommonFunctions */]();
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.reset_password_token = this.route.params['_value']['token'];
        console.log(this.reset_password_token);
    };
    ResetPasswordComponent.prototype.displayPassword = function (i) {
        if (i === 0) {
            this.type0 = this.type0 === 'text' ? 'password' : 'text';
        }
        if (i === 1) {
            this.type1 = this.type1 === 'text' ? 'password' : 'text';
        }
    };
    ResetPasswordComponent.prototype.doSubmit = function () {
        var _this = this;
        console.log(this.password);
        console.log(this.passwordConfirm);
        this.userService.postNewPassword(this.reset_password_token, this.password).subscribe(function (res) {
            var info = res['_body'];
            var obj = (JSON.parse(info));
            _this.email = obj['data']['email'];
            _this.userService.logIn(_this.email, _this.password).subscribe(function (response) {
                localStorage.setItem('currentUser', JSON.stringify(response.json().data));
                _this.userService.setLoggedIn(true);
                var redirect = _this.userService.redirectUrl ? _this.userService.redirectUrl : '/detailview';
                _this.router.navigate([redirect]);
                _this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            }, function (error) { return console.log(error); });
            console.log(_this.email);
        }, function (error) {
            console.log(error);
            _this.tokenExpire = true;
        });
    };
    ResetPasswordComponent.prototype.checkMatch = function () {
        var _this = this;
        window.clearTimeout(this.myTimeOut);
        this.passwordMatch = true;
        this.myTimeOut = window.setTimeout(function () {
            if (_this.passwordConfirm === _this.password) {
                _this.passwordMatch = true;
            }
            else {
                _this.passwordMatch = false;
            }
        }, 2000);
    };
    ResetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["G" /* Component */])({
            selector: 'app-reset-password',
            template: __webpack_require__(695),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/reset-password.component.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Goal; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Repetition; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return EndDate; });
/* unused harmony export Calendar */
var Goal = (function () {
    function Goal(email, token, goal_name, start_date, description, repetition, end_date, is_auto) {
        this.email = email;
        this.token = token;
        this.goal_name = goal_name;
        this.start_date = start_date;
        this.description = description;
        this.repetition = repetition;
        this.end_date = end_date;
        this.is_auto = is_auto;
        this.is_favorite = false;
        this.is_archived = false;
    }
    return Goal;
}());
var Repetition = (function () {
    function Repetition(type_of_repetition, how_often, day_of_week, type_of_month) {
        this.type_of_repetition = type_of_repetition;
        this.how_often = how_often;
        this.day_of_week = day_of_week;
        this.type_of_month = type_of_month;
    }
    return Repetition;
}());
var EndDate = (function () {
    function EndDate(type_of_end_date, specific_end_date, number_of_event) {
        this.type_of_end_date = type_of_end_date;
        this.specific_end_date = specific_end_date;
        this.number_of_event = number_of_event;
    }
    return EndDate;
}());
var Calendar = (function () {
    function Calendar() {
    }
    return Calendar;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/goal.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return headers; });

var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/json');
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/headers.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_indicator_loading_page__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_operator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rxjs_operator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignUpComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignUpComponent = (function (_super) {
    __extends(SignUpComponent, _super);
    function SignUpComponent(router, userService) {
        _super.call(this, 'loaded');
        this.router = router;
        this.userService = userService;
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8)),
            password_confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8))
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_5__shared_common_functions__["a" /* CommonFunctions */]();
        this.commonFunctions.changeBackground(false);
    };
    SignUpComponent.prototype.doSignUp = function (event) {
        var _this = this;
        var user = this.signUpForm.value;
        this.commonFunctions.changeBackground(false);
        this.standby();
        this.userService.signUp(user.name, user.email, user.password).subscribe(function (res) {
            var confirmed_token = res.json().data;
            // console.log(confirmed_token);
            // console.log(confirmed_token.confirmed_token);
            _this.userService.confirmEmail(confirmed_token.confirmed_token).subscribe(function (res) {
                localStorage.setItem('currentUser', JSON.stringify(res.json().data));
                // console.log(localStorage.getItem('currentUser'));
                _this.userService.setLoggedIn(true);
                _this.commonFunctions.changeTitleAfterLogined("Your dashboard");
                _this.router.navigate(['/detailview']);
            });
        }, function (error) { return console.log(error); });
    };
    SignUpComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    SignUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__(697),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__loading_indicator_loading_page__["a" /* LoadingPage */]));
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/sign-up.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_common_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goal_goal_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return YearViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YearViewComponent = (function () {
    function YearViewComponent(goalService, location, route, router) {
        this.goalService = goalService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'December', 'October', 'November', 'December'];
        this.isDataLoaded = false;
        this.commonFuntion = new __WEBPACK_IMPORTED_MODULE_0__shared_common_functions__["a" /* CommonFunctions */]();
    }
    YearViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.params['_value']['id'];
        var date = new Date();
        this.year = date.getFullYear();
        this.year = parseInt(this.year.toString(), 10);
        this.goalService.getGoalsById(this.id).toPromise().then(function (data) {
            _this.goal = JSON.parse(data['_body']);
            _this.commonFuntion.changeTitleContent(_this.goal.goal_name);
            _this.isDataLoaded = true;
        });
    };
    YearViewComponent.prototype.nextYear = function () {
        var _this = this;
        this.isDataLoaded = false;
        this.year += 1;
        this.goalService.getGoalsById(this.id).toPromise().then(function (data) {
            _this.goal = JSON.parse(data['_body']);
            _this.isDataLoaded = true;
        });
    };
    YearViewComponent.prototype.previousYear = function () {
        var _this = this;
        this.isDataLoaded = false;
        this.year -= 1;
        this.goalService.getGoalsById(this.id).toPromise().then(function (data) {
            _this.goal = JSON.parse(data['_body']);
            _this.isDataLoaded = true;
        });
    };
    YearViewComponent.prototype.backToDetail = function () {
        this.router.navigate(['detailview']);
    };
    YearViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["G" /* Component */])({
            selector: 'app-year-view',
            template: __webpack_require__(699),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__goal_goal_service__["a" /* GoalService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], YearViewComponent);
    return YearViewComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/year-view.component.js.map

/***/ },

/***/ 394:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(507);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/main.js.map

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgot_password_forgot_password_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__year_view_month_in_year_view_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__year_view_year_view_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_goal_edit_goal_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__create_new_goal_create_new_goal_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detail_view_detail_view_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__introduction_introduction_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_route__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sign_up_sign_up_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__side_bar_side_bar_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_logged_in_guard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__archived_goals_archived_goals_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__goal_goal_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_user_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__detail_view_detail_view_module__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__page_not_found_page_not_found_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__archived_goals_archived_goals_component__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__introduction_introduction_component__["a" /* IntroductionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_17__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__create_new_goal_create_new_goal_component__["a" /* CreateNewGoalComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detail_view_detail_view_component__["a" /* DetailViewComponent */],
                __WEBPACK_IMPORTED_MODULE_4__edit_goal_edit_goal_component__["a" /* EditGoalComponent */],
                __WEBPACK_IMPORTED_MODULE_3__year_view_year_view_component__["a" /* YearViewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_2__year_view_month_in_year_view_component__["a" /* MonthInYearComponent */],
                __WEBPACK_IMPORTED_MODULE_24__archived_goals_archived_goals_component__["a" /* ArchivedGoalsComponent */],
                __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_0__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__archived_goals_archived_goals_module__["a" /* ArchivedGoalsModule */],
                __WEBPACK_IMPORTED_MODULE_22__detail_view_detail_view_module__["a" /* DetailViewModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["e" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_route__["a" /* appRoutes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_18__shared_logged_in_guard__["a" /* LoggedInGuard */], __WEBPACK_IMPORTED_MODULE_20__goal_goal_service__["a" /* GoalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.module.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgot_password_forgot_password_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__year_view_year_view_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_goal_edit_goal_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__archived_goals_archived_goals_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_new_goal_create_new_goal_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_view_detail_view_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__introduction_introduction_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loading_indicator_loading_indicator_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_logged_in_guard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_up_sign_up_component__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return appRoutes; });













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__introduction_introduction_component__["a" /* IntroductionComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'createnewgoal', component: __WEBPACK_IMPORTED_MODULE_5__create_new_goal_create_new_goal_component__["a" /* CreateNewGoalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'detailview', component: __WEBPACK_IMPORTED_MODULE_6__detail_view_detail_view_component__["a" /* DetailViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'archivedgoals', component: __WEBPACK_IMPORTED_MODULE_4__archived_goals_archived_goals_component__["a" /* ArchivedGoalsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'loading', component: __WEBPACK_IMPORTED_MODULE_8__loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */] },
    { path: 'editgoal/:id', component: __WEBPACK_IMPORTED_MODULE_3__edit_goal_edit_goal_component__["a" /* EditGoalComponent */], CanActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'yearview/:id', component: __WEBPACK_IMPORTED_MODULE_2__year_view_year_view_component__["a" /* YearViewComponent */], CanActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'reset_password/:token', component: __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'forgot_password', component: __WEBPACK_IMPORTED_MODULE_0__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.route.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archived_goals_route__ = __webpack_require__(504);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArchivedGoalsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArchivedGoalsModule = (function () {
    function ArchivedGoalsModule() {
    }
    ArchivedGoalsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__archived_goals_route__["a" /* archivedGoalsRoutes */])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ArchivedGoalsModule);
    return ArchivedGoalsModule;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/archived-goals.module.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_logged_in_guard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__month_view_month_view_component__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return archivedGoalsRoutes; });


var archivedGoalsRoutes = [
    { path: 'monthview/:id', component: __WEBPACK_IMPORTED_MODULE_1__month_view_month_view_component__["a" /* MonthViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_logged_in_guard__["a" /* LoggedInGuard */]] }
];
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/archived-goals.route.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__month_view_month_view_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_indicator_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_view_route__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailViewModule = (function () {
    function DetailViewModule() {
    }
    DetailViewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__detail_view_route__["a" /* detailViewRoutes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */], __WEBPACK_IMPORTED_MODULE_3__month_view_month_view_component__["a" /* MonthViewComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__month_view_month_view_component__["a" /* MonthViewComponent */], __WEBPACK_IMPORTED_MODULE_4__loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailViewModule);
    return DetailViewModule;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/detail-view.module.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_logged_in_guard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__month_view_month_view_component__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return detailViewRoutes; });


var detailViewRoutes = [
    { path: 'monthview/:id', component: __WEBPACK_IMPORTED_MODULE_1__month_view_month_view_component__["a" /* MonthViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_logged_in_guard__["a" /* LoggedInGuard */]] }
];
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/detail-view.route.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(501);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/index.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.toggleSideBar = function (size) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        document.getElementById("mySidenav").style.width = size;
        if (size !== '0') {
            document.getElementById("openSideBar").hidden = true;
        }
        else {
            document.getElementById("openSideBar").hidden = false;
        }
    };
    SideBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'side-bar',
            template: __webpack_require__(696),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/side-bar.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__goal_goal_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_goal__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MonthInYearComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthInYearComponent = (function () {
    function MonthInYearComponent(goalService) {
        this.goalService = goalService;
        this.year = new Date().getFullYear();
        this.month = 0;
        this.monthName = 'January';
        this.dates = [];
        this.state = [];
        this.classli = [];
        this.isLoaded = false;
        this.myTimeOut = [];
    }
    Object.defineProperty(MonthInYearComponent.prototype, "setYear", {
        set: function (year) {
            this.year = year;
            if (this.goalInMonth != null) {
                this.isLoaded = false;
                for (var i = 0; i < 42; i++) {
                    this.dates[i] = null;
                    this.classli[i] = null;
                    this.state[i] = 0;
                }
                this.generateDate();
                this.checkGoal();
                this.isLoaded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MonthInYearComponent.prototype.ngOnInit = function () {
        this.month = parseInt(this.month.toString(), 10);
        this.year = parseInt(this.year.toString(), 10);
        for (var i = 0; i < 42; i++) {
            this.dates[i] = null;
            this.classli[i] = null;
            this.state[i] = 0;
        }
        this.generateDate();
        this.checkGoal();
        this.isLoaded = true;
    };
    MonthInYearComponent.prototype.generateDate = function () {
        var date = new Date();
        date.setFullYear(this.year, this.month, 1);
        var day = date.getDay();
        var start = day;
        if (start === 0) {
            start = 6;
        }
        else {
            start--;
        }
        this.anchor = start - 1;
        var nextMonth = 1 + this.month;
        var daysInMonth = new Date(this.year, nextMonth, 0).getDate();
        for (var i = 1; i <= daysInMonth; i++) {
            this.dates[start] = i;
            start++;
        }
        var today = new Date();
        if (today.getFullYear() === this.year) {
            if (today.getMonth() === this.month) {
                this.classli[today.getDate() + this.anchor] = 'active';
            }
        }
    };
    MonthInYearComponent.prototype.onClickLi = function (obj) {
        var _this = this;
        var day = obj - this.anchor;
        var date = new Date(this.year, this.month, day);
        var currentDate = new Date();
        var startDate = new Date(this.goalInMonth.start_date);
        if (this.goalInMonth.end_date.specific_end_date != null) {
            var endDate = new Date(this.goalInMonth.end_date.specific_end_date);
            if (date.getTime() - endDate.getTime() > 0) {
                return;
            }
        }
        if (date.getTime() - currentDate.getTime() > 0 || date.getTime() - startDate.getTime() < -(8.64e+7)) {
            return;
        }
        else {
            this.state[obj] = (this.state[obj] + 1) % 3;
            var id_1 = this.goalInMonth.id;
            var strDate_1 = date.toString();
            var status_1 = this.state[obj].toString();
            clearTimeout(this.myTimeOut[obj]);
            this.myTimeOut[obj] = window.setTimeout((function () {
                _this.goalService.markGoal(id_1, strDate_1, status_1).toPromise().then(function () { return; });
            }), 1000);
        }
    };
    /*isDateEqual(a: Date, b: Date): boolean {
        if (a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()){
            return true;
        }else {
            return false;
        }
    }
    isExsitingInGoalCalendars(date: Date): number {
        let calendars = this.goalInMonth.calendars;
        for (let i = 0; i < calendars.length; i++){
            let fullDate = new Date(calendars[i].date_of_calendar);
            if (this.isDateEqual(date, fullDate)) {
                return i;
            }
        }
        return -1;
    }
    updateGoalCalendars(date: Date): void {
        let position = this.isExsitingInGoalCalendars(date);
        if (position < 0) {
            let cal = new Calendar();
            cal.goal_id = this.goalInMonth.id.toString();
            cal.date_of_calendar = date.toString();
            cal.status = this.state[date.getDate() + this.anchor].toString();
            this.goalInMonth.calendars.push(cal);
        }
    }*/
    MonthInYearComponent.prototype.checkGoal = function () {
        var calendars = this.goalInMonth.calendars;
        for (var i = 0; i < calendars.length; i++) {
            var fullDate = new Date(calendars[i].date_of_calendar);
            var year = fullDate.getFullYear();
            var month = fullDate.getMonth();
            var date = fullDate.getDate();
            if (year === this.year) {
                if (month === this.month) {
                    this.state[date + this.anchor] = parseInt(calendars[i].status, 10);
                }
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], MonthInYearComponent.prototype, "year", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MonthInYearComponent.prototype, "setYear", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], MonthInYearComponent.prototype, "month", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], MonthInYearComponent.prototype, "monthName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_goal__["a" /* Goal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_goal__["a" /* Goal */]) === 'function' && _a) || Object)
    ], MonthInYearComponent.prototype, "goalInMonth", void 0);
    MonthInYearComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* Component */])({
            selector: 'app-month-in-year',
            template: __webpack_require__(698),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__goal_goal_service__["a" /* GoalService */]) === 'function' && _b) || Object])
    ], MonthInYearComponent);
    return MonthInYearComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/month-in-year-view.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/environment.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/polyfills.js.map

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_headers__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rxjs_operator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GoalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoalService = (function () {
    function GoalService(http) {
        this.http = http;
    }
    GoalService.prototype.addNewGoal = function (goal) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/goals', JSON.stringify(goal), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] });
    };
    GoalService.prototype.getAllGoals = function (is_reversed, sort_type) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var sortType = parseInt(sort_type);
        return this.http
            .get('https://wintercalendar.herokuapp.com/api/v1/goals?token=' + currentUser.token + '&sort_type=' + sortType + '&is_reversed=' + is_reversed);
    };
    GoalService.prototype.getGoalsById = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http
            .get('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '?email=' + currentUser.email + '&token=' + currentUser.token);
    };
    GoalService.prototype.markGoal = function (id, date_of_calendar, status) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '/calendar', JSON.stringify({ token: currentUser.token, id: id, date_of_calendar: date_of_calendar, status: status }));
    };
    GoalService.prototype.editGoal = function (id, goal) {
        var url = "https://wintercalendar.herokuapp.com/api/v1/goals/" + id;
        return this.http
            .put(url, JSON.stringify(goal), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] })
            .toPromise().then(function () { return goal; });
    };
    GoalService.prototype.setFavorite = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '/favorite', JSON.stringify({ token: currentUser.token }));
    };
    GoalService.prototype.deleteGoal = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.delete('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '?token=' + currentUser.token);
    };
    GoalService.prototype.archiveGoal = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '/archive', JSON.stringify({ token: currentUser.token }));
    };
    GoalService.prototype.handleError = function (error) {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    };
    GoalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GoalService);
    return GoalService;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/goal.service.js.map

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_headers__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rxjs_operator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('currentUser');
    }
    UserService.prototype.logIn = function (email, password) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/sign_in', JSON.stringify({ email: email, password: password }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] });
    };
    UserService.prototype.signUp = function (name, email, password) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/sign_up', JSON.stringify({ name: name, email: email, password: password }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] });
    };
    UserService.prototype.logOut = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            return this.http
                .delete('https://wintercalendar.herokuapp.com/api/v1/auth/sign_out', new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
                headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */],
                body: currentUser
            }));
        }
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.setLoggedIn = function (logined) {
        this.loggedIn = logined;
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/reset_password', JSON.stringify({ email: email }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] });
    };
    UserService.prototype.postNewPassword = function (reset_password_token, new_password) {
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/new_password', JSON.stringify({ reset_password_token: reset_password_token, new_password: new_password }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] });
    };
    UserService.prototype.confirmEmail = function (confirmed_token) {
        return this.http.post('https://wintercalendar.herokuapp.com/api/v1/auth/confirm_email', JSON.stringify({ confirmed_token: confirmed_token }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* headers */] });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/user.service.js.map

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "div,\nlabel,\nspan,\np {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n#header,\n#main {\n  -webkit-transition: margin-left 0.3s;\n  transition: margin-left 0.3s; }\n\nheader {\n  background-color: #1E824C;\n  font-family: 'Raleway', sans-serif;\n  padding: 1em;\n  color: white;\n  /* Add Animation */ }\n  header .modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 200px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.9); }\n  header .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border-radius: 10px;\n    width: 60%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.5s;\n    animation-name: animatetop;\n    animation-duration: 0.5s; }\n    header .modal-content .modal-header {\n      padding: 6px 8px;\n      background-color: #1E824C;\n      color: white;\n      border-radius: 10px 10px 0 0; }\n      header .modal-content .modal-header p {\n        font-size: 26px;\n        font-weight: bold;\n        margin: 0.5em auto; }\n    header .modal-content .modal-body {\n      padding: 6px 16px;\n      color: #1E824C;\n      font-size: 20px; }\n      header .modal-content .modal-body p {\n        margin: 0.5em auto; }\n    header .modal-content .modal-footer {\n      padding: 2px 8px;\n      background-color: #1E824C;\n      color: white;\n      border-radius: 0 0 10px 10px;\n      font-size: 14px; }\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n  header .close {\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold; }\n    header .close:focus, header .close:hover {\n      color: #000;\n      text-decoration: none;\n      cursor: pointer; }\n  header .title-content {\n    font-size: 2em;\n    margin-left: 1em; }\n  header .title-button {\n    float: right;\n    position: relative; }\n    header .title-button button {\n      border: 1px solid #1E824C;\n      border-radius: 10px;\n      background-color: white;\n      color: #1E824C;\n      font-family: inherit;\n      font-size: inherit;\n      padding: 0.5em;\n      width: 6em;\n      margin-left: 0.5em;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s; }\n      header .title-button button:active, header .title-button button:focus, header .title-button button:hover {\n        outline: none;\n        background-color: #1E824C;\n        color: white;\n        font-weight: bold;\n        border: 1px solid white; }\n      header .title-button button#signup {\n        background: #ddd;\n        color: #1E824C;\n        font-weight: normal; }\n  header a {\n    color: white;\n    text-decoration: none; }\n    header a:active, header a:focus, header a:hover {\n      text-decoration: none;\n      color: white; }\n\n.left {\n  width: 45%; }\n\n.clear {\n  clear: both; }\n\nmain section {\n  margin: auto 4em;\n  font-family: 'Raleway', sans-serif; }\n\n.left {\n  width: 45%; }\n\n.clear {\n  clear: both; }\n"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "div,\nlabel,\nspan {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n.view {\n  margin: 2em auto;\n  position: relative; }\n  .view .goal-panel {\n    width: 44%;\n    font-family: 'Raleway', sans-serif;\n    font-size: 14px;\n    margin: 1em 1.5em;\n    padding: 0.5em;\n    border-bottom: 1.5px solid #1E824C;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .view .goal-panel .goal-title {\n      position: relative;\n      margin-bottom: 2em; }\n      .view .goal-panel .goal-title .tooltiptext {\n        visibility: hidden;\n        width: 120px;\n        background-color: white;\n        color: #1E824C;\n        text-align: center;\n        padding: 5px 0;\n        border-radius: 10px;\n        border: 1px solid #1E824C;\n        position: absolute;\n        left: 2em;\n        width: 13em;\n        top: 1.5em;\n        z-index: 1; }\n        .view .goal-panel .goal-title .tooltiptext a {\n          color: #1E824C;\n          text-decoration: none;\n          background: none;\n          box-shadow: none; }\n          .view .goal-panel .goal-title .tooltiptext a:active, .view .goal-panel .goal-title .tooltiptext a:focus, .view .goal-panel .goal-title .tooltiptext a:hover {\n            text-decoration: underline; }\n      .view .goal-panel .goal-title:hover {\n        cursor: pointer; }\n        .view .goal-panel .goal-title:hover .tooltiptext {\n          visibility: visible; }\n      .view .goal-panel .goal-title #title {\n        font-size: 16px;\n        float: left;\n        margin-left: 1.6em; }\n      .view .goal-panel .goal-title .reminder {\n        float: right; }\n    .view .goal-panel .feature {\n      margin-top: 0.2em; }\n      .view .goal-panel .feature #check {\n        float: left; }\n      .view .goal-panel .feature .start-date {\n        margin-left: 0.5em; }\n      .view .goal-panel .feature .favorite {\n        color: #ddd;\n        float: right; }\n        .view .goal-panel .feature .favorite.color {\n          color: #D80027; }\n        .view .goal-panel .feature .favorite:hover {\n          box-shadow: 1px 1px 1px #ddd;\n          cursor: pointer; }\n    .view .goal-panel .description {\n      margin: 0.2em 0 0.2em 2em; }\n    .view .goal-panel .goal-detail {\n      margin-left: 2em; }\n      .view .goal-panel .goal-detail span {\n        display: inline-block; }\n      .view .goal-panel .goal-detail .number-of-days-done,\n      .view .goal-panel .goal-detail .type-of-repetition {\n        width: 13%; }\n      .view .goal-panel .goal-detail .best-chain,\n      .view .goal-panel .goal-detail .passed-day-in-total {\n        text-align: center;\n        width: 20%; }\n      .view .goal-panel .goal-detail .space {\n        width: 9.5%; }\n      .view .goal-panel .goal-detail .type-of-repetition {\n        text-align: right;\n        float: right; }\n    .view .goal-panel .clear {\n      clear: both; }\n  .view a.float {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 30px;\n    right: 15px;\n    background-color: #1E824C;\n    color: #FFF;\n    border-radius: 50px;\n    text-align: center;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .view a.float1 {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 30px;\n    left: 15px;\n    background-color: #1E824C;\n    color: #FFF;\n    border-radius: 50px;\n    text-align: center;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .view a:hover {\n    box-shadow: 2px 2px 4px #555; }\n  .view .my-float {\n    margin-top: 22px; }\n  .view .label-container {\n    position: fixed;\n    bottom: 40px;\n    right: 105px;\n    display: table;\n    visibility: hidden; }\n  .view .label-container1 {\n    position: fixed;\n    bottom: 40px;\n    left: 105px;\n    display: table;\n    visibility: hidden; }\n  .view .label-text {\n    color: #FFF;\n    font-weight: bold;\n    background: #1E824C;\n    display: table-cell;\n    vertical-align: middle;\n    padding: 10px;\n    border-radius: 3px; }\n  .view .label-arrow {\n    display: table-cell;\n    vertical-align: middle;\n    color: #1E824C;\n    opacity: 1; }\n  .view .label-arrow1 {\n    display: table-cell;\n    vertical-align: middle;\n    color: #1E824C;\n    opacity: 1;\n    position: absolute;\n    left: -10px;\n    top: 7px;\n    opacity: 1; }\n  .view a.float + div.label-container {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.2s, opacity 0.5s ease-in-out;\n    transition: visibility 0.2s, opacity 0.5s ease-in-out; }\n  .view a.float:hover + div.label-container {\n    visibility: visible;\n    opacity: 1; }\n  .view a.float1 + div.label-container1 {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.2s, opacity 0.5s ease-in-out;\n    transition: visibility 0.2s, opacity 0.5s ease-in-out; }\n  .view a.float1:hover + div.label-container1 {\n    visibility: visible;\n    opacity: 1; }\n\n@media screen and (max-width: 1239px) {\n  .view .goal-panel {\n    width: 100%;\n    float: none !important;\n    margin: 0 auto; } }\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 10%;\n  overflow: auto;\n  -webkit-animation-name: fadeIn;\n  -webkit-animation-duration: 0.4s;\n  animation-name: fadeIn;\n  animation-duration: 0.4s; }\n  .modal .modal-content {\n    border-radius: 0;\n    border-top: 1px solid #1E824C;\n    position: fixed;\n    bottom: 0;\n    background-color: #eee;\n    width: 100%;\n    box-shadow: 0 -2px 7px #777;\n    -webkit-animation-name: slideIn;\n    -webkit-animation-duration: 0.4s;\n    animation-name: slideIn;\n    animation-duration: 0.4s; }\n    .modal .modal-content .modal-header {\n      padding: 2px 16px;\n      background-color: #1E824C;\n      color: white; }\n    .modal .modal-content .modal-body {\n      padding: 2px 16px;\n      align: center; }\n      .modal .modal-content .modal-body .icon {\n        color: #1E824C;\n        margin: 0.5em 0 0.5em 6.5em; }\n      .modal .modal-content .modal-body .text {\n        color: #1E824C; }\n        .modal .modal-content .modal-body .text:hover {\n          cursor: pointer;\n          text-decoration: underline; }\n      .modal .modal-content .modal-body button {\n        border: 1px solid #1E824C;\n        border-radius: 10px;\n        background-color: #1E824C;\n        color: white;\n        font-family: inherit;\n        font-size: inherit;\n        padding: 0.4em;\n        width: 6em;\n        margin-left: 0.5em;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n        .modal .modal-content .modal-body button:active, .modal .modal-content .modal-body button:focus, .modal .modal-content .modal-body button:hover {\n          outline: none;\n          background-color: white;\n          color: #1E824C;\n          font-weight: bold;\n          border: 1px solid #1E824C; }\n        .modal .modal-content .modal-body button#ok {\n          background: #ddd;\n          color: #1E824C;\n          font-weight: normal;\n          margin-left: 20em; }\n          .modal .modal-content .modal-body button#ok:active, .modal .modal-content .modal-body button#ok:focus, .modal .modal-content .modal-body button#ok:hover {\n            outline: none;\n            background-color: white; }\n      .modal .modal-content .modal-body .space {\n        width: 3em; }\n      .modal .modal-content .modal-body.sort {\n        padding: 20px 16px; }\n        .modal .modal-content .modal-body.sort input {\n          color: #1E824C; }\n        .modal .modal-content .modal-body.sort span {\n          color: #1E824C;\n          display: inline-block; }\n          .modal .modal-content .modal-body.sort span.close1 {\n            color: #1E824C;\n            float: right;\n            font-size: 14px;\n            font-weight: bold; }\n            .modal .modal-content .modal-body.sort span.close1:focus, .modal .modal-content .modal-body.sort span.close1:hover {\n              text-decoration: underline;\n              cursor: pointer; }\n          .modal .modal-content .modal-body.sort span .space {\n            width: 3em; }\n    .modal .modal-content .modal-footer {\n      padding: 2px 16px;\n      background-color: #1E824C;\n      color: white; }\n\n/* Add Animation */\n@-webkit-keyframes slideIn {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n@keyframes slideIn {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.modal-x {\n  display: none;\n  position: fixed;\n  z-index: 2;\n  padding-top: 270px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #fff; }\n  .modal-x .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border-radius: 10px;\n    width: 40%;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.5s;\n    animation-name: animatetop;\n    animation-duration: 0.5s; }\n    .modal-x .modal-content .modal-header {\n      padding: 2px 8px;\n      background-color: #1E824C;\n      color: white;\n      border-radius: 10px 10px 0 0; }\n      .modal-x .modal-content .modal-header p {\n        font-size: 22px;\n        font-weight: bold; }\n    .modal-x .modal-content .modal-body {\n      padding: 2px 16px;\n      color: #1E824C;\n      font-size: 18px; }\n    .modal-x .modal-content .modal-footer {\n      padding: 2px 8px;\n      background-color: #1E824C;\n      color: white;\n      border-radius: 0 0 10px 10px;\n      font-size: 14px; }\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer; }\n\n.no-goal {\n  color: #222;\n  font-size: 24px;\n  position: relative;\n  margin: 2em auto;\n  padding: 1em 0.5em;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n  .no-goal a {\n    color: #1E824C;\n    text-decoration: none; }\n    .no-goal a:active, .no-goal a:focus, .no-goal a:hover {\n      text-decoration: underline; }\n  .no-goal img {\n    float: left;\n    margin-right: 1em; }\n  .no-goal p {\n    margin-top: 1.7em; }\n  .no-goal .clear {\n    clear: both; }\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 80%;\n  margin: 0 auto;\n  font-family: inherit; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"date\"],\n  .form-group input[type=\"datetime-local\"],\n  .form-group input[type=\"number\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"],\n  .form-group select,\n  .form-group textarea {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    font-size: inherit;\n    height: 33px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .form-group input[type=\"date\"]:focus, .form-group input[type=\"date\"]:hover, .form-group input[type=\"date\"]:active,\n    .form-group input[type=\"datetime-local\"]:focus,\n    .form-group input[type=\"datetime-local\"]:hover,\n    .form-group input[type=\"datetime-local\"]:active,\n    .form-group input[type=\"number\"]:focus,\n    .form-group input[type=\"number\"]:hover,\n    .form-group input[type=\"number\"]:active,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"password\"]:active,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover,\n    .form-group input[type=\"text\"]:active,\n    .form-group select:focus,\n    .form-group select:hover,\n    .form-group select:active,\n    .form-group textarea:focus,\n    .form-group textarea:hover,\n    .form-group textarea:active {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group textarea {\n    height: auto; }\n  .form-group select {\n    background-color: white;\n    height: 32px;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  .form-group .left {\n    float: left;\n    width: 45%; }\n    .form-group .left .alert {\n      margin-bottom: 0.5em;\n      margin-left: 1em;\n      margin-top: 0.5em;\n      font-weight: bold;\n      color: #D80027; }\n  .form-group .right {\n    float: right;\n    width: 45%; }\n  .form-group .clear {\n    clear: both; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 2em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:active, .form-group button:focus {\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "div,\nlabel,\nspan {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n.view {\n  margin: 2em auto;\n  position: relative; }\n  .view .goal-panel {\n    width: 44%;\n    font-family: 'Raleway', sans-serif;\n    font-size: 14px;\n    margin: 1em 1.5em;\n    padding: 0.5em;\n    border-bottom: 1.5px solid #1E824C;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .view .goal-panel .goal-title {\n      position: relative;\n      margin-bottom: 2em; }\n      .view .goal-panel .goal-title .tooltiptext {\n        visibility: hidden;\n        width: 120px;\n        background-color: white;\n        color: #1E824C;\n        text-align: center;\n        padding: 5px 0;\n        border-radius: 10px;\n        border: 1px solid #1E824C;\n        position: absolute;\n        left: 2em;\n        width: 13em;\n        top: 1.5em;\n        z-index: 1; }\n        .view .goal-panel .goal-title .tooltiptext a {\n          color: #1E824C;\n          text-decoration: none;\n          background: none;\n          box-shadow: none; }\n          .view .goal-panel .goal-title .tooltiptext a:active, .view .goal-panel .goal-title .tooltiptext a:focus, .view .goal-panel .goal-title .tooltiptext a:hover {\n            text-decoration: underline; }\n      .view .goal-panel .goal-title:hover {\n        cursor: pointer; }\n        .view .goal-panel .goal-title:hover .tooltiptext {\n          visibility: visible; }\n      .view .goal-panel .goal-title #title {\n        font-size: 16px;\n        float: left;\n        margin-left: 1.6em; }\n      .view .goal-panel .goal-title .reminder {\n        float: right; }\n    .view .goal-panel .feature {\n      margin-top: 0.2em; }\n      .view .goal-panel .feature #check {\n        float: left; }\n      .view .goal-panel .feature .start-date {\n        margin-left: 0.5em; }\n      .view .goal-panel .feature .favorite {\n        color: #ddd;\n        float: right; }\n        .view .goal-panel .feature .favorite.color {\n          color: #D80027; }\n        .view .goal-panel .feature .favorite:hover {\n          box-shadow: 1px 1px 1px #ddd;\n          cursor: pointer; }\n    .view .goal-panel .description {\n      margin: 0.2em 0 0.2em 2em; }\n    .view .goal-panel .goal-detail {\n      margin-left: 2em; }\n      .view .goal-panel .goal-detail span {\n        display: inline-block; }\n      .view .goal-panel .goal-detail .number-of-days-done,\n      .view .goal-panel .goal-detail .type-of-repetition {\n        width: 13%; }\n      .view .goal-panel .goal-detail .best-chain,\n      .view .goal-panel .goal-detail .passed-day-in-total {\n        text-align: center;\n        width: 20%; }\n      .view .goal-panel .goal-detail .space {\n        width: 9.5%; }\n      .view .goal-panel .goal-detail .type-of-repetition {\n        text-align: right;\n        float: right; }\n    .view .goal-panel .clear {\n      clear: both; }\n  .view a.float {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 30px;\n    right: 15px;\n    background-color: #1E824C;\n    color: #FFF;\n    border-radius: 50px;\n    text-align: center;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .view a.float1 {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 30px;\n    left: 15px;\n    background-color: #1E824C;\n    color: #FFF;\n    border-radius: 50px;\n    text-align: center;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .view a:hover {\n    box-shadow: 2px 2px 4px #555; }\n  .view .my-float {\n    margin-top: 22px; }\n  .view .label-container {\n    position: fixed;\n    bottom: 40px;\n    right: 105px;\n    display: table;\n    visibility: hidden; }\n  .view .label-container1 {\n    position: fixed;\n    bottom: 40px;\n    left: 105px;\n    display: table;\n    visibility: hidden; }\n  .view .label-text {\n    color: #FFF;\n    font-weight: bold;\n    background: #1E824C;\n    display: table-cell;\n    vertical-align: middle;\n    padding: 10px;\n    border-radius: 3px; }\n  .view .label-arrow {\n    display: table-cell;\n    vertical-align: middle;\n    color: #1E824C;\n    opacity: 1; }\n  .view .label-arrow1 {\n    display: table-cell;\n    vertical-align: middle;\n    color: #1E824C;\n    opacity: 1;\n    position: absolute;\n    left: -10px;\n    top: 7px;\n    opacity: 1; }\n  .view a.float + div.label-container {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.2s, opacity 0.5s ease-in-out;\n    transition: visibility 0.2s, opacity 0.5s ease-in-out; }\n  .view a.float:hover + div.label-container {\n    visibility: visible;\n    opacity: 1; }\n  .view a.float1 + div.label-container1 {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.2s, opacity 0.5s ease-in-out;\n    transition: visibility 0.2s, opacity 0.5s ease-in-out; }\n  .view a.float1:hover + div.label-container1 {\n    visibility: visible;\n    opacity: 1; }\n\n@media screen and (max-width: 1239px) {\n  .view .goal-panel {\n    width: 100%;\n    float: none !important;\n    margin: 0 auto; } }\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 10%;\n  overflow: auto;\n  -webkit-animation-name: fadeIn;\n  -webkit-animation-duration: 0.4s;\n  animation-name: fadeIn;\n  animation-duration: 0.4s; }\n  .modal .modal-content {\n    border-radius: 0;\n    border-top: 1px solid #1E824C;\n    position: fixed;\n    bottom: 0;\n    background-color: #eee;\n    width: 100%;\n    box-shadow: 0 -2px 7px #777;\n    -webkit-animation-name: slideIn;\n    -webkit-animation-duration: 0.4s;\n    animation-name: slideIn;\n    animation-duration: 0.4s; }\n    .modal .modal-content .modal-header {\n      padding: 2px 16px;\n      background-color: #1E824C;\n      color: white; }\n    .modal .modal-content .modal-body {\n      padding: 2px 16px;\n      align: center; }\n      .modal .modal-content .modal-body .icon {\n        color: #1E824C;\n        margin: 0.5em 0 0.5em 6.5em; }\n      .modal .modal-content .modal-body .text {\n        color: #1E824C; }\n        .modal .modal-content .modal-body .text:hover {\n          cursor: pointer;\n          text-decoration: underline; }\n      .modal .modal-content .modal-body button {\n        border: 1px solid #1E824C;\n        border-radius: 10px;\n        background-color: #1E824C;\n        color: white;\n        font-family: inherit;\n        font-size: inherit;\n        padding: 0.5em;\n        width: 6em;\n        margin-left: 0.4em;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n        .modal .modal-content .modal-body button:active, .modal .modal-content .modal-body button:focus, .modal .modal-content .modal-body button:hover {\n          outline: none;\n          background-color: white;\n          color: #1E824C;\n          font-weight: bold;\n          border: 1px solid #1E824C; }\n        .modal .modal-content .modal-body button#ok {\n          background: #ddd;\n          color: #1E824C;\n          font-weight: normal;\n          margin-left: 20em; }\n          .modal .modal-content .modal-body button#ok:active, .modal .modal-content .modal-body button#ok:focus, .modal .modal-content .modal-body button#ok:hover {\n            outline: none;\n            background-color: white; }\n      .modal .modal-content .modal-body .space {\n        width: 3em; }\n      .modal .modal-content .modal-body.sort {\n        padding: 20px 16px; }\n        .modal .modal-content .modal-body.sort input {\n          color: #1E824C; }\n        .modal .modal-content .modal-body.sort span {\n          color: #1E824C;\n          display: inline-block; }\n          .modal .modal-content .modal-body.sort span.close1 {\n            color: #1E824C;\n            float: right;\n            font-size: 14px;\n            font-weight: bold; }\n            .modal .modal-content .modal-body.sort span.close1:focus, .modal .modal-content .modal-body.sort span.close1:hover {\n              text-decoration: underline;\n              cursor: pointer; }\n          .modal .modal-content .modal-body.sort span .space {\n            width: 3em; }\n    .modal .modal-content .modal-footer {\n      padding: 2px 16px;\n      background-color: #1E824C;\n      color: white; }\n\n/* Add Animation */\n@-webkit-keyframes slideIn {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n@keyframes slideIn {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.modal-x {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 270px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #fff; }\n  .modal-x .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border-radius: 10px;\n    width: 40%;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.5s;\n    animation-name: animatetop;\n    animation-duration: 0.5s; }\n    .modal-x .modal-content .modal-header {\n      padding: 2px 8px;\n      background-color: #1E824C;\n      color: white;\n      border-radius: 10px 10px 0 0; }\n      .modal-x .modal-content .modal-header p {\n        font-size: 22px;\n        font-weight: bold; }\n    .modal-x .modal-content .modal-body {\n      padding: 2px 16px;\n      color: #1E824C;\n      font-size: 18px; }\n    .modal-x .modal-content .modal-footer {\n      padding: 2px 8px;\n      background-color: #1E824C;\n      color: white;\n      border-radius: 0 0 10px 10px;\n      font-size: 14px; }\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer; }\n\n.no-goal {\n  color: #222;\n  font-size: 24px;\n  position: relative;\n  margin: 2em auto;\n  padding: 1em 0.5em;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n  .no-goal a {\n    color: #1E824C;\n    text-decoration: none; }\n    .no-goal a:active, .no-goal a:focus, .no-goal a:hover {\n      text-decoration: underline; }\n  .no-goal img {\n    float: left;\n    margin-right: 1em; }\n  .no-goal p {\n    margin-top: 1.7em; }\n  .no-goal .clear {\n    clear: both; }\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 80%;\n  margin: 0 auto;\n  font-family: inherit; }\n  .form-group .alert {\n    color: #FF0000;\n    font-size: 20px; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"date\"],\n  .form-group input[type=\"datetime-local\"],\n  .form-group input[type=\"number\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"],\n  .form-group select,\n  .form-group textarea {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    font-size: inherit;\n    height: 33px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .form-group input[type=\"date\"]:active, .form-group input[type=\"date\"]:focus, .form-group input[type=\"date\"]:hover,\n    .form-group input[type=\"datetime-local\"]:active,\n    .form-group input[type=\"datetime-local\"]:focus,\n    .form-group input[type=\"datetime-local\"]:hover,\n    .form-group input[type=\"number\"]:active,\n    .form-group input[type=\"number\"]:focus,\n    .form-group input[type=\"number\"]:hover,\n    .form-group input[type=\"password\"]:active,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:active,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover,\n    .form-group select:active,\n    .form-group select:focus,\n    .form-group select:hover,\n    .form-group textarea:active,\n    .form-group textarea:focus,\n    .form-group textarea:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group textarea {\n    height: auto; }\n  .form-group select {\n    background-color: white;\n    height: 32px;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  .form-group .left {\n    float: left;\n    width: 45%; }\n  .form-group .right {\n    float: right;\n    width: 45%; }\n  .form-group .clear {\n    clear: both; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 7.5em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer;\n    float: right; }\n    .form-group button#cancel {\n      background-color: #eee;\n      color: #1E824C;\n      border: 1px solid #1E824C;\n      margin-right: 1em; }\n      .form-group button#cancel:active, .form-group button#cancel:focus, .form-group button#cancel:hover {\n        background-color: white; }\n    .form-group button:active, .form-group button:focus, .form-group button:hover {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 40%;\n  margin: 0 auto;\n  position: relative; }\n  .form-group .alert {\n    color: #FF0000;\n    font-size: 12px; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"email\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"] {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    height: 33px;\n    padding: 0.2em;\n    margin-bottom: 2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .form-group input[type=\"email\"]:focus, .form-group input[type=\"email\"]:hover,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 102%;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:focus, .form-group button:active {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n  .form-group span {\n    position: absolute;\n    top: 72%;\n    left: 95%;\n    color: #aaa;\n    cursor: pointer; }\n"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "p {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n.introduction {\n  color: #eee;\n  font-size: 28px; }\n  .introduction a {\n    color: #28ab64;\n    text-decoration: none; }\n    .introduction a:active, .introduction a:focus, .introduction a:hover {\n      text-decoration: underline; }\n  .introduction .welcome {\n    position: relative;\n    margin-top: 2em;\n    border-bottom: 2px solid #1E824C;\n    padding: 1em 0.5em;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n    .introduction .welcome p {\n      float: left;\n      margin-top: 1.5em; }\n    .introduction .welcome img {\n      float: right; }\n    .introduction .welcome:hover {\n      box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.9);\n      padding: 1.2em 0.6em; }\n      .introduction .welcome:hover a {\n        color: #D80027; }\n  .introduction .info {\n    border-bottom: 2px solid #1E824C;\n    position: relative;\n    margin: 2em auto;\n    padding: 1em 0.5em;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n    .introduction .info img {\n      float: left; }\n    .introduction .info p {\n      margin-top: 0.8em; }\n    .introduction .info:hover {\n      box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.9);\n      padding: 1.2em 0.6em; }\n      .introduction .info:hover a {\n        color: #D80027; }\n  .introduction .logged-in {\n    border-bottom: 2px solid #1E824C;\n    position: relative;\n    margin: 2em auto;\n    padding: 1em 0.5em;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n    .introduction .logged-in img {\n      float: left; }\n    .introduction .logged-in p {\n      margin-top: 1.6em;\n      float: right; }\n    .introduction .logged-in:hover {\n      box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.9);\n      padding: 1.2em 0.6em; }\n      .introduction .logged-in:hover a {\n        color: #D80027; }\n  .introduction .clear {\n    clear: both; }\n"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = "@-webkit-keyframes up {\n  0%, 100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-30deg);\n            transform: rotate(-30deg); } }\n\n@keyframes up {\n  0%, 100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-30deg);\n            transform: rotate(-30deg); } }\n\n@-webkit-keyframes down {\n  0%, 100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg); } }\n\n@keyframes down {\n  0%, 100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg); } }\n\n@-webkit-keyframes r-to-l {\n  100% {\n    margin-left: -1px; } }\n\n@keyframes r-to-l {\n  100% {\n    margin-left: -1px; } }\n\n.background-loading {\n  background: #000;\n  overflow: hidden;\n  margin: 0; }\n  .background-loading .pacman:before, .background-loading .pacman:after {\n    content: '';\n    position: absolute;\n    background: #1E824C;\n    width: 100px;\n    height: 50px;\n    left: 50%;\n    top: 50%;\n    margin-left: -50px;\n    margin-top: -50px;\n    border-radius: 50px 50px 0 0;\n    -webkit-animation: up 0.5s infinite;\n    animation: up 0.5s infinite; }\n  .background-loading .pacman:after {\n    margin-top: -1px;\n    border-radius: 0 0 50px 50px;\n    -webkit-animation: down 0.5s infinite;\n    animation: down 0.5s infinite; }\n  .background-loading .dot {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 10px;\n    height: 10px;\n    margin-top: -5px;\n    margin-left: 30px;\n    border-radius: 50%;\n    background: #aaa;\n    z-index: -1;\n    box-shadow: 30px 0 0 #aaa, 60px 0 0 #aaa, 90px 0 0 #aaa, 120px 0 0 #aaa, 150px 0 0 #aaa;\n    -webkit-animation: r-to-l 0.5s infinite;\n    animation: r-to-l 0.5s infinite; }\n"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 40%;\n  margin: 0 auto;\n  position: relative; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"email\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"] {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    height: 25px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    box-sizing: content-box; }\n    .form-group input[type=\"email\"]:focus, .form-group input[type=\"email\"]:hover,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 101%;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:active, .form-group button:focus, .form-group button:hover {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n  .form-group span {\n    position: absolute;\n    top: 72%;\n    left: 95%;\n    color: #aaa;\n    cursor: pointer; }\n    .form-group span.wrong {\n      top: 56%; }\n  .form-group .alert {\n    margin: 1em auto; }\n"

/***/ },

/***/ 677:
/***/ function(module, exports) {

module.exports = "div,\nlabel,\nspan {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n* {\n  box-sizing: border-box; }\n\nul {\n  list-style-type: none; }\n\n.left-view {\n  margin-top: 3em;\n  position: relative;\n  width: 30%;\n  float: left;\n  height: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 2em; }\n  .left-view p {\n    margin: 2em 0;\n    font-size: 18px;\n    font-weight: bold;\n    color: #1E824C; }\n  .left-view label {\n    font-weight: bold;\n    float: left;\n    width: 32%; }\n  .left-view span {\n    display: block; }\n    .left-view span#description, .left-view span#repetition {\n      margin-left: 32%; }\n  .left-view a {\n    color: #1E824C;\n    text-decoration: none;\n    background-color: white;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    padding: 0.5em 0.5em;\n    position: absolute;\n    top: 2.2em;\n    right: 1em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    float: right; }\n    .left-view a:active, .left-view a:focus, .left-view a:hover {\n      cursor: pointer;\n      background-color: #1E824C;\n      color: white;\n      border: 1px solid #1E824C; }\n\n.right-view {\n  width: 65%;\n  float: right; }\n  .right-view a.float {\n    position: fixed;\n    width: 60px;\n    height: 60px;\n    bottom: 30px;\n    right: 40px;\n    background-color: #1E824C;\n    color: #FFF;\n    border-radius: 50px;\n    text-align: center;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .right-view a:hover {\n    cursor: pointer;\n    box-shadow: 2px 2px 4px #555; }\n  .right-view .my-float {\n    margin-top: 22px; }\n  .right-view .label-container {\n    position: fixed;\n    bottom: 38px;\n    right: 105px;\n    display: table;\n    visibility: hidden; }\n  .right-view .label-text {\n    color: #FFF;\n    font-weight: bold;\n    background: #1E824C;\n    display: table-cell;\n    vertical-align: middle;\n    padding: 10px;\n    border-radius: 3px; }\n  .right-view .label-arrow {\n    display: table-cell;\n    vertical-align: middle;\n    color: #1E824C;\n    opacity: 1; }\n  .right-view a.float + div.label-container {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.2s, opacity 0.5s ease-in-out;\n    transition: visibility 0.2s, opacity 0.5s ease-in-out; }\n  .right-view a.float:hover + div.label-container {\n    visibility: visible;\n    opacity: 1; }\n  .right-view .item {\n    width: 80%;\n    align: center;\n    font-family: inherit;\n    position: relative;\n    margin: 2em auto;\n    border: 1px solid #1E824C;\n    border-radius: 10px; }\n    .right-view .item .month {\n      padding: 1em;\n      width: 100%; }\n      .right-view .item .month ul {\n        margin: 0;\n        padding: 0; }\n        .right-view .item .month ul li {\n          color: #1E824C;\n          font-size: 25px;\n          font-weight: bold;\n          text-transform: uppercase;\n          letter-spacing: 3px; }\n      .right-view .item .month .prev {\n        float: left;\n        padding-top: 10px; }\n        .right-view .item .month .prev:hover {\n          cursor: pointer; }\n      .right-view .item .month .next {\n        float: right;\n        padding-top: 10px; }\n        .right-view .item .month .next:hover {\n          cursor: pointer; }\n    .right-view .item .weekdays {\n      margin: 0;\n      padding: 10px 0;\n      background-color: #1E824C; }\n      .right-view .item .weekdays.hidden {\n        display: none; }\n      .right-view .item .weekdays li {\n        display: inline-block;\n        width: 13.6%;\n        color: white;\n        text-align: center; }\n    .right-view .item .days {\n      background: #eef;\n      margin: 0 auto;\n      padding: 0.9em 0.9em 0.5em;\n      position: relative;\n      border-radius: 10px; }\n      .right-view .item .days li {\n        list-style-type: none;\n        display: inline-block;\n        width: 13.7%;\n        font-size: 15px;\n        height: 2em;\n        text-align: center;\n        margin-bottom: 5px;\n        padding: 2em 0;\n        color: black;\n        -webkit-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out; }\n        .right-view .item .days li.active {\n          background-color: rgba(30, 130, 76, 0.3);\n          font-weight: bold; }\n        .right-view .item .days li.hide {\n          display: none; }\n        .right-view .item .days li.hide-background {\n          background-color: #eef; }\n        .right-view .item .days li.fail, .right-view .item .days li.pass {\n          background: url(\"../../img/passed.png\") no-repeat center;\n          background-clip: border-box;\n          background-size: 25%;\n          color: #eef;\n          text-align: right; }\n          .right-view .item .days li.fail.active, .right-view .item .days li.pass.active {\n            background-color: rgba(30, 130, 76, 0.3);\n            color: rgba(30, 130, 76, 0); }\n        .right-view .item .days li.fail {\n          background: url(\"../../img/failed.png\") no-repeat center;\n          background-clip: border-box;\n          background-size: 25%;\n          color: #eef;\n          text-align: right; }\n  .right-view .tooltiptext {\n    width: 20em;\n    background-color: #eee;\n    color: #D80027;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    border: 1px solid #D80027;\n    position: fixed;\n    z-index: 1;\n    bottom: 1em;\n    left: 60%;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    opacity: 0; }\n    .right-view .tooltiptext.visible {\n      opacity: 1; }\n  .right-view .tooltiptext1 {\n    width: 27em;\n    background-color: #eee;\n    color: #D80027;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    border: 1px solid #D80027;\n    position: fixed;\n    z-index: 1;\n    bottom: 1em;\n    left: 58%;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    opacity: 0; }\n    .right-view .tooltiptext1.visible {\n      opacity: 1; }\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 270px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #fff; }\n\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border-radius: 10px;\n  width: 40%;\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.5s;\n  animation-name: animatetop;\n  animation-duration: 0.5s; }\n  .modal-content .modal-header {\n    padding: 2px 8px;\n    background-color: #1E824C;\n    color: white;\n    border-radius: 10px 10px 0 0; }\n    .modal-content .modal-header p {\n      font-size: 22px;\n      font-weight: bold; }\n  .modal-content .modal-body {\n    padding: 2px 16px;\n    color: #1E824C;\n    font-size: 18px; }\n  .modal-content .modal-footer {\n    padding: 2px 8px;\n    background-color: #1E824C;\n    color: white;\n    border-radius: 0 0 10px 10px;\n    font-size: 14px; }\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer; }\n\n@media screen and (max-width: 1288px) {\n  .item {\n    width: 80%; }\n    .item .weekdays li {\n      width: 13.4%; }\n    .item .days li {\n      width: 13.7%; } }\n"

/***/ },

/***/ 678:
/***/ function(module, exports) {

module.exports = ".page-not-found {\n  position: relative;\n  margin: 5em; }\n  .page-not-found p {\n    font-size: 18px; }\n    .page-not-found p a {\n      color: #1E824C;\n      font-weight: bold;\n      text-decoration: none; }\n      .page-not-found p a:hover, .page-not-found p a:focus, .page-not-found p a:active {\n        text-decoration: underline; }\n"

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 40%;\n  margin: 0 auto;\n  position: relative; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"email\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"] {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    height: 25px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    box-sizing: content-box; }\n    .form-group input[type=\"email\"]:focus, .form-group input[type=\"email\"]:hover,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 102%;\n    margin-top: 2em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:focus, .form-group button:active {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n  .form-group span {\n    position: absolute;\n    color: #aaa;\n    cursor: pointer; }\n    .form-group span.a {\n      top: 49%;\n      left: 95%; }\n    .form-group span.b {\n      top: 88.5%;\n      left: 95%; }\n"

/***/ },

/***/ 680:
/***/ function(module, exports) {

module.exports = ".sidenav {\n  border-right: 1px solid white;\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #1E824C;\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 15px;\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s; }\n  .sidenav .no-user p, .sidenav .no-user b {\n    margin-left: 0.8em; }\n    .sidenav .no-user p a, .sidenav .no-user b a {\n      padding: 0;\n      display: inline;\n      text-decoration: underline; }\n      .sidenav .no-user p a:hover, .sidenav .no-user p a:focus, .sidenav .no-user p a:active, .sidenav .no-user b a:hover, .sidenav .no-user b a:focus, .sidenav .no-user b a:active {\n        font-weight: bold; }\n  .sidenav .user-name {\n    border-bottom: 1.5px solid white;\n    padding-bottom: 0.8em; }\n    .sidenav .user-name span {\n      position: relative;\n      top: 0;\n      left: 75px;\n      font-size: 50px; }\n    .sidenav .user-name p {\n      text-align: center;\n      margin: 0.5em 0.5em 0;\n      font-weight: bold;\n      font-size: 18px; }\n  .sidenav a {\n    padding: 8px 8px 8px 16px;\n    text-decoration: none;\n    font-size: 14px;\n    color: white;\n    display: block; }\n    .sidenav a:hover,\n    .offcanvas .sidenav a:focus {\n      text-decoration: underline; }\n    .sidenav a:nth-child(5n) {\n      border-bottom: 1px solid white; }\n  .sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 20px;\n    font-size: 14px;\n    margin-left: 40px; }\n\nspan {\n  position: absolute;\n  left: 20px;\n  top: 22px;\n  font-size: 20px; }\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 14px; } }\n"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 40%;\n  margin: 0 auto;\n  position: relative; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"email\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"] {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    height: 25px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    box-sizing: content-box; }\n    .form-group input[type=\"email\"]:focus, .form-group input[type=\"email\"]:hover,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 101%;\n    margin-top: 2em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:focus, .form-group button:active {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n  .form-group span {\n    position: absolute;\n    color: #aaa;\n    cursor: pointer; }\n    .form-group span.a {\n      top: 70%;\n      left: 95%; }\n    .form-group span.b {\n      top: 91.5%;\n      left: 95%; }\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "ul {\n  list-style-type: none; }\n\nbody {\n  font-family: Verdana, sans-serif; }\n\n.nopadding {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n.haveborder {\n  border: 1px solid white !important; }\n\n/* Month header */\n.month {\n  padding: 10px 10px;\n  width: 100%;\n  background: #1E824C; }\n\n/* Month list */\n.month ul {\n  margin: 0;\n  padding: 0; }\n\n.month ul li {\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 3px; }\n\n/* Previous button inside month header */\n.month .prev {\n  float: left;\n  padding-top: 10px; }\n\n/* Next button */\n.month .next {\n  float: right;\n  padding-top: 10px; }\n\n/* Weekdays (Mon-Sun) */\n.weekdays {\n  margin: 0;\n  padding: 10px 0;\n  background-color: #ddd; }\n\n.weekdays li {\n  display: inline-block;\n  width: 12.6%;\n  color: #666;\n  text-align: center; }\n\n.days {\n  padding: 10px 0;\n  background: #eee;\n  margin: 0;\n  height: 170px; }\n\n.days li {\n  list-style-type: none;\n  display: inline-block;\n  width: 12.6%;\n  text-align: center;\n  margin-bottom: 5px;\n  margin-right: 3.3px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  text-align: center;\n  z-index: 1; }\n\n/* Highlight the \"current\" day */\n.days li .active {\n  padding: 5px;\n  background: #1abc9c;\n  color: white !important; }\n"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nul {\n  list-style-type: none; }\n\nbutton {\n  border: 1px solid #1E824C;\n  border-radius: 10px;\n  background-color: #1E824C;\n  color: white;\n  font-family: inherit;\n  font-size: inherit;\n  padding: 0.5em;\n  width: 7.5em;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  float: left; }\n  button#detailBtn {\n    background-color: #eee;\n    color: #1E824C;\n    border: 1px solid #1E824C;\n    margin-right: 1em; }\n    button#detailBtn:active, button#detailBtn:focus, button#detailBtn:hover {\n      background-color: white; }\n  button:active, button:focus, button:hover {\n    outline: none;\n    background-color: white;\n    color: #1E824C;\n    font-weight: bold;\n    border: 1.5px solid #1E824C; }\n\n.item {\n  width: 60%;\n  align: center;\n  font-family: inherit;\n  position: relative;\n  margin: 1em auto;\n  border: 1px solid #1E824C;\n  border-radius: 10px; }\n  .item .year {\n    padding: .5em;\n    width: 100%; }\n    .item .year ul {\n      margin: 0;\n      padding: 0; }\n      .item .year ul li {\n        color: #1E824C;\n        font-size: 16px;\n        font-weight: bold;\n        text-transform: uppercase;\n        letter-spacing: 3px; }\n    .item .year .prev {\n      float: left;\n      padding-top: 0px; }\n      .item .year .prev:hover {\n        cursor: pointer; }\n    .item .year .next {\n      float: right;\n      padding-top: 0px; }\n      .item .year .next:hover {\n        cursor: pointer; }\n"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "<header id=\"header\">\n    <side-bar></side-bar>\n    <span class=\"title-content\"><a routerLink=\"\"><span class=\"fa fa-calendar-check-o\"></span> <span id=\"title-content\">{{title}}</span></a>\n    </span>\n    <div class=\"title-button default-button\" *ngFor=\"let button of listButton\">\n        <button (click)=\"onClick(button.route)\" id=\"{{button.route}}\">{{button.value}}</button>\n    </div>\n    <div class=\"title-button\" id=\"logout-button\" hidden=\"hidden\">\n        <button (click)=\"logout()\">Logout</button>\n    </div>\n    <div class=\"clear\">\n    </div>\n    <div id=\"notification-logout\" class=\"modal\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <span class=\"close\" (click)=\"openModal(false)\">&times;</span>\n                <p>Seinfeld Calendar\n                    <p>\n            </div>\n            <div class=\"modal-body\">\n                <p>Thank you for using our application!</p>\n            </div>\n        </div>\n    </div>\n</header>\n<main id=\"main\">\n    <section>\n        <router-outlet></router-outlet>\n    </section>\n</main>\n"

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "<div [ngSwitch]=\"loading\">\n    <div *ngSwitchCase=\"'loading'\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n    <div *ngSwitchCase=\"'loaded'\">\n        <div class=\"view\">\n            <div class=\"item\">\n                <div class=\"item1\" *ngFor=\"let goal of goals; let i = index;\">\n                    <div class=\"goal-panel\" id=\"item-{{goal.id}}\" *ngIf=\"i % 2 == 0\" style=\"float: left;\">\n                        <div class=\"goal-title\">\n                            <b id=\"title\" (click)=\"displayMonthView(goal)\">{{goal.goal_name}}</b>\n                            <span class=\"tooltiptext\">&nbsp;&nbsp;<a (click)=\"displayMonthView(goal)\">Month view</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a (click)=\"displayYearView(goal)\">Year view</a>&nbsp;&nbsp;</span>\n                            <!-- <div class=\"reminder\"><span class=\"fa fa-clock-o\"></span> xx:xx</div> -->\n                        </div>\n                        <div class=\"clear\"></div>\n                        <div class=\"feature\">\n                            <input class=\"checking\" type=\"checkbox\" name=\"\" value=\"{{goal.id}}\" (change)=\"showContextMenu(goal.id)\">\n                            <span class=\"start-date\">Start date: {{goal.start_date | date: 'yyyy, MMM dd'}}</span>\n                            <div class=\"favorite\" [class.color]=\"goal.is_favorite\" id=\"fav-{{goal.id}}\"><span class=\"fa fa-star\"></span></div>\n                        </div>\n                        <div class=\"clear\"></div>\n                        <!-- <div class=\"description\">\n                    {{goal.description}}\n                  </div> -->\n                        <div class=\"goal-detail\">\n                            <span class=\"number-of-days-done\">{{goal.current_chain}} day</span>\n                            <span class=\"space\"></span>\n                            <span class=\"best-chain\">{{goal.best_chain}} best</span>\n                            <span class=\"space\"></span>\n                            <span class=\"passed-day-in-total\">{{goal.progress}}</span>\n                            <span class=\"space\"></span>\n\n                            <span class=\"type-of-repetition\">\n              <div [ngSwitch]=\"goal.repetition.type_of_repetition\">\n                <div *ngSwitchCase=\"1\">Daily</div>\n                <div *ngSwitchCase=\"2\">Weekly</div>\n                <div *ngSwitchCase=\"3\">Monthly</div>\n                <div *ngSwitchCase=\"4\">Yearly</div>\n                <div *ngSwitchDefault>Daily</div>\n              </div></span>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"goal-panel\" id=\"item-{{goal.id}}\" *ngIf=\"i % 2 != 0\" style=\"float: right;\">\n                        <div class=\"goal-title\">\n                            <b id=\"title\" (click)=\"displayMonthView(goal)\">{{goal.goal_name}}</b>\n                            <span class=\"tooltiptext\">&nbsp;&nbsp;<a (click)=\"displayMonthView(goal)\">Month view</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a (click)=\"displayYearView(goal)\">Year view</a>&nbsp;&nbsp;</span>\n                            <!-- <div class=\"reminder\"><span class=\"fa fa-clock-o\"></span> xx:xx</div> -->\n                        </div>\n                        <div class=\"clear\"></div>\n                        <div class=\"feature\">\n                            <input class=\"checking\" type=\"checkbox\" name=\"\" value=\"{{goal.id}}\" (change)=\"showContextMenu(goal.id)\">\n                            <span class=\"start-date\">Start date: {{goal.start_date | date: 'yyyy, MMM dd'}}</span>\n                            <div class=\"favorite\" [class.color]=\"goal.is_favorite\" id=\"fav-{{goal.id}}\"><span class=\"fa fa-star\"></span></div>\n                        </div>\n                        <div class=\"clear\"></div>\n                        <!-- <div class=\"description\">\n                    {{goal.description}}\n                  </div> -->\n                        <div class=\"goal-detail\">\n                            <span class=\"number-of-days-done\">{{goal.current_chain}} day</span>\n                            <span class=\"space\"></span>\n                            <span class=\"best-chain\">{{goal.best_chain}} best</span>\n                            <span class=\"space\"></span>\n                            <span class=\"passed-day-in-total\">{{goal.progress}}</span>\n                            <span class=\"space\"></span>\n\n                            <span class=\"type-of-repetition\">\n              <div [ngSwitch]=\"goal.repetition.type_of_repetition\">\n                <div *ngSwitchCase=\"1\">Daily</div>\n                <div *ngSwitchCase=\"2\">Weekly</div>\n                <div *ngSwitchCase=\"3\">Monthly</div>\n                <div *ngSwitchCase=\"4\">Yearly</div>\n                <div *ngSwitchDefault>Daily</div>\n              </div></span>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            <a routerLink=\"/createnewgoal\" class=\"float\">\n                <i class=\"fa fa-plus my-float\"></i>\n            </a>\n            <div class=\"label-container\">\n                <div class=\"label-text\">New goal</div>\n                <i class=\"fa fa-play label-arrow\"></i>\n            </div>\n            <a (click)=\"showSortMenu()\" class=\"float1\" [hidden]=\"goals.length == 0\">\n                <i class=\"fa fa-sort my-float\"></i>\n            </a>\n            <div class=\"label-container1\">\n                <div class=\"label-text\">Sort</div>\n                <i class=\"fa fa-caret-left fa-2x label-arrow1\"></i>\n            </div>\n        </div>\n        <div class=\"no-goal\" [hidden]=\"goals.length != 0\">\n            <img src=\"../img/oops.png\" alt=\"welcome\" width=\"120px\" style=\"vertical-align: middle;\">\n            <p>Opps! No goals. Check your <a routerLink=\"/detailview\">dash board</a> or <a routerLink=\"/createnewgoal\">create a new goal!</a></p>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>\n<div id=\"context-menu\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <!-- <span class=\"close\" (click)=\"showModal(false)\">&times;</span> -->\n            <span class=\"fa fa-trash icon\" style=\"color: #D80027;\"></span><span class=\"text\" style=\"color: #D80027;\" (click)=\"showDeleteMenu()\"> Delete</span>\n            <span class=\"space\"></span>\n            <span class=\"fa fa-check-circle icon\"></span><span class=\"text\" (click)=\"archiveGoals()\"> Unarchive</span>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n    </div>\n</div>\n<div id=\"sort-modal\" class=\"modal\" (mouseleave)=\"showSortMenu()\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body sort\">\n            <span class=\"close1\" (click)=\"showSortMenu()\">Close &times;</span>\n            <span><b>Sort by</b></span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"date-created\" name=\"sort-type\" value=\"1\" [checked]=\"sortType == 1\" (change)=\"sort()\"> <span>Day created</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"name\" name=\"sort-type\" value=\"2\" [checked]=\"sortType == 2\" (change)=\"sort()\"> <span>Name</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"start-date\" name=\"sort-type\" value=\"3\" [checked]=\"sortType == 3\" (change)=\"sort()\"> <span>Start date</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"frequecy\" name=\"sort-type\" value=\"4\" [checked]=\"sortType == 4\" (change)=\"sort()\"> <span>Frequency</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"current-chain\" name=\"sort-type\" value=\"5\" [checked]=\"sortType == 5\" (change)=\"sort()\"> <span>Current chain</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"best-chain\" name=\"sort-type\" value=\"6\" [checked]=\"sortType == 6\" (change)=\"sort()\"> <span>Best chain</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"ratio\" name=\"sort-type\" value=\"7\" [checked]=\"sortType == 7\" (change)=\"sort()\"> <span>Ratio</span>\n            <span class=\"space\"></span>\n            <input type=\"checkbox\" id=\"reverse-order\" name=\"reverse\" value=\"0\" [checked]=\"isReversed\" (change)=\"sort()\"> <span>Reverse</span>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n    </div>\n</div>\n<div id=\"notification-delete\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <span class=\"close\" style=\"font-size: 8px;\"(click)=\"showDeleteMenu()\">&times;</span>\n        </div>\n        <div class=\"modal-body\">\n            <p style=\"font-size: 16px;\">Do you really wants to delete your goals?</p>\n            <button type=\"button\" name=\"button\" id=\"ok\" (click)=\"deleteGoals()\">Ok</button>\n            <button type=\"button\" name=\"button\" (click)=\"showDeleteMenu()\">Cancel</button>\n        </div>\n    </div>\n</div>\n<div id=\"deleting\" class=\"modal-x\">\n    <div class=\"modal-content\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n</div>\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "<div [ngSwitch]=\"loading\">\n\t<div *ngSwitchCase=\"'loading'\"><app-loading-indicator></app-loading-indicator></div>\n\t<div *ngSwitchCase=\"'loaded'\">\n\t\t<form [formGroup]=\"createNewGoalForm\" (ngSubmit)=\"addNewGoal()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<h2 class=\"heading\">New goal</h2>\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<label for=\"goal-name\">Goal name</label>\n\t\t\t\t\t<input autofocus formControlName=\"goal_name\" type=\"text\" id=\"goal-name\" name=\"goal-name\" required placeholder=\"What do you want to do...\">\n\t\t\t\t\t<div class=\"alert\" id=\"goal-name-alert\" hidden>Goal name is required!</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<label for=\"from\" class=\"fix\">From</label>\n\t\t\t\t\t<input formControlName=\"start_date\" type=\"datetime-local\" id=\"start-date\" name=\"start-date\" (change)=\"changeMonthlyType()\" value=\"{{roundUpTime() | date:'yyyy-MM-ddTHH:mm'}}\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t<label id=\"label-description\" for=\"description\">Description</label>\n\t\t\t\t<textarea rows='4' formControlName=\"description\" type=\"textarea\" id=\"description\" name=\"description\" required placeholder=\"Tell me more about your goal...\"></textarea>\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<label id=\"label-repetition\" for=\"repetition\" class='fix'>Repetition</label>\n\t\t\t\t\t<select formControlName=\"type_of_repetition\" class=\"repetition-type\" id=\"repetition-type\" (change)=\"changeRepetitionType()\">\n\t\t\t\t\t\t\t<option *ngFor=\"let rp of repetitionTypes; let i = index;\" value=\"{{i + 1}}\">{{rp}}</option>\n\t\t\t\t\t\t</select >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"right\">\n\t                every&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t<input formControlName=\"how_often\" type=\"number\" min='1' class=\"inline-input\" style=\"width: 10%; margin-top: 2.7em;\"/>\n\t                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"repetitionFrequencyType\">day(s)</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t<!-- TODO -->\n\t\t\t\t\t<div class=\"left\" id=\"weeklyRepetition\" hidden=\"hidden\" style=\"margin-top: 2em;\">\n\t\t\t\t\t\t\t<span *ngFor=\"let day of weekDays; let i = index;\"><input type=\"checkbox\" formControlName=\"day_of_week_{{day}}\" name=\"{{day}}\" value=\"{{i}}\" /> {{day}} </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t<!-- FIXME -->\n\t\t\t\t<div class=\"left\" id=\"monthlyRepetition\" hidden=\"hidden\" style=\"margin-top: 2em;\">\n\t\t\t\t\t\t<input type=\"radio\" name=\"type_of_month\" formControlName=\"type_of_month\" value='1' /> on the same day each month\n\t\t\t\t\t\t<input type=\"radio\" name=\"type_of_month\" formControlName=\"type_of_month\" value='2' /> on every <span id=\"dayDefineValue\">first Monday</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<select formControlName=\"type_of_end_date\" class=\"repetition-limited-time\" id=\"repetition-limited-time\" (change)=\"changeRepetitionLimitedTime()\" style=\"margin-top: 2em;\">\n\t\t\t\t\t\t\t<option *ngFor=\"let rlt of repetitionLimitedTimes; let i = index;\" value=\"{{i + 1}}\">{{rlt}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n\t\t\t\t\t<input type=\"date\" formControlName=\"specific_end_date\" id=\"until-date\" hidden=\"hidden\" value=\"{{untilDate() | date:'yyyy-MM-dd'}}\" style=\"margin-top: 2em;\" />\n\t\t\t\t\t<span id=\"number-events\" hidden=\"hidden\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" formControlName=\"number_of_event\" min='1' style=\"width: 10%; margin-top: 2em;\" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;event(s)</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t<div class=\"left\" hidden=\"hidden\">\n\t\t\t\t\t<label id=\"reminders\" for=\"reminders\">Reminders</label>\n\t\t\t\t\t<button type=\"button\">Add reminder</button>\n\t\t\t\t\t<select>\n\t\t\t\t\t\t\t<option value=\"0\">At time of event</option>\n\t\t\t\t\t\t\t<option value=\"1\" selected>10 minutes before</option>\n\t\t\t\t\t\t\t<option value=\"2\">30 minutes before</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<input formControlName=\"autoUpdateFailed\" type=\"checkbox\" id=\"is-auto\" name='is-auto' value=\"true\" style=\"width: 5%;\" style=\"margin-top: 2em;\" />Auto update failed days.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"right\" style=\"font-size: 16px;\">\n\t\t\t\t\t<button type=\"button\" (click)=\"addNewGoal()\" class=\"right\">Add goal</button>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = "<div [ngSwitch]=\"loading\">\n    <div *ngSwitchCase=\"'loading'\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n    <div *ngSwitchCase=\"'loaded'\">\n        <div class=\"view\">\n            <div class=\"item\">\n                <div class=\"item1\" *ngFor=\"let goal of goals; let i = index;\">\n                    <div class=\"goal-panel\" id=\"item-{{goal.id}}\" *ngIf=\"i % 2 == 0\" style=\"float: left;\">\n                        <div class=\"goal-title\">\n                            <b id=\"title\" (click)=\"displayMonthView(goal)\">{{goal.goal_name}}</b>\n                            <span class=\"tooltiptext\">&nbsp;&nbsp;<a (click)=\"displayMonthView(goal)\">Month view</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a (click)=\"displayYearView(goal)\">Year view</a>&nbsp;&nbsp;</span>\n                            <a style=\"margin-left:20px;\" [routerLink]=\"['/editgoal',goal.id]\"><img src=\"../img/edit.svg\" height=\"16\" width=\"16\"></a>\n                            <!-- <div class=\"reminder\"><span class=\"fa fa-clock-o\"></span> xx:xx</div> -->\n                        </div>\n                        <div class=\"clear\"></div>\n                        <div class=\"feature\">\n                            <input class=\"checking\" type=\"checkbox\" name=\"\" value=\"{{goal.id}}\" (change)=\"showContextMenu(goal.id)\">\n                            <span class=\"start-date\">Start date: {{goal.start_date | date: 'yyyy, MMM dd'}}</span>\n                            <div class=\"favorite\" [class.color]=\"goal.is_favorite\" id=\"fav-{{goal.id}}\"><span class=\"fa fa-star\" (click)=\"favorite(goal)\"></span></div>\n                        </div>\n                        <div class=\"clear\"></div>\n                        <!-- <div class=\"description\">\n                    {{goal.description}}\n                  </div> -->\n                        <div class=\"goal-detail\">\n                            <span class=\"number-of-days-done\">{{goal.current_chain}} day</span>\n                            <span class=\"space\"></span>\n                            <span class=\"best-chain\">{{goal.best_chain}} best</span>\n                            <span class=\"space\"></span>\n                            <span class=\"passed-day-in-total\">{{goal.progress}}</span>\n                            <span class=\"space\"></span>\n\n                            <span class=\"type-of-repetition\">\n              <div [ngSwitch]=\"goal.repetition.type_of_repetition\">\n                <div *ngSwitchCase=\"1\">Daily</div>\n                <div *ngSwitchCase=\"2\">Weekly</div>\n                <div *ngSwitchCase=\"3\">Monthly</div>\n                <div *ngSwitchCase=\"4\">Yearly</div>\n                <div *ngSwitchDefault>Daily</div>\n              </div></span>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"goal-panel\" id=\"item-{{goal.id}}\" *ngIf=\"i % 2 != 0\" style=\"float: right;\">\n                        <div class=\"goal-title\">\n                            <b id=\"title\" (click)=\"displayMonthView(goal)\">{{goal.goal_name}}</b>\n                            <span class=\"tooltiptext\">&nbsp;&nbsp;<a (click)=\"displayMonthView(goal)\">Month view</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a (click)=\"displayYearView(goal)\">Year view</a>&nbsp;&nbsp;</span>\n                            <a style=\"margin-left:20px;\" [routerLink]=\"['/editgoal',goal.id]\"><img src=\"../img/edit.svg\" height=\"16\" width=\"16\"></a>\n                            <!-- <div class=\"reminder\"><span class=\"fa fa-clock-o\"></span> xx:xx</div> -->\n                        </div>\n                        <div class=\"clear\"></div>\n                        <div class=\"feature\">\n                            <input class=\"checking\" type=\"checkbox\" name=\"\" value=\"{{goal.id}}\" (change)=\"showContextMenu(goal.id)\">\n                            <span class=\"start-date\">Start date: {{goal.start_date | date: 'yyyy, MMM dd'}}</span>\n                            <div class=\"favorite\" [class.color]=\"goal.is_favorite\" id=\"fav-{{goal.id}}\"><span class=\"fa fa-star\" (click)=\"favorite(goal)\"></span></div>\n                        </div>\n                        <div class=\"clear\"></div>\n                        <!-- <div class=\"description\">\n                    {{goal.description}}\n                  </div> -->\n                        <div class=\"goal-detail\">\n                            <span class=\"number-of-days-done\">{{goal.current_chain}} day</span>\n                            <span class=\"space\"></span>\n                            <span class=\"best-chain\">{{goal.best_chain}} best</span>\n                            <span class=\"space\"></span>\n                            <span class=\"passed-day-in-total\">{{goal.progress}}</span>\n                            <span class=\"space\"></span>\n\n                            <span class=\"type-of-repetition\">\n              <div [ngSwitch]=\"goal.repetition.type_of_repetition\">\n                <div *ngSwitchCase=\"1\">Daily</div>\n                <div *ngSwitchCase=\"2\">Weekly</div>\n                <div *ngSwitchCase=\"3\">Monthly</div>\n                <div *ngSwitchCase=\"4\">Yearly</div>\n                <div *ngSwitchDefault>Daily</div>\n              </div></span>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            <a routerLink=\"/createnewgoal\" class=\"float\">\n                <i class=\"fa fa-plus my-float\"></i>\n            </a>\n            <div class=\"label-container\">\n                <div class=\"label-text\">New goal</div>\n                <i class=\"fa fa-play label-arrow\"></i>\n            </div>\n            <a (click)=\"showSortMenu()\" class=\"float1\" [hidden]=\"goals.length == 0\">\n                <i class=\"fa fa-sort my-float\"></i>\n            </a>\n            <div class=\"label-container1\">\n                <div class=\"label-text\">Sort</div>\n                <i class=\"fa fa-caret-left fa-2x label-arrow1\"></i>\n            </div>\n        </div>\n        <div class=\"no-goal\" [hidden]=\"goals.length != 0\">\n            <img src=\"../img/oops.png\" alt=\"welcome\" width=\"120px\" style=\"vertical-align: middle;\">\n            <p>Opps! No goals. <a routerLink=\"/createnewgoal\">Let's challenge yourself!</a></p>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>\n<div id=\"context-menu\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <!-- <span class=\"close\" (click)=\"openModal(false)\">&times;</span> -->\n            <span class=\"fa fa-trash icon\" style=\"color: #D80027;\"></span> <span class=\"text\" style=\"color: #D80027;\" (click)=\"showDeleteMenu()\">Delete</span>\n            <span class=\"space\"></span>\n            <span class=\"fa fa-archive icon\"></span> <span class=\"text\" (click)=\"archiveGoals()\">Archive</span>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n    </div>\n</div>\n<div id=\"sort-modal\" class=\"modal\" (mouseleave)=\"showSortMenu()\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body sort\">\n            <span class=\"close1\" (click)=\"showSortMenu()\">Close &times;</span>\n            <span><b>Sort by</b></span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"date-created\" name=\"sort-type\" value=\"1\" [checked]=\"sortType == 1\" (change)=\"sort()\"> <span>Day created</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"name\" name=\"sort-type\" value=\"2\" [checked]=\"sortType == 2\" (change)=\"sort()\"> <span>Name</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"start-date\" name=\"sort-type\" value=\"3\" [checked]=\"sortType == 3\" (change)=\"sort()\"> <span>Start date</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"frequecy\" name=\"sort-type\" value=\"4\" [checked]=\"sortType == 4\" (change)=\"sort()\"> <span>Frequency</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"current-chain\" name=\"sort-type\" value=\"5\" [checked]=\"sortType == 5\" (change)=\"sort()\"> <span>Current chain</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"best-chain\" name=\"sort-type\" value=\"6\" [checked]=\"sortType == 6\" (change)=\"sort()\"> <span>Best chain</span>\n            <span class=\"space\"></span>\n            <input type=\"radio\" id=\"ratio\" name=\"sort-type\" value=\"7\" [checked]=\"sortType == 7\" (change)=\"sort()\"> <span>Ratio</span>\n            <span class=\"space\"></span>\n            <input type=\"checkbox\" id=\"reverse-order\" name=\"reverse\" value=\"0\" [checked]=\"isReversed\" (change)=\"sort()\"> <span>Reverse</span>\n        </div>\n        <div class=\"modal-footer\">\n        </div>\n    </div>\n</div>\n<div id=\"notification-delete\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <span class=\"close\" style=\"font-size: 8px;\"(click)=\"showDeleteMenu()\">&times;</span>\n        </div>\n        <div class=\"modal-body\">\n            <p style=\"font-size: 16px;\">Do you really wants to delete your goals?</p>\n            <button type=\"button\" name=\"button\" id=\"ok\" (click)=\"deleteGoals()\">Ok</button>\n            <button type=\"button\" name=\"button\" (click)=\"showDeleteMenu()\">Cancel</button>\n        </div>\n    </div>\n</div>\n<div id=\"deleting\" class=\"modal-x\">\n    <div class=\"modal-content\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n</div>\n"

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"!isDataLoaded\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n<form *ngIf=\"isDataLoaded\" #editGoalForm=\"ngForm\" (ngSubmit)=\"editGoal()\">\n\t<div class=\"form-group\">\n\t\t<h2 class=\"heading\">Edit goal</h2>\n\t\t<div class=\"left\">\n\t\t\t<label for=\"goal-name\">Goal name</label>\n\t\t\t<input [(ngModel)]=\"goal.goal_name\" type=\"text\" id=\"goal-name\" name=\"goal-name\" #goalName=\"ngModel\" required>\n\t\t\t<div [hidden]=\"goalName.valid || goalName.pristine\" class=\"alert\">Name is required !!!</div>\n\t\t</div>\n\n\t\t<div class=\"right\">\n\t\t\t<label for=\"from\" class=\"fix\">From</label>\n\t\t\t<input type=\"datetime-local\" id=\"start-date\" name=\"start-date\" [value]=\"goal.start_date| date:'yyyy-MM-ddTHH:mm'\" autocomplete=\"off\"\n            (change)=\"goal.start_date=$event.target.value; setTempDate(); setDay(); setDate();\"/>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<label id=\"label-description\" for=\"description\">Description</label>\n\t\t<textarea rows='4' [(ngModel)]=\"goal.description\" type=\"textarea\" id=\"description\" name=\"description\" #description=\"ngModel\"></textarea>\n\t\t<div class=\"left\">\n\t\t\t<label id=\"label-repetition\" for=\"repetition-type\" class='fix'>Repetition</label>\n            <select [(ngModel)]=\"goal.repetition.type_of_repetition\" (change)=\"toNumber(); toRepetitionUnit();\"  class=\"repetition-type\" id=\"repetition-type\" name=\"repetition-type\">\n                <option *ngFor=\"let repetition of repetitionTypes; let i = index;\" [value]=\"i+1\">{{repetition}}</option>\n\t\t\t</select >\n        </div>\n\t\t<div class=\"right\">\n            every&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t<input name=\"how-often\" type=\"number\" min='1' [(ngModel)]=\"goal.repetition.how_often\" class=\"inline-input\" style=\"width: 10%; margin-top: 2.9em;\"/>\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"repetitionFrequencyType\">{{unit}}(s)</span>\n\t\t</div>\n\n\t\t<div class=\"left\" id=\"weeklyRepetition\" *ngIf=\"goal.repetition.type_of_repetition === 2\" style=\"margin-top: 2em;\">\n\t\t\t<span *ngFor=\"let day of weekDays; let i = index;\"><input [(ngModel)]=\"toggleWeekDays[i]\" name=\"toggle{{i}}\"\n\t\t\t(change)=\"updateDoW()\" type=\"checkbox\" name=\"{{day}}\" value=\"{{i}}\" /> {{day}} </span>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"left\" id=\"monthlyRepetition\" *ngIf=\"goal.repetition.type_of_repetition === 3\" style=\"margin-top: 2em;\">\n\t\t\t<input type=\"radio\" [checked]=\"goal.repetition.type_of_month === 1\" (click)=\"goal.repetition.type_of_month = 1\"\n\t\t\tname=\"type_of_month\"  value = \"1\" /> on the same day each month\n\t\t\t<input type=\"radio\" [checked]=\"goal.repetition.type_of_month === 2\" (click)=\"goal.repetition.type_of_month = 2\"\n\t\t\tname=\"type_of_month\"  value = \"2\" /> on every <span id=\"dayDefineValue\">{{date}} {{day}}</span>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"left\">\n\t\t\t<select class=\"repetition-limited-time\" id=\"repetition-limited-time\" [(ngModel)]=\"goal.end_date.type_of_end_date\" (change)=\"toNumber1()\"\n\t\t\tstyle=\"margin-top: 2em;\" name=\"endDateType\">\n\t\t\t\t<option *ngFor=\"let rlt of repetitionLimitedTimes; let i = index;\" value=\"{{i + 1}}\">{{rlt}}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"right\">\n\t\t\t<input type=\"date\" id=\"until-date\" *ngIf=\"goal.end_date.type_of_end_date==2\" [value]=\"goal.end_date.specific_end_date | date:'yyyy-MM-dd'\"\n\t\t\t(change)=\"goal.end_date.specific_end_date=$event.target.value\" style=\"margin-top: 2em;\" />\n\t\t\t<span id=\"number-events\" *ngIf=\"goal.end_date.type_of_end_date==3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" [(ngModel)]=\"goal.end_date.number_of_event\" name=\"numberOfEvents\"\n\t\t\t min='1' style=\"width: 10%; margin-top: 2em;\" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;event(s)</span>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"left\" hidden=\"hidden\">\n\t\t\t<label id=\"reminders\" for=\"reminders\">Reminders</label>\n\t\t\t<button type=\"button\">Add reminder</button>\n\t\t\t<select>\n\t\t\t\t<option value=\"0\">At time of event</option>\n\t\t\t\t<option value=\"1\" selected>10 minutes before</option>\n\t\t\t\t<option value=\"2\">30 minutes before</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"left\">\n\t\t\t<input [(ngModel)]=\"goal.is_auto\" type=\"checkbox\" id=\"is-auto\" name='is-auto' value=\"autoUpdateFailed\" style=\"width: 5%;\" style=\"margin-top: 2em;\"\n\t\t\t/>Auto update failed days.\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<div class=\"right\" style=\"font-size: 16px;\">\n      <button type=\"submit\">Save</button>\n\t\t\t<button type=\"button\" (click)=\"cancel()\" id=\"cancel\">Cancel</button>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</form>\n"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "<form *ngIf=\"!submitted\" #forgotForm=\"ngForm\" (ngSubmit)=\"doSubmit()\">\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Forgot Password</h2>\n        <label for=\"email\">Email</label>\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\n        <div [hidden]=\"!wrong\" class=\"alert\">Wrong email! Please check again!</div>\n        <!-- <p style=\"text-align: center; color: #888;\">\n            New to Seinfeld Calendar? <a class=\"sign-up\" routerLink=\"/signup\">Sign Up now</a>\n        </p> -->\n    </div>\n    <div class=\"form-group\">\n        <button style=\"width: 100%; margin: center\" type=\"submit\">Recover Password</button>\n        <!-- <div class=\"\" style=\"text-align: center; font-size: 14px; margin-top: 1.5em;\"><a [routerLink]=\"['/']\" style=\"color: #999\">Cancel</a></div> -->\n    </div>\n</form>\n<div *ngIf=\"loading\">\n    <app-loading-indicator></app-loading-indicator>\n</div>\n<form *ngIf=\"submitted && !loading\">\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Success!!!</h2>\n        <p class=\"announce\">\n            Congratulation! An email contains the link to reset your password has been sent to the email <b><i>{{email}}</i></b>.\n            Please follow the instructions in that email to recover your password\n        </p>\n    </div>\n</form>\n"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "<div class=\"introduction\">\n  <div class=\"welcome\" [hidden]=\"currentUser != null\">\n    <p>\n      Hello guest! How are you today? Ready to <a routerLink=\"/createnewgoal\">challenge</a> yourself?\n    </p>\n    <img src=\"../img/welcome.png\" alt=\"welcome\" width=\"120px\" style=\"vertical-align: middle; float: right;\">\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"info\" [hidden]=\"currentUser != null\">\n    <img src=\"../img/calendar.png\" alt=\"calendar\" width=\"120px\" style=\"vertical-align: middle;\">\n    <p>\n      Seinfeld Calendar is an awesome app which assists you to set your goals and tracking their progress.\n      <a routerLink=\"/signup\">Create a new account</a> or <a routerLink=\"/signin\">sign in</a> to start using this app.\n    </p>\n    <div class=\"clear\"></div>\n  </div>\n  <!-- [hidden]=\"currentUser == null\" -->\n  <div class=\"logged-in\" [hidden]=\"currentUser == null\">\n    <img src=\"../img/run.png\" alt=\"start\" width=\"120px\" style=\"vertical-align: middle;\">\n    <p>\n      Hi <b>{{currentUser != null ? currentUser.name : \"\"}}</b>! Check your <a routerLink=\"/detailview\">dashboard</a> or challenge yourself with <a routerLink=\"/createnewgoal\">new goal</a>!\n    </p>\n    <div class=\"clear\"></div>\n  </div>\n</div>\n"

/***/ },

/***/ 691:
/***/ function(module, exports) {

module.exports = "<div class=\"background-loading\">\n    <div class=\"pacman\"></div>\n    <div class=\"dot\"></div>\n</div>\n"

/***/ },

/***/ 692:
/***/ function(module, exports) {

module.exports = "<div [ngSwitch]=\"loading\">\n    <div *ngSwitchCase=\"'loading'\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n    <div *ngSwitchCase=\"'loaded'\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n            <!--  General -->\n            <div class=\"form-group\">\n                <h2 class=\"heading\">Login</h2>\n                <label for=\"email\">Email</label>\n                <input formControlName=\"email\" type=\"email\" name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\n                <label for=\"password\">Password</label>\n                <input formControlName=\"password\" type=\"password\" name=\"password\" id=\"password\" required minlength='6'>\n                <span class=\"fa fa-eye-slash\" [class.wrong]=\"unauthorized\" (mouseup)=\"displayPassword('password')\" (mousedown)=\"displayPassword('password')\"></span>\n                <div class=\"alert alert-warning\" id=\"wrong-input\" [hidden]=\"!unauthorized\">\n                    <b>Wrong username/password</b>\n                </div>\n                <p style=\"text-align: center; color: #888; margin-top: 1em;\">\n                    New to Seinfeld Calendar? <a class=\"sign-up\" routerLink=\"/signup\">Sign Up now</a>\n                </p>\n            </div>\n            <!-- button -->\n            <div class=\"form-group\">\n                <button type=\"submit\">Login</button>\n                <div class=\"\" style=\"text-align: center; font-size: 14px; margin-top: 1.5em;\"><a [routerLink]=\"['/forgot_password']\" style=\"color: #999\">Forgot your password?</a></div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ },

/***/ 693:
/***/ function(module, exports) {

module.exports = "<div id=\"notification-loading\" class=\"modal\">\n    <div class=\"modal-content\">\n        <app-loading-indicator></app-loading-indicator>\n    </div>\n</div>\n<div class=\"left-view\" [class.hidden]=\"hiddenWeekdays\">\n  <p>\n    Goal details\n  </p>\n  <a (click)=\"routeListView()\" id=\"route-list-view\"></a>\n  <label for=\"description\">Description: </label>\n  <span id=\"description\">\n  </span>\n  <br>\n  <label for=\"start-date\">Start date: </label>\n  <span id=\"start-date\">\n  </span>\n  <br>\n  <label for=\"repetition\">Repetition: </label>\n  <span id=\"repetition\">\n  </span>\n  <br>\n  <label for=\"best-chain\">Best chain: </label>\n  <span id=\"best-chain\">\n  </span>\n  <br>\n  <label for=\"current-chain\">Current chain: </label>\n  <span id=\"current-chain\">\n  </span>\n  <br>\n  <label for=\"progress\">Progress: </label>\n  <span id=\"progress\">\n  </span>\n  <br>\n  <label for=\"end-date\">End date: </label>\n  <span id=\"end-date\">\n  </span>\n  <br />\n  <br />\n\n</div>\n<div class=\"right-view\">\n  <div class=\"item\" [class.hidden]=\"hiddenWeekdays\">\n      <div class=\"month\">\n          <ul>\n              <li class=\"prev\" (click)=\"previousMonth()\">❮</li>\n              <li class=\"next\" (click)=\"nextMonth()\">❯</li>\n              <li style=\"text-align:center\" id=\"monthName\" value=\"\"></li>\n              <li style=\"font-size:18px; text-align:center\" id=\"year\" value=\"\"></li>\n          </ul>\n      </div>\n\n      <ul class=\"weekdays\" [class.hidden]=\"hiddenWeekdays\">\n          <li>Mon</li>\n          <li>Tue</li>\n          <li>Wed</li>\n          <li>Thu</li>\n          <li>Fri</li>\n          <li>Sat</li>\n          <li>Sun</li>\n      </ul>\n      <ul class=\"days\" id=\"calendar\">\n        <li id=\"1\" (click)=\"displayDate(1)\">&nbsp;</li>\n        <li id=\"2\" (click)=\"displayDate(2)\">&nbsp;</li>\n        <li id=\"3\" (click)=\"displayDate(3)\">&nbsp;</li>\n        <li id=\"4\" (click)=\"displayDate(4)\">&nbsp;</li>\n        <li id=\"5\" (click)=\"displayDate(5)\">&nbsp;</li>\n        <li id=\"6\" (click)=\"displayDate(6)\">&nbsp;</li>\n        <li id=\"7\" (click)=\"displayDate(7)\">&nbsp;</li>\n        <li id=\"8\" (click)=\"displayDate(8)\">&nbsp;</li>\n        <li id=\"9\" (click)=\"displayDate(9)\">&nbsp;</li>\n        <li id=\"10\" (click)=\"displayDate(10)\">&nbsp;</li>\n        <li id=\"11\" (click)=\"displayDate(11)\">&nbsp;</li>\n        <li id=\"12\" (click)=\"displayDate(12)\">&nbsp;</li>\n        <li id=\"13\" (click)=\"displayDate(13)\">&nbsp;</li>\n        <li id=\"14\" (click)=\"displayDate(14)\">&nbsp;</li>\n        <li id=\"15\" (click)=\"displayDate(15)\">&nbsp;</li>\n        <li id=\"16\" (click)=\"displayDate(16)\">&nbsp;</li>\n        <li id=\"17\" (click)=\"displayDate(17)\">&nbsp;</li>\n        <li id=\"18\" (click)=\"displayDate(18)\">&nbsp;</li>\n        <li id=\"19\" (click)=\"displayDate(19)\">&nbsp;</li>\n        <li id=\"20\" (click)=\"displayDate(20)\">&nbsp;</li>\n        <li id=\"21\" (click)=\"displayDate(21)\">&nbsp;</li>\n        <li id=\"22\" (click)=\"displayDate(22)\">&nbsp;</li>\n        <li id=\"23\" (click)=\"displayDate(23)\">&nbsp;</li>\n        <li id=\"24\" (click)=\"displayDate(24)\">&nbsp;</li>\n        <li id=\"25\" (click)=\"displayDate(25)\">&nbsp;</li>\n        <li id=\"26\" (click)=\"displayDate(26)\">&nbsp;</li>\n        <li id=\"27\" (click)=\"displayDate(27)\">&nbsp;</li>\n        <li id=\"28\" (click)=\"displayDate(28)\">&nbsp;</li>\n        <li id=\"29\" (click)=\"displayDate(29)\">&nbsp;</li>\n        <li id=\"30\" (click)=\"displayDate(30)\">&nbsp;</li>\n        <li id=\"31\" (click)=\"displayDate(31)\">&nbsp;</li>\n        <li id=\"32\" (click)=\"displayDate(32)\">&nbsp;</li>\n        <li id=\"33\" (click)=\"displayDate(33)\">&nbsp;</li>\n        <li id=\"34\" (click)=\"displayDate(34)\">&nbsp;</li>\n        <li id=\"35\" (click)=\"displayDate(35)\">&nbsp;</li>\n        <li id=\"36\" (click)=\"displayDate(36)\">&nbsp;</li>\n        <li id=\"37\" (click)=\"displayDate(37)\">&nbsp;</li>\n        <li id=\"38\" (click)=\"displayDate(38)\">&nbsp;</li>\n        <li id=\"39\" (click)=\"displayDate(39)\">&nbsp;</li>\n        <li id=\"40\" (click)=\"displayDate(40)\">&nbsp;</li>\n        <li id=\"41\" (click)=\"displayDate(41)\">&nbsp;</li>\n        <li id=\"42\" (click)=\"displayDate(42)\">&nbsp;</li>\n      </ul>\n  </div>\n  <a class=\"float\" id=\"edit-button\" (click)=\"editGoal()\">\n      <i class=\"fa fa-pencil my-float\"></i>\n  </a>\n  <div class=\"label-container\">\n      <div class=\"label-text\">Edit this goal</div>\n      <i class=\"fa fa-play label-arrow\"></i>\n  </div>\n  <span class=\"tooltiptext\" id=\"show-infor\">Goal is archived and not able to edit!</span>\n  <span class=\"tooltiptext1\" id=\"show-infor1\">Day is in future or after end date or before start day!</span>\n</div>\n"

/***/ },

/***/ 694:
/***/ function(module, exports) {

module.exports = "<div class=\"page-not-found\">\n  <div class=\"img\"><img src=\"../../img/not_found.svg\" alt=\"File not found\" height=\"200px\" width=\"200px\"></div>\n  <div class=\"content\">\n    <p>\n      Opps! We could not find this page. Please return to our <a routerLink=\"/\">home page</a> and enjoy your awesome application!\n    </p>\n  </div>\n</div>\n"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit) = \"doSubmit()\">\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Reset Password</h2>\n        <label for=\"password\">Password</label>\n        <input type=\"{{type0}}\" class=\"floatLabel\" name=\"password\" [(ngModel)]=\"password\"\n        required minlength='8' pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n        <span class=\"fa fa-eye-slash a\" (mouseup)=\"displayPassword(0)\" (mousedown)=\"displayPassword(0)\"></span>\n        <label for=\"password_confirmation\">Confirm Password</label>\n        <input type=\"{{type1}}\" class=\"floatLabel\" name=\"password_confirmation\" [(ngModel)]=\"passwordConfirm\" (keyup)=\"checkMatch()\"\n         data-toggle=\"tooltip\" data-placement=\"right\" title=\"Password does not match!\" required minlength=\"8\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n        <span class=\"fa fa-eye-slash b\" (mouseup)=\"displayPassword(1)\" (mousedown)=\"displayPassword(1)\"></span>\n        <div class=\"alert alert-danger\" [hidden]=\"passwordMatch\">\n            <b>Passwords do not match.</b>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <button type=\"submit\">Reset Password</button>\n    </div>\n</form>\n"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\" (mouseleave)=\"toggleSideBar('0')\">\n    <div class=\"no-user\" *ngIf=\"currentUser == null\">\n        <b>\n            Welcome guest!\n        </b>\n        <p>\n            Please <a routerLink='/login' (click)=\"toggleSideBar('0')\">login</a> or <a routerLink='/signup' (click)=\"toggleSideBar('0')\">sign up</a> to use our application.\n        </p>\n    </div>\n    <div class=\"user-name\" *ngIf=\"currentUser != null\">\n        <span class=\"fa fa-user-circle-o\"></span>\n        <p (click)=\"toggleSideBar('0')\">{{currentUser.name}}</p>\n    </div>\n    <a routerLink='/detailview' (click)=\"toggleSideBar('0')\" *ngIf=\"currentUser != null\">Detail View</a>\n      <a routerLink='/archivedgoals' (click)=\"toggleSideBar('0')\" *ngIf=\"currentUser != null\">Archived Goals</a>\n    <!-- <a (click)=\"toggleSideBar('0')\">Week View</a>\n    <a routerLink='/monthview' (click)=\"toggleSideBar('0')\" disabled>Month View</a> -->\n    <!-- <a (click)=\"toggleSideBar('0')\" disabled>Year View</a>\n    <a (click)=\"toggleSideBar('0')\" disabled>Setting</a> -->\n</div>\n<span id=\"openSideBar\"><i class=\"fa fa-bars\" aria-hidden=\"true\" (mouseover)=\"toggleSideBar('200px')\"></i></span>\n"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "<div [ngSwitch]=\"loading\">\n    <div *ngSwitchCase=\"'loading'\"><app-loading-indicator></app-loading-indicator></div>\n    <div *ngSwitchCase=\"'loaded'\">\n        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"doSignUp()\">\n            <!--  General -->\n            <div class=\"form-group\">\n                <h2 class=\"heading\">Sign up</h2>\n                <label for=\"name\">Name</label>\n                <input formControlName=\"name\" type=\"text\" id=\"name\" class=\"floatLabel\" name=\"name\" required>\n                <label for=\"email\">Email</label>\n                <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"floatLabel\" name=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n                <label for=\"password\">Password</label>\n                <!-- pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\" -->\n                <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"floatLabel\" name=\"password\" required minlength='6'>\n                <span class=\"fa fa-eye-slash a\" (mouseup)=\"displayPassword('password')\" (mousedown)=\"displayPassword('password')\"></span>\n                <label for=\"password_confirmation\">Confirm Password</label>\n                <input formControlName=\"password_confirmation\" type=\"password\" id=\"password_confirmation\" class=\"floatLabel\" name=\"password_confirmation\" data-toggle=\"tooltip\"\n                    data-placement=\"right\" title=\"Password does not match!\" required minlength=\"6\">\n                <span class=\"fa fa-eye-slash b\" (mouseup)=\"displayPassword('password_confirmation')\" (mousedown)=\"displayPassword('password_confirmation')\"></span>\n                <div class=\"alert alert-danger\" id=\"password-match\" hidden>\n                    <b>Passwords do not match.</b>\n                </div>\n            </div>\n            <!-- button -->\n            <div class=\"form-group\">\n                <button type=\"submit\">Create free account</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"isLoaded\" class=\"col-md-2 nopadding haveborder\">\n<div class=\"month\"> \n  <ul>\n    <li style=\"text-align: center\">\n      {{monthName}}<br>\n    </li>\n  </ul>\n</div>\n\n<ul class=\"weekdays\">\n  <li>Mo</li>\n  <li>Tu</li>\n  <li>We</li>\n  <li>Th</li>\n  <li>Fr</li>\n  <li>Sa</li>\n  <li>Su</li>\n</ul>\n<ul class=\"days\"> \n  <li *ngFor=\"let date of dates; let i = index\" (click)=\"onClickLi(i)\">\n    <span class=\"{{classli[i]}}\">\n      <span *ngIf=\"state[i]==1\"><img src=\"../../img/passed.png\" style=\"width:50%; height:50%;\"></span>\n      <span *ngIf=\"state[i]==2\"><img src=\"../../img/failed.png\" style=\"width:50%; height:50%;\"></span>\n      <span *ngIf=\"state[i]==0\">{{date}}</span>\n    </span>\n    </li>\n</ul>\n</div>"

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = "\n<button id=\"detailBtn\" (click)=\"backToDetail()\">Back</button>\n<div class=\"item\">\n    <div class=\"year\">\n        <ul>\n            <li class=\"prev\" (click)=\"previousYear()\">❮</li>\n            <li class=\"next\" (click)=\"nextYear()\">❯</li>\n            <li style=\"text-align:center\" id=\"monthName\" value=\"\">{{year}}</li>\n        </ul>\n    </div>\n</div>\n<div *ngIf=\"!isDataLoaded\">\n        <app-loading-indicator></app-loading-indicator>\n</div>\n<div *ngIf=\"isDataLoaded\" class=\"row\">\n    <app-month-in-year *ngFor=\"let month of months; let i = index \" [goalInMonth]=\"goal\" [setYear]=\"year\" month={{i}} monthName={{month}}></app-month-in-year>\n</div>"

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoadingPage; });
var LoadingPage = (function () {
    function LoadingPage(value) {
        this.loading = value;
    }
    LoadingPage.prototype.standby = function () {
        this.loading = 'loading';
    };
    LoadingPage.prototype.ready = function () {
        this.loading = 'loaded';
    };
    return LoadingPage;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/loading-page.js.map

/***/ }

},[736]);
//# sourceMappingURL=main.bundle.map
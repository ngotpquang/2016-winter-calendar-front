webpackJsonp([0,3],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_headers__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator__ = __webpack_require__(142);
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
        this.loggedIn = !!localStorage.getItem('auth_token');
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
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/user.service.js.map

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/rxjs-operator.js.map

/***/ },

/***/ 143:
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
    CommonFunctions.prototype.changeRepetitionType = function () {
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
                document.getElementById('dayDefineValue').innerHTML = this.getDay();
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
    CommonFunctions.prototype.getDay = function () {
        var today = new Date();
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var orderNumbers = ["first ", "second ", "third ", "fourth "];
        var result = "";
        var days = this.getAllDaysOfMonth(today.getDay(), today.getMonth());
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
    CommonFunctions.prototype.getAllDaysOfMonth = function (day, month) {
        var d = new Date(), results = [];
        d.setDate(1);
        // Get the first {day} in the month
        while (d.getDay() !== day) {
            d.setDate(d.getDate() + 1);
        }
        // Get all the other {day} in the month
        while (d.getMonth() === month) {
            results.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }
        return results;
    };
    CommonFunctions.prototype.changeTitleAfterLogined = function (title) {
        console.log("Changing button");
        var defaultButton = document.getElementsByClassName("default-button");
        console.log(defaultButton);
        if (defaultButton.length != 0) {
            defaultButton[0].hidden = true;
            defaultButton[1].hidden = true;
        }
        var logoutButton = document.getElementById("logout-button");
        console.log(logoutButton);
        if (logoutButton != null) {
            logoutButton.hidden = false;
        }
        var titleContent = document.getElementById("title-content");
        titleContent.innerHTML = title;
    };
    return CommonFunctions;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/common-functions.js.map

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_headers__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator__ = __webpack_require__(142);
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
    GoalService.prototype.getAllGoals = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http
            .get('https://wintercalendar.herokuapp.com/api/v1/goals?email=' + currentUser.email + '&token=' + currentUser.token);
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

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(102);
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
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__["a" /* CommonFunctions */]();
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
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(711),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_goal__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__goal_goal_service__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateNewGoalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateNewGoalComponent = (function () {
    function CreateNewGoalComponent(goalService, router) {
        this.goalService = goalService;
        this.router = router;
        this.createNewGoalForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            goal_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            start_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type_of_repetition: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            how_often: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type_of_end_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            autoUpdateFailed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            specific_end_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            number_of_event: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type_of_month: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Mon: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Tue: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Wed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Thu: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Fri: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Sat: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day_of_week_Sun: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    }
    CreateNewGoalComponent.prototype.ngOnInit = function () {
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_3__shared_common_functions__["a" /* CommonFunctions */]();
    };
    CreateNewGoalComponent.prototype.roundUpTime = function () {
        return this.commonFunctions.roundUpTime();
    };
    CreateNewGoalComponent.prototype.untilDate = function () {
        return this.commonFunctions.untilDate();
    };
    CreateNewGoalComponent.prototype.changeRepetitionType = function () {
        this.commonFunctions.changeRepetitionType();
    };
    CreateNewGoalComponent.prototype.changeRepetitionLimitedTime = function () {
        this.commonFunctions.changeRepetitionLimitedTime();
    };
    CreateNewGoalComponent.prototype.addNewGoal = function () {
        var _this = this;
        var input = this.createNewGoalForm.value;
        var day_of_week = null;
        if (input.type_of_repetition == 2) {
            day_of_week =
                (input.day_of_week_Mon == true ? "Mon, " : "") +
                    (input.day_of_week_Tue == true ? "Tue, " : "") +
                    (input.day_of_week_Wed == true ? "Wed, " : "") +
                    (input.day_of_week_Thu == true ? "Thu, " : "") +
                    (input.day_of_week_Fri == true ? "Fri, " : "") +
                    (input.day_of_week_Sat == true ? "Sat, " : "") +
                    (input.day_of_week_Sun == true ? "Sun" : "");
        }
        var start_date;
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
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var goal = new __WEBPACK_IMPORTED_MODULE_4__shared_goal__["a" /* Goal */](currentUser.email, currentUser.token, input.goal_name, start_date, input.description, new __WEBPACK_IMPORTED_MODULE_4__shared_goal__["b" /* Repetition */](input.type_of_repetition, input.how_often, day_of_week, input.type_of_month), new __WEBPACK_IMPORTED_MODULE_4__shared_goal__["c" /* EndDate */](input.type_of_end_date, specific_end_date, input.number_of_event));
        this.goalService.addNewGoal(goal).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/detailview']);
        }, function (error) { return console.log(error); });
    };
    CreateNewGoalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-create-new-goal',
            template: __webpack_require__(712),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__goal_goal_service__["a" /* GoalService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], CreateNewGoalComponent);
    return CreateNewGoalComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/create-new-goal.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goal_goal_service__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailViewComponent = (function () {
    function DetailViewComponent(goalService) {
        var _this = this;
        this.goalService = goalService;
        goalService.getAllGoals().subscribe(function (res) {
            _this.goals = res.json();
        });
    }
    DetailViewComponent.prototype.ngOnInit = function () {
    };
    DetailViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-detail-view',
            template: __webpack_require__(713),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__goal_goal_service__["a" /* GoalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__goal_goal_service__["a" /* GoalService */]) === 'function' && _a) || Object])
    ], DetailViewComponent);
    return DetailViewComponent;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/detail-view.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-introduction',
            template: __webpack_require__(714),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/introduction.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_common_functions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_operator__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rxjs_operator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_4__shared_common_functions__["a" /* CommonFunctions */]();
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        var user = this.loginForm.value;
        console.log(JSON.stringify(this.loginForm.value));
        this.userService.logIn(user.email, user.password).subscribe(function (res) {
            localStorage.setItem('currentUser', JSON.stringify(res.json().data));
            _this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            _this.router.navigate(['/detailview']);
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(715),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/login.component.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    MonthViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-month-view',
            template: __webpack_require__(716),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [])
    ], MonthViewComponent);
    return MonthViewComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/month-view.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return headers; });

var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/json');
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/headers.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_common_functions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_operator__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rxjs_operator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpComponent = (function () {
    function SignUpComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)),
            password_confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8))
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_4__shared_common_functions__["a" /* CommonFunctions */]();
    };
    SignUpComponent.prototype.doSignUp = function (event) {
        var _this = this;
        var user = this.signUpForm.value;
        console.log(user);
        this.userService.signUp(user.name, user.email, user.password).subscribe(function (res) {
            localStorage.setItem('currentUser', JSON.stringify(res.json().data));
            _this.commonFunctions.changeTitleAfterLogined("Your dashboard");
            _this.router.navigate(['/detailview']);
        }, function (error) { return console.log(error); });
    };
    SignUpComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    SignUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__(718),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/sign-up.component.js.map

/***/ },

/***/ 402:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(522);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/main.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_new_goal_create_new_goal_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detail_view_detail_view_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__introduction_introduction_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__month_view_month_view_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_route__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sign_up_sign_up_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__side_bar_side_bar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_logged_in_guard__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__goal_goal_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_service__ = __webpack_require__(102);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__introduction_introduction_component__["a" /* IntroductionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_14__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__create_new_goal_create_new_goal_component__["a" /* CreateNewGoalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__detail_view_detail_view_component__["a" /* DetailViewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__month_view_month_view_component__["a" /* MonthViewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_route__["a" /* Routes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__shared_logged_in_guard__["a" /* LoggedInGuard */], __WEBPACK_IMPORTED_MODULE_16__goal_goal_service__["a" /* GoalService */], __WEBPACK_IMPORTED_MODULE_5_angular2_token__["Angular2TokenService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.module.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_new_goal_create_new_goal_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_view_detail_view_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction_introduction_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__month_view_month_view_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Routes; });






// Define which component should be loaded based on the current URL
var Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__introduction_introduction_component__["a" /* IntroductionComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'createnewgoal', component: __WEBPACK_IMPORTED_MODULE_0__create_new_goal_create_new_goal_component__["a" /* CreateNewGoalComponent */] },
    { path: 'detailview', component: __WEBPACK_IMPORTED_MODULE_1__detail_view_detail_view_component__["a" /* DetailViewComponent */] },
    { path: 'monthview', component: __WEBPACK_IMPORTED_MODULE_4__month_view_month_view_component__["a" /* MonthViewComponent */] }
];
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.route.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(520);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/index.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Goal; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Repetition; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return EndDate; });
var Goal = (function () {
    function Goal(email, token, goal_name, start_date, description, repetition, end_date) {
        this.email = email;
        this.token = token;
        this.goal_name = goal_name;
        this.start_date = start_date;
        this.description = description;
        this.repetition = repetition;
        this.end_date = end_date;
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
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/goal.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(102);
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
    function LoggedInGuard(user) {
        this.user = user;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.user.isLoggedIn();
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/logged-in.guard.js.map

/***/ },

/***/ 525:
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
    /* Set the width of the side navigation to 250px */
    SideBarComponent.prototype.toggleSideBar = function (size) {
        document.getElementById("mySidenav").style.width = size;
        document.getElementById("main").style.marginLeft = size;
        document.getElementById("header").style.marginLeft = size;
        console.log(size);
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
            template: __webpack_require__(717),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/side-bar.component.js.map

/***/ },

/***/ 526:
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

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/polyfills.js.map

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = "#header,\n#main {\n  -webkit-transition: margin-left 0.3s;\n  transition: margin-left 0.3s; }\n\nheader {\n  background-color: #1E824C;\n  font-family: 'Raleway', sans-serif;\n  padding: 1em;\n  color: white; }\n  header .title-content {\n    font-size: 4em;\n    margin-left: 1em; }\n  header .title-button {\n    float: right;\n    position: relative;\n    margin-top: 1em; }\n    header .title-button button {\n      border: 1px solid #1E824C;\n      border-radius: 10px;\n      background-color: white;\n      color: #1E824C;\n      font-family: inherit;\n      font-size: inherit;\n      padding: 0.5em;\n      width: 6em;\n      margin-left: 0.5em;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s; }\n      header .title-button button:hover, header .title-button button:focus, header .title-button button:active {\n        outline: none;\n        background-color: #1E824C;\n        color: white;\n        font-weight: bold;\n        border: 1px solid white; }\n      header .title-button button#signup {\n        background: #ddd;\n        color: #1E824C;\n        font-weight: normal; }\n  header a {\n    color: white;\n    text-decoration: none; }\n    header a:hover, header a:focus, header a:active {\n      text-decoration: none;\n      color: white; }\n\n.left {\n  width: 45%; }\n\n.clear {\n  clear: both; }\n\nmain section {\n  margin: auto 4em;\n  font-family: 'Raleway', sans-serif; }\n\n.left {\n  width: 45%; }\n\n.clear {\n  clear: both; }\n"

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 80%;\n  margin: 0 auto;\n  font-family: inherit; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"date\"],\n  .form-group input[type=\"datetime-local\"],\n  .form-group input[type=\"number\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"],\n  .form-group select,\n  .form-group textarea {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    font-size: inherit;\n    height: 25px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .form-group input[type=\"date\"]:focus, .form-group input[type=\"date\"]:hover, .form-group input[type=\"date\"]:active,\n    .form-group input[type=\"datetime-local\"]:focus,\n    .form-group input[type=\"datetime-local\"]:hover,\n    .form-group input[type=\"datetime-local\"]:active,\n    .form-group input[type=\"number\"]:focus,\n    .form-group input[type=\"number\"]:hover,\n    .form-group input[type=\"number\"]:active,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"password\"]:active,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover,\n    .form-group input[type=\"text\"]:active,\n    .form-group select:focus,\n    .form-group select:hover,\n    .form-group select:active,\n    .form-group textarea:focus,\n    .form-group textarea:hover,\n    .form-group textarea:active {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group textarea {\n    height: auto; }\n  .form-group select {\n    background-color: white;\n    height: 32px;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  .form-group .left {\n    float: left;\n    width: 45%; }\n  .form-group .right {\n    float: right;\n    width: 45%; }\n  .form-group .clear {\n    clear: both; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 2em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:active, .form-group button:focus {\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n"

/***/ },

/***/ 705:
/***/ function(module, exports) {

module.exports = ".view {\n  margin: 2em auto; }\n  .view .goal-panel {\n    width: 45%;\n    font-family: 'Raleway', sans-serif;\n    font-size: 14px;\n    margin: 1em 1.5em;\n    padding: 0.5em;\n    border-bottom: 1.5px solid #1E824C; }\n    .view .goal-panel .goal-title #title {\n      float: left;\n      margin-left: 2em; }\n    .view .goal-panel .goal-title .reminder {\n      float: right; }\n    .view .goal-panel .feature #check {\n      float: left; }\n    .view .goal-panel .feature .favorite {\n      float: right; }\n    .view .goal-panel .goal-detail {\n      margin-left: 2em; }\n      .view .goal-panel .goal-detail span {\n        display: inline-block; }\n      .view .goal-panel .goal-detail .number-of-days-done,\n      .view .goal-panel .goal-detail .type-of-repetition {\n        width: 13%; }\n      .view .goal-panel .goal-detail .best-chain,\n      .view .goal-panel .goal-detail .passed-day-in-total {\n        text-align: center;\n        width: 20%; }\n      .view .goal-panel .goal-detail .space {\n        width: 10%; }\n      .view .goal-panel .goal-detail .type-of-repetition {\n        text-align: right;\n        float: right; }\n    .view .goal-panel .clear {\n      clear: both; }\n"

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 40%;\n  margin: 0 auto;\n  position: relative; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"email\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"] {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    height: 25px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .form-group input[type=\"email\"]:focus, .form-group input[type=\"email\"]:hover,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 102%;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:focus, .form-group button:active {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n  .form-group span {\n    position: absolute;\n    top: 72%;\n    left: 95%;\n    color: #aaa;\n    cursor: pointer; }\n"

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nul {\n  list-style-type: none; }\n\nbody {\n  font-family: inherit; }\n\n.month {\n  padding: 70px 25px;\n  width: 100%;\n  background: #1abc9c; }\n  .month ul {\n    margin: 0;\n    padding: 0; }\n    .month ul li {\n      color: white;\n      font-size: 20px;\n      text-transform: uppercase;\n      letter-spacing: 3px; }\n  .month .prev {\n    float: left;\n    padding-top: 10px; }\n  .month .next {\n    float: right;\n    padding-top: 10px; }\n\n.weekdays {\n  margin: 0;\n  padding: 10px 0;\n  background-color: #ddd; }\n  .weekdays li {\n    display: inline-block;\n    width: 13.6%;\n    color: #666;\n    text-align: center; }\n\n.days {\n  padding: 10px 0;\n  background: #eee;\n  margin: 0; }\n  .days li {\n    list-style-type: none;\n    display: inline-block;\n    width: 13.6%;\n    text-align: center;\n    margin-bottom: 5px;\n    font-size: 12px;\n    color: #777; }\n    .days li.active {\n      padding: 5px;\n      background: #1abc9c;\n      color: white !important; }\n"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 40px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n  .sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 16px;\n    color: #818181;\n    display: block; }\n    .sidenav a:hover, .offcanvas .sidenav a:focus {\n      color: #f1f1f1; }\n  .sidenav a:nth-child(5n) {\n    border-bottom: 1px solid white; }\n  .sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 20px;\n    font-size: 16px;\n    margin-left: 40px; }\n\nspan {\n  position: absolute;\n  left: 20px;\n  top: 35px;\n  font-size: 20px; }\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 14px; } }\n"

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = ".form-group {\n  width: 40%;\n  margin: 0 auto;\n  position: relative; }\n  .form-group h2 {\n    font-size: 26px;\n    font-weight: 600;\n    text-align: left;\n    color: #1E824C;\n    border-bottom: 1px solid #1E824C;\n    padding-bottom: 3px;\n    margin-bottom: 20px; }\n  .form-group a {\n    font-size: inherit;\n    font-family: inherit;\n    color: #1E824C;\n    text-decoration: none;\n    -webkit-transition: all 1s ease-out;\n    transition: all 1s ease-out; }\n    .form-group a:hover {\n      text-decoration: underline;\n      color: #28ab64; }\n    .form-group a:active {\n      color: #95A5A6; }\n  .form-group label {\n    font-size: 12.5px;\n    color: #1E824C;\n    display: block;\n    font-weight: 500;\n    margin-bottom: 0.5em;\n    margin-top: 1em;\n    margin-left: 1em; }\n  .form-group input[type=\"email\"],\n  .form-group input[type=\"password\"],\n  .form-group input[type=\"text\"] {\n    font-family: inherit;\n    font-size: inherit;\n    color: #222;\n    border: 1px solid #1E824C;\n    border-radius: 10px;\n    height: 25px;\n    padding: 0.2em;\n    width: 100%;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    box-sizing: content-box; }\n    .form-group input[type=\"email\"]:focus, .form-group input[type=\"email\"]:hover,\n    .form-group input[type=\"password\"]:focus,\n    .form-group input[type=\"password\"]:hover,\n    .form-group input[type=\"text\"]:focus,\n    .form-group input[type=\"text\"]:hover {\n      outline: none;\n      box-shadow: 0 0 5px 0 #86E2D5; }\n  .form-group div {\n    color: #1E824C;\n    font-size: 12.5px; }\n  .form-group button {\n    border: 1px solid white;\n    border-radius: 10px;\n    background-color: #1E824C;\n    color: white;\n    font-family: inherit;\n    font-size: inherit;\n    padding: 0.5em;\n    width: 102%;\n    margin-top: 2em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    cursor: pointer; }\n    .form-group button:hover, .form-group button:focus, .form-group button:active {\n      outline: none;\n      background-color: white;\n      color: #1E824C;\n      font-weight: bold;\n      border: 1.5px solid #1E824C; }\n  .form-group span {\n    position: absolute;\n    color: #aaa;\n    cursor: pointer; }\n    .form-group span.a {\n      top: 70%;\n      left: 95%; }\n    .form-group span.b {\n      top: 91.5%;\n      left: 95%; }\n"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = "<header id=\"header\">\n  <side-bar></side-bar>\n  <span class=\"title-content\"><a routerLink=\"\"><span class=\"fa fa-calendar-check-o\"></span> <span id=\"title-content\">{{title}}</span></a>\n  </span>\n      <div class=\"title-button default-button\" *ngFor=\"let button of listButton\">\n          <button (click)=\"onClick(button.route)\" id=\"{{button.route}}\">{{button.value}}</button>\n      </div>\n      <div class=\"title-button\" id=\"logout-button\" hidden=\"hidden\">\n          <button (click)=\"logout()\">Logout</button>\n      </div>\n  <div class=\"clear\">\n  </div>\n</header>\n<main id=\"main\">\n  <section>\n    <router-outlet></router-outlet>\n  </section>\n</main>\n"

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"createNewGoalForm\" (ngSubmit)=\"addNewGoal()\">\n\t<div class=\"form-group\">\n\t\t<h2 class=\"heading\">New goal</h2>\n\t\t<div class=\"left\">\n\t\t\t<label for=\"goal-name\">Goal name</label>\n\t\t\t<input formControlName=\"goal_name\" type=\"text\" id=\"goal-name\" name=\"goal-name\" required>\n\t\t</div>\n\t\t<div class=\"right\">\n\t\t\t<label for=\"from\" class=\"fix\">From</label>\n\t\t\t<input formControlName=\"start_date\" type=\"datetime-local\" id=\"start-date\" name=\"start-date\" value=\"{{roundUpTime() | date:'yyyy-MM-ddTHH:mm'}}\" />\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<label id=\"label-description\" for=\"description\">Description</label>\n\t\t<textarea rows='4' formControlName=\"description\" type=\"textarea\" id=\"description\" name=\"description\" required></textarea>\n\t\t<div class=\"left\">\n\t\t\t<label id=\"label-repetition\" for=\"repetition\" class='fix'>Repetition</label>\n\t\t\t<select formControlName=\"type_of_repetition\" class=\"repetition-type\" id=\"repetition-type\" (change)=\"changeRepetitionType()\">\n\t\t\t\t\t\t<option *ngFor=\"let rp of repetitionTypes; let i = index;\" value=\"{{i + 1}}\">{{rp}}</option>\n\t\t\t\t\t</select >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n                every&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t<input formControlName=\"how_often\" type=\"number\" min='1' class=\"inline-input\" style=\"width: 10%; margin-top: 2.7em;\"/>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"repetitionFrequencyType\">day(s)</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t<!-- TODO -->\n\t\t\t\t<div class=\"left\" id=\"weeklyRepetition\" hidden=\"hidden\" style=\"margin-top: 2em;\">\n\t\t\t\t\t\t<span *ngFor=\"let day of weekDays\"><input type=\"checkbox\" formControlName=\"day_of_week_{{day}}\" name=\"{{day}}\" value=\"{{day}}\" /> {{day}} </span>\n\t\t\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t<!-- FIXME -->\n\t\t\t<div class=\"left\" id=\"monthlyRepetition\" hidden=\"hidden\" style=\"margin-top: 2em;\">\n\t\t\t\t\t<input type=\"radio\" name=\"type_of_month\" formControlName=\"type_of_month\" value='1' /> on the same day each month\n\t\t\t\t\t<input type=\"radio\" name=\"type_of_month\" formControlName=\"type_of_month\" value='2' /> on every <span id=\"dayDefineValue\">first Monday</span>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\n\t\t\t<div class=\"left\">\n\t\t\t\t<select formControlName=\"type_of_end_date\" class=\"repetition-limited-time\" id=\"repetition-limited-time\" (change)=\"changeRepetitionLimitedTime()\" style=\"margin-top: 2em;\">\n\t\t\t\t\t\t<option *ngFor=\"let rlt of repetitionLimitedTimes; let i = index;\" value=\"{{i + 1}}\">{{rlt}}</option>\n\t\t\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"right\">\n\t\t\t<input type=\"date\" formControlName=\"specific_end_date\" id=\"until-date\" hidden=\"hidden\" value=\"{{untilDate() | date:'yyyy-MM-dd'}}\" style=\"margin-top: 2em;\"/>\n\t\t\t<span id=\"number-events\" hidden=\"hidden\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" formControlName=\"number_of_event\" min='1' style=\"width: 10%; margin-top: 2em;\" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;event(s)</span>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"left\" hidden=\"hidden\">\n\t\t\t<label id=\"reminders\" for=\"reminders\">Reminders</label>\n\t\t\t<button type=\"button\">Add reminder</button>\n\t\t\t<select>\n\t\t\t\t\t\t<option value=\"0\">At time of event</option>\n\t\t\t\t\t\t<option value=\"1\" selected>10 minutes before</option>\n\t\t\t\t\t\t<option value=\"2\">30 minutes before</option>\n\t\t\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t\t<div class=\"left\">\n\t\t\t<input formControlName=\"autoUpdateFailed\" type=\"checkbox\" id=\"is-auto\" name='is-auto' value=\"autoUpdateFailed\" style=\"width: 5%;\" style=\"margin-top: 2em;\"/>Auto update failed days.\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<div class=\"right\" style=\"font-size: 16px;\">\n\t\t\t<button type=\"button\" (click)=\"addNewGoal()\"class=\"right\">Add goal</button>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</form>\n"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = "<div class=\"view\">\n    <div class=\"item\" *ngFor=\"let goal of goals; let i = index;\">\n        <div class=\"goal-panel\" *ngIf=\"i % 2 == 0\" style=\"float: left;\">\n            <div class=\"goal-title\">\n                <b id=\"title\">{{goal.goal_name}}</b>\n                <div class=\"reminder\"><span class=\"fa fa-clock-o\"></span> 21:00</div>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"feature\">\n                <input id=\"check\" type=\"checkbox\" name=\"\" value=\"\">\n                <div class=\"favorite\"><span class=\"fa fa-star-o\"></span></div>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"goal-detail\">\n                <span class=\"number-of-days-done\">1 day</span>\n                <span class=\"space\"></span>\n                <span class=\"best-chain\">1 best</span>\n                <span class=\"space\"></span>\n                <span class=\"passed-day-in-total\">1/2</span>\n                <span class=\"space\"></span>\n\n                <span class=\"type-of-repetition\">\n        <div [ngSwitch]=\"goal.repetition.type_of_repetition\">\n          <div *ngSwitchCase=\"1\">Daily</div>\n          <div *ngSwitchCase=\"2\">Weekly</div>\n          <div *ngSwitchCase=\"3\">Monthly</div>\n          <div *ngSwitchCase=\"4\">Yearly</div>\n          <div *ngSwitchDefault>Daily</div>\n        </div></span>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        <div class=\"goal-panel\" *ngIf=\"i % 2 != 0\" style=\"float: right;\">\n            <div class=\"goal-title\">\n                <b id=\"title\">{{goal.goal_name}}</b>\n                <div class=\"reminder\"><span class=\"fa fa-clock-o\"></span> 21:00</div>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"feature\">\n                <input id=\"check\" type=\"checkbox\" name=\"\" value=\"\">\n                <div class=\"favorite\"><span class=\"fa fa-star-o\"></span></div>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"goal-detail\">\n                <span class=\"number-of-days-done\">1 day</span>\n                <span class=\"space\"></span>\n                <span class=\"best-chain\">1 best</span>\n                <span class=\"space\"></span>\n                <span class=\"passed-day-in-total\">1/2</span>\n                <span class=\"space\"></span>\n\n                <span class=\"type-of-repetition\">\n        <div [ngSwitch]=\"goal.repetition.type_of_repetition\">\n          <div *ngSwitchCase=\"1\">Daily</div>\n          <div *ngSwitchCase=\"2\">Weekly</div>\n          <div *ngSwitchCase=\"3\">Monthly</div>\n          <div *ngSwitchCase=\"4\">Yearly</div>\n          <div *ngSwitchDefault>Daily</div>\n        </div></span>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</div>\n"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<p style=\"color: 1E824C;\">\n    Introduction\n    <br />\n    <a routerLink='/createnewgoal'>Create new goal</a>\n    <br />\n    <a routerLink='/detailview'>All goals</a>\n    <br />\n    <a routerLink='/monthview'>Month view</a>\n</p>\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n    <!--  General -->\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Login</h2>\n        <label for=\"email\">Email</label>\n        <input formControlName=\"email\" type=\"email\" name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\n        <label for=\"password\">Password</label>\n        <input formControlName=\"password\" type=\"password\" name=\"password\" required minlength='8'>\n        <span class=\"fa fa-eye-slash\" (mouseup)=\"displayPassword('password')\" (mousedown)=\"displayPassword('password')\"></span>\n        <div class=\"alert alert-warning\" id=\"wrong-input\" hidden>\n            <b>Wrong username/password</b>\n        </div>\n        <p style=\"text-align: center; color: #888;\">\n            New to Seinfeld Calendar? <a class=\"sign-up\" routerLink=\"/signup\">Sign Up now</a>\n        </p>\n    </div>\n    <!-- button -->\n    <div class=\"form-group\">\n        <button type=\"submit\">Login</button>\n        <div class=\"\" style=\"text-align: center; font-size: 14px; margin-top: 1.5em;\"><a href=\"#\" style=\"color: #999\">Forgot your password?</a></div>\n    </div>\n</form>\n"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "<div class=\"item\" style=\"width: 30%;\">\n    <div class=\"month\">\n        <ul>\n            <li class=\"prev\">❮</li>\n            <li class=\"next\">❯</li>\n            <li style=\"text-align:center\" id=\"monthName\"></li>\n            <li style=\"font-size:18px; text-align:center\" id=\"year\"></li>\n        </ul>\n    </div>\n\n    <ul class=\"weekdays\">\n        <li>Mon</li>\n        <li>Tue</li>\n        <li>Wed</li>\n        <li>Thu</li>\n        <li>Fri</li>\n        <li>Sat</li>\n        <li>Sun</li>\n    </ul>\n    <ul class=\"days\" id=\"calendar\">\n    </ul>\n</div>\n"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n<a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"toggleSideBar('0')\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n<a href=\"#\">Detail View</a>\n<a href=\"#\">Week View</a>\n<a href=\"#\">Month View</a>\n<a href=\"#\">Year View</a>\n<a href=\"#\">Setting</a>\n</div>\n<span id=\"openSideBar\"><i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"toggleSideBar('200px')\"></i></span>\n"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"signUpForm\" (ngSubmit)=\"doSignUp()\">\n    <!--  General -->\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Sign up</h2>\n        <label for=\"name\">Name</label>\n        <input formControlName=\"name\" type=\"text\" id=\"name\" class=\"floatLabel\" name=\"name\" (focus)=\"moveLabelUp('name')\" (blur)=\"moveLabelDown('name')\" required>\n        <label for=\"email\">Email</label>\n        <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"floatLabel\" name=\"email\" (focus)=\"moveLabelUp('email')\" (blur)=\"moveLabelDown('email')\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n        <label for=\"password\">Password</label>\n        <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"floatLabel\" name=\"password\" (focus)=\"moveLabelUp('password')\" (blur)=\"moveLabelDown('password')\" required minlength='8' pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n        <span class=\"fa fa-eye-slash a\" (mouseup)=\"displayPassword('password')\" (mousedown)=\"displayPassword('password')\"></span>\n        <label for=\"password_confirmation\">Confirm Password</label>\n        <input formControlName=\"password_confirmation\" type=\"password\" id=\"password_confirmation\" class=\"floatLabel\" name=\"password_confirmation\" (focus)=\"moveLabelUp('password_confirmation')\" (blur)=\"moveLabelDown('password_confirmation')\" data-toggle=\"tooltip\"\n            data-placement=\"right\" title=\"Password does not match!\" required minlength=\"8\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n        <span class=\"fa fa-eye-slash b\" (mouseup)=\"displayPassword('password_confirmation')\" (mousedown)=\"displayPassword('password_confirmation')\"></span>\n        <div class=\"alert alert-danger\" id=\"password-match\" hidden>\n            <b>Passwords do not match.</b>\n        </div>\n    </div>\n    <!-- button -->\n    <div class=\"form-group\">\n        <button type=\"submit\">Create free account</button>\n    </div>\n</form>\n"

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ }

},[775]);
//# sourceMappingURL=main.bundle.map
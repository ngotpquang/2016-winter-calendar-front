webpackJsonp([1,3],{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_headers__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operator__ = __webpack_require__(210);
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
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/sign_in', JSON.stringify({ email: email, password: password }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* contentHeaders */] })
            .map(function (res) {
            if (res) {
                console.log(__WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* contentHeaders */]);
                console.log(res);
                console.log("Response: " + JSON.stringify(res.json()));
                console.log("Response: " + (res.headers));
                // localStorage.setItem('auth_token', res.auth_token);
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
            .post('https://wintercalendar.herokuapp.com/api/v1/auth/', JSON.stringify({ name: name, email: email, password: password, password_comfirmation: password_comfirmation }), { headers: __WEBPACK_IMPORTED_MODULE_2__shared_headers__["a" /* contentHeaders */] })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
                console.log("Response: " + res);
                // localStorage.setItem('auth_token', res.auth_token);
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
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/user.service.js.map

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/rxjs-operator.js.map

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(134);
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
    function AppComponent(router) {
        this.router = router;
        this.title = 'Seinfeld Calendar';
    }
    AppComponent.prototype.onClick = function (string) {
        this.router.navigate(['/' + string]);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(666),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.component.js.map

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__ = __webpack_require__(497);
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
    // public goal: Goal;
    function CreateNewGoalComponent() {
        this.createNewGoalForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            goalName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            from: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            repetitionType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            repetitionFrequency: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            repetitionLimitedTime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            autoUpdateFailed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            untilDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            numberEvents: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            monthlyRepetition: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Mon: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Tue: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Wed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Thu: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Fri: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Sat: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            Sun: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
        });
    }
    CreateNewGoalComponent.prototype.ngOnInit = function () {
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new __WEBPACK_IMPORTED_MODULE_2__shared_common_functions__["a" /* CommonFunctions */]();
    };
    CreateNewGoalComponent.prototype.roundUpTime = function () {
        return this.commonFunctions.roundUpTime();
    };
    CreateNewGoalComponent.prototype.untilDate = function () {
        return this.commonFunctions.untilDate();
    };
    CreateNewGoalComponent.prototype.moveLabelUp = function (string) {
        this.commonFunctions.moveLabelUp(string);
    };
    CreateNewGoalComponent.prototype.moveLabelDown = function (string) {
        this.commonFunctions.moveLabelDown(string);
    };
    CreateNewGoalComponent.prototype.changeAttributeInput = function (inputId, typeOfChange) {
        this.commonFunctions.changeAttributeInput(inputId, typeOfChange);
    };
    CreateNewGoalComponent.prototype.changeRepetitionType = function () {
        this.commonFunctions.changeRepetitionType();
    };
    CreateNewGoalComponent.prototype.changeRepetitionLimitedTime = function () {
        this.commonFunctions.changeRepetitionLimitedTime();
    };
    CreateNewGoalComponent.prototype.setNewGoal = function () {
        var goal = this.createNewGoalForm.value;
        console.log(JSON.stringify(goal));
    };
    CreateNewGoalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-create-new-goal',
            template: __webpack_require__(667),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], CreateNewGoalComponent);
    return CreateNewGoalComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/create-new-goal.component.js.map

/***/ },

/***/ 328:
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
            template: __webpack_require__(668),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/introduction.component.js.map

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operator__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rxjs_operator__);
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
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8)),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        var user = this.loginForm.value;
        // if (user.password != "11111111") {
        //     (<HTMLInputElement>document.getElementById('wrong-input')).hidden = false;
        // } else {
        //     (<HTMLInputElement>document.getElementById('wrong-input')).hidden = true;
        //     alert(JSON.stringify(this.loginForm.value));
        //     localStorage.setItem('myStorage', JSON.stringify(this.loginForm.value));
        //     console.log(JSON.parse(localStorage.getItem('myStorage')));
        // }
        console.log(JSON.stringify(this.loginForm.value));
        this.userService.login(user.email, user.password).subscribe(function (result) {
            if (result) {
                console.log(result);
                console.log("1111111111111111111111111");
                console.log(result.headers['_headers']);
                console.log("1111111111111111111111111");
                console.log("Result: " + result);
                document.getElementById('login-button').hidden = true;
                document.getElementById('signup-button').hidden = true;
                document.getElementById('user-name').innerHTML = "Quang";
                _this.router.navigate(['']);
            }
            else {
                console.log("Login failed");
            }
        });
    };
    LoginComponent.prototype.moveLabelUp = function (string) {
        var label = document.getElementById("label-" + string);
        label.classList.add('active');
    };
    LoginComponent.prototype.moveLabelDown = function (string) {
        var input = document.getElementById(string).value;
        if (input === '' || input === 'blank') {
            var label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    };
    LoginComponent.prototype.moveLabelAllDown = function () {
        var inputs = ['email', 'fullName', 'password', 'confirmPassword'];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            if (document.getElementById(input) != null) {
                document.getElementById(input).value = "";
                var label = document.getElementById("label-" + input);
                label.classList.remove('active');
            }
        }
        document.getElementById('wrong-input').hidden = true;
    };
    LoginComponent.prototype.displayPassword = function (string) {
        var passwordInput = document.getElementById(string);
        passwordInput.type = passwordInput.type == 'text' ? 'password' : 'text';
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(669),
            styles: [__webpack_require__(369)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/login.component.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operator__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rxjs_operator__);
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
    function SignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8)),
            password_confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8))
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    // constructor(public fb: FormBuilder) { }
    SignUpComponent.prototype.doSignUp = function (event) {
        var _this = this;
        // console.log(event);
        var user = this.signUpForm.value;
        console.log(user);
        // var passwordRegrex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,200}$/;
        // if (!user.password.match(passwordRegrex)) {
        //     let alert = (<HTMLInputElement>document.getElementById('password-match'));
        //     alert.innerHTML = "Password must be more than 8 characters and contains at least one numeric digit, one uppercase and one lowercase letter"
        //     alert.hidden = false;
        // } else if (user.password != user.confirmPassword) {
        //     (<HTMLInputElement>document.getElementById('password-match')).hidden = false;
        // } else {
        //     (<HTMLInputElement>document.getElementById('password-match')).hidden = true;
        //     alert(JSON.stringify(this.signUpForm.value));
        //     localStorage.setItem('myStorage', JSON.stringify(this.signUpForm.value));
        //     console.log(JSON.parse(localStorage.getItem('myStorage')));
        //     // console.log(localStorage);
        // }
        this.userService.signup(user.name, user.email, user.password, user.password_comfirmation).subscribe(function (result) {
            if (result) {
                console.log("Result: " + result);
                _this.router.navigate(['']);
            }
            else {
                console.log("Sign up failed");
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
        var inputs = ['email', 'name', 'password', 'password_confirmation'];
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
    SignUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__(671),
            styles: [__webpack_require__(369)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/sign-up.component.js.map

/***/ },

/***/ 369:
/***/ function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\nform {\n  position: relative;\n  padding: 2em 5%;\n  background-color: white;\n  width: 50%;\n  margin: 0 auto;\n  border-radius: 10px;\n  box-sizing: border-box; }\n\nh2.heading {\n  font-size: 26px;\n  font-weight: 400;\n  text-align: left;\n  color: #07B3A1;\n  border-bottom: 1px solid #07B3A1;\n  padding-bottom: 3px;\n  margin-bottom: 20px; }\n\n.controls {\n  text-align: left;\n  position: relative; }\n  .controls p {\n    font-family: 'Lato', 'sans-serif';\n    font-size: 16px;\n    font-weight: 300; }\n  .controls a {\n    font-family: 'Lato', 'sans-serif';\n    font-size: 16px;\n    font-weight: 300;\n    color: #07B3A1;\n    border: none; }\n    .controls a:focus, .controls a:hover {\n      color: #07B3A1;\n      cursor: pointer;\n      border: none;\n      text-decoration: underline; }\n  .controls button,\n  .controls input[type=\"email\"],\n  .controls input[type=\"password\"],\n  .controls input[type=\"text\"],\n  .controls textarea {\n    padding: 12px;\n    font-size: 14px;\n    border: 1px solid #c6c6c6;\n    width: 94%;\n    margin-bottom: 18px;\n    color: #888;\n    font-family: 'Lato', 'sans-serif';\n    font-size: 16px;\n    font-weight: 300;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n    .controls button:focus, .controls button:hover,\n    .controls input[type=\"email\"]:focus,\n    .controls input[type=\"email\"]:hover,\n    .controls input[type=\"password\"]:focus,\n    .controls input[type=\"password\"]:hover,\n    .controls input[type=\"text\"]:focus,\n    .controls input[type=\"text\"]:hover,\n    .controls textarea:focus,\n    .controls textarea:hover {\n      outline: none;\n      border-color: #9FB1C1; }\n      .controls button:focus + label, .controls button:hover + label,\n      .controls input[type=\"email\"]:focus + label,\n      .controls input[type=\"email\"]:hover + label,\n      .controls input[type=\"password\"]:focus + label,\n      .controls input[type=\"password\"]:hover + label,\n      .controls input[type=\"text\"]:focus + label,\n      .controls input[type=\"text\"]:hover + label,\n      .controls textarea:focus + label,\n      .controls textarea:hover + label {\n        color: #07B3A1;\n        cursor: text; }\n  .controls button {\n    width: 100%; }\n  .controls label {\n    position: absolute;\n    left: 8px;\n    top: 12px;\n    color: #999;\n    font-size: 16px;\n    display: inline-block;\n    padding: 1px 10px;\n    font-weight: 400;\n    background-color: rgba(255, 255, 255, 0);\n    pointer-events: none;\n    -webkit-transition: color 0.3s, top 0.3s, background-color 0.8s;\n    transition: color 0.3s, top 0.3s, background-color 0.8s; }\n    .controls label.active {\n      top: -12px;\n      color: #555;\n      background-color: white; }\n  .controls button {\n    cursor: pointer;\n    background-color: #07B3A1;\n    border: none;\n    color: #fff;\n    padding: 12px 0; }\n    .controls button:hover {\n      background-color: #058275; }\n  .controls i {\n    color: #888;\n    position: absolute;\n    top: 1.1em;\n    left: 92%; }\n    .controls i:hover {\n      cursor: pointer;\n      color: #07B3A1; }\n"

/***/ },

/***/ 385:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(496);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/main.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__introduction_introduction_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_logged_in_guard__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_route__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_bar_side_bar_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_new_goal_create_new_goal_component__ = __webpack_require__(327);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__introduction_introduction_component__["a" /* IntroductionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__create_new_goal_create_new_goal_component__["a" /* CreateNewGoalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_route__["a" /* MainRoutes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__shared_logged_in_guard__["a" /* LoggedInGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.module.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__introduction_introduction_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_new_goal_create_new_goal_component__ = __webpack_require__(327);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainRoutes; });




// Define which component should be loaded based on the current URL
var MainRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__introduction_introduction_component__["a" /* IntroductionComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'createnewgoal', component: __WEBPACK_IMPORTED_MODULE_3__create_new_goal_create_new_goal_component__["a" /* CreateNewGoalComponent */] }
];
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/app.route.js.map

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/index.js.map

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonFunctions; });
var CommonFunctions = (function () {
    function CommonFunctions() {
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
    }
    CommonFunctions.prototype.ngOnInit = function () {
        // this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        // this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
    };
    CommonFunctions.prototype.moveLabelUp = function (string) {
        var label = document.getElementById("label-" + string);
        label.classList.add('active');
    };
    CommonFunctions.prototype.moveLabelDown = function (string) {
        var input = document.getElementById(string).value;
        if (input === '' || input === 'blank') {
            var label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    };
    CommonFunctions.prototype.changeAttributeInput = function (inputId, typeOfChange) {
        var input = document.getElementById(inputId);
        input.type = typeOfChange;
        // this.moveLabelUp(inputId);
    };
    CommonFunctions.prototype.togglePanel = function (panelId, arg) {
        console.log(panelId + "|" + arg);
        var panel = document.getElementById(panelId);
        console.log(panel);
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
    return CommonFunctions;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/common-functions.js.map

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return contentHeaders; });

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Headers', '');
contentHeaders.append('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH,PUT,OPTIONS');
contentHeaders.append('Access-Control-Allow-Origin', '');
contentHeaders.append('Access-Control-Expose-Headers', 'Access-Token');
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/headers.js.map

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(136);
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

/***/ 500:
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
            selector: 'app-side-bar',
            template: __webpack_require__(670),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
}());
//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/side-bar.component.js.map

/***/ },

/***/ 501:
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

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/code-engine-studio/seinfeld_calendar/src/polyfills.js.map

/***/ },

/***/ 662:
/***/ function(module, exports) {

module.exports = "header {\n  font-family: 'Lato', 'sans-serif';\n  color: white;\n  box-sizing: border-box;\n  position: relative; }\n  header h1 {\n    float: left;\n    font-weight: 400;\n    font-size: 50px;\n    margin-left: 40px;\n    margin-top: 0;\n    margin-bottom: 0; }\n  header p {\n    font-weight: 400;\n    font-size: 16px;\n    color: rgba(255, 255, 255, 0.9);\n    letter-spacing: 0.05em;\n    margin-bottom: 10px; }\n  header .user-information {\n    float: right;\n    margin-top: 10px; }\n    header .user-information button {\n      text-decoration: none;\n      color: #07B3A1;\n      box-sizing: border-box;\n      border-radius: 3px;\n      border: none;\n      background-color: white;\n      padding: 10px 18px;\n      font-size: 14px;\n      margin: 0 10px;\n      -webkit-transition: background-color 0.2s;\n      transition: background-color 0.2s; }\n      header .user-information button:hover {\n        background-color: #eff; }\n      header .user-information button:active {\n        border: none; }\n  header .clear {\n    clear: both; }\n\nsection {\n  font-family: 'Lato', 'sans-serif';\n  color: #07B3A1;\n  padding: 3em 100px; }\n  section router-outlet {\n    display: block;\n    padding-bottom: 25px; }\n  section a {\n    color: #07B3A1;\n    border-bottom: 1px solid white;\n    padding: 10px;\n    margin: 10px; }\n    section a:hover {\n      text-decoration: none;\n      color: #e74c3c; }\n\n#main, #header {\n  -webkit-transition: margin-left .3s;\n  transition: margin-left .3s;\n  padding: 20px; }\n"

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = "a {\n  text-decoration: none; }\n\nform {\n  position: relative;\n  padding: 2em 5%;\n  background-color: white;\n  width: 90%;\n  margin: 0 auto;\n  border-radius: 10px;\n  box-sizing: border-box; }\n\nh2.heading {\n  font-size: 26px;\n  font-weight: 400;\n  text-align: left;\n  color: #07B3A1;\n  border-bottom: 1px solid #07B3A1;\n  padding-bottom: 3px;\n  margin-bottom: 20px; }\n\n.controls {\n  text-align: left;\n  position: relative; }\n  .controls .left {\n    position: relative;\n    float: left;\n    width: 45%;\n    margin-bottom: 0; }\n  .controls .right {\n    position: relative;\n    float: right;\n    width: 45%; }\n    .controls .right p {\n      display: inline; }\n  .controls .clear {\n    clear: both; }\n  .controls p {\n    font-family: 'Lato', 'sans-serif';\n    font-size: 16px;\n    font-weight: 300; }\n  .controls a {\n    font-family: 'Lato', 'sans-serif';\n    font-size: 16px;\n    font-weight: 300;\n    color: #07B3A1;\n    border: none; }\n    .controls a:focus, .controls a:hover {\n      color: #07B3A1;\n      cursor: pointer;\n      border: none;\n      text-decoration: underline; }\n  .controls button,\n  .controls input,\n  .controls select,\n  .controls textarea {\n    padding: 12px;\n    font-size: 14px;\n    border: 1px solid #c6c6c6;\n    width: 100%;\n    margin-bottom: 20px;\n    color: #888;\n    font-family: 'Lato', 'sans-serif';\n    font-size: 16px;\n    font-weight: 300;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n    .controls button:focus, .controls button:hover,\n    .controls input:focus,\n    .controls input:hover,\n    .controls select:focus,\n    .controls select:hover,\n    .controls textarea:focus,\n    .controls textarea:hover {\n      outline: none;\n      border-color: #9FB1C1; }\n      .controls button:focus + label, .controls button:hover + label,\n      .controls input:focus + label,\n      .controls input:hover + label,\n      .controls select:focus + label,\n      .controls select:hover + label,\n      .controls textarea:focus + label,\n      .controls textarea:hover + label {\n        color: #07B3A1;\n        cursor: text; }\n    .controls button.repetition-type, .controls button.from,\n    .controls input.repetition-type,\n    .controls input.from,\n    .controls select.repetition-type,\n    .controls select.from,\n    .controls textarea.repetition-type,\n    .controls textarea.from {\n      position: relative;\n      top: -22px; }\n    .controls button.from,\n    .controls input.from,\n    .controls select.from,\n    .controls textarea.from {\n      height: 20px; }\n    .controls button.inline-input,\n    .controls input.inline-input,\n    .controls select.inline-input,\n    .controls textarea.inline-input {\n      width: 30%; }\n  .controls button {\n    width: 100%; }\n  .controls label {\n    position: absolute;\n    left: 8px;\n    top: 12px;\n    color: #999;\n    font-size: 16px;\n    display: inline-block;\n    padding: 1px 10px;\n    font-weight: 400;\n    background-color: rgba(255, 255, 255, 0);\n    pointer-events: none;\n    -webkit-transition: color 0.3s, top 0.3s;\n    transition: color 0.3s, top 0.3s; }\n    .controls label.active {\n      top: -12px;\n      color: #07B3A1;\n      background-color: white; }\n    .controls label.fix {\n      position: relative;\n      top: -12px;\n      z-index: 1;\n      color: #07B3A1;\n      background-color: white; }\n  .controls button {\n    cursor: pointer;\n    background-color: #07B3A1;\n    border: none;\n    color: #fff;\n    padding: 12px 0; }\n    .controls button:hover {\n      background-color: #058275; }\n"

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 40px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n  .sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 16px;\n    color: #818181;\n    display: block; }\n    .sidenav a:hover, .offcanvas .sidenav a:focus {\n      color: #f1f1f1; }\n  .sidenav a:nth-child(5n) {\n    border-bottom: 1px solid white; }\n  .sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 20px;\n    font-size: 16px;\n    margin-left: 40px; }\n\nspan {\n  position: absolute;\n  left: 20px;\n  top: 35px;\n  font-size: 20px; }\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 14px; } }\n"

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = "<header id=\"header\">\n  <app-side-bar></app-side-bar>\n  <h1><i class=\"fa fa-calendar-check-o\"></i> {{title}}</h1>\n  <div class=\"user-information\">\n    <!-- <a routerLink=\"/sign-up\" routerLinkActive=\"active\">Signup</a> -->\n    <!-- <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a> -->\n    <button  (click)=\"onClick('login')\" id=\"login-button\">Login</button>\n    <button  (click)=\"onClick('signup')\" id=\"signup-button\">Sign Up</button>\n    <p id=\"user-name\">\n    </p>\n  </div>\n  <div class=\"clear\">\n  </div>\n</header>\n<main id=\"main\">\n  <section>\n    <router-outlet></router-outlet>\n  </section>\n</main>\n"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = "<!-- [formGroup]=\"createNewGoalForm\" (ngSubmit)=\"setNewGoal()\" -->\n<form [formGroup]=\"createNewGoalForm\" (ngSubmit)=\"setNewGoal()\">\n\t<div class=\"form-group\">\n\t\t<h2 class=\"heading\">New goal</h2>\n\t\t<div class=\"controls\">\n\t\t\t<div class=\"left\">\n\t\t\t\t<input formControlName=\"goalName\" type=\"text\" id=\"goalName\" class=\"floatLabel\" name=\"goalName\" (focus)=\"moveLabelUp('goalName')\" (blur)=\"moveLabelDown('goalName')\" required>\n\t\t\t\t<label id=\"label-goalName\" for=\"goalName\">Goal name</label>\n\t\t\t</div>\n\t\t\t<div class=\"right\">\n\t\t\t\t<label id=\"label-from\" for=\"from\" class=\"fix\">From</label>\n\t\t\t\t<input formControlName=\"from\" type=\"datetime-local\" id=\"from\" class=\"from\" name=\"from\" value=\"{{roundUpTime() | date:'yyyy-MM-ddTHH:mm'}}\" />\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"controls\">\n\t\t\t<textarea rows='4' formControlName=\"description\" type=\"textarea\" id=\"description\" class=\"floatLabel\" name=\"description\" (focus)=\"moveLabelUp('description')\" (blur)=\"moveLabelDown('description')\"></textarea>\n\t\t\t<label id=\"label-description\" for=\"description\">Description</label>\n\t\t</div>\n\t\t<div class=\"controls\">\n\t\t\t<div class=\"left\">\n\t\t\t\t<label id=\"label-repetition\" for=\"repetition\" class='fix'>Repetition</label>\n\t\t\t\t<select formControlName=\"repetitionType\" class=\"repetition-type\" id=\"repetition-type\" style=\"margin-bottom: 0px;\" (change)=\"changeRepetitionType()\">\n\t\t\t\t\t\t<option *ngFor=\"let rp of repetitionTypes\" value=\"{{rp}}\">{{rp}}</option>\n\t\t\t\t\t</select >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"right\">\n                every&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\t\t\t\t\t<input formControlName=\"repetitionFrequency\" type=\"number\" min='1' class=\"inline-input\"/>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"repetitionFrequencyType\">day(s)</span>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t\t\t<!-- TODO -->\n\t\t\t<div class=\"control\" id=\"weeklyRepetition\" hidden=\"hidden\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t<span *ngFor=\"let day of weekDays\"><input type=\"checkbox\" formControlName=\"{{day}}\" name=\"{{day}}\" value=\"{{day}}\" style=\"margin-bottom: 20px;\"/> {{day}} </span>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- FIXME -->\n\t\t<div class=\"control\" id=\"monthlyRepetition\" hidden=\"hidden\">\n\t\t\t<div class=\"left\">\n\t\t\t\t\t<input type=\"radio\" name=\"monthlyRepetition\" formControlName=\"monthlyRepetition\" value='sameday' /> on the same day each month\n\t\t\t\t\t<br />\n\t\t\t\t\t<input type=\"radio\" name=\"monthlyRepetition\" formControlName=\"monthlyRepetition\" value='daydefined' /> on every <span id=\"dayDefineValue\">first Monday</span>\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"controls\">\n\t\t\t<div class=\"left\">\n\t\t\t\t<select formControlName=\"repetitionLimitedTime\" class=\"repetition-limited-time\" id=\"repetition-limited-time\" (change)=\"changeRepetitionLimitedTime()\">\n\t\t\t\t\t\t<option *ngFor=\"let rlt of repetitionLimitedTimes\" value=\"{{rlt}}\">{{rlt}}</option>\n\t\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"right\">\n\t\t\t\t<input type=\"date\" formControlName=\"untilDate\" id=\"until-date\" hidden=\"hidden\" value=\"{{untilDate() | date:'yyyy-MM-dd'}}\" />\n\t\t\t\t<span id=\"number-events\" hidden=\"hidden\"><input type=\"number\" formControlName=\"numberEvents\" min='1' style=\"width: 50%\"/> event(s)</span>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"controls\" hidden=\"hidden\">\n\t\t\t<label id=\"reminders\" for=\"reminders\">Reminders</label>\n\t\t\t<button type=\"button\">Add reminder</button>\n\t\t\t<select>\n\t\t\t\t\t\t<option value=\"0\">At time of event</option>\n\t\t\t\t\t\t<option value=\"1\" selected>10 minutes before</option>\n\t\t\t\t\t\t<option value=\"2\">30 minutes before</option>\n\t\t\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"controls\">\n\t\t\t<input formControlName=\"autoUpdateFailed\" type=\"checkbox\" id=\"is-auto\" name='is-auto' value=\"autoUpdateFailed\" style=\"width: 5%;\" />Auto update failed days.\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<div class=\"controls\">\n\t\t\t<button type=\"submit\" style=\"width: 10%;\" class=\"right\">Save</button>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</form>\n"

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "<p style=\"color: white;\">\n  Introduction\n  <br /><a routerLink='/createnewgoal'>Create new goal</a>\n</p>\n"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n    <!--  General -->\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Login</h2>\n        <div class=\"controls\">\n            <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"floatLabel\" name=\"email\" (focus)=\"moveLabelUp('email')\" (blur)=\"moveLabelDown('email')\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\n            <label id=\"label-email\" for=\"email\">Email</label>\n        </div>\n        <div class=\"controls\">\n            <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"floatLabel\" name=\"password\" (focus)=\"moveLabelUp('password')\" (blur)=\"moveLabelDown('password')\" required minlength='8'>\n            <label id=\"label-password\" for=\"password\">Password</label>\n            <i class=\"fa fa-eye-slash\" (mouseup)=\"displayPassword('password')\" (mousedown)=\"displayPassword('password')\"></i>\n        </div>\n        <div class=\"alert alert-warning\" id=\"wrong-input\" hidden>\n            <b>Wrong username/password</b>\n        </div>\n        <div class=\"controls\">\n            <p style=\"text-align: center; color: #888;\">\n                New to Seinfeld Calendar? <a class=\"sign-up\" routerLink=\"/signup\">Sign Up now</a>\n            </p>\n        </div>\n    </div>\n    <!-- button -->\n    <div class=\"form-group\">\n        <div class=\"controls\">\n            <button type=\"submit\">Login</button>\n        </div>\n        <div class=\"controls\" style=\"text-align: center; font-size: 14px; !important\"><a href=\"#\" style=\"color: #999\">Forgot your password?</a></div>\n    </div>\n</form>\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n<a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"toggleSideBar('0')\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n<a href=\"#\">Detail View</a>\n<a href=\"#\">Week View</a>\n<a href=\"#\">Month View</a>\n<a href=\"#\">Year View</a>\n<a href=\"#\">Setting</a>\n</div>\n<span id=\"openSideBar\"><i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"toggleSideBar('200px')\"></i></span>\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"signUpForm\" (ngSubmit)=\"doSignUp()\">\n    <!--  General -->\n    <div class=\"form-group\">\n        <h2 class=\"heading\">Sign up</h2>\n        <div class=\"controls\">\n            <input formControlName=\"name\" type=\"text\" id=\"name\"\n            class=\"floatLabel\" name=\"name\"\n            (focus)=\"moveLabelUp('name')\" (blur)=\"moveLabelDown('name')\"\n            required>\n            <label id=\"label-name\" for=\"name\">Name</label>\n        </div>\n        <div class=\"controls\">\n            <input formControlName=\"email\" type=\"email\" id=\"email\"\n            class=\"floatLabel\" name=\"email\"\n            (focus)=\"moveLabelUp('email')\" (blur)=\"moveLabelDown('email')\" required\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n            <label id=\"label-email\" for=\"email\">Email</label>\n        </div>\n        <div class=\"controls\">\n            <input formControlName=\"password\" type=\"password\" id=\"password\"\n            class=\"floatLabel\" name=\"password\"\n            (focus)=\"moveLabelUp('password')\" (blur)=\"moveLabelDown('password')\" required minlength='8'\n            pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n            <label id=\"label-password\" for=\"password\">Password</label>\n            <i class=\"fa fa-eye-slash\" (mouseup)=\"displayPassword('password')\"\n            (mousedown)=\"displayPassword('password')\"></i>\n        </div>\n        <div class=\"controls\">\n            <input formControlName=\"password_confirmation\" type=\"password\" id=\"password_confirmation\"\n            class=\"floatLabel\" name=\"password_confirmation\"\n            (focus)=\"moveLabelUp('password_confirmation')\" (blur)=\"moveLabelDown('password_confirmation')\"\n            data-toggle=\"tooltip\" data-placement=\"right\" title=\"Password does not match!\"\n            required minlength=\"8\"\n            pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\">\n            <label id=\"label-password_confirmation\" for=\"password_confirmation\">Confirm Password</label>\n            <i class=\"fa fa-eye-slash\" (mouseup)=\"displayPassword('password_confirmation')\"\n            (mousedown)=\"displayPassword('password_confirmation')\"></i>\n        </div>\n        <div class=\"alert alert-danger\" id=\"password-match\" hidden>\n          <b>Passwords do not match.</b>\n        </div>\n    </div>\n    <!-- button -->\n    <div class=\"form-group\">\n        <div class=\"controls\">\n            <button type=\"submit\">Create free account</button>\n        </div>\n    </div>\n</form>\n"

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ }

},[716]);
//# sourceMappingURL=main.bundle.map
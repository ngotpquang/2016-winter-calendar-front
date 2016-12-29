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
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonFunctions } from '../shared/common-functions';
import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';
var CreateNewGoalComponent = (function () {
    function CreateNewGoalComponent(goalService, router) {
        this.goalService = goalService;
        this.router = router;
        this.createNewGoalForm = new FormGroup({
            goal_name: new FormControl(),
            start_date: new FormControl(),
            description: new FormControl(),
            type_of_repetition: new FormControl(),
            how_often: new FormControl(),
            type_of_end_date: new FormControl(),
            autoUpdateFailed: new FormControl(),
            specific_end_date: new FormControl(),
            number_of_event: new FormControl(),
            type_of_month: new FormControl(),
            day_of_week_Mon: new FormControl(),
            day_of_week_Tue: new FormControl(),
            day_of_week_Wed: new FormControl(),
            day_of_week_Thu: new FormControl(),
            day_of_week_Fri: new FormControl(),
            day_of_week_Sat: new FormControl(),
            day_of_week_Sun: new FormControl(),
        });
    }
    CreateNewGoalComponent.prototype.ngOnInit = function () {
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new CommonFunctions();
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
                (input.day_of_week_Sun == true ? "0, " : "") +
                    (input.day_of_week_Mon == true ? "1, " : "") +
                    (input.day_of_week_Tue == true ? "2, " : "") +
                    (input.day_of_week_Wed == true ? "3, " : "") +
                    (input.day_of_week_Thu == true ? "4, " : "") +
                    (input.day_of_week_Fri == true ? "5, " : "") +
                    (input.day_of_week_Sat == true ? "6, " : "");
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
        var goal = new Goal(currentUser.email, currentUser.token, input.goal_name, start_date, input.description, new Repetition(input.type_of_repetition, input.how_often, day_of_week, input.type_of_month), new EndDate(input.type_of_end_date, specific_end_date, input.number_of_event));
        this.goalService.addNewGoal(goal).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/detailview']);
        }, function (error) { return console.log(error); });
    };
    return CreateNewGoalComponent;
}());
CreateNewGoalComponent = __decorate([
    Component({
        selector: 'app-create-new-goal',
        templateUrl: './create-new-goal.component.html',
        styleUrls: ['./create-new-goal.component.scss']
    }),
    __metadata("design:paramtypes", [GoalService, Router])
], CreateNewGoalComponent);
export { CreateNewGoalComponent };
//# sourceMappingURL=../../../../../src/app/create-new-goal/create-new-goal.component.js.map
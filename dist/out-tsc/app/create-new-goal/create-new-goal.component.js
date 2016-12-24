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
import { CommonFunctions } from '../shared/common-functions';
var CreateNewGoalComponent = (function () {
    function CreateNewGoalComponent() {
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
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
    CreateNewGoalComponent.prototype.setNewGoal = function () {
        var goal = this.createNewGoalForm.value;
        console.log(goal);
    };
    return CreateNewGoalComponent;
}());
CreateNewGoalComponent = __decorate([
    Component({
        selector: 'app-create-new-goal',
        templateUrl: './create-new-goal.component.html',
        styleUrls: ['./create-new-goal.component.scss']
    }),
    __metadata("design:paramtypes", [])
], CreateNewGoalComponent);
export { CreateNewGoalComponent };
//# sourceMappingURL=../../../../src/app/create-new-goal/create-new-goal.component.js.map
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
            goalName: new FormControl(),
            from: new FormControl(),
            description: new FormControl(),
            repetitionType: new FormControl(),
            repetitionFrequency: new FormControl(),
            repetitionLimitedTime: new FormControl(),
            autoUpdateFailed: new FormControl(),
            untilDate: new FormControl(),
            numberEvents: new FormControl()
        });
    }
    CreateNewGoalComponent.prototype.ngOnInit = function () {
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new CommonFunctions();
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
        var val = document.getElementById('repetition-type').value;
        switch (val) {
            case this.repetitionTypes[0]:
                this.commonFunctions.togglePanel('weeklyRepetition', true);
                this.commonFunctions.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'day(s)';
                break;
            case this.repetitionTypes[1]:
                this.commonFunctions.togglePanel('weeklyRepetition', false);
                this.commonFunctions.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'week(s)';
                break;
            case this.repetitionTypes[2]:
                this.commonFunctions.togglePanel('weeklyRepetition', true);
                this.commonFunctions.togglePanel('monthlyRepetition', false);
                document.getElementById('repetitionFrequencyType').innerHTML = 'month(s)';
                break;
            case this.repetitionTypes[3]:
                this.commonFunctions.togglePanel('weeklyRepetition', true);
                this.commonFunctions.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'year(s)';
                break;
        }
    };
    CreateNewGoalComponent.prototype.changeRepetitionLimitedTime = function () {
        var val = document.getElementById('repetition-limited-time').value;
        switch (val) {
            case this.repetitionLimitedTimes[0]:
                this.commonFunctions.togglePanel('untilDate', true);
                this.commonFunctions.togglePanel('numberEvents', true);
                break;
            case this.repetitionLimitedTimes[1]:
                this.commonFunctions.togglePanel('untilDate', false);
                this.commonFunctions.togglePanel('numberEvents', true);
                break;
            case this.repetitionLimitedTimes[2]:
                this.commonFunctions.togglePanel('untilDate', true);
                this.commonFunctions.togglePanel('numberEvents', false);
                break;
        }
    };
    CreateNewGoalComponent.prototype.setNewGoal = function () {
        var goal = this.createNewGoalForm.value;
        console.log(JSON.stringify(goal));
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
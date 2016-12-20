import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { CommonFunctions } from '../shared/common-functions';

@Component({
    selector: 'app-create-new-goal',
    templateUrl: './create-new-goal.component.html',
    styleUrls: ['./create-new-goal.component.scss']
})
export class CreateNewGoalComponent implements OnInit {
    weekDays;
    repetitionTypes;
    repetitionLimitedTimes;
    commonFunctions: CommonFunctions;
    constructor() { }

    ngOnInit() {
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new CommonFunctions();
    }

    public createNewGoalForm = new FormGroup({
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
    moveLabelUp(string) {
        this.commonFunctions.moveLabelUp(string);
    }
    moveLabelDown(string) {
        this.commonFunctions.moveLabelDown(string);
    }
    changeAttributeInput(inputId, typeOfChange) {
        this.commonFunctions.changeAttributeInput(inputId, typeOfChange);
    }
    changeRepetitionType() {
        let val = (<HTMLInputElement>document.getElementById('repetition-type')).value;
        switch (val) {
            case this.repetitionTypes[0]:
                this.commonFunctions.togglePanel('weeklyRepetition', true);
                this.commonFunctions.togglePanel('monthlyRepetition', true);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'day(s)';
                break;
            case this.repetitionTypes[1]:
                this.commonFunctions.togglePanel('weeklyRepetition', false);
                this.commonFunctions.togglePanel('monthlyRepetition', true);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'week(s)';
                break;
            case this.repetitionTypes[2]:
                this.commonFunctions.togglePanel('weeklyRepetition', true);
                this.commonFunctions.togglePanel('monthlyRepetition', false);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'month(s)';
                break;
            case this.repetitionTypes[3]:
                this.commonFunctions.togglePanel('weeklyRepetition', true);
                this.commonFunctions.togglePanel('monthlyRepetition', true);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'year(s)';
                break;
        }
    }

    changeRepetitionLimitedTime() {
        let val = (<HTMLInputElement>document.getElementById('repetition-limited-time')).value;
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
    }
    setNewGoal() {
        let goal = this.createNewGoalForm.value;
        console.log(JSON.stringify(goal));
    }
}

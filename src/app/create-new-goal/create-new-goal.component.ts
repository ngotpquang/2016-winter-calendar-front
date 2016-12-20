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

    roundUpTime() {
        return this.commonFunctions.roundUpTime();
    }
    untilDate() {
        return this.commonFunctions.untilDate();
    }
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
        this.commonFunctions.changeRepetitionType();
    }

    changeRepetitionLimitedTime() {
          this.commonFunctions.changeRepetitionLimitedTime();
    }
    setNewGoal() {
        let goal = this.createNewGoalForm.value;
        console.log(JSON.stringify(goal));
    }
}

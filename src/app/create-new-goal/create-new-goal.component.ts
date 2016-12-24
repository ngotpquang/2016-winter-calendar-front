import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { CommonFunctions } from '../shared/common-functions';
import { Goal } from '../shared/goal.interface';

@Component({
    selector: 'app-create-new-goal',
    templateUrl: './create-new-goal.component.html',
    styleUrls: ['./create-new-goal.component.scss']
})
export class CreateNewGoalComponent implements OnInit {
    public weekDays: string[];
    public repetitionTypes: string[];
    public repetitionLimitedTimes: string[];
    public commonFunctions: CommonFunctions;
    // public goal: Goal;
    constructor() { }

    ngOnInit() {
        this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.commonFunctions = new CommonFunctions();
    }

    public createNewGoalForm = new FormGroup({
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

    roundUpTime() {
        return this.commonFunctions.roundUpTime();
    }
    untilDate() {
        return this.commonFunctions.untilDate();
    }

    changeRepetitionType() {
        this.commonFunctions.changeRepetitionType();
    }

    changeRepetitionLimitedTime() {
        this.commonFunctions.changeRepetitionLimitedTime();
    }
    setNewGoal() {
        let goal = this.createNewGoalForm.value;
        console.log(goal);
        // console.log(JSON.stringify(goal));
    }
}

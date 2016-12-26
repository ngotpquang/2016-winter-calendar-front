import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { CommonFunctions } from '../shared/common-functions';
import { Goal, Repetition, EndDate } from '../shared/goal';

import { GoalService } from '../goal/goal.service';

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
    constructor(private goalService: GoalService) { }

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
        let input = this.createNewGoalForm.value;
        let day_of_week = null;
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
        let start_date;
        if (input.start_date == null) {
            start_date = this.roundUpTime().toString();
        } else {
            start_date = input.start_date;
        }
        let specific_end_date = null;
        if (input.type_of_end_date == 2) {
            if (input.specific_end_date == null) {
                specific_end_date = this.untilDate().toString();
            } else {
                specific_end_date = input.specific_end_date;
            }
        }
        let goal = new Goal(input.goal_name, start_date, input.description,
            new Repetition(input.type_of_repetition, input.how_often, day_of_week, input.type_of_month),
            new EndDate(input.type_of_end_date, specific_end_date, input.number_of_event));
        console.log(JSON.stringify(goal));
        this.goalService.addNewGoal(goal);

    }
}

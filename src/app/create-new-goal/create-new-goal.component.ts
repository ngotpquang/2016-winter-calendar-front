import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonFunctions } from '../shared/common-functions';
import { LoadingPage } from '../loading-indicator/loading-page';
import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';

@Component({
    selector: 'app-create-new-goal',
    templateUrl: './create-new-goal.component.html',
    styleUrls: ['./create-new-goal.component.scss']
})
export class CreateNewGoalComponent extends LoadingPage implements OnInit {
    public weekDays: string[];
    public repetitionTypes: string[];
    public repetitionLimitedTimes: string[];
    public commonFunctions: CommonFunctions;
    constructor(private goalService: GoalService, private router: Router) {
        super('loaded');
    }

    ngOnInit() {
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
    addNewGoal() {
        let input = this.createNewGoalForm.value;
        this.standby();
        // console.log(input);
        let day_of_week = null;
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
        console.log(input);
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let goal = new Goal(currentUser.email, currentUser.token, input.goal_name, start_date, input.description,
            new Repetition(input.type_of_repetition, input.how_often, day_of_week, input.type_of_month),
            new EndDate(input.type_of_end_date, specific_end_date, input.number_of_event), input.autoUpdateFailed);
        console.log(goal);
        this.goalService.addNewGoal(goal).subscribe(res => {
            console.log(res);
            this.router.navigate(['/detailview']);
        },
            error => console.log(error));
    }
}

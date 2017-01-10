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
    public remindersList: string[];
    public timeBefores: string[];
    private hiddenReminderButton: boolean = false;
    public commonFunctions: CommonFunctions;
    constructor(private goalService: GoalService, private router: Router) {
        super('loaded');
    }

    ngOnInit() {
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
        this.remindersList = ['At the time of event', '10 minutes before', '30 minutes before',
            '1 hour before', '2 hours before', '3 hours before', '12 hours before', 'Set time'];
        this.timeBefores = ['time_before_1', 'time_before_2', 'time_before_3', 'time_before_4', 'time_before_5'];
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeTitleContent('Create a new goal');
        this.commonFunctions.changeBackground(false);
    }

    public createNewGoalForm = new FormGroup({
        goal_name: new FormControl('', Validators.required),
        start_date: new FormControl(),
        description: new FormControl('', Validators.required),
        type_of_repetition: new FormControl('1'),
        how_often: new FormControl('1'),
        type_of_end_date: new FormControl('1'),
        autoUpdateFailed: new FormControl(true),
        specific_end_date: new FormControl(),
        number_of_event: new FormControl('1'),
        type_of_month: new FormControl("1"),
        day_of_week_Mon: new FormControl(),
        day_of_week_Tue: new FormControl(),
        day_of_week_Wed: new FormControl(),
        day_of_week_Thu: new FormControl(),
        day_of_week_Fri: new FormControl(),
        day_of_week_Sat: new FormControl(),
        day_of_week_Sun: new FormControl(),
        time_before_1: new FormControl(),
        time_before_2: new FormControl(),
        time_before_3: new FormControl(),
        time_before_4: new FormControl(),
        time_before_5: new FormControl(),
        time_before_1_t: new FormControl(),
        time_before_2_t: new FormControl(),
        time_before_3_t: new FormControl(),
        time_before_4_t: new FormControl(),
        time_before_5_t: new FormControl()
    });

    roundUpTime() {
        return this.commonFunctions.roundUpTime();
    }
    untilDate() {
        return this.commonFunctions.untilDate();
    }

    changeRepetitionType() {
        this.commonFunctions.changeRepetitionType(new Date());
    }

    changeMonthlyType() {
        let input = this.createNewGoalForm.value;
        let startDate = new Date(input.start_date);
        (<HTMLInputElement>document.getElementById('dayDefineValue')).innerHTML = this.commonFunctions.getDay(startDate);
    }

    changeRepetitionLimitedTime() {
        this.commonFunctions.changeRepetitionLimitedTime();
    }

    resetInputFormControl(id: string): void {
        let inputForm = this.createNewGoalForm.value;
        switch (id) {
            case 'time_before_1':
                inputForm.time_before_1 = "0";
                break;
            case 'time_before_2':
                inputForm.time_before_2 = "0";
                break;
            case 'time_before_3':
                inputForm.time_before_3 = "0";
                break;
            case 'time_before_4':
                inputForm.time_before_4 = "0";
                break;
            case 'time_before_5':
                inputForm.time_before_5 = "0";
                break;

        }
    }

    showReminders(reminderId?: string) {
        let inputForm = this.createNewGoalForm.value;
        let numOfRemindersShowed: number = 0;
        // console.log(reminderId);
        if (typeof (reminderId) == 'undefined') {
            let reminders = document.getElementsByClassName('reminder-group');
            let selects = document.getElementsByClassName('time-before');
            for (let reminder in reminders) {
                let element = (<HTMLElement>reminders[reminder]);
                if (element.hidden == true) {
                    element.hidden = false;
                    // console.log(element.getAttribute('id'));
                    this.resetInputFormControl(element.getAttribute('id'));
                    (<HTMLInputElement>selects[reminder]).value = "";
                    break;
                }
                numOfRemindersShowed += 1;
            }
            // console.log(numOfRemindersShowed);
            if (numOfRemindersShowed == 4) {
                this.hiddenReminderButton = true;
            }
        } else {
            let reminder = <HTMLElement>document.getElementById(reminderId);
            // console.log(reminder);
            reminder.hidden = true;
            let select = <HTMLInputElement>document.getElementById('select-' + reminderId);
            let input = <HTMLInputElement>document.getElementById('input-' + reminderId);
            input.hidden = true;
            this.resetInputFormControl(reminderId);
            let reminders = document.getElementsByClassName('reminder-group');
            for (let reminder in reminders) {
                let element = (<HTMLElement>reminders[reminder]);
                if (element.hidden == false) {
                    numOfRemindersShowed += 1
                }
            }
            // console.log(numOfRemindersShowed);
            if (numOfRemindersShowed < 10) {
                this.hiddenReminderButton = false;
            }
        }
    }

    getStartHour() {
        let inputForm = this.createNewGoalForm.value;
        let start_date;
        if (inputForm.start_date == null) {
            start_date = this.roundUpTime();
        } else {
            start_date = new Date(inputForm.start_date);
            start_date.setHours(start_date.getHours() - 7);

        }
        return start_date.getHours() + ":" + (start_date.getMinutes() == 0 ? "00" : "30");
    }

    changeToSetTime(item: string): void {
        let select = <HTMLInputElement>document.getElementById('select-' + item);
        let input = <HTMLInputElement>document.getElementById('input-' + item);
        if (select.value == "7") {
            input.hidden = false;
            console.log(this.getStartHour());
            input.value = this.getStartHour();
        } else {
            input.hidden = true;
        }
    }

    addNewGoal(): void {
        let input = this.createNewGoalForm.value;
        if (input.goal_name != "") {
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
            let time_before = new Array<string>();
            let timeBeforeGroup = new Array<any>();
            for (let time of this.timeBefores) {
                timeBeforeGroup.push(<HTMLElement>document.getElementById(time));
            }
            let startHours = new Date
            if (input.time_before_1 != null && timeBeforeGroup[0].hidden != true) {
                // console.log(input.time_before_1_t);
                // console.log(start_date);
                if (input.time_before_1 == "7") {
                    this.commonFunctions.pushReminder(time_before, (input.time_before_1_t == null ? this.getStartHour() : input.time_before_1_t));
                } else {
                    this.commonFunctions.pushReminder(time_before, this.commonFunctions.timeForReminder(input.time_before_1));
                }

            }
            if (input.time_before_2 != null && timeBeforeGroup[1].hidden != true) {
                if (input.time_before_2 == "7") {
                    this.commonFunctions.pushReminder(time_before, (input.time_before_2_t == null ? this.getStartHour() : input.time_before_2_t));
                } else {
                    this.commonFunctions.pushReminder(time_before, this.commonFunctions.timeForReminder(input.time_before_2));
                }
            }
            if (input.time_before_3 != null && timeBeforeGroup[2].hidden != true) {
                if (input.time_before_3 == "7") {
                    this.commonFunctions.pushReminder(time_before, (input.time_before_3_t == null ? this.getStartHour() : input.time_before_3_t));
                } else {
                    this.commonFunctions.pushReminder(time_before, this.commonFunctions.timeForReminder(input.time_before_3));
                }
            }
            if (input.time_before_4 != null && timeBeforeGroup[3].hidden != true) {
                if (input.time_before_4 == "7") {
                    this.commonFunctions.pushReminder(time_before, (input.time_before_4_t == null ? this.getStartHour() : input.time_before_4_t));
                } else {
                    this.commonFunctions.pushReminder(time_before, this.commonFunctions.timeForReminder(input.time_before_4));
                }
            }
            if (input.time_before_5 != null && timeBeforeGroup[4].hidden != true) {
                if (input.time_before_5 == "7") {
                    this.commonFunctions.pushReminder(time_before, (input.time_before_5_t == null ? this.getStartHour() : input.time_before_5_t));
                } else {
                    this.commonFunctions.pushReminder(time_before, this.commonFunctions.timeForReminder(input.time_before_5));
                }
            }
            if (time_before.length == 0) {
                time_before.push("0");
            }
            // console.log(input.time_before_1);
            // console.log(input.time_before_2);
            // console.log(input.time_before_3);
            // console.log(input.time_before_4);
            // console.log(input.time_before_5);
            console.log("Result: " + time_before.toString());


                let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                let goal = new Goal(currentUser.email, currentUser.token, input.goal_name, start_date, input.description,
                    new Repetition(input.type_of_repetition, input.how_often, day_of_week, input.type_of_month),
                    new EndDate(input.type_of_end_date, specific_end_date, input.number_of_event), input.autoUpdateFailed, time_before.toString());
                this.goalService.addNewGoal(goal).subscribe(res => {
                    this.router.navigate(['/detailview']);
                },
                    error => console.log(error));
            } else {
                let alert = <HTMLElement>document.getElementById('goal-name-alert');
                alert.hidden = false;
        }
    }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CommonFunctions } from '../shared/common-functions';
import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';

@Component({
    moduleId: '' + module.id,
    selector: 'app-edit-goal',
    templateUrl: './edit-goal.component.html',
    styleUrls: ['./edit-goal.component.scss']
})
export class EditGoalComponent implements OnInit {
    id: string;
    unit: string;
    goal: Goal;
    day: string;
    date: string;
    repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
    repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
    weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    toggleWeekDays: boolean[] = [false, false, false, false, false, false, false];
    public commonFunctions: CommonFunctions;
    submitted = false;
    isDataLoaded = false;
    isSuitableYear = true;

    remindersList = ['At the time of event', '10 minutes before', '30 minutes before',
            '1 hour before', '2 hours before', '3 hours before', '12 hours before', 'Set time'];

    uniqueArray: string[] = [];
    reminders: string[] = [];
    reminderValues: string[] = [];
    reminderTypes: string[] = [];
    reminderString: string;
    reminderLength: number = 0;
    defaultTime= '00:00';
    convertArray: string[] = ['0', '10', '30', '60', '120', '180', '720', '00:00'];


    constructor(private goalService: GoalService, private route: ActivatedRoute,
        private location: Location, private router: Router) {
    };
    ngOnInit(): void {
        this.id = this.route.params['_value']['id'];
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeBackground(false);
        this.goalService.getGoalsById(this.id).toPromise().then((data) => {
            this.goal = JSON.parse(data['_body']);
            console.log(this.goal);
            this.commonFunctions.changeTitleContent(this.goal.goal_name);
            this.toRepetitionUnit();

            let offSet = new Date().getTimezoneOffset();
            let fullTime = new Date(this.goal.start_date).getTime();
            let temp = fullTime + (offSet * 60 * 1000);
            this.goal.start_date = new Date(temp);

            let rep = this.goal.repetition;
            if (rep.type_of_repetition === 2) {
                if (rep.day_of_week != null) {
                    let strDoW = rep.day_of_week.split(',');
                    for (let i = 0; i < strDoW.length; i++) {
                        let index = parseInt(strDoW[i].toString(), 10);
                        this.toggleWeekDays[index] = true;
                    }
                }
            };
            this.setDay();
            this.setDate();
            this.isDataLoaded = true;

            this.reminderString = this.goal.time_before;
            this.stringToReminders();
        }, (error) => {
            console.log(error['status']);
            this.router.navigate(['/pagenotfound']);
        });
    };
    setTempDate() {
        this.isSuitableYear = true;
        let offSet = new Date().getTimezoneOffset();
        let date = new Date(this.goal.start_date);
        if  (date.getFullYear() < 2000) {
            alert('This start year is too small');
            date.setFullYear(2000);
            this.isSuitableYear = false;
        }
        if (date.getFullYear() > 2100) {
            alert('This start year is too big');
            date.setFullYear(2100);
            this.isSuitableYear = false;
        }
        let fullTime = date.getTime();
        let temp = fullTime + (offSet * 60 * 1000);
        this.goal.start_date = new Date(temp);
    }
    setDay(): void {
        let date: Date = new Date(this.goal.start_date);
        let numDay = date.getDay();
        switch (numDay) {
            case 0:
                this.day = 'Sunday';
                break;
            case 1:
                this.day = 'Monday';
                break;
            case 2:
                this.day = 'Tuesday';
                break;
            case 3:
                this.day = 'Wednesday';
                break;
            case 4:
                this.day = 'Thursday';
                break;
            case 5:
                this.day = 'Friday';
                break;
            case 6:
                this.day = 'Saturday';
                break;
        }
    }
    setDate(): void {
        let date: Date = new Date(this.goal.start_date);
        let numDate = date.getDate();
        let num = numDate / 7;
        if (num < 1) {
            this.date = 'first';
        } else if (num < 2) {
            this.date = 'second';
        } else if (num < 3) {
            this.date = 'third';
        } else if (num < 4) {
            this.date = 'forth';
        } else {
            this.date = 'last';
        }
    }
    log(): void {
        this.createTheUniqueArray();
        this.remindersToString();
        console.log('Reminders: ' + this.reminders);
        console.log('ReminderValues: ' + this.reminderValues);
        console.log('ReminderTypes: ' + this.reminderTypes);
        console.log('UniqueArray: ' + this.uniqueArray);
        console.log('ReminderString: ' + this.reminderString);
    }
    cancel(): void {
        this.location.back();
    }
    editGoal(): void {
        this.isDataLoaded = false;

        let offSet = new Date().getTimezoneOffset();
        let fullTime = new Date(this.goal.start_date).getTime();
        let temp = fullTime - (offSet * 60 * 1000);
        this.goal.start_date = new Date(temp);

        if (this.goal.description == null) {
            this.goal.description = '';
        }
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.goal.token = currentUser.token;
        this.goal.email = currentUser.email;
        this.createTheUniqueArray();
        this.remindersToString();
        this.goal.time_before = this.reminderString;
        this.goalService.editGoal(this.id, this.goal).then(() => this.router.navigate(['/detailview'])).catch((error) => {
            console.log(error);
        });
    }
    updateDoW(): void {
        if (this.goal.repetition.type_of_repetition === 2) {
            this.goal.repetition.day_of_week = '';
            for (let i = 0; i < this.toggleWeekDays.length; i++) {
                if (this.toggleWeekDays[i]) {
                    this.goal.repetition.day_of_week += '' + i + ', ';
                }
            }
        }
    }
    toNumber(): void {
        let num = parseInt(this.goal.repetition.type_of_repetition.toString(), 10);
        this.goal.repetition.type_of_repetition = num;
    }
    toNumber0(): void {
        let num = parseInt(this.goal.end_date.type_of_end_date.toString(), 10);
        this.goal.end_date.type_of_end_date = num;
    }
    toNumber1(): void {
        let num = parseInt(this.goal.end_date.type_of_end_date.toString(), 10);
        this.goal.end_date.type_of_end_date = num;
        switch (num) {
            case 2: {
                if (this.goal.end_date.specific_end_date == null) {
                    this.goal.end_date.specific_end_date = this.commonFunctions.untilDate();
                }
                break;
            }
            case 3: {
                if (this.goal.end_date.number_of_event == null) {
                    this.goal.end_date.number_of_event = 1;
                }
                break;
            }
            default: {
                break;
            }
        }
    }
    toRepetitionUnit(): void {
        let type = this.goal.repetition.type_of_repetition;
        switch (type) {
            case 1: {
                this.unit = 'day';
            }
                break;
            case 2: {
                this.unit = 'week';
            }
                break;
            case 3: {
                this.unit = 'moth';
            }
                break;
            case 4: {
                this.unit = 'year';
            }
                break;
            default:
                break;
        }
    }

    checkNewEndDate(obj): void {
        let endDate = new Date(obj.target.value);
        if (endDate.getFullYear() > 2100) {
            endDate.setFullYear(2100);
            alert('The end year is too big');
            this.goal.end_date.specific_end_date = endDate;
        }else {
            this.goal.end_date.specific_end_date = endDate;
        }
        let startDate = new Date(this.goal.start_date);
        if (endDate.getTime() - startDate.getTime() < -(8.64e+7)) {
            alert('The end date can not be before the start date');
            this.goal.end_date.specific_end_date = this.convertDate(startDate);
            (<HTMLInputElement>document.getElementById('until-date')).value = this.goal.end_date.specific_end_date ;
            return;
        }else {
            return;
        }
    }
    convertDate(date: Date): string {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        let d = date;
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
    }
    addReminder(): void {
        this.reminders.push('reminder' + this.reminderLength);
        this.reminderTypes.push('');
        this.reminderValues.push('');
        this.reminderLength++;
    }
    deleteReminder(name: string): void {
        let index = this.reminders.indexOf(name);
        if (index > -1) {
            this.reminders.splice(index, 1);
            this.reminderTypes.splice(index, 1);
            this.reminderValues.splice(index, 1);
        }
        this.log();
    }
    setReminderValues(para1, para2): void {
        let num = parseInt(para2, 10);
        this.reminderValues[para1] = this.convertArray[num];
        this.createTheUniqueArray();
    }
    createTheUniqueArray() {
        this.uniqueArray = [];
        let length = this.reminderValues.length;
        for (let i = 0; i < length; i++) {
            let tmp = this.reminderValues[i];
            if (tmp !== '') {
                if (this.uniqueArray.indexOf(tmp) < 0) {
                    this.uniqueArray.push(tmp);
                }
            }
        }
    }
    remindersToString() {
        this.reminderString = this.uniqueArray.join(',').trim();
    }
    stringToReminders() {
        this.log();
        if (this.reminderString !== '') {
            this.reminderValues = this.reminderString.split(',');
            let len = this.reminderValues.length;
            console.log(len);
            for (let i = 0; i < len; i++) {
                let tmp = this.reminderValues[i];
                if (tmp.indexOf(':') < 0) {
                    this.reminderTypes[i] = this.convertArray.indexOf(tmp).toString();
                }else {
                    this.reminderTypes[i] = '7';
                    this.defaultTime = tmp;
                }
                this.reminders.push('reminder' + this.reminderLength);
                this.reminderLength++;
            }
        }else {
            return;
        }
    }
    checkNumber(obj) {
        if ( obj < 1) {
            alert('The field for "Number of events" cannot be low than 1');
            this.goal.end_date.number_of_event = 1;
        }
    }
    checkNumber1(obj) {
        if ( obj < 1) {
            alert('The field for "Every ' + this.unit + '" cannot be low than 1');
            this.goal.repetition.how_often = 1;
        }
    }
}

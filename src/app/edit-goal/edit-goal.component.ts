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
    constructor(private goalService: GoalService, private route: ActivatedRoute,
        private location: Location, private router: Router) {
    };
    ngOnInit(): void {
        this.id = this.route.params['_value']['id'];
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeBackground(false);
        this.goalService.getGoalsById(this.id).toPromise().then((data) => {
            this.goal = JSON.parse(data['_body']);
            this.commonFunctions.changeTitleContent(this.goal.goal_name);
            this.toRepetitionUnit();
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
        }, (error) => {
            console.log(error['status']);
            this.router.navigate(['/pagenotfound']);
        });
    };
    setTempDate() {
        let offSet = new Date().getTimezoneOffset();
        let fullTime = new Date(this.goal.start_date).getTime();
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
        console.log(this.goal);
        console.log(this.day);
        console.log(this.date);
    }
    cancel(): void {
        this.location.back();
    }
    editGoal(): void {
        this.isDataLoaded = false;
        if (this.goal.description == null) {
            this.goal.description = '';
        }
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.goal.token = currentUser.token;
        this.goal.email = currentUser.email;

        this.goalService.editGoal(this.id, this.goal).then(() => this.router.navigate(['/detailview']));
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
        // console.log(this.unit);
    }

    checkNewEndDate(obj): void {
        this.goal.end_date.specific_end_date = obj.target.value;
        let inputDate = new Date(obj.target.value);
        let endDate = new Date(this.goal.end_date.specific_end_date);
        let startDate = new Date(this.goal.start_date);
        if (endDate.getTime() - startDate.getTime() < -(8.64e+7)) {
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
}
// [value]="goal.end_date.specific_end_date | date:'yyyy-MM-dd'"

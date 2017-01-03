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
    typeOfMonth: string;
    goal: Goal;
    day: string;
    repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
    repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
    weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    toggleWeekDays: boolean[] = [false, false, false, false, false, false, false ]; 
    public commonFunctions: CommonFunctions;
    submitted = false;
    isDataLoaded = false;
    constructor(private goalService: GoalService, private route: ActivatedRoute,
    private location: Location, private router: Router){
    };
    ngOnInit(): void {
        this.id = this.route.params['_value']['id'];
        this.commonFunctions = new CommonFunctions();
        this.goalService.getGoalsById(this.id).toPromise().then((data)=>{
            // console.log(data['_body']);
            this.goal = JSON.parse(data['_body']);
            this.toRepetitionUnit();
            let rep = this.goal.repetition;
            this.typeOfMonth = this.goal.repetition.type_of_month.toString();
            if (rep.type_of_repetition === 2) {
                if (rep.day_of_week != null){
                    let strDoW = rep.day_of_week.split(',');
                    for (let i = 0; i < strDoW.length; i++){
                        let index = parseInt(strDoW[i].toString(),10);
                        this.toggleWeekDays[index] = true;
                    }
                }
            }
            this.setDay();
            this.isDataLoaded = true;
        });
    };
    setDay(): void{
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
    log(): void {
        console.log(this.goal);
        console.log(this.day);
        console.log(this.typeOfMonth);
    }
    cancel(): void {
        this.location.back();
    }
    editGoal(): void {
        if (this.goal.description == null) {
            this.goal.description = '';
        }
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.goal.token = currentUser.token;
        this.goal.email = currentUser.email;
        // console.log(this.goal);
        this.goalService.editGoal(this.id, this.goal).then(() => this.router.navigate(['/detailview']));
    }
    updateDoW(): void {
        if (this.goal.repetition.type_of_repetition === 2) {
            this.goal.repetition.day_of_week = '';
            for (let i = 0; i < this.toggleWeekDays.length; i++){
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
    toNumber1(): void{
        let num = parseInt(this.goal.end_date.type_of_end_date.toString(),10);
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
}

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
    repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
    repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
    public commonFunctions: CommonFunctions;
    submitted = false;
    isDataLoaded = false;
    constructor(private goalService:GoalService, private route:ActivatedRoute, private location:Location){
    };
    ngOnInit(): void {
        this.id = this.route.params['_value']['id'];
        this.commonFunctions = new CommonFunctions();
        this.goalService.getGoalsById(this.id).toPromise().then((data)=>{
            console.log(data['_body']);
            this.goal = JSON.parse(data['_body']);
            this.toRepetitionUnit();
            this.isDataLoaded = true;
        });
    };
    get diagnostic() {
        console.log('This is my goal: ' + this.goal);
        return JSON.stringify(this.goal);
    }
    log(): void{
        console.log(this.goal);
    }
    editGoal(): void {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.goal.token = currentUser.token;
        this.goal.email = currentUser.email;
        console.log(this.goal);
        this.goalService.editGoal(this.id, this.goal).then(() => window.location.reload());
    }
    toNumber(): void {
        let num = parseInt(this.goal.repetition.type_of_repetition.toString(), 10);
        this.goal.repetition.type_of_repetition = num;
    }
    toNumber0(): void {
        let num = parseInt(this.goal.end_date.type_of_end_date.toString(), 10);
        this.goal.end_date.type_of_end_date = num;
    }
    toRepetitionUnit(): void {
        var type = this.goal.repetition.type_of_repetition;
        switch(type){
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
        console.log(this.unit);
    }
}
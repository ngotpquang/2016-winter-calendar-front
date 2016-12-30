import { Component,OnInit,Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CommonFunctions } from '../shared/common-functions';
import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';

@Component({
    moduleId:''+module.id,
    selector:'app-edit-goal',
    templateUrl:'./edit-goal.component.html',
    styleUrls:['./edit-goal.component.scss']
})
export class EditGoalComponent implements OnInit{
    goal: Goal;
    public weekDays: string[];
    repetitions:Repetition[]=[
        new Repetition("Daily",1),
    ];
    public repetitionLimitedTimes: string[];
    public commonFunctions: CommonFunctions;
    submitted = false;
    isDataLoaded = false;
    constructor(private goalService:GoalService, private route:ActivatedRoute, private location:Location){
    };
    ngOnInit():void{
        let id:string = this.route.params['_value']['id'];
        this.commonFunctions = new CommonFunctions();
        this.goalService.getGoalsById(id).toPromise().then((data)=>{
            this.goal = JSON.parse(data['_body']);
            this.isDataLoaded = true;
            console.log(this.goal.start_date);
        });
    };
    get diagnostic() { 
        console.log("This is my goal: " + this.goal);
        return JSON.stringify(this.goal); 
    }
    log():void{
        console.log(this.goal);
    }
    editGoal():void{}
}
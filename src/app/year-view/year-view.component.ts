import { element, by } from 'protractor';
import { CommonFunctions } from './../shared/common-functions';
import { Http } from '@angular/http';
import { MonthInYearComponent } from './month-in-year-view.component';
import { MonthViewComponent } from './../month-view/month-view.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from './../goal/goal.service';
import { Goal } from './../shared/goal';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'app-year-view',
    templateUrl: './year-view.component.html',
    styleUrls: ['./year-view.component.scss']
})
export class YearViewComponent implements OnInit{
    year: number;
    id: string;
    goal: Goal;
    months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     'December', 'October', 'November', 'December'];
    isDataLoaded: boolean = false;
    commonFuntion: CommonFunctions = new CommonFunctions();
    constructor (private goalService: GoalService, private location: Location,
    private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
        this.id = this.route.params['_value']['id'];
        this.year = this.route.params['_value']['year'];
        /*let date = new Date();
        this.year = date.getFullYear();*/
        this.year = parseInt(this.year.toString(), 10);
        this.goalService.getGoalsById(this.id).toPromise().then((data) => {
            this.goal = JSON.parse(data['_body']);
            this.commonFuntion.changeTitleContent(this.goal.goal_name);
            this.isDataLoaded = true;
        });
    }
    nextYear(): void {
        this.isDataLoaded = false;
        this.year += 1;
        this.goalService.getGoalsById(this.id).toPromise().then((data) => {
            this.goal = JSON.parse(data['_body']);
            this.isDataLoaded = true;
            this.router.navigate(['/yearview', this.id, this.year]);
        });
    }

    previousYear(): void {
        this.isDataLoaded = false;
        this.year -= 1;
        this.goalService.getGoalsById(this.id).toPromise().then((data) => {
            this.goal = JSON.parse(data['_body']);
            this.isDataLoaded = true;
            this.router.navigate(['/yearview', this.id, this.year]);
        });
    }

    backToDetail(): void{
        this.router.navigate(['/detailview']);
    }
}

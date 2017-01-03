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
    id: string;
    goal: Goal;
    months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     'December', 'October', 'November', 'December'];
    constructor (private goalService: GoalService, private location: Location,
    private route: ActivatedRoute, private router: Router){}
    ngOnInit(): void {
        console.log(this.route.params['_value']);
    }
}
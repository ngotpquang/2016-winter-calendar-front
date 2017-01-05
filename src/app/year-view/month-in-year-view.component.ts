import { GoalService } from './../goal/goal.service';
import { Goal, Calendar } from './../shared/goal';
import { YearViewComponent } from './year-view.component';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-month-in-year',
    templateUrl: './month-in-year-view.component.html',
    styleUrls: ['./month-in-year-view.component.scss']
})
export class MonthInYearComponent implements OnInit {
    @Input()
    year: number = 2017;
    @Input()
    set setYear(year: number){
        this.year = year;
        if (this.goalInMonth != null) {
            this.isLoaded = false;
            for (let i = 0; i < 42; i++) {
                this.dates[i] = null;
                this.classli[i] = null;
                this.state[i] = 0;
            }
            this.generateDate();
            this.checkGoal();
            this.isLoaded = true;
        }
    }
    @Input()
    month: number = 0;
    @Input()
    monthName: string = 'January';
    @Input()
    goalInMonth: Goal;

    dates: number[] = [];
    state: number[] = [];
    classli: string[] = [];
    anchor: number;
    isLoaded: boolean = false;
    myTimeOut: number[] = [];

    constructor(private goalService: GoalService) {}
    ngOnInit(): void {
        this.month = parseInt(this.month.toString(), 10);
        this.year = parseInt(this.year.toString(), 10);
        for (let i = 0; i < 42; i++) {
            this.dates[i] = null;
            this.classli[i] = null;
            this.state[i] = 0;
        }
        this.generateDate();
        this.checkGoal();
        this.isLoaded = true;
    }
    generateDate(): void {
        let date = new Date();
        date.setFullYear(this.year, this.month, 1);
        let day = date.getDay();
        let start = day;
        if ( start === 0 ) {
            start = 6;
        }else {
            start --;
        }
        this.anchor = start - 1;
        let nextMonth: number = 1 + this.month;
        let daysInMonth = new Date(this.year, nextMonth, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++ ) {
            this.dates[start] = i;
            start ++;
        }
        let today = new Date();
        if (today.getFullYear() === this.year) {
            if ( today.getMonth() === this.month ) {
                this.classli[today.getDate() + this.anchor] = 'active';
            }
        }
    }
    onClickLi(obj): void {
        let day = obj - this.anchor;
        let date = new Date(this.year, this.month, day);
        let currentDate = new Date();
        let startDate = new Date(this.goalInMonth.start_date);
        if (date.getTime() - currentDate.getTime() > 0 || date.getTime() - startDate.getTime() < 0) {
            return;
        }else {
            this.state[obj] = (this.state[obj] + 1) % 3;
            let id = this.goalInMonth.id;
            let strDate = date.toString();
            let status = this.state[obj].toString();
            clearTimeout(this.myTimeOut[obj]);
            this.myTimeOut[obj] = window.setTimeout((() => {
                this.goalService.markGoal(id, strDate, status).toPromise().then(() => { return; });
            }), 1000);
        }
    }

    /*isDateEqual(a: Date, b: Date): boolean {
        if (a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()){
            return true;
        }else {
            return false;
        }
    }
    isExsitingInGoalCalendars(date: Date): number {
        let calendars = this.goalInMonth.calendars;
        for (let i = 0; i < calendars.length; i++){
            let fullDate = new Date(calendars[i].date_of_calendar);
            if (this.isDateEqual(date, fullDate)) {
                return i;
            }
        }
        return -1;
    }
    updateGoalCalendars(date: Date): void {
        let position = this.isExsitingInGoalCalendars(date);
        if (position < 0) {
            let cal = new Calendar();
            cal.goal_id = this.goalInMonth.id.toString();
            cal.date_of_calendar = date.toString();
            cal.status = this.state[date.getDate() + this.anchor].toString();
            this.goalInMonth.calendars.push(cal);
        }
    }*/
    checkGoal(): void {
        let calendars = this.goalInMonth.calendars;
        for ( let i = 0; i < calendars.length; i++) {
            let fullDate = new Date(calendars[i].date_of_calendar);
            let year = fullDate.getFullYear();
            let month = fullDate.getMonth();
            let date = fullDate.getDate();
            if (year === this.year) {
                if (month === this.month) {
                    this.state[date + this.anchor] = parseInt(calendars[i].status, 10);
                }
            }
        }
    }
}

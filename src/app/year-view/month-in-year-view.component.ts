import { Goal } from './../shared/goal';
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
    month: number = 0;
    @Input()
    monthName: string = 'January';
    @Input()
    goal: Goal;
    dates: number[] = [];
    state: number[] = [];
    classli: string[] = [];
    anchor: number;
    isLoaded: boolean = false;
    img: string = '../../img/passed.png';
    ngOnInit(): void {
        this.month = parseInt(this.month.toString(), 10);
        for (let i = 0; i < 35; i++) {
            this.dates[i] = null;
            this.classli[i] = null;
            this.state[i] = 0;
        }
        this.generateDate();
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
        console.log(this.month);
        let nextMonth: number = 1 + this.month;
        let daysInMonth = new Date(this.year, nextMonth, 0).getDate();
        console.log(this.monthName + ':' + nextMonth + ':' + daysInMonth);
        for (let i = 1; i <= daysInMonth; i++ ) {
            this.dates[start] = i;
            start ++;
        }
        let today = new Date();
        if ( today.getMonth() === this.month ) {
            this.classli[today.getDate() + this.anchor] = 'active';
            console.log(this.classli);
        }
    }
    onClickLi(obj): void {
        this.state[obj] = (this.state[obj] + 1) % 3;
    }
}

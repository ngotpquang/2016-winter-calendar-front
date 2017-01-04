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
    dates: number[] = [];
    ngOnInit(): void {
        for (let i = 0; i < 35; i++){
            this.dates[i] = null;
        }
        this.generateDate();
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
        let daysInMonth = new Date(this.year, ++this.month, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++ ) {
            this.dates[start] = i;
            start ++;
        }
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.displayCalendar(11, 2016);
  }

  displayCalendar(month, fullYear) {
      let today = new Date();
      let result = "";
      let firstDay = new Date(fullYear, month, 1);
      let lastDay = new Date(fullYear, month + 1, 0);
      let spaceBefore = firstDay.getDay() == 0 ? 6 : (firstDay.getDay() - 1);
      for (let i = 0; i < spaceBefore; i++) {
          result += "<li></li>";
      }
      for (let i = 1; i <= lastDay.getDate(); i++) {
          if (i == today.getDate()) {
              result += "<li class='active'>" + i + "</li>";
          } else {
              result += "<li>" + i + "</li>";
          }
      }
      let calendar = <HTMLElement>document.getElementById('calendar');
      calendar.innerHTML = result;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import '../rxjs-operator';

import { CommonFunctions } from '../shared/common-functions';
import { LoadingPage } from '../loading-indicator/loading-page';
import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';

@Component({
    selector: 'app-month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {
    public goal: Goal;
    private hiddenWeekdays = true;
    public commonFunctions: CommonFunctions;
    private timeOut: Array<any> = [42];
    constructor(private route: ActivatedRoute,
        private router: Router,
        private goalService: GoalService) {
    }

    ngOnInit() {
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeBackground(false);
        this.openModal(true);
        let currentUser = localStorage.getItem('currentUser');
        let id = this.route.params['_value']['id'];
        let year = this.route.params['_value']['year'];
        let month = this.route.params['_value']['month'] - 1;
        // console.log(id);
        this.goalService.getGoalsById(id).subscribe((res) => {
            this.goal = res.json();
            this.commonFunctions.changeTitleContent(this.goal.goal_name);
            this.displayCalendar(month, year);
            this.displayGoalOnCalendar();
            this.displayGoalInfor();
            this.openModal(false);
            this.hiddenWeekdays = false;
        }, error => {
            console.log(error['status']);
            this.router.navigate(['/pagenotfound']);
        });
    }

    openModal(showed: boolean) {
        let modal = document.getElementById('notification-loading');
        let span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    editGoal() {
        if (this.goal.is_archived) {
            let displayInfor = document.getElementById("show-infor");
            displayInfor.classList.add('visible');
            setTimeout(() => { displayInfor.classList.remove('visible'); }, 2000);
        } else {
            this.router.navigate(['/editgoal', this.goal.id]);
        }
    }

    displayGoalInfor() {
        let startDate = <HTMLElement>document.getElementById('start-date');
        let description = <HTMLElement>document.getElementById('description');
        let repetition = <HTMLElement>document.getElementById('repetition');
        let bestChain = <HTMLElement>document.getElementById('best-chain');
        let progress = <HTMLElement>document.getElementById('progress');
        let currentChain = <HTMLElement>document.getElementById('current-chain');
        let endDate = <HTMLElement>document.getElementById('end-date');
        let routeListView = <HTMLElement>document.getElementById('route-list-view');

        startDate.innerHTML = this.commonFunctions.displayStartDate(this.goal.start_date);
        description.innerHTML = this.goal.description == "" ? "(no description)" : this.goal.description;
        repetition.innerHTML = this.commonFunctions.getRepetitionType(this.goal.repetition.type_of_repetition)
            + ", every " + this.goal.repetition.how_often + this.commonFunctions.getRepetitionName(this.goal.repetition.type_of_repetition);
        if (this.goal.repetition.type_of_repetition == 3) {
            if (this.goal.repetition.type_of_month == "1") {
                repetition.innerHTML += "<br>On the same start day of each month";
            } else {
                repetition.innerHTML += "<br>On every " + this.commonFunctions.getDay(new Date(this.goal.start_date));
            }
        } else if (this.goal.repetition.type_of_repetition == 2) {
            repetition.innerHTML += "<br>On every " + this.commonFunctions.getDayName(this.goal.repetition.day_of_week);
        }
        currentChain.innerHTML = this.goal.current_chain + " day(s)";
        bestChain.innerHTML = this.goal.best_chain + " day(s)";
        progress.innerHTML = this.goal.progress + " day(s)";
        endDate.innerHTML = this.commonFunctions.getEndDateType(this.goal.end_date.type_of_end_date);
        if (this.goal.end_date.type_of_end_date == 2) {
            endDate.innerHTML = this.commonFunctions.getEndDateType(this.goal.end_date.type_of_end_date) + this.commonFunctions.displayEndDate(this.goal.end_date.specific_end_date) + ".";
        } else if (this.goal.end_date.type_of_end_date == 3) {
            endDate.innerHTML = this.commonFunctions.getEndDateType(this.goal.end_date.type_of_end_date) + this.goal.end_date.number_of_event + " event(s)";
        }

        if (this.goal.is_archived == true) {
            routeListView.innerHTML = "Back to archived list";
        } else {
            routeListView.innerHTML = "Back to detail view";
        }
    }

    routeListView() {
        if (this.goal.is_archived == true) {
            this.router.navigate(['/archivedgoals']);
        } else {
            this.router.navigate(['/detailview']);
        }
    }

    enableEdit() {
        let today = new Date();
        let startDate = new Date(this.goal.start_date);
    }

    toggleDate(id: string, isPassed: boolean) {
        let date = <HTMLElement>document.getElementById(id);
        if (isPassed) {
            date.classList.add('pass');
        } else {
            date.classList.add('fail');
        }
    }

    displayGoalOnCalendar() {
        // console.log(this.goal.calendars);
        let calendars = this.goal.calendars;
        let monthName = <HTMLElement>document.getElementById('monthName');
        let month = this.getMonth(monthName.innerHTML);
        let year = <HTMLElement>document.getElementById('year');
        for (let i = 1; i <= 42; i++) {
            let day = <HTMLElement>document.getElementById(i + "");
            // console.log('Check: ' + i);
            for (let calendar of calendars) {
                let fullDate = new Date(calendar.date_of_calendar);
                let status = calendar.status;
                day.classList.remove('pass');
                day.classList.remove('fail');
                if (day.innerHTML == (fullDate.getDate() + "") && month == fullDate.getMonth() && fullDate.getFullYear() == parseInt(year.innerHTML)) {
                    if (status == "1") {
                        this.toggleDate(i + "", true);
                    } else if (status == "2") {
                        this.toggleDate(i + "", false);
                    }
                    break;
                }
            }
        }
    }

    getMonthName(month: number) {
        let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for (let i in monthNames) {
            if (i == month + "") {
                return monthNames[i];
            }
        }
    }
    getMonth(monthName: string) {
        let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames.indexOf(monthName);
    }

    navigateToYearView(): void {
      let year = <HTMLElement>document.getElementById('year');
      let fullYear = year.innerHTML;
      this.router.navigate(['/yearview', this.goal.id, fullYear]);
    }

    displayCalendar(month, fullYear) {
        let monthName = <HTMLElement>document.getElementById('monthName');
        let year = <HTMLElement>document.getElementById('year');
        monthName.innerHTML = this.getMonthName(month);
        year.innerHTML = fullYear;
        let today = new Date();
        let firstDay = new Date(fullYear, month, 1);
        let lastDay = month < 11 ? new Date(fullYear, month + 1, 0) : new Date(fullYear + 1, 0, 0);
        let spaceBefore = firstDay.getDay() == 0 ? 6 : (firstDay.getDay() - 1);
        for (let i = 1; i <= spaceBefore; i++) {
            let li = <HTMLElement>document.getElementById(i + "");
            li.innerHTML = "&nbsp;";
            li.classList.add('hide-background');
        }
        for (let i = spaceBefore + 1; i <= spaceBefore + lastDay.getDate(); i++) {
            let li = <HTMLElement>document.getElementById(i + "");
            li.classList.remove('hide');
            li.classList.remove('hide-background');
            li.style.cursor = "pointer";
            li.innerHTML = i - spaceBefore + "";
            if (i == (today.getDate() + spaceBefore) && today.getMonth() == month && today.getFullYear() == fullYear) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        }
        for (let i = spaceBefore + lastDay.getDate() + 1; i <= 42; i++) {
            let li = <HTMLElement>document.getElementById(i + "");
            li.classList.add('hide');
        }
    }
    previousMonth() {
        let monthName = <HTMLElement>document.getElementById('monthName');
        let month = this.getMonth(monthName.innerHTML);
        let year = <HTMLElement>document.getElementById('year');
        let previousMonth = month > 0 ? month - 1 : 11;
        let y = month == 0 ? parseInt(year.innerHTML) - 1 : parseInt(year.innerHTML);
        this.displayCalendar(previousMonth, y);
        this.displayGoalOnCalendar();
    }
    nextMonth() {
        let monthName = <HTMLElement>document.getElementById('monthName');
        let month = this.getMonth(monthName.innerHTML);
        let year = <HTMLElement>document.getElementById('year');
        let nextMonth = month < 11 ? month + 1 : 0;
        let y = month == 11 ? parseInt(year.innerHTML) + 1 : parseInt(year.innerHTML);
        this.displayCalendar(nextMonth, y);
        this.displayGoalOnCalendar();
    }
    displayDate(id: number) {
        if (this.goal.is_archived == true) {
            // console.log("archived");
            let displayInfor = document.getElementById("show-infor");
            displayInfor.classList.add('visible');
            setTimeout(() => { displayInfor.classList.remove('visible'); }, 2000);
        } else {
            console.log("not archived");
            clearTimeout(this.timeOut[id]);
            let date = <HTMLElement>document.getElementById(id + "");
            let monthName = <HTMLElement>document.getElementById('monthName');
            let month = this.getMonth(monthName.innerHTML) + 1;
            let year = <HTMLElement>document.getElementById('year');
            let fullDate = year.innerHTML + "-" + month + "-" + date.innerHTML;
            let markDate = new Date(fullDate).setHours(0, 0, 0, 0);
            let startDate = new Date(this.goal.start_date.split('T')[0]).setHours(0, 0, 0, 0);
            let today = new Date().setHours(0, 0, 0, 0);
            if (this.goal.end_date.type_of_end_date == 2 || this.goal.end_date.type_of_end_date == 3) {
                let endDate = new Date(this.goal.end_date.specific_end_date).setHours(0, 0, 0, 0);
                // console.log(endDate);
                if (endDate > 0) {
                    if (today > endDate) {
                        today = endDate;
                    }
                }
            }
            // console.log(this.goal.start_date + "|" + new Date(this.goal.start_date.split('T')[0]) + "\n" + new Date(fullDate) + "\n" + new Date());
            if (markDate >= startDate && markDate <= today) {
                if (date.classList.item(0) == null || date.classList.item(0) == 'active') {
                    if (date.classList.item(1) == 'pass') {
                        date.classList.remove('pass');
                        date.classList.add('fail');
                        this.timeOut[id] = setTimeout(() => {
                            this.goalService.markGoal(this.goal.id, fullDate, "2").subscribe(res => {
                                console.log(res.json()); this.goal = res.json();
                                this.displayGoalInfor();
                                this.router.navigate(["/monthview", this.goal.id, year.innerHTML, month]);
                            }, error => console.log(error));
                        }, 1000);
                    } else if (date.classList.item(1) == 'fail') {
                        date.classList.remove('fail');
                        this.timeOut[id] = setTimeout(() => {
                            this.goalService.markGoal(this.goal.id, fullDate, "0").subscribe(res => {
                                console.log(res.json()); this.goal = res.json();
                                this.displayGoalInfor();
                                this.router.navigate(["/monthview", this.goal.id, year.innerHTML, month]);
                            }, error => console.log(error));
                        }, 1000);
                    } else {
                        date.classList.add('pass');
                        this.timeOut[id] = setTimeout(() => {
                            this.goalService.markGoal(this.goal.id, fullDate, "1").subscribe(res => {
                                console.log(res.json()); this.goal = res.json();
                                this.displayGoalInfor();
                                this.router.navigate(["/monthview", this.goal.id, year.innerHTML, month]);
                            }, error => console.log(error));
                        }, 1000);
                    }
                } else if (date.classList.item(0) == 'pass') {
                    date.classList.remove('pass');
                    date.classList.add('fail');
                    this.timeOut[id] = setTimeout(() => {
                        this.goalService.markGoal(this.goal.id, fullDate, "2").subscribe(res => {
                            console.log(res.json()); this.goal = res.json();
                            this.displayGoalInfor();
                            this.router.navigate(["/monthview", this.goal.id, year.innerHTML, month]);
                        }, error => console.log(error));
                    }, 1000);
                } else {
                    date.classList.remove('fail');
                    this.timeOut[id] = setTimeout(() => {
                        this.goalService.markGoal(this.goal.id, fullDate, "0").subscribe(res => {
                            console.log(res.json()); this.goal = res.json();
                            this.displayGoalInfor();
                            this.router.navigate(["/monthview", this.goal.id, year.innerHTML, month]);
                        }, error => console.log(error));
                    }, 1000);
                }
            } else {
                let displayInfor = document.getElementById("show-infor1");
                displayInfor.classList.add('visible');
                setTimeout(() => { displayInfor.classList.remove('visible'); }, 2000);
            }

        }
    }
}

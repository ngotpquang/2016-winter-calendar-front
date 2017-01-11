import { OnInit } from '@angular/core';

import { Goal } from './goal';

export class CommonFunctions implements OnInit {
    repetitionTypes = ['1', '2', '3', '4'];
    repetitionLimitedTimes = ['1', '2', '3'];
    constructor() { }
    ngOnInit() {
    }

    togglePanel(panelId, arg): void {
        let panel = (<HTMLInputElement>document.getElementById(panelId));
        if (arg) {
            panel.hidden = true;
        } else {
            panel.hidden = false;
        }
    }

    roundUpTime(): Date {
        let date = new Date();
        let minute = date.getMinutes() <= 30 ? 30 : 0;
        let hour = date.getMinutes() <= 30 ? date.getHours() : (date.getHours() < 23 ? date.getHours() + 1 : 0);
        let day = (date.getHours() == 23 && date.getMinutes() > 30) ? date.getDate() + 1 : date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        return new Date(year, month, day, hour, minute);
    }
    untilDate(): Date {
        let date = new Date();
        let minute = date.getMinutes();
        let hour = date.getHours();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear() + 1;
        return new Date(year, month, day, hour, minute);
    }
    changeRepetitionType(startDate: Date): void {
        let val = (<HTMLInputElement>document.getElementById('repetition-type')).value;
        switch (val) {
            case this.repetitionTypes[0]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', true);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'day(s)';
                break;
            case this.repetitionTypes[1]:
                this.togglePanel('weeklyRepetition', false);
                this.togglePanel('monthlyRepetition', true);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'week(s)';
                break;
            case this.repetitionTypes[2]:
                (<HTMLInputElement>document.getElementById('dayDefineValue')).innerHTML = this.getDay(startDate);
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', false);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'month(s)';
                break;
            case this.repetitionTypes[3]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', true);
                (<HTMLInputElement>document.getElementById('repetitionFrequencyType')).innerHTML = 'year(s)';
                break;
        }
    }

    changeRepetitionLimitedTime(): void {
        let val = (<HTMLInputElement>document.getElementById('repetition-limited-time')).value;
        switch (val) {
            case this.repetitionLimitedTimes[0]:
                this.togglePanel('until-date', true);
                this.togglePanel('number-events', true);
                break;
            case this.repetitionLimitedTimes[1]:
                this.togglePanel('until-date', false);
                this.togglePanel('number-events', true);
                break;
            case this.repetitionLimitedTimes[2]:
                this.togglePanel('until-date', true);
                this.togglePanel('number-events', false);
                break;
        }
    }

    getDay(today: Date): string {
        console.log("Z");
        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let orderNumbers = ["first ", "second ", "third ", "fourth "];
        let result = "";
        let days = this.getAllDaysOfMonth(today.getDay(), today.getMonth(), today.getFullYear());
        for (let day in days) {
            if (today.getDate() === days[day].getDate()) {
                if (day == ((days.length - 1) + "")) {
                    result += "last ";
                } else {
                    for (let i in orderNumbers) {
                        if (day == i + "") {
                            result += orderNumbers[i];
                        }
                    }
                }
            }
        }
        for (let i in dayNames) {
            if (today.getDay() + "" == i) {
                result += dayNames[i];
            }
        }
        return result;
    }
    getAllDaysOfMonth(day, month, fullYear): Date[] {
        let d = new Date(),
            results = [];
        d.setDate(1);
        d.setMonth(month);
        d.setFullYear(fullYear);
        while (d.getDay() !== day) {
            d.setDate(d.getDate() + 1);
        }
        while (d.getMonth() === month) {
            results.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }
        return results;
    }

    changeTitleAfterLogined(title: string): void {
        let defaultButton = document.getElementsByClassName("default-button");
        if (defaultButton.length != 0) {
            (<HTMLInputElement>defaultButton[0]).hidden = true;
            (<HTMLInputElement>defaultButton[1]).hidden = true;
        }
        let logoutButton = <HTMLInputElement>document.getElementById("logout-button");
        if (logoutButton != null) {
            logoutButton.hidden = false;
        }
        this.changeTitleContent(title);
    }

    changeTitleContent(title: string): void {
        let titleContent = <HTMLInputElement>document.getElementById("title-content");
        titleContent.innerHTML = title;
    }

    getUserLogined() {
        return localStorage.getItem('currentUser');
    }

    getAllGoalsActived(goals: Goal[]): Goal[] {
        let listResult = new Array<Goal>();
        for (let goal of goals) {
            if (goal.is_archived != true) {
                listResult.push(goal);
            }
        }
        return listResult;
    }

    getAllGoalsArchived(goals: Goal[]): Goal[] {
        let listResult = new Array<Goal>();
        for (let goal of goals) {
            if (goal.is_archived == true) {
                listResult.push(goal);
            }
        }
        return listResult;
    }

    getRepetitionType(type: number): string {
        switch (type) {
            case 1:
                return "Daily";
            case 2:
                return "Weekly";
            case 3:
                return "Monthly";
            case 4:
                return "Yearly";
        }
    }

    getRepetitionName(type: number): string {
        switch (type) {
            case 1:
                return " day(s)";
            case 2:
                return " week(s)";
            case 3:
                return " month(s)";
            case 4:
                return " year(s)";
        }
    }

    getEndDateType(type: number): string {
        switch (type) {
            case 1:
                return "Forever.";
            case 2:
                return "Until ";
            case 3:
                return "For ";
        }
    }

    displayStartDate(date: string): string {
        let day = date.split('T')[0];
        day = day.split("-")[2] + "/" + day.split("-")[1] + "/" + day.split("-")[0];
        let time = date.split('T')[1].split('.')[0].split(':')[0] + ":" + date.split('T')[1].split('.')[0].split(':')[1];
        return time + " " + day;
    }
    displayEndDate(date: string): string {
        let day = date.split('T')[0];
        day = day.split("-")[2] + "/" + day.split("-")[1] + "/" + day.split("-")[0];
        return day;
    }

    getDayName(string): string {
        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let result = "";
        let days = string.split(", ");
        for (let day in days) {
            for (let dayName in dayNames) {
                if (days[day] === dayName) {
                    result += dayNames[dayName] + ", ";
                }
            }
        }
        return result.slice(0, -2);
    }

    changeBackground(isIntroduction: boolean): void {
        let body = document.getElementsByTagName('body')[0];
        if (isIntroduction) {
            if (body.classList.contains('introduction')) {
            } else {
                body.classList.add('introduction');
            }
        } else {
            body.classList.remove('introduction');
        }
    }

    getListFavoriteGoals(goals: Goal[]): Goal[] {
        let resultGoals = new Array<Goal>();
        for (let goal of goals) {
            if (goal.is_favorite == true) {
                resultGoals.push(goal);
            }
        }
        return resultGoals;
    }

    getListNotFavoriteGoals(goals: Goal[]): Goal[] {
        let resultGoals = new Array<Goal>();
        for (let goal of goals) {
            if (goal.is_favorite != true) {
                resultGoals.push(goal);
            }
        }
        return resultGoals;
    }

    sortGoals(goals: Goal[], sortType: string): Goal[] {
        switch (sortType) {
            case "1":
                return goals.sort((goal1, goal2) => {
                    let att1 = parseInt(goal1.id);
                    let att2 = parseInt(goal2.id);
                    return att1 - att2;
                });
            case "2":
                return goals.sort((goal1, goal2) => {
                    let att1 = goal1.goal_name.toLowerCase();
                    let att2 = goal2.goal_name.toLowerCase();
                    if (att1 < att2) {
                        return -1;
                    }
                    if (att1 > att2) {
                        return 1;
                    }
                    return 0;
                });
            case "3":
                return goals.sort((goal1, goal2) => {
                    let att1 = goal1.start_date.split('T')[1];
                    let att2 = goal2.start_date.split('T')[1];
                    if (att1 < att2) {
                        return -1;
                    }
                    if (att1 > att2) {
                        return 1;
                    }
                    return 0;
                });

            case "4":
                return goals.sort((goal1, goal2) => {
                    let att1 = goal1.repetition.type_of_repetition;
                    let att2 = goal2.repetition.type_of_repetition;
                    return att1 - att2;
                });
            case "5":
                return goals.sort((goal1, goal2) => {
                    let att1 = parseInt(goal1.current_chain);
                    let att2 = parseInt(goal2.current_chain);
                    return att1 - att2;
                });
            case "6":
                return goals.sort((goal1, goal2) => {
                    let att1 = parseInt(goal1.best_chain);
                    let att2 = parseInt(goal2.best_chain);
                    return att1 - att2;
                });
            case "7":
                return goals.sort((goal1, goal2) => {
                    let att1 = goal1.progress;
                    let att2 = goal2.progress;
                    let result1 = parseFloat(att1.split('/')[0]) / parseFloat(att1.split('/')[1]);
                    let result2 = parseFloat(att2.split('/')[0]) / parseFloat(att2.split('/')[1]);
                    return result1 - result2;
                });
        }
    }

    setFavoriteGoal(goals: Goal[], id: string): void {
        for (let goal of goals) {
            if (goal.id == id) {
                goal.is_favorite = !goal.is_favorite;
            }
        }
    }

    timeForReminder(time: string): string {
        switch (time) {
            case '0': return "0";
            case '1': return "10";
            case '2': return "30";
            case '3': return "60";
            case '4': return "120";
            case '5': return "180";
            case '6': return "720";
            case '7': return "";
        }
    }

    pushReminder(result: string[], input: string) {
        for (let item of result) {
            if (input == item) {
                return;
            }
        }
        result.push(input);
    }

    formatStartDate(startDate: Date): string{
      let result = "";
      result += startDate.getFullYear() + "-";
      let month = startDate.getMonth() + 1;
      result += (month < 10 ? "0" + month : month) + "-";
      let date = startDate.getDate();
      result += (date < 10 ? "0" + date : date) + "T"
      let hour = startDate.getHours();
      result += (hour < 10 ? "0" + hour : hour) + ":";
      let minutes = startDate.getMinutes();
      result += minutes < 10 ? "0" + minutes : minutes;
      return result;
    }

}

import { OnInit } from '@angular/core';

export class CommonFunctions implements OnInit {
    repetitionTypes = ['1', '2', '3', '4'];
    repetitionLimitedTimes = ['1', '2', '3'];
    constructor() { }
    ngOnInit() {
    }

    togglePanel(panelId, arg) {
        let panel = (<HTMLInputElement>document.getElementById(panelId));
        if (arg) {
            panel.hidden = true;
        } else {
            panel.hidden = false;
        }
    }

    roundUpTime() {
        let date = new Date();
        let minute = date.getMinutes() <= 30 ? 30 : 0;
        let hour = date.getMinutes() <= 30 ? date.getHours() : (date.getHours() < 23 ? date.getHours() + 1 : 0);
        let day = (date.getHours() == 23 && date.getMinutes() > 30) ? date.getDate() + 1 : date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        return new Date(year, month, day, hour, minute);
    }
    untilDate() {
        let date = new Date();
        let minute = date.getMinutes();
        let hour = date.getHours();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear() + 1;
        return new Date(year, month, day, hour, minute);
    }
    changeRepetitionType() {
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
                (<HTMLInputElement>document.getElementById('dayDefineValue')).innerHTML = this.getDay();
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

    changeRepetitionLimitedTime() {
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

    getDay() {
        let today = new Date();
        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let orderNumbers = ["first ", "second ", "third ", "fourth "];
        let result = "";
        let days = this.getAllDaysOfMonth(today.getDay(), today.getMonth());
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
    getAllDaysOfMonth(day, month) {
        let d = new Date(),
            results = [];

        d.setDate(1);

        // Get the first {day} in the month
        while (d.getDay() !== day) {
            d.setDate(d.getDate() + 1);
        }

        // Get all the other {day} in the month
        while (d.getMonth() === month) {
            results.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }

        return results;
    }

    changeTitleAfterLogined(title: string) {
        let defaultButton = document.getElementsByClassName("default-button");
        if (defaultButton.length != 0) {
            (<HTMLInputElement>defaultButton[0]).hidden = true;
            (<HTMLInputElement>defaultButton[1]).hidden = true;
        }
        let logoutButton = <HTMLInputElement>document.getElementById("logout-button");
        if (logoutButton != null) {
            logoutButton.hidden = false;
        }
        let titleContent = <HTMLInputElement>document.getElementById("title-content");
        titleContent.innerHTML = title;

    }

}

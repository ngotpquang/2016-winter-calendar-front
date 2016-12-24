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

}

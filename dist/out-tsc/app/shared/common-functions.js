var CommonFunctions = (function () {
    function CommonFunctions() {
        this.repetitionTypes = ['1', '2', '3', '4'];
        this.repetitionLimitedTimes = ['1', '2', '3'];
    }
    CommonFunctions.prototype.ngOnInit = function () {
    };
    CommonFunctions.prototype.togglePanel = function (panelId, arg) {
        var panel = document.getElementById(panelId);
        if (arg) {
            panel.hidden = true;
        }
        else {
            panel.hidden = false;
        }
    };
    CommonFunctions.prototype.roundUpTime = function () {
        var date = new Date();
        var minute = date.getMinutes() <= 30 ? 30 : 0;
        var hour = date.getMinutes() <= 30 ? date.getHours() : (date.getHours() < 23 ? date.getHours() + 1 : 0);
        var day = (date.getHours() == 23 && date.getMinutes() > 30) ? date.getDate() + 1 : date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        return new Date(year, month, day, hour, minute);
    };
    CommonFunctions.prototype.untilDate = function () {
        var date = new Date();
        var minute = date.getMinutes();
        var hour = date.getHours();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear() + 1;
        return new Date(year, month, day, hour, minute);
    };
    CommonFunctions.prototype.changeRepetitionType = function () {
        var val = document.getElementById('repetition-type').value;
        switch (val) {
            case this.repetitionTypes[0]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'day(s)';
                break;
            case this.repetitionTypes[1]:
                this.togglePanel('weeklyRepetition', false);
                this.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'week(s)';
                break;
            case this.repetitionTypes[2]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', false);
                document.getElementById('repetitionFrequencyType').innerHTML = 'month(s)';
                break;
            case this.repetitionTypes[3]:
                this.togglePanel('weeklyRepetition', true);
                this.togglePanel('monthlyRepetition', true);
                document.getElementById('repetitionFrequencyType').innerHTML = 'year(s)';
                break;
        }
    };
    CommonFunctions.prototype.changeRepetitionLimitedTime = function () {
        var val = document.getElementById('repetition-limited-time').value;
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
    };
    return CommonFunctions;
}());
export { CommonFunctions };
//# sourceMappingURL=../../../../src/app/shared/common-functions.js.map
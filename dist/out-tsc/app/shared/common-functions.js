var CommonFunctions = (function () {
    function CommonFunctions() {
        this.repetitionTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        this.repetitionLimitedTimes = ['Forever', 'Until a date', 'For a number of events'];
    }
    CommonFunctions.prototype.ngOnInit = function () {
    };
    CommonFunctions.prototype.moveLabelUp = function (string) {
        var label = document.getElementById("label-" + string);
        label.classList.add('active');
    };
    CommonFunctions.prototype.moveLabelDown = function (string) {
        var input = document.getElementById(string).value;
        if (input === '' || input === 'blank') {
            var label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    };
    CommonFunctions.prototype.changeAttributeInput = function (inputId, typeOfChange) {
        var input = document.getElementById(inputId);
        input.type = typeOfChange;
        this.moveLabelUp(inputId);
    };
    CommonFunctions.prototype.togglePanel = function (panelId, arg) {
        if (arg) {
            document.getElementById(panelId).hidden = true;
        }
        else {
            document.getElementById(panelId).hidden = false;
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
                this.togglePanel('untilDate', true);
                this.togglePanel('numberEvents', true);
                break;
            case this.repetitionLimitedTimes[1]:
                this.togglePanel('untilDate', false);
                this.togglePanel('numberEvents', true);
                break;
            case this.repetitionLimitedTimes[2]:
                this.togglePanel('untilDate', true);
                this.togglePanel('numberEvents', false);
                break;
        }
    };
    return CommonFunctions;
}());
export { CommonFunctions };
//# sourceMappingURL=../../../../src/app/shared/common-functions.js.map
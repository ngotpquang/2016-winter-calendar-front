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
                document.getElementById('dayDefineValue').innerHTML = this.getDay();
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
    CommonFunctions.prototype.getDay = function () {
        var today = new Date();
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var orderNumbers = ["first ", "second ", "third ", "fourth "];
        var result = "";
        var days = this.getAllDaysOfMonth(today.getDay(), today.getMonth());
        for (var day in days) {
            if (today.getDate() === days[day].getDate()) {
                if (day == ((days.length - 1) + "")) {
                    result += "last ";
                }
                else {
                    for (var i in orderNumbers) {
                        if (day == i + "") {
                            result += orderNumbers[i];
                        }
                    }
                }
            }
        }
        for (var i in dayNames) {
            if (today.getDay() + "" == i) {
                result += dayNames[i];
            }
        }
        return result;
    };
    CommonFunctions.prototype.getAllDaysOfMonth = function (day, month) {
        var d = new Date(), results = [];
        d.setDate(1);
        while (d.getDay() !== day) {
            d.setDate(d.getDate() + 1);
        }
        while (d.getMonth() === month) {
            results.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }
        return results;
    };
    CommonFunctions.prototype.changeTitleAfterLogined = function (title) {
        var defaultButton = document.getElementsByClassName("default-button");
        var logoutButton = document.getElementById("logout-button");
        defaultButton[0].hidden = true;
        defaultButton[1].hidden = true;
        var titleContent = document.getElementById("title-content");
        titleContent.innerHTML = title;
        logoutButton.hidden = false;
    };
    return CommonFunctions;
}());
export { CommonFunctions };
//# sourceMappingURL=../../../../../src/app/shared/common-functions.js.map
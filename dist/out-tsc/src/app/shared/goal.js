var Goal = (function () {
    function Goal(email, token, goal_name, start_date, description, repetition, end_date) {
        this.email = email;
        this.token = token;
        this.goal_name = goal_name;
        this.start_date = start_date;
        this.description = description;
        this.repetition = repetition;
        this.end_date = end_date;
    }
    return Goal;
}());
export { Goal };
var Repetition = (function () {
    function Repetition(type_of_repetition, how_often, day_of_week, type_of_month) {
        this.type_of_repetition = type_of_repetition;
        this.how_often = how_often;
        this.day_of_week = day_of_week;
        this.type_of_month = type_of_month;
    }
    return Repetition;
}());
export { Repetition };
var EndDate = (function () {
    function EndDate(type_of_end_date, specific_end_date, number_of_event) {
        this.type_of_end_date = type_of_end_date;
        this.specific_end_date = specific_end_date;
        this.number_of_event = number_of_event;
    }
    return EndDate;
}());
export { EndDate };
var Calendar = (function () {
    function Calendar() {
    }
    return Calendar;
}());
export { Calendar };
//# sourceMappingURL=../../../../../src/app/shared/goal.js.map
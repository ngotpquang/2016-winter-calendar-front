export class Goal {
  goal_name: string;
  start_date;
  description : string;
  repetition: Repetition;
  end_date: EndDate;

  constructor(goal_name, start_date, description, repetition: Repetition, end_date: EndDate){
    this.goal_name = goal_name;
    this.start_date = start_date;
    this.description = description;
    this.repetition = repetition;
    this.end_date = end_date;
  }

}

export class Repetition {
  type_of_repetition: number;
  how_often: number;
  day_of_week: string;
  type_of_month: string;
  constructor (type_of_repetition, how_often, day_of_week?, type_of_month?){
    this.type_of_repetition = type_of_repetition;
    this.how_often = how_often;
    this.day_of_week = day_of_week;
    this.type_of_month = type_of_month;
  }
}

export class EndDate {
  type_of_end_date: number;
  specific_end_date;
  number_of_event: number;
  constructor(type_of_end_date, specific_end_date?, number_of_event?){
    this.type_of_end_date = type_of_end_date;
    this.specific_end_date = specific_end_date;
    this.number_of_event = number_of_event;
  }
}

export interface Goal {
  goalName: string;
  from: string;
  description? : string;
  repetitionTypes: string;
  repetitionFrequency: number;
  weeklyRepetition? : string[];
  monthlyRepetition? : string;
  repetitionLimitedTime: string;
  dateUntil? : string;
  numberEvents? : number;

}

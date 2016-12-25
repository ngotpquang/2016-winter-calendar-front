import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Goal } from '../shared/goal';
import { headers } from '../shared/headers';
import '../rxjs-operator';

@Injectable()
export class GoalService {

  constructor(private http: Http) { }

  addNewGoal(goal: Goal){
    // return this.http.post('');
  }
}

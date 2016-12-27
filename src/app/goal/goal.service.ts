import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Goal } from '../shared/goal';
import { headers } from '../shared/headers';
import '../rxjs-operator';

@Injectable()
export class GoalService {

    constructor(private http: Http) { }

    addNewGoal(goal: Goal) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/goals',
            JSON.stringify(goal),
            { headers: headers });
    }

    getAllGoals() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http
            .get('https://wintercalendar.herokuapp.com/api/v1/goals?email=' + currentUser.email + '&token=' + currentUser.token);
    }
}

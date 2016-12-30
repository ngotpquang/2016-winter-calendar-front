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

    getGoalsById(id: string) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.http
            .get('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '?email=' + currentUser.email + '&token=' + currentUser.token);
    }

    markGoal(id: string, date_of_calendar: string, status: string){
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return this.http.put('https://wintercalendar.herokuapp.com/api/v1/goals/' + id + '/calendar', JSON.stringify({token: currentUser.token, id: id, date_of_calendar: date_of_calendar,status: status}));
    }

    editGoal(id: string, goal:Goal):Promise<Goal>{
        let url = `https://wintercalendar.herokuapp.com/api/v1/goals/${id}`;
        return this.http
        .put(url,JSON.stringify(goal),{headers:headers})
        .toPromise().then(()=>goal);

    }
    private handleError(error: any):Promise<any>{
        console.error("An error occured", error);
        return Promise.reject(error.message||error);
    }
}

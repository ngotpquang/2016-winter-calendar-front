import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { contentHeaders } from '../shared/headers';
import '../rxjs-operator';

@Injectable()
export class UserService {
    private loggedIn = false;
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    login(email, password) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/auth/sign_in',
            JSON.stringify({ email, password }),
            { headers: contentHeaders })
            .map(res => {
                if (res) {
                    console.log(contentHeaders);
                    console.log(res);
                    console.log("Response: " + JSON.stringify(res.json()));
                    console.log("Response: " + (res.headers));
                    // localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                } else {
                    console.log(res);
                }
                return res;
            });
    }

    signup(name, email, password, password_comfirmation) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/auth/',
            JSON.stringify({ name, email, password, password_comfirmation }),
            { headers: contentHeaders })
            .map(res => res.json())
            .map((res) => {
                if (res) {
                    console.log("Response: " + res);
                    // localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                } else {
                    console.log(res);
                }
                return res;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

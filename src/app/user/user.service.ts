import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { headers } from '../shared/headers';
import '../rxjs-operator';

@Injectable()
export class UserService {
    private loggedIn = false;
    redirectUrl: string;
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('currentUser');
    }
    logIn(email, password) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/auth/sign_in',
            JSON.stringify({ email, password }),
            { headers: headers });
    }

    signUp(name, email, password) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/auth/sign_up',
            JSON.stringify({ name, email, password }),
            { headers: headers });
    }

    logOut() {
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            return this.http
                .delete(
                'https://wintercalendar.herokuapp.com/api/v1/auth/sign_out', new RequestOptions({
                    headers: headers,
                    body: currentUser
                })
                );
        }
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    setLoggedIn(logined: boolean) {
        this.loggedIn = logined;
    }

    forgotPassword(email: string) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/auth/reset_password',
            JSON.stringify({ email }),
            { headers: headers }
            );
    }
    postNewPassword(reset_password_token: string, new_password: string) {
        return this.http
            .post(
            'https://wintercalendar.herokuapp.com/api/v1/auth/new_password',
            JSON.stringify({ reset_password_token, new_password }),
            { headers: headers }
            );
    }

    confirmEmail(confirmed_token: string) {
        return this.http.post('https://wintercalendar.herokuapp.com/api/v1/auth/confirm_email',
            JSON.stringify({ confirmed_token }),
            { headers: headers }
          );
    }
}

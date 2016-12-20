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
            '/login',
            JSON.stringify({ email, password }),
            { headers: contentHeaders })
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }
                return res.success;
            });
    }

    signup(fullName, email, password){
      return this.http
          .post(
          '/signup',
          JSON.stringify({ fullName, email, password }),
          { headers: contentHeaders })
          .map(res => res.json())
          .map((res) => {
              if (res.success) {
                  localStorage.setItem('auth_token', res.auth_token);
                  this.loggedIn = true;
              }
              return res.success;
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

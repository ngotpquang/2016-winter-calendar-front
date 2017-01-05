import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    reset_password_token: string;
    constructor(private http: Http, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.reset_password_token = this.route.params['_value']['token'];
        console.log(this.reset_password_token);
    }
}
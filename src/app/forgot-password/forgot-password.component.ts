import { UserService } from './../user/user.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    submitted: boolean = false;
    wrong: boolean = false;
    email: string = '';
    loading: boolean = false;
    constructor(private userService: UserService) {
    }
    ngOnInit(): void {
    }
    doSubmit(): void {
        this.submitted = true;
        this.loading = true;
        this.userService.forgotPassword(this.email).subscribe(res => {
            this.loading = false;
        },  error => {
            this.wrong = true;
            this.loading = false;
            this.submitted = false;
        }
        );
    }
}

import { LoadingPage } from './../loading-indicator/loading-page';
import { UserService } from './../user/user.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends LoadingPage implements OnInit {
    submitted: boolean = false;
    email: string = '';
    constructor(private userService: UserService) {
        super('loaded');
    }
    ngOnInit(): void {
    }
    doSubmit(): void {
        this.standby();
        this.userService.forgotPassword(this.email).subscribe(res => {
            console.log(res);
        },  error => {
            console.log(error);
        }
        );
    }
}

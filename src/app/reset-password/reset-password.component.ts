import { CommonFunctions } from './../shared/common-functions';
import { UserService } from './../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    reset_password_token: string;
    type0: string = 'password';
    type1: string = 'password';
    passwordMatch: boolean = true;
    password: string = '';
    passwordConfirm: string = '';
    myTimeOut: number;
    tokenExpire: boolean = false;
    email: string;
    commonFunctions: CommonFunctions = new CommonFunctions();
    constructor(private http: Http, private route: ActivatedRoute, private userService: UserService,
    private router: Router) {}
    ngOnInit(): void {
        this.reset_password_token = this.route.params['_value']['token'];
        console.log(this.reset_password_token);
    }
    displayPassword(i: number) {
        if (i === 0) {
            this.type0 = this.type0 === 'text' ? 'password' : 'text';
        }
        if (i === 1) {
            this.type1 = this.type1 === 'text' ? 'password' : 'text';
        }
    }
    doSubmit(): void{
        console.log(this.password);
        console.log(this.passwordConfirm);
        this.userService.postNewPassword(this.reset_password_token,this.password).subscribe((res) => {
                let info = res['_body'];
                let obj = (JSON.parse(info));
                this.email = obj['data']['email'];
                this.userService.logIn(this.email, this.password).subscribe(response => {
                    localStorage.setItem('currentUser', JSON.stringify(response.json().data));
                    this.userService.setLoggedIn(true);
                    let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/detailview';
                    this.router.navigate([redirect]);
                    this.commonFunctions.changeTitleAfterLogined("Your dashboard");
                },
                (error) => console.log(error)
                );
                console.log(this.email);
            }, (error) => {
                console.log(error);
                this.tokenExpire = true;
            }
        );
    }
    checkMatch(): void {
        window.clearTimeout(this.myTimeOut);
        this.passwordMatch = true;
        this.myTimeOut = window.setTimeout(() => {
            if (this.passwordConfirm === this.password){
                this.passwordMatch = true;
            }else {
                this.passwordMatch = false;
            }
        }, 2000);
    }
}

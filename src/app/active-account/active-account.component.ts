import { CommonFunctions } from './../shared/common-functions';
import { UserService } from './../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-active-account',
    templateUrl: './active-account.component.html',
    styleUrls: ['./active-account.component.scss']
})
export class ActiveAccountComponent implements OnInit {
    isLoaded: boolean = false;
    token: string = '';
    name: string = '';
    email: string = '';
    commonFunctions = new CommonFunctions();
    constructor(private http: Http, private route: ActivatedRoute, private router: Router,
    private userService: UserService) {}
    ngOnInit(): void {
        let token = this.route.params['_value']['token'];
        this.userService.confirmEmail(token)
        .subscribe((res) => {
            /*let obj = JSON.parse(data['_body']);
            let profile = obj['data'];
            this.token = profile['token'];
            this.name = profile['name'];
            this.email = profile['email'];
            console.log(this.token + ':' + this.name + ':' + this.email);*/
            localStorage.setItem('currentUser', JSON.stringify(res.json().data));
                this.userService.setLoggedIn(true);
                let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/detailview';
                this.router.navigate([redirect]);
                this.commonFunctions.changeTitleAfterLogined("Your dashboard");
        }, (error) => {
            console.log(error);
        });
    }
}

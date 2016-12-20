import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { MainRoutes } from './app.route';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserService } from './user/user.service'

@NgModule({
    declarations: [
        AppComponent,
        IntroductionComponent,
        LoginComponent,
        SignUpComponent,
        SideBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(MainRoutes)
    ],
    providers: [UserService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }

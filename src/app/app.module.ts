import { YearViewComponent } from './year-view/year-view.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { appRoutes } from './app.route';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { LoggedInGuard } from './shared/logged-in.guard';

import { GoalService } from './goal/goal.service';
import { UserService } from './user/user.service';
import { DetailViewModule } from './detail-view/detail-view.module';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroductionComponent,
        LoginComponent,
        SignUpComponent,
        SideBarComponent,
        CreateNewGoalComponent,
        DetailViewComponent,
        EditGoalComponent,
        YearViewComponent
    ],
    imports: [
        DetailViewModule,
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [UserService, LoggedInGuard, GoalService, Angular2TokenService],
    bootstrap: [AppComponent]
})
export class AppModule { }

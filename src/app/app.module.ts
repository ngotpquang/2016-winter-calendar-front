import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MonthInYearComponent } from './year-view/month-in-year-view.component';
import { YearViewComponent } from './year-view/year-view.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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

import { ArchivedGoalsModule } from './archived-goals/archived-goals.module';
import { GoalService } from './goal/goal.service';
import { UserService } from './user/user.service';
import { DetailViewModule } from './detail-view/detail-view.module';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArchivedGoalsComponent } from './archived-goals/archived-goals.component';

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
        YearViewComponent,
        PageNotFoundComponent,
        MonthInYearComponent,
        ArchivedGoalsComponent,
        ResetPasswordComponent,
        ForgotPasswordComponent
    ],
    imports: [
        ArchivedGoalsModule,
        DetailViewModule,
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [UserService, LoggedInGuard, GoalService],
    bootstrap: [AppComponent]
})
export class AppModule { }

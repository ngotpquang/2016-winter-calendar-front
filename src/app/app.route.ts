import { ActiveAccountComponent } from './active-account/active-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { YearViewComponent } from './year-view/year-view.component';
import { CanActivate } from '@angular/router';
import { EditGoalComponent } from './edit-goal/edit-goal.component';

import { ArchivedGoalsComponent } from './archived-goals/archived-goals.component';
import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { MonthViewComponent } from './month-view/month-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const appRoutes = [
    { path: '', component: IntroductionComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'createnewgoal', component: CreateNewGoalComponent, canActivate: [LoggedInGuard] },
    { path: 'detailview', component: DetailViewComponent, canActivate: [LoggedInGuard] },
    { path: 'archivedgoals', component: ArchivedGoalsComponent, canActivate: [LoggedInGuard] },
    { path: 'loading', component: LoadingIndicatorComponent },
    { path: 'editgoal/:id', component: EditGoalComponent, CanActivate: [LoggedInGuard]},
    { path: 'yearview/:id', component: YearViewComponent, CanActivate: [LoggedInGuard]},
    { path: 'resetpassword/:token', component: ResetPasswordComponent},
    { path: 'activeaccount/:token', component: ActiveAccountComponent},
    { path: 'forgotpassword', component: ForgotPasswordComponent},
    { path: '**', component: PageNotFoundComponent },
];

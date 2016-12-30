import { CanActivate } from '@angular/router';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
// Import our dependencies
import { AppComponent } from './app.component';

import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { MonthViewComponent } from './month-view/month-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';

//Quang - 20161230
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

// Define which component should be loaded based on the current URL
export const appRoutes = [
    { path: '', component: IntroductionComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'createnewgoal', component: CreateNewGoalComponent, canActivate: [LoggedInGuard] },
    { path: 'detailview', component: DetailViewComponent, canActivate: [LoggedInGuard] },
    { path: 'loading', component: LoadingIndicatorComponent },
    { path: 'editgoal/:id', component:EditGoalComponent, CanActivate:[LoggedInGuard]},
];

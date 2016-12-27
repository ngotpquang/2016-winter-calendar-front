// Import our dependencies
import { AppComponent } from './app.component';

import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { MonthViewComponent } from './month-view/month-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';


// Define which component should be loaded based on the current URL
export const Routes = [
    { path: '', component: IntroductionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'createnewgoal', component: CreateNewGoalComponent },
    { path: 'detailview', component: DetailViewComponent },
    { path: 'monthview', component: MonthViewComponent }
    // , canActivate: [LoggedInGuard]
];

import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';
export var Routes = [
    { path: '', component: IntroductionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'createnewgoal', component: CreateNewGoalComponent },
    { path: 'detailview', component: DetailViewComponent },
    { path: 'monthview', component: MonthViewComponent }
];
//# sourceMappingURL=../../../../src/app/app.route.js.map
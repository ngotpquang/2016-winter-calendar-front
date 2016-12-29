import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
export var appRoutes = [
    { path: '', component: IntroductionComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'createnewgoal', component: CreateNewGoalComponent, canActivate: [LoggedInGuard] },
    { path: 'detailview', component: DetailViewComponent, canActivate: [LoggedInGuard] },
];
//# sourceMappingURL=../../../../src/app/app.route.js.map
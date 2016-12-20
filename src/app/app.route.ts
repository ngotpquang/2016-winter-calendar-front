// Import our dependencies
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateNewGoalComponent } from './create-new-goal/create-new-goal.component';

// Define which component should be loaded based on the current URL
export const MainRoutes = [
  { path: '',       component: IntroductionComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'createnewgoal', component: CreateNewGoalComponent}
  // , canActivate: [LoggedInGuard]
];

// Import our dependencies
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component'
// Define which component should be loaded based on the current URL
export const MainRoutes = [
  { path: '',       component: IntroductionComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];

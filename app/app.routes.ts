// Import our dependencies
import { Routes } from '@angular/router';
import { App } from './app';
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'
// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: App },
  { path: 'login',  component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**',     component: App }
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoginComponent } from './login/login.component';
import { MainRoutes } from './app.route';
import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
    declarations: [
        AppComponent,
        IntroductionComponent,
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(MainRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

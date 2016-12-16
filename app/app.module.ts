// Import dependencies
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { App } from './app';
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'

// Declare the NgModule decorator
@NgModule({
    // Define the root component
    bootstrap: [App],
    // Define other components in our module
    declarations: [
        App, SignUpComponent, LoginComponent
    ],
    // Define the services imported by our app
    imports: [
        HttpModule, BrowserModule, FormsModule, ReactiveFormsModule
    ],
    providers: []
})
export class AppModule { }

"use strict";
var app_1 = require("./app");
var login_component_1 = require("./login/login.component");
exports.routes = [
    { path: '', component: app_1.App },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: login_component_1.LoginComponent },
    { path: '**', component: app_1.App }
];

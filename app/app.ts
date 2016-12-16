import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'seinfeld-app',
    template: `<header><h1><i class="fa fa-calendar-check-o"></i> {{title}}</h1></header>
    <section>
      <login></login>
      <sign-up></sign-up>
    </section>`
})

export class App {
    title = "Seinfeld Calendar";
}

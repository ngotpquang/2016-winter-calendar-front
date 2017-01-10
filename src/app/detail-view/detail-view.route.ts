import { CanActivate } from '@angular/router';
import { LoggedInGuard } from '../shared/logged-in.guard';
import { MonthViewComponent } from '../month-view/month-view.component';

export const detailViewRoutes = [
    { path: 'monthview/:id/:year/:month', component: MonthViewComponent, canActivate: [LoggedInGuard] }
];

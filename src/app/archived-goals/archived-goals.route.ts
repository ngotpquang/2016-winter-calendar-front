import { CanActivate } from '@angular/router';
import { LoggedInGuard } from '../shared/logged-in.guard';
import { MonthViewComponent } from '../month-view/month-view.component';

export const archivedGoalsRoutes = [
    { path: 'monthview/:id', component: MonthViewComponent, canActivate: [LoggedInGuard] }
];

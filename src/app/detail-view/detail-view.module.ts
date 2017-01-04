import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MonthViewComponent } from '../month-view/month-view.component';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
import { detailViewRoutes } from './detail-view.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailViewRoutes)
  ],
  exports: [LoadingIndicatorComponent, MonthViewComponent],
  declarations: [MonthViewComponent, LoadingIndicatorComponent]
})
export class DetailViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MonthViewComponent } from '../month-view/month-view.component';
import { detailViewRoutes } from './detail-view.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailViewRoutes)
  ],
  declarations: [MonthViewComponent]
})
export class DetailViewModule { }

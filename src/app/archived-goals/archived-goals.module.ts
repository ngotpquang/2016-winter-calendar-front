import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { archivedGoalsRoutes } from './archived-goals.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(archivedGoalsRoutes)
  ]
})
export class ArchivedGoalsModule { }

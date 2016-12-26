import { Component, OnInit } from '@angular/core';

import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  goals;
  constructor(private goalService : GoalService) {
    goalService.getAllGoals().subscribe(res => {
      console.log(res);
      this.goals = res.json();
    });
  }

  ngOnInit() {
  }

}

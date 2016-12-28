import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  public goals;
  constructor(private router: Router, private goalService : GoalService) {
    goalService.getAllGoals().subscribe(res => {
      this.goals = res.json();
    },
  error => console.log(error));
  }

  ngOnInit() {
  }

  displayMonthView(goal: Goal){
    console.log(goal.id);
    this.router.navigate(['/monthview', goal.id]);
  }

}

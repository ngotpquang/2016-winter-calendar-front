import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';
import { LoadingPage } from '../loading-indicator/loading-page';

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent extends LoadingPage implements OnInit {
    public goals;
    constructor(private router: Router, private goalService: GoalService) {
        super('loading');
        goalService.getAllGoals().subscribe(res => {
            this.goals = res.json();
            this.ready();
        },
            error => console.log(error));
    }

    ngOnInit() {
    }

    displayMonthView(goal: Goal): void {
        this.router.navigate(['/monthview', goal.id]);
    }

    favorite(goal: Goal): void {
        this.goalService.setFavorite(goal.id).subscribe(res => {
            console.log(res.json());
            let favorite = <HTMLElement>document.getElementById("fav-" + goal.id);
            if (res.json() == true) {
                console.log(goal.is_favorite);
                favorite.classList.add('color');
            } else {
                favorite.classList.remove('color');
            }
        },
            error => console.log(error));
    }

}

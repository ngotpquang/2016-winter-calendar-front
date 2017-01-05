import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonFunctions } from '../shared/common-functions';
import { Goal, Repetition, EndDate } from '../shared/goal';
import { GoalService } from '../goal/goal.service';
import { LoadingPage } from '../loading-indicator/loading-page';

@Component({
    selector: 'app-archived-goals',
    templateUrl: './archived-goals.component.html',
    styleUrls: ['./archived-goals.component.scss']
})
export class ArchivedGoalsComponent extends LoadingPage implements OnInit {

    public goals;
    public commonFunctions: CommonFunctions;
    constructor(private router: Router, private goalService: GoalService) {
        super('loading');
    }

    ngOnInit() {
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeBackground(false);
        this.commonFunctions.changeTitleContent("Archived Goals");
        localStorage.setItem('sortType', '1');
        localStorage.setItem('isReversed', '0');
        this.goalService.getAllGoals(false, 1).subscribe(res => {
            this.goals = res.json();
            this.goals = this.commonFunctions.getAllGoalsArchived(this.goals);
            this.ready();
        },
            error => console.log(error));
    }

    displayMonthView(goal: Goal): void {
        this.router.navigate(['/monthview', goal.id]);
    }
    displayYearView(goal: Goal): void {
        this.router.navigate(['/yearview', goal.id]);
    }

    showModal(goalId) {
        let goalPanel = document.getElementById("item-" + goalId);
        let backgroundColor = goalPanel.style.backgroundColor;
        console.log(backgroundColor);
        if (backgroundColor != "rgb(238, 238, 255)") {
            goalPanel.style.backgroundColor = "#eef";
        } else {
            goalPanel.style.backgroundColor = "#fff";
        }

        let checks = document.getElementsByClassName('checking');
        let modal = document.getElementById('context-menu');
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
        for (let index in checks) {
            if ((<HTMLInputElement>checks[index]).checked == true) {
                modal.style.display = "block";
            }
        }
    }

    openModal(showed: boolean) {
        let modal = document.getElementById('deleting');
        let span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    deleteGoals() {
        this.openModal(true);
        let modal = document.getElementById('context-menu');
        let checks = document.getElementsByClassName('checking');
        let deleteIds = "";
        for (let index in checks) {
            if ((<HTMLInputElement>checks[index]).checked == true) {
                let id = (<HTMLInputElement>checks[index]).value;
                deleteIds += id + ", ";
            }
        }
        this.goalService.deleteGoal(deleteIds).subscribe(res => {
            console.log("Deleting goals");
            window.location.reload();
        }, error => {
            console.log(error);
        })
    }
    archiveGoals() {
        this.openModal(true);
        let modal = document.getElementById('context-menu');
        let checks = document.getElementsByClassName('checking');
        let archiveIds = "";
        for (let index in checks) {
            if ((<HTMLInputElement>checks[index]).checked == true) {
                let id = (<HTMLInputElement>checks[index]).value;
                archiveIds += id + ", ";
            }
        }
        this.goalService.archiveGoal(archiveIds).subscribe(res => {
            console.log("Archiving goals");
            window.location.reload();
        }, error => {
            console.log(error);
        })
    }

}

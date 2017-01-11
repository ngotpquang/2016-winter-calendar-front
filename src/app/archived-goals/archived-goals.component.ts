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
    private sortType: string;
    private isReversed: boolean;
    public goals;
    public commonFunctions: CommonFunctions;
    constructor(private router: Router, private goalService: GoalService) {
        super('loading');
    }

    ngOnInit() {
        console.log("init");
        this.commonFunctions = new CommonFunctions();
        this.commonFunctions.changeBackground(false);
        this.commonFunctions.changeTitleContent("Archived goals");
        this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
        this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
        this.goalService.getAllGoals(this.isReversed, this.sortType).subscribe(res => {
            this.goals = res.json();
            this.goals = this.commonFunctions.getAllGoalsArchived(this.goals);
            this.ready();
        },
            error => console.log(error));
    }

    displayMonthView(goal: Goal): void {
      let fullYear = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      this.router.navigate(['/monthview', goal.id, fullYear, month]);
    }
    displayYearView(goal: Goal): void {
      let fullYear = new Date().getFullYear();
      this.router.navigate(['/yearview', goal.id, fullYear]);
    }

    showSortMenu(): void {
        let sortModal = document.getElementById('sort-modal');
        let display = sortModal.style.display;
        if (display != 'block') {
            sortModal.style.display = "block";
        } else {
            sortModal.style.display = "none";
        }

    }

    sort(): void {
        let sortType = document.getElementsByName('sort-type');
        let isReversed = <HTMLInputElement>document.getElementById('reverse-order');
        localStorage.setItem('isReversed', isReversed.checked ? '1' : '0');
        this.isReversed = isReversed.checked;
        let sortTypeValue;
        for (let st in sortType) {
            let s = (<HTMLInputElement>sortType[st])
            if (s.checked) {
                sortTypeValue = s.value;
                this.sortType = sortTypeValue;
                localStorage.setItem('sortType', sortTypeValue);
                break;
            }
        }
        console.log(isReversed.checked + "|" + sortTypeValue);

        let favoriteGoals = this.commonFunctions.sortGoals(this.commonFunctions.getListFavoriteGoals(this.goals), sortTypeValue);
        let notFavoriteGoals = this.commonFunctions.sortGoals(this.commonFunctions.getListNotFavoriteGoals(this.goals), sortTypeValue);
        if (this.isReversed) {
            favoriteGoals.reverse();
            notFavoriteGoals.reverse();
        }
        this.goals = favoriteGoals.concat(notFavoriteGoals);
    }

    showContextMenu(goalId) {
        let goalPanel = document.getElementById("item-" + goalId);
        let backgroundColor = goalPanel.style.backgroundColor;
        console.log(backgroundColor);
        if (backgroundColor != "rgb(238, 238, 255)") {
            goalPanel.style.backgroundColor = "#eef";
        } else {
            goalPanel.style.backgroundColor = "#f1f1f1";
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

    openLoading(showed: boolean) {
        let modal = document.getElementById('deleting');
        let span = document.getElementsByClassName("close")[0];
        if (showed) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    showDeleteMenu(): void {
        let sortModal = document.getElementById('notification-delete');
        let display = sortModal.style.display;
        if (display != 'block') {
            sortModal.style.display = "block";
        } else {
            sortModal.style.display = "none";
        }

    }

    deleteGoals() {
        this.showDeleteMenu();
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
            this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
            this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
            this.goalService.getAllGoals(this.isReversed, this.sortType).subscribe(res => {
                this.goals = res.json();
                this.goals = this.commonFunctions.getAllGoalsArchived(this.goals);
                modal.style.display = "none";
                this.router.navigate(['/archivedgoals']);
            },
                error => console.log(error));

        }, error => {
            console.log(error);
        })
    }
    archiveGoals() {
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
            this.sortType = localStorage.getItem('sortType') == null ? "1" : localStorage.getItem('sortType');
            this.isReversed = localStorage.getItem('isReversed') == null ? false : (localStorage.getItem('isReversed') == '0' ? false : true);
            this.goalService.getAllGoals(this.isReversed, this.sortType).subscribe(res => {
                this.goals = res.json();
                this.goals = this.commonFunctions.getAllGoalsArchived(this.goals);
                modal.style.display = "none";
                this.router.navigate(['/archivedgoals']);
            },
                error => console.log(error));

        }, error => {
            console.log(error);
        })
    }

}

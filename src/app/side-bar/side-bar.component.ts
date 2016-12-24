import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Set the width of the side navigation to 250px */
  toggleSideBar(size: string) {
      document.getElementById("mySidenav").style.width = size;
      document.getElementById("main").style.marginLeft = size;
      document.getElementById("header").style.marginLeft = size;
      console.log(size);
      if (size !== '0'){
        document.getElementById("openSideBar").hidden = true;
      } else {
        document.getElementById("openSideBar").hidden = false;
      }
  }
}

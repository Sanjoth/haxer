import { Component, OnInit } from '@angular/core';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userEmail: string;
  Name: string;
  signIn: boolean;


  constructor() {
    console.log(localStorage.getItem("UserEmail"));
    this.userEmail = localStorage.getItem("UserEmail");
    if (this.userEmail == null) {
      this.signIn = false;
    }
    else {
      this.signIn = true;
      this.Name = localStorage.getItem("Name");
    }

  }

  ngOnInit() {

  }


  toggNav() {
    if (document.getElementById("mySidenav").style.width == "245px") {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("overlay").style.display = "none";

    }
    else {
      document.getElementById("mySidenav").style.width = "245px";
      document.getElementById("overlay").style.display = "block";
    }

  }

  logOut() {
    localStorage.removeItem("UserEmail");
    localStorage.removeItem("Name");
    localStorage.clear();
    this.signIn = false;
  }


}


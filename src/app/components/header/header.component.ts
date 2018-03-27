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
  }

  ngOnInit() {
    if(localStorage.getItem("UserEmail") != null)
    {
    console.log(localStorage.getItem("UserEmail"));
    this.signIn = true;
    this.Name = localStorage.getItem("Name");
    }
    else {
      console.log("Not Logged in !")
      this.signIn = false;
    }
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


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggNav() {
    if(document.getElementById("mySidenav").style.width == "20%")
    {
     document.getElementById("mySidenav").style.width = "0"; 
     document.getElementById("mySidenav").style.minWidth = "0"; 
     document.getElementById("main").style.marginLeft = "0";
    }
    else{
     document.getElementById("mySidenav").style.width = "20%";
     document.getElementById("mySidenav").style.minWidth = "140px";
     document.getElementById("main").style.marginLeft = "140px";
    }
  
}

  
}


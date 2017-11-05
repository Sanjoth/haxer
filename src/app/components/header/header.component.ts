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
    if(document.getElementById("mySidenav").style.width == "220px")
    {
     document.getElementById("mySidenav").style.width = "0"; 
     document.getElementById("overlay").style.display = "none";
     
    }
    else{
     document.getElementById("mySidenav").style.width = "220px";
     document.getElementById("overlay").style.display = "block";
    }
  
}

  
}


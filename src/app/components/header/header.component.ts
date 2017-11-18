import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService) { 
  } 

  ngOnInit() {
    
  }

 toggNav() {
    if(document.getElementById("mySidenav").style.width == "245px")
    {
     document.getElementById("mySidenav").style.width = "0"; 
     document.getElementById("overlay").style.display = "none";
     
    }
    else{
     document.getElementById("mySidenav").style.width = "245px";
     document.getElementById("overlay").style.display = "block";
    }
  
}

logOut(){
  this.cookieService.delete('UserEmail');
  this.cookieService.delete('Name');
}

  
}


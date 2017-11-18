import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(private cookieService: CookieService){
  }
  
  remOver()
  {
    document.getElementById("mySidenav").style.width = "0"; 
    document.getElementById("overlay").style.display = "none";
  }
  ngOnInit(){
  }

}





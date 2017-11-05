import { Component,OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'A Movie Recommendation System for the real world!';

  /*
  constructor(private http: HttpClient){
  }
  */
  remOver()
  {
    document.getElementById("mySidenav").style.width = "0"; 
    document.getElementById("overlay").style.display = "none";
  }
  ngOnInit(){
  }

}





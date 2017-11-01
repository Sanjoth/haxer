import { Component,OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Haxèr';
  subt = 'A Movie Recommendation Engine for the real world!';

  /*
  constructor(private http: HttpClient){
  }
  */
  

  ngOnInit(){
  }
  
}




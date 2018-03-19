import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  remOver() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
  }
  public ngOnInit() {

    $(document).ready(function(){
      $("button").click(function(){
          var div = $("div");  
          div.animate({left: '100px'}, "slow");
          div.animate({fontSize: '5em'}, "slow");
      });
  });

  }

}





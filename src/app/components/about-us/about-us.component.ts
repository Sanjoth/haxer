import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.getElementById("body").style.backgroundColor = "white";  
  }

  ngOnDestroy() {
    document.getElementById("body").style.backgroundColor = "black"; 
  }

}

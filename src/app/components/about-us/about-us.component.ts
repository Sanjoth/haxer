import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  background_image:any;
  constructor() { }

  ngOnInit() {
    // this.background_image = document.getElementById("body").style.backgroundImage;
    document.getElementById("body").style.backgroundColor = '#e9ecef';
    // document.getElementById("body").style.backgroundImage = "none";
  }

  ngOnDestroy() {
    document.getElementById("body").style.backgroundColor = "black"; 
    // document.getElementById("body").style.backgroundImage = this.background_image;
  }

}

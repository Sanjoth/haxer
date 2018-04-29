import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  background_image: any;
  constructor(public alert: AlertService) { }

  setBlack(bool) {
    if (bool === true) {
      this.background_image = document.getElementById("body").style.backgroundImage;
      document.getElementById("body").style.backgroundColor = "black";
      document.getElementById("body").style.backgroundImage = "none";
    }
    else {
      document.getElementById("body").style.backgroundImage = this.background_image;
    }
  }

  ngOnInit() {
  }

  feedback() {
    this.alert.success("Submitted. Thank you.");
  }

  deleteData() {
    this.alert.warning("Feature currently in Beta");
  }

  deleteAccount() {
    this.alert.warning("Feature currently in Beta");
  }
}

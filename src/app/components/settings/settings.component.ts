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

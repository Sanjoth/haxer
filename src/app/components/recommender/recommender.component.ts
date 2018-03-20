import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as flick from 'flickity';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  let elem = document.querySelector('.carousel');
  console.log(elem);
  let flk = new flick(elem, {
    cellAlign: 'left',
    contain: true,
    wrapAround: true
  });
  }
  
  draw() {
  
  }
  
}

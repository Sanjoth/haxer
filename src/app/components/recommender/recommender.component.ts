import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as flick from 'flickity';


@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit, AfterViewChecked {
  trending = '';
  data: any;
  iter = 0;
  flk:any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let region = 'IN';
    let lang = 'en-US'
    this.trending = 'https://api.themoviedb.org/3/movie/popular?api_key=bd5e7f8161070f86bff1d8da34219f57&region=' + region + '&language=' + lang + '&page=1';
    this.http.get<UserResponse>(this.trending).subscribe(data => {
      this.data = data; // Assign local to global
      console.log(data);
    });
    
  }

  ngAfterViewChecked() {
      if (this.iter <= 3 && this.iter >= 2) {
        let elem = document.querySelector('.carousel');
        console.log(elem);
       
        this.flk = new flick(elem, {
          wrapAround: true,
          groupCells: true,
          cellAlign: 'left',
          autoPlay: 5500
        });
  
       // this.flk.resize();
      }
      this.iter++;
    }
    
}

interface UserResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Results[];
  ok: number;
}

interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  id: number;
  vote_average: number;
  vote_count: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
}
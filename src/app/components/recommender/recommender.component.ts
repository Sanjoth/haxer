import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin'
import * as flick from 'flickity';


@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit, AfterViewChecked{
  similar: any;
  now_playing: any;
  trending_now: any;
  data: any;
  iter = 0;
  flk: any;
  flk1: any;
  popular: any;
  get_similar: any;
  similar_last: any;

  constructor(private http: HttpClient) {

  }

  ngAfterViewChecked() {
  }

  ngOnInit() {
    let obj = JSON.parse(localStorage.getItem("TRACKED_DATA"));
    for (let id in obj) {
      this.similar_last = id;
    }
    console.log(this.similar_last);
    this.getData();
  }

  getData() {
    let region = 'IN';
    let lang = 'en-US';
    let characterHomeworld;
    let character = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
    if(this.similar_last != undefined)
    {
    characterHomeworld = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/' + this.similar_last + '/similar?api_key=bd5e7f8161070f86bff1d8da34219f57&page=1');
    }
    else
    {
      characterHomeworld = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/21461/similar?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
    }
    let trending = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/popular?api_key=bd5e7f8161070f86bff1d8da34219f57&region=' + region + '&language=' + lang + '&page=1');

    forkJoin([trending, character, characterHomeworld]).subscribe(data => {
      this.data = data;
      this.trending_now = data[0];
      this.similar = data[2];
      this.now_playing = data[1];
      window.setTimeout(() => { this.create_obj(); });
      //this.create_obj();
    });

  }

  create_obj() {
    try {
      let elem = document.querySelector('.carousel');
      let elem2 = document.querySelector('.arry');
      let elem3 = document.querySelector('.larry');
      console.log("ELEMENT:" + elem);

      this.flk = new flick(elem3, {
        wrapAround: true,
        groupCells: true,
        cellAlign: 'left',
        autoPlay: 5500
      });

      this.flk = new flick(elem, {
        wrapAround: true,
        groupCells: true,
        cellAlign: 'left',
        autoPlay: 5500
      });

      this.flk = new flick(elem2, {
        wrapAround: true,
        groupCells: true,
        cellAlign: 'left',
        autoPlay: 5500
      });
    }
    catch (e) {
      console.log(e);
    }
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

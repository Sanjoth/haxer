import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin'
import * as flick from 'flickity';


@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit, OnDestroy {

  similar_last: any;
  similar_movie_name: string;
  similar_genre_ids: string[];
  request_group = [];

  sections_data = [{
    "text": "Now Showing",
    "class": "shownow-flick"
  },
  {
    "text": "Trending Now",
    "class": "trend-flick",
  },
  {
    "text": "",
    "class": "similar-flick",
  },
  {
    "text": "Content Based Recommendations",
    "class": "recommend-flick",
  },
  {
    "text": "Movies as per your current interests",
    "class": "popular-flick",
  },
  {
    "text": "Upcoming Movies",
    "class": "upcom-flick",
  }
  ];

  recom_section_primary = ['.shownow-flick', '.trend-flick', '.similar-flick','.popular-flick', '.upcom-flick', '.recommend-flick'];

  section_group = ['now_playing', 'trending_now', 'similar', 'recom', 'popular', 'upcoming'];


  constructor(private http: HttpClient) { }

  ngOnDestroy() {
    if (this.request_group != undefined) {
      for (let i of this.request_group) {
        i.unsubscribe();
      }
    }
  }

  ngOnInit() {
    let latest_likes = localStorage.getItem("LATEST_LIKE");
    if (latest_likes != undefined || latest_likes != null) {
      let latest_like = latest_likes.split("|");
      this.similar_last = latest_like[0];
      this.similar_movie_name = latest_like[1];
      this.similar_genre_ids = latest_like[2].split(',');
    }
    this.getData();
  }
  getData() {
    let region = 'IN';
    let lang;
    if (localStorage.getItem("DEFAULT_LANG")) {
      lang = localStorage.getItem("DEFAULT_LANG");
    }
    else {
      lang = 'en-US';
    }
    let similar_api;
    let popular_api;
    let recom_api;
    let upcoming_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/upcoming?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
    let nowplaying_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');

    if (this.similar_last != undefined) {
      similar_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/' + this.similar_last + '/similar?api_key=bd5e7f8161070f86bff1d8da34219f57&page=1');
      popular_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/discover/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&sort_by=popularity.desc&include_video=false&page=1&vote_average.gte=5&with_genres=' + this.similar_genre_ids[0]);
      recom_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/' + this.similar_last + '/recommendations?api_key=bd5e7f8161070f86bff1d8da34219f57&&language='+lang+'page=1');
    }
    else {
      this.similar_movie_name = 'Interstellar'
      similar_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/157336/similar?api_key=bd5e7f8161070f86bff1d8da34219f57&language=' + lang + '&page=1');
      popular_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/discover/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&language='+lang+'&sort_by=popularity.desc&include_video=false&page=1&vote_average.gte=5&with_genres=12,18');
      recom_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/157336/recommendations?api_key=bd5e7f8161070f86bff1d8da34219f57&language='+lang+  '&page=1');
    }
    let trending_api = this.http.get<UserResponse>('https://api.themoviedb.org/3/movie/popular?api_key=bd5e7f8161070f86bff1d8da34219f57&region=' + region + '&language=' + lang + '&page=1');
    let api_list = [nowplaying_api, trending_api, similar_api, recom_api, popular_api, upcoming_api];
    try {
      for (let i = 0; i <= api_list.length - 3; i += 3) {
        let temp;
        temp = forkJoin(api_list.slice(i, i + 3)).subscribe(data => {
            this.sections_data[i]["data"] = data[0];
            this.sections_data[i+1]["data"] = data[1];
            this.sections_data[i+2]["data"] = data[2];
            this.sections_data[i+2].text = 'Movies Similar to ' + this.similar_movie_name;
            console.log(this.sections_data);
              window.setTimeout(() => { this.create_obj(this.recom_section_primary.slice(i,i+3)); });
          });
        this.request_group.push(temp);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  create_obj(section_groups) {
    try {
      /**
       * Flickity Bind Elements
       */
      for (let section of section_groups) {
        let elem = document.querySelector(section);
        new flick(elem, {
          wrapAround: true,
          groupCells: true,
          cellAlign: 'left',
          autoPlay: 3000
        });
      }
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

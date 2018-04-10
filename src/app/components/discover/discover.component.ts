import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  sortby_fields = ["popularity.asc","popularity.desc","release_date.asc","release_date.desc","revenue.asc","revenue.desc","primary_release_date.asc","primary_release_date.desc","original_title.asc","original_title.desc","vote_average.asc","vote_average.desc","vote_count.asc","vote_count.desc"]
  genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };
  Date = new Date();
  before_date:any;
  genre_array = Object.values(this.genres);
  genre_keys = Object.keys(this.genres);

  constructor() { }

  ngOnInit() {
    this.before_date = this.Date.toISOString().split('T')[0];
    console.log(this.before_date);
  }

}

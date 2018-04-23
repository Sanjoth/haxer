import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Global Vars
  title = 'A hybrid and intuitive approach for discovering movies and getting recommendations!';
  texts: string;
  tmdb: string;
  data: object;
  blank: object;
  server_data: any;
  movieid: number;
  movie_selected = true;

  user_details: any;
  local_send_tracking_data: any;
  like_status_data = {};
  bookmarked_data = {};
  clicked_data = {};
  local_send_bookmark_data: any;
  local_send_clicks_data: any;

  gen: GenreTy = {
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
    37: "Western",
    10765: "Sci-Fi & Fantasy",
    10768: "War & Politics",
    10767: "Talk",
    10766: "Soap",
    10764: "Reality",
    10763: "News",
    10762: "Kids",
    10759: "Action & Adventure"
  };
  iconChk: string;
  sub:any;

  constructor(private http: HttpClient, private http_sendAdditionalData: HttpClient, private http_sendTrackingData: HttpClient, private http_getData: HttpClient) { }

  setCat(bool, query, event) {
    this.movie_selected = bool;
    this.data = null;
    this.sendReq(query, event);
  }

  sendReq(query, event) {
    /**
     * Send HTTP GET request for every valid keypress
     */
    if(this.sub != undefined)
    {
    this.sub.unsubscribe();
    }
    var key = event.keyCode || event.charCode;
    if (query === '' || query === undefined) {
      if (key === 8 || key === 46) {
        this.data = this.blank; //Clearing Search Box
      }
    }
    else {
      if (this.movie_selected) {
        this.tmdb = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query=' + query + '&page=1&include_adult=true';
      }
      else {
        this.tmdb = "https://api.themoviedb.org/3/search/tv?api_key=bd5e7f8161070f86bff1d8da34219f57&language=en-US&query=" + query + "&page=1";
      }
      //this.tmdb = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query=' + query + '&page=1&include_adult=true';
      
      this.sub = this.http.get<UserResponse>(this.tmdb).subscribe(data => {
        this.data = data; // Assign local to global
      });
    }
  }
  ngOnInit() {
    localStorage.removeItem("LIKE_STATUS_DATA");
    localStorage.removeItem("BOOKMARKED_DATA");
    localStorage.removeItem("CLICKED_DATA");
    let status: any;
    if (localStorage.getItem("Email")) {
      status = this.getUserData();
    }
    else {
      console.log("Not logged in to get user data.");
    }
  }

  displayLocalData() {
    if (localStorage.getItem("LIKE_STATUS_DATA") != null) {
      console.log("Liked Status Data:\n" + localStorage.getItem("LIKE_STATUS_DATA"));
    }
    else {
      console.log("No Like/dislike history")
    }
    if (localStorage.getItem("BOOKMARKED_DATA") != null) {
      console.log("Bookmarked Data:\n" + localStorage.getItem("BOOKMARKED_DATA"));
    }
    else {
      console.log("No Add to List history")
    }
    if (localStorage.getItem("CLICKED_DATA") != null) {
      console.log("Impressions Data:\n" + localStorage.getItem("CLICKED_DATA"));
    }
    else {
      console.log("No Click Impressions")
    }
  }

  getUserData() {
    let loginstr = '/getUserDetails?email=' + localStorage.getItem("Email");
    this.http.get<UserResponse>(loginstr).subscribe(data => {
      this.user_details = data; // Assign local to global
      console.log(data);
      console.log(data[0].reactions_data);
      console.log(data[0].bookmark_data);
      console.log(data[0].impressions_data);

      this.like_status_data = data[0].reactions_data;
      this.bookmarked_data = data[0].bookmark_data;
      this.clicked_data = data[0].impressions_data;
      localStorage.setItem("BOOKMARKED_DATA", JSON.stringify(this.bookmarked_data));
      localStorage.setItem("CLICKED_DATA", JSON.stringify(this.clicked_data));
      localStorage.setItem("LIKE_STATUS_DATA", JSON.stringify(this.like_status_data));
      this.displayLocalData();
    });
  }

  likeMovie(movie, event) {
    this.iconChk = document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML.trim();
    /**
     * If Already present
     */

    if (this.like_status_data[movie.id]) {
      if (this.like_status_data[movie.id].like_status == true) {
        this.JSONify_like(movie, null);
      }
      else if (this.like_status_data[movie.id].like_status == false || this.like_status_data[movie.id].like_status == null) {
        this.JSONify_like(movie, true);
      }
    }
    else {
      localStorage.setItem("LATEST_LIKE", movie.id + ',' + movie.title);
      this.JSONify_like(movie, true);
    }

    if (this.iconChk == "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-up fa-lg ng-star-inserter\"></i>") {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-up fa-lg ng-star-inserter\"></i>";
    }
    else {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-up fa-lg ng-star-inserter\"></i>";
    }
  }

  dislikeMovie(movie, event) {
    this.iconChk = document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML.trim();

    if (this.like_status_data[movie.id]) {
      if (this.like_status_data[movie.id].like_status == false) {
        this.JSONify_like(movie, null);
      }
      else if (this.like_status_data[movie.id].like_status == true || this.like_status_data[movie.id].like_status == null) {
        this.JSONify_like(movie, false);
      }
    }
    else {
      this.JSONify_like(movie, false);
    }

    if (this.iconChk == "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-down fa-lg ng-star-inserter\"></i>") {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-down fa-lg ng-star-inserter\"></i>";
    }
    else {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-down fa-lg ng-star-inserter\"></i>";
    }
  }

  trackClick(movie) {
    if (this.clicked_data[movie.id]) {
      console.log("Already Exists");
    }
    else {
      this.JSONify_click(movie);
    }
  }

  addList(movie, event) {
    this.iconChk = document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML.trim();
    if (this.bookmarked_data[movie.id]) {
      if (this.bookmarked_data[movie.id].list_status == true) {
        this.JSONify_bookmark(movie, null);
      }
      else if (this.bookmarked_data[movie.id].list_status == null) {
        this.JSONify_bookmark(movie, true);
      }
    }
    else {
      this.JSONify_bookmark(movie, true);
    }


    if (this.iconChk == "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-bookmark-o fa-lg ng-star-inserter\"></i>") {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-bookmark fa-lg ng-star-inserter\"></i>";
    }
    else {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-bookmark-o fa-lg ng-star-inserter\"></i>";
    }
  }

  JSONify_bookmark(movie, list_status) {
    let movieid = movie.id;
    let genre = movie.genre_ids;
    let movie_name = movie.title;
    let date = new Date();
    let last_updated = date.getTime();

    // If Movie is not present
    if (this.bookmarked_data[movieid] === undefined) {
      this.bookmarked_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "list_status": list_status };
    }
    // If movie is already present
    else {
      this.bookmarked_data[movieid].list_status = list_status;
      this.bookmarked_data[movieid].last_updated = last_updated;
    }
    localStorage.setItem("BOOKMARKED_DATA", JSON.stringify(this.bookmarked_data));
    console.log("Bookmarked Data:");
    console.log(this.bookmarked_data);
    this.send_bookmarks_to_db();
    console.log("Bookmarked Data:\n" + localStorage.getItem("BOOKMARKED_DATA"));
  }

  JSONify_click(movie) {
    let movieid = movie.id;
    let genre = movie.genre_ids;
    let movie_name = movie.title;

    let date = new Date();
    let last_updated = date.getTime();
    this.clicked_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre };
    localStorage.setItem("CLICKED_DATA", JSON.stringify(this.clicked_data));
    console.log("Clicked Data:");
    console.log(this.clicked_data);
    this.send_impressions_to_db();
    console.log("Impressions Data:\n" + localStorage.getItem("BOOKMARKED_DATA"));
  }

  JSONify_like(movie, like_status) {
    let movieid = movie.id;
    console.log(like_status);
    let genre = movie.genre_ids;
    let movie_name = movie.title;
    let date = new Date();
    let last_updated = date.getTime();
    let check = this.check_duplicate_tracks(movieid);

    if (check == true) {
      this.like_status_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "like_status": like_status };
    }
    else {
      this.like_status_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "like_status": like_status };
    }
    localStorage.setItem("LIKE_STATUS_DATA", JSON.stringify(this.like_status_data));
    console.log("Like Status Data:");
    console.log(this.like_status_data);
    this.send_reactions_to_db();
    console.log("Liked Status Data:\n" + localStorage.getItem("LIKE_STATUS_DATA"));
  }

  send_impressions_to_db() {
    this.http_sendTrackingData.post("/sendClicksData", { "user_id": localStorage.getItem("Email"), "JSON_String": localStorage.getItem("CLICKED_DATA") }).subscribe(data => {
      this.local_send_clicks_data = data;
      console.log("POST DATA CLICKS:");
      console.log(data);
    });
  }

  send_bookmarks_to_db() {
    this.http_sendTrackingData.post("/sendBookmarkData", { "user_id": localStorage.getItem("Email"), "JSON_String": localStorage.getItem("BOOKMARKED_DATA") }).subscribe(data => {
      this.local_send_bookmark_data = data;
      console.log("POST DATA BOOKMARKS:");
      console.log(data);
    });
  }

  send_reactions_to_db() {
    this.http_sendTrackingData.post("/sendReactionData", { "user_id": localStorage.getItem("Email"), "JSON_String": localStorage.getItem("LIKE_STATUS_DATA") }).subscribe(data => {
      this.local_send_tracking_data = data;
      console.log("POST DATA REACTIOn:");
      console.log(data);
    });
  }

  check_duplicate_tracks(movieid) {
    if (this.like_status_data[movieid] === undefined) {
      return false;
    }
    else {
      return true;
    }
  }
}

//  BELOW INTERFACES FOR PARSING JSON OBJECT
interface UserResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Results[];
  ok: number;
  length: number;
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

interface GenreTy {
  [key: number]: string;
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Global Vars
  title = 'A hybrid yet intuitive approach for discovering movies & getting recommendations!';
  texts: string;
  tmdb: string;
  data: object;
  blank: object;
  server_data: any;
  movieid: number;
  local_send_tracking_data: any;
  local_send_additional_data: any;
  tracked_data = {};
  additional_data = {};
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
    37: "Western"
  };
  iconChk: string;

  constructor(private http: HttpClient, private http_sendAdditionalData: HttpClient, private http_sendTrackingData: HttpClient, private http_getData: HttpClient) { }

  sendReq(query, event) {
    /**
     * Send HTTP GET request for every valid keypress
     */
    var key = event.keyCode || event.charCode;
    if (query == '' || query === undefined) {
      if (key == 8 || key == 46) {
        this.data = this.blank; //Clearing Search Box
      }
    }
    else {
      this.tmdb = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query=' + query + '&page=1';
      this.http.get<UserResponse>(this.tmdb).subscribe(data => {
        this.data = data; // Assign local to global
      });
    }
  }
  ngOnInit() {
    /**
     * Send Tracking & Additional Data to the Cloud
     */
    if (localStorage.getItem("TRACKED_DATA") != null) {
      console.log("Tracked Data:\n" + localStorage.getItem("TRACKED_DATA"));
    }
    else {
      console.log("No Like/dislike history")
    }
    if (localStorage.getItem("ADDITIONAL_DATA") != null) {
      console.log("Additional Data:\n" + localStorage.getItem("ADDITIONAL_DATA"));
    }
    else {
      console.log("No Click Impressions / Add to List history")
    }
    if (localStorage.getItem("UserEmail") != null) {
      if (localStorage.getItem("TRACKED_DATA") != null) {
        this.send_tracked_info_to_db();
      }
      if (localStorage.getItem("ADDITIONAL_DATA") != null) {
        this.send_extra_info_to_db();
      }
    }
  }

  likeMovie(movie, event) {
    this.iconChk = document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML.trim();
    if (this.iconChk == "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-up fa-lg\"></i>") {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-up fa-lg\"></i>";
    }
    else {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-up fa-lg\"></i>";
    }
    this.JSONify_likeStatus(movie, true);
    return true;
  }

  dislikeMovie(movie, event) {
    this.iconChk = document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML.trim();
    if (this.iconChk == "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-down fa-lg\"></i>") {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-down fa-lg\"></i>";
    }
    else {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-thumbs-o-down fa-lg\"></i>";
    }
    this.JSONify_likeStatus(movie, false);
    return true;
  }

  trackClick(movie) {
    this.JSONify_extraInfo(movie);
  }

  addList(movie, event) {
    this.iconChk = document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML.trim();
    if (this.iconChk == "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-bookmark-o fa-lg\"></i>") {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-bookmark fa-lg\"></i>";
      this.JSONify_extraInfo(movie, true);
    }
    else {
      document.getElementById(event.currentTarget.id).firstElementChild.lastElementChild.innerHTML = "<i _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-bookmark-o fa-lg\"></i>";
      this.JSONify_extraInfo(movie, false);
    }
    return true;
  }

  JSONify_bookmark(movie) {
    let movieid = movie.id;
    let genre = movie.genre_ids;
    let movie_name = movie.title;

    let date = new Date();
    let last_updated = date.getTime();
    let list_add_status: boolean;
    
  }

  JSONify_click(movie) {

  }

  JSONify_extraInfo(movie, list_status?) {
    let movieid = movie.id;
    let genre = movie.genre_ids;
    let movie_name = movie.title;

    let date = new Date();
    let last_updated = date.getTime();
    let click_status: boolean;
    let list_add_status: boolean;

    if (list_status === undefined) {
      click_status = true;
    }
    else {
      list_add_status = list_status;
    }

    /**
     * Check if it already exists
     */
    // If Movie is not present
    if (this.additional_data[movieid] === undefined) {
      if (list_status === undefined) {
        this.additional_data[movieid] = { "last_updated": last_updated, "title": movie_name,"genre_ids": genre, "click_status": click_status};
      }
      else {
        this.additional_data[movieid] = { "last_updated": last_updated, "title": movie_name,"genre_ids": genre, "list_add_status": list_add_status};
      }
    }
    // If movie is already present
    else {
      if (list_status === undefined) {
        this.additional_data[movieid].click_status = true;
      }
      else {
        this.additional_data[movieid].list_add_status = list_status;
      }
      this.additional_data[movieid].last_updated = last_updated;
      this.additional_data[movieid].genre_ids = genre;
    }
    localStorage.setItem("ADDITIONAL_DATA", JSON.stringify(this.additional_data));
    console.log("Additional Data:");
    console.log(this.additional_data);

  }

  JSONify_likeStatus(movie, like_status) {
    let movieid = movie.id;
    let genre = movie.genre_ids;
    let movie_name = movie.title;

    let date = new Date();
    let last_updated = date.getTime();

    // let abc = '{"$id":{"last_updated": "","genre_ids": [23,45,40],"like": true,"list": true }}';
    let check = this.check_duplicate_tracks(movieid);

    if (check == true) {
      this.tracked_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "like_status": like_status };
    }
    else {
      this.tracked_data[movieid] = { "last_updated": last_updated, "title": movie_name, "genre_ids": genre, "like_status": like_status };
    }
    localStorage.setItem("TRACKED_DATA", JSON.stringify(this.tracked_data));
    console.log("Tracked Data:");
    console.log(this.tracked_data);
  }

  send_extra_info_to_db() {
    this.http_sendTrackingData.post("/sendAdditionalData", { "user_id": localStorage.getItem("UserEmail"), "JSON_String": localStorage.getItem("ADDITIONAL_DATA") }).subscribe(data => {
      this.local_send_additional_data = data;
      console.log("POST DATA ADDITIONAL:");
      console.log(data);
    });
  }

  send_tracked_info_to_db() {
    this.http_sendTrackingData.post("/sendTrackingData", { "user_id": localStorage.getItem("UserEmail"), "JSON_String": localStorage.getItem("TRACKED_DATA") }).subscribe(data => {
      this.local_send_tracking_data = data;
      console.log("POST DATA TRACKING:");
      console.log(data);
    });

  }

  check_duplicate_tracks(movieid) {

    if (this.tracked_data[movieid] === undefined) {
      return false;
    }
    else {
      return true;
    }

  }

  get_user_activity() {
    let loginstr = `/getUser?email=${localStorage.getItem("UserEmail")}&pass=${localStorage.getItem("Password")}`;
    this.http_getData.get<UserResponse>(loginstr).subscribe(data => {
      this.server_data = data; // Assign local to global
      if (data.ok == 1) {
        localStorage.setItem("SERVER_TRACKING_DATA", `${this.server_data[0].tracking_data}`);
        localStorage.setItem("SERVER_ADDITIONAL_DATA", `${this.server_data[0].additional_data}`);
      }

    });
    console.log(localStorage.getItem("SERVER_TRACKING_DATA"));
    console.log(localStorage.getItem("SERVER_ADDITIONAL_DATA"));
  }
}

//  BELOW INTERFACES FOR PARSING JSON OBJECT
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

interface GenreTy {
  [key: number]: string;
}

/* console.log(data);
      console.log(data.page);
      console.log(data.total_results);
      console.log(data.total_pages);
      console.log(data.results[0].id);
      console.log(data.results[0].vote_average);
      console.log(data.results[0].vote_count);
      console.log(data.results[0].title);
      console.log(data.results[0].overview);
      console.log(data.results[0].poster_path);
      console.log(data.results[0].genre_ids[0]);
      console.log(data.results[0].genre_ids[1]);
      console.log(data.results[0].genre_ids[2]);
      console.log(data.results[0].popularity);
 */

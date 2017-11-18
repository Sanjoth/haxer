import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Global Vars
  title = 'A Hybrid Movie Search & Recommendation System for the real world!';
  tmdb:string;
  data:object;
  blank:object;
  index:number;

  gen: GenreTy = {
    28:"Action",        
    12:"Adventure",        
    16:"Animation",   
    35:"Comedy",   
    80:"Crime", 
    99:"Documentary", 
    18:"Drama", 
    10751:"Family",
    14:"Fantasy",
    36:"History",
    27:"Horror",
    10402:"Music",
    9648:"Mystery",
    10749:"Romance",  
    878:"Science Fiction", 
    10770:"TV Movie",  
    53:"Thriller",  
    10752:"War",
    37:"Western"
};
  constructor(private http: HttpClient, private cookieService: CookieService ){}

  sendReq(query){
    if(query == '')
    {
      this.data=this.blank; //Clearing Search Box
    }
    //console.log(query);
    this.tmdb = 'https://api.themoviedb.org/3/search/movie?api_key=bd5e7f8161070f86bff1d8da34219f57&query='+query+'&page=1';
    this.http.get<UserResponse>(this.tmdb).subscribe(data => {
      this.data = data; // Assign local to global
    });
  }
  ngOnInit(){}

  cookieUpdate(cookieName1,cookieName2,movieid,genre){

    if(this.cookieService.check(`${cookieName1}`) && (this.cookieService.check(`${cookieName2}`)))
    {
      // If data already in cookie & both cookie names is specified
    this.cookieService.set(`${cookieName1}`, `${this.cookieService.get(`${cookieName1}`)},${movieid}`);
    this.cookieService.set(`${cookieName2}`, `${this.cookieService.get(`${cookieName2}`)},${genre}`);
    console.log("Cookie1Mov "+this.cookieService.get(`${cookieName1}`));
    console.log("Cookie2Gen "+this.cookieService.get(`${cookieName2}`));
    }
    else if(this.cookieService.check(`${cookieName1}`) && cookieName2 == ''){
      // If data already in cookie but only 1 cookie name specified
      this.cookieService.set(`${cookieName1}`, `${this.cookieService.get(`${cookieName1}`)},${movieid}`);
      console.log("Cookie1Mov "+this.cookieService.get(`${cookieName1}`));
    }
    else
    {
      // If cookie new
      this.cookieService.set(`${cookieName1}`, `${movieid}`);
      this.cookieService.set(`${cookieName2}`, `${genre}`);
      console.log("Cookie1Mov "+this.cookieService.get(`${cookieName1}`));
      if(cookieName2 != '')
      {
      console.log("Cookie2Gen "+this.cookieService.get(`${cookieName2}`));
      }
    }
  }

  trackClick(movieid,genre){
    
        console.log(movieid,genre);
       this.cookieUpdate('Intrst_MovieIDs','Intrst_GenreIDs',movieid,genre);
      
      }
  likeMovie(movieid,genre){
    console.log(movieid,genre);
    this.cookieUpdate('Like_MovieIDs','Like_GenreIDs',movieid,genre);
    
  }
  dislikeMovie(movieid,genre){
    console.log(movieid,genre);
    this.cookieUpdate('Dislike_MovieIDs','Dislike_GenreIDs',movieid,genre);
  }
  addList(movieid,genre){
    console.log(movieid,genre);
    this.cookieUpdate('Bookmarked','',movieid,genre);
  }

}

//  BELOW INTERFACES FOR PARSING JSON OBJECT
interface UserResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results:Results[];
}

interface Results{
  adult: boolean;
  backdrop_path: string;
  genre_ids:number[];
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
  [key: number]:  string;
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

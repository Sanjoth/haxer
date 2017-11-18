import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  data:object;
  loginstr:string;
  movieid:number;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieService.set('Intrst_MovieIDs', '', 9999);
    this.cookieService.set('Intrst_GenreIDs', '', 9999);
    this.cookieService.set('Like_MovieIDs', '', 9999);
    this.cookieService.set('Like_GenreIDs', '', 9999);
    this.cookieService.set('Dislike_MovieIDs', '', 9999);
    this.cookieService.set('Dislike_GenreIDs', '', 9999);
    this.cookieService.set('Bookmarked', '', 9999);
    console.log(this.cookieService.getAll());
    //this.cookieService.set('Test', `${this.cookieService.get('Test')},${movie_id}`);
  }

  sendReq(email,pass)
  {
    this.loginstr = `/getUser?email=${email}&pass=${pass}`;
    this.http.get<UserResponse>(this.loginstr).subscribe(data => {
      this.data = data; // Assign local to global
      console.log(data);
      if(data.length == 1)
      {
      console.log(data[0].email+" "+data[0].password);
      alert("Welcome "+data[0].name+" !");
       //Initialize Cookie for Email

       this.cookieService.set('UserEmail',`${this.data[0].email}`,9999);
       this.cookieService.set('Name',`${this.data[0].uname}`,9999);
      console.log(this.cookieService.get('UserEmail'));

      this.router.navigateByUrl('/');

      }
      else{
        alert("The username or password is invalid !");
      }
    });
  }

}

interface UserResponse{
  email:string;
  password:string;
  length:number;
  uname:string;
}

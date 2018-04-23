import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  data: object;
  loginstr: string;
  movieid: number;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    /*for (let key in localStorage){
      console.log(key)
   }
   */
  }

  forgot() 
  {
    alert("Feature currently in beta");
  }
  sendReq(email, pass) {
    this.loginstr = `/getUser?email=${email}&pass=${pass}`;
    this.http.get<UserResponse>(this.loginstr).subscribe(data => {
      this.data = data; // Assign local to global
      console.log(data);
      if (data.length == 1) {
        console.log(data[0].email + " " + data[0].password);
        alert("Welcome " + data[0].uname + " !");
        //Initialize local Storage for Email

        localStorage.setItem("Email", `${this.data[0].email}`);
        localStorage.setItem("Name", `${this.data[0].uname}`);
        localStorage.setItem("Password", `${this.data[0].password}`);
        this.router.navigateByUrl('/');
        
      }
      else {
        alert("The username or password is invalid !");
      }
    });
  }

}

interface UserResponse {
  email: string;
  password: string;
  length: number;
  uname: string;
}

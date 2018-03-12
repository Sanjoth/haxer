import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  check: boolean;
  register: string;
  myForm: object;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', Validators.required],
      password1: ['', Validators.minLength],
      password2: ['', Validators.minLength],
      email: ['', Validators.email]
    });
  }

  ngOnInit() {

  }

  sendReq(name, email, pass1, pass2) {

    if (name == "" || email == "" || pass1 == "" || pass2 == "") {
      alert("Please don't leave any fields blank !");
      return;
    }
    if (pass1 != pass2) {
      alert("Passwords don't match");
      return;
    }
    this.register = `/regUser?name=${name}&email=${email}&password1=${pass1}`;
    console.log(this.register);
    this.http.get<UserResponse>(this.register).subscribe(data => {
      console.log(data);
      console.log(this.register);

      if (data.ok == 1) {
        alert("Successfully registered, please login :-)");
      }
      else {
        alert("User already exists, please login or reset your password!");
      }

    });
  }
}

interface UserResponse {
  ok: number;
}




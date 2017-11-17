import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  check=false;
  register:string;
  myForm:object;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.myForm = fb.group({
      name:  ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.email]
    });
  }
 

  ngOnInit() {
    
  }


  correctCaptcha()
  {
    this.check=true;
  }

  sendReq(name,email,pass1,pass2){

    if(name == "" || email == "" || pass1 == "" || pass2 == "")
    {
      alert("Please don't leave any fields blank !");
      return;
    }
    if(pass1 != pass2)
    {
      alert("Passwords don't match");
      return;
    }
    if(this.check == true)
    {
    this.register = `/regUser?name=${name}&email=${email}&password1=${pass1}`;
    console.log(this.register);
    this.http.get(this.register).subscribe(data => {
      console.log(data);
      console.log(this.register);
    });
    }
    else
    {
      alert("Captch return false, please try again!");
    }
  

}
}

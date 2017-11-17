import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  check:boolean;
  register:string;
  myForm:object;
  captcha:string;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.myForm = fb.group({
      name:  [null, Validators.required],
      password1: [null, Validators.required],
      password2: [null, Validators.required],
      email: [null, Validators.email]
    });
    window['verifyCallback'] = this.verifyCallback.bind(this);
  }
  
  verifyCallback(response){
    this.captcha=response;
   this.check = true;
    }
 

  ngOnInit() {
    
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




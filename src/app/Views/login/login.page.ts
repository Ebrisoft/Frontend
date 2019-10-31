import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {

  EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  email: String;
  password: String;
  loginError:Boolean;

  constructor() { }

  LoginPressed(): void{
   // this.loginError = false;
    this.loginError = this.Validate()
  }
  
  Validate(): Boolean {
    if (this.email && this.password){
      console.log(this.email.match(this.EMAIL_REGEX))
      if (this.email.search(this.EMAIL_REGEX) != -1 ){
        return false
      }
    }
    return true;
  }

  ngOnInit() {}

}

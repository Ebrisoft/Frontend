import { Component, OnInit } from '@angular/core';
import SigninService from 'src/app/services/api/unauth/sign-in-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {

  static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  email: string;
  password: string;
  loginError:Boolean;

  signinService: SigninService;

  constructor() {
    this.signinService = new SigninService()
   }


  loginPressed(): void{
    this.loginError = this.validate()
    if (!this.loginError){
      this.signinService.SignIn(this.email, this.password)
    }
  }
  
  validate(): Boolean {
    if (this.email && this.password){
      if (this.email.search(LoginComponent.EMAIL_REGEX) != -1 ){
        return false
      }
    }
    return true;
  }

  ngOnInit() {
    
  }

}

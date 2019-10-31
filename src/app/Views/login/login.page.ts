import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor() { }

  loginPressed(): void{
    console.log(this.email, this.password)
  }

  ngOnInit() {}

 

}

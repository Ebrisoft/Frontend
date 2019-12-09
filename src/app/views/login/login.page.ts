import { Component, OnInit } from "@angular/core";
import SigninAPIService from "src/app/services/api/unauth/sign-in-api-service";
import { Router } from "@angular/router";
import { Role } from "../../models/utils/role.enum";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginComponent implements OnInit {

  static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  email: string;
  password: string;
  loginError: string;

  loading: boolean = false;

  constructor(private signinAPIService: SigninAPIService, private router: Router) {
    
  }

  async loginPressed(): Promise<void> {
    this.loginError = this.validate();
    
    if (!this.loginError) {
      this.loading = true;

      try {
        const response = await this.signinAPIService.SignIn(this.email, this.password);

        if (response.statusCode !== 200) {
          this.loginError = "Server error.";
          return;
        } 

        if (response.payload.roles.length !== 1) {
          this.loginError = "Error, please contact application administrator.";
          return;
        }

        this.loginError = null;
        switch (response.payload.roles[0]) {
          case "tenant":
            this.router.navigate(["/tenant"]);
            break;
          case "landlord":
            this.router.navigate(["/landlord"]);
            break;
          default:
            this.loginError = "Error, role not recognised. Please contact application administrator";
        }
      } catch {
        this.loginError = "No account exists with these credentials";
      } finally {
        this.loading = false;
      }
    }
  }

  validate(): string {
    if (!this.email || !this.password) {
      return "Please enter a username and password";
    }

    if (this.email.search(LoginComponent.EMAIL_REGEX) === -1) {
      return "Invalid email";
    }

    return null;
  }

  ngOnInit() {
  }

}

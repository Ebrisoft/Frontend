import { Component, OnInit } from "@angular/core";
import SigninService from "src/app/services/api/unauth/sign-in-service";
import { Router } from "@angular/router";
import ActiveRole from "src/app/services/active-role";
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
  loginError: boolean;

  constructor(private signinService: SigninService, private activeRole: ActiveRole, private router: Router) {
    
  }

  async loginPressed(): Promise<void> {
    this.loginError = this.validate();
    
    if (!this.loginError) {
      const response = await this.signinService.SignIn(this.email, this.password);
      if (response.statusCode !== 200) {
        // TODO: Panic at the disco! 

        return;
      } 
      if (response.payload.roles.length !== 1) {
        // TODO: Panic at the disco! 

        return;
      } 
     
      switch (response.payload.roles[0]) {
        case "tenant":
          this.activeRole.setRole(Role.TENANT);
          this.router.navigate(["/tenant"]);
          break;
          case "landlord":
            this.activeRole.setRole(Role.LANDLORD);
            this.router.navigate(["/landlord"]);
          break;
        default:
          this.activeRole.setRole(Role.DEFAULT);
          break;
      }
    }
  }

  validate(): boolean {
    if (this.email && this.password) {
      if (this.email.search(LoginComponent.EMAIL_REGEX) !== -1 ) {
        return false;
      }
    }
    return true;
  }

  ngOnInit() {
  }

}

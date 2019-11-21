import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.page";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import SignInService from "../../services/api/unauth/sign-in-service";

@NgModule({
  declarations: [ LoginComponent ],
  providers: [ SignInService ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
  ]
})
export class LoginModule { }

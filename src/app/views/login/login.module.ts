import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.page";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import SignInAPIService from "../../services/api/unauth/sign-in-api-service";

@NgModule({
  declarations: [ LoginComponent ],
  providers: [ SignInAPIService ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
  ]
})
export class LoginModule { }

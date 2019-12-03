import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NewIssuePage } from "./new-issue.page";
import LandlordIssueAPIService from "src/app/services/api/landlord/issue-api-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: NewIssuePage}])
  ],
  providers: [ LandlordIssueAPIService ],
  declarations: [NewIssuePage]
})

export class NewIssuePageModule {

}

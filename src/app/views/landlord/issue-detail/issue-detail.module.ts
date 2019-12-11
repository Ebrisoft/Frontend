import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { IssueDetailPage } from "./issue-detail.page";
import LandlordIssueAPIService from "src/app/services/api/landlord/issue-api-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: IssueDetailPage }])
  ],
  providers: [LandlordIssueAPIService],
  declarations: [IssueDetailPage]
})
export class IssueDetailModule { }

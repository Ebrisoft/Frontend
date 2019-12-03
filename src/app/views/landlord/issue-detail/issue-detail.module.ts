import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { IssueDetailPage } from "./issue-detail.page";
import LandlordIssueDetailAPIService from "src/app/services/api/landlord/issue-detail-api-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: IssueDetailPage }])
  ],
  providers: [LandlordIssueDetailAPIService],
  declarations: [IssueDetailPage]
})
export class IssueDetailModule { }

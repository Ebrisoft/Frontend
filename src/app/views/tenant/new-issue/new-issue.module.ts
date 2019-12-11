import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NewIssuePage } from "./new-issue.page";
import TenantIssueAPIService from "src/app/services/api/tenant/issue-api-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: NewIssuePage}])
  ],
  providers: [ TenantIssueAPIService ],
  declarations: [NewIssuePage]
})

export class NewIssuePageModule {

}

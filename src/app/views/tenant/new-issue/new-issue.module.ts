import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NewIssuePage } from "./new-issue.page";
import CreateIssueService from "src/app/services/api/landlord/create-issue-service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: NewIssuePage}])
  ],
  providers: [ CreateIssueService ],
  declarations: [NewIssuePage]
})

export class NewIssuePageModule {

}

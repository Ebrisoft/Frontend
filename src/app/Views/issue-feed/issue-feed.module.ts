import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IssueFeed } from "./issue-feed.page";
import { IssueCardComponent } from "src/app/components/issue-card/issue-card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: IssueFeed }])
  ],
  declarations: [
    IssueFeed,
    IssueCardComponent
  ]
})
export class IssueFeedModule {}

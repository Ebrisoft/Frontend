import { Component, OnInit, Input } from "@angular/core";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import { Priority } from "src/app/utils/priority.enum";

@Component({
  selector: "app-issue-card",
  templateUrl: "./issue-card.component.html",
  styleUrls: ["./issue-card.component.scss"],
})
export class IssueCardComponent implements OnInit {

  @Input() issue: IIssueResponse;
  private parsedDate: string;
  private priorityDisplay: string;
  private secondaryColour: string;

  constructor() {}

  ngOnInit() {
    this.parsedDate = new Date(this.issue.createdAt).toLocaleDateString();
    this.priorityDisplay = Priority[this.issue.priority];
    this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
  }
}

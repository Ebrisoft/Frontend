import { Component, OnInit, Input } from "@angular/core";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";

@Component({
  selector: "app-issue-card",
  templateUrl: "./issue-card.component.html",
  styleUrls: ["./issue-card.component.scss"],
})
export class IssueCardComponent implements OnInit {

  @Input() 
  private issue: IIssueResponse;
  
  private parsedDate: string;

  constructor() { }

  ngOnInit() {
    this.parsedDate = new Date(this.issue.createdAt).toLocaleDateString();
  }

}

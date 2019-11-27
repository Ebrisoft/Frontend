import { Component, OnInit } from "@angular/core";
import CreateIssueService from "src/app/services/api/landlord/create-issue-service";

@Component({
  selector: "app-new-issue",
  templateUrl: "./new-issue.page.html",
  styleUrls: ["./new-issue.page.scss"],
})
export class NewIssuePage implements OnInit {

  title: string;
  content: string;

  constructor(private createIssueService: CreateIssueService) {
    
  }

  async checkPressed(): Promise<void> {
    const response = await this.createIssueService.CreateIssue(this.title, this.content);
  }

  cancelPressed() {
  }

  ngOnInit() {
  }

}

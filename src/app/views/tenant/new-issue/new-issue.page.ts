import { Component, OnInit } from "@angular/core";
import CreateIssueService from "src/app/services/api/landlord/create-issue-service";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: "app-new-issue",
  templateUrl: "./new-issue.page.html",
  styleUrls: ["./new-issue.page.scss"],
})
export class NewIssuePage implements OnInit {

  title: string;
  content: string;

  isFormValid: boolean;

  constructor(private createIssueService: CreateIssueService, private router: Router, private location: Location) {
    this.isFormValid = false;
  }

  async checkPressed(): Promise<void> {
    const response = await this.createIssueService.CreateIssue(this.title, this.content);
    this.routeBack();
  }

  cancelPressed() {
    this.routeBack();
  }

  routeBack() {
    this.location.back();
  }

  checkChange() {
    /*if (this.title !== "" && this.content !== "") {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }*/

    this.isFormValid = true;

    if (this.title.length === 0) {
      this.isFormValid = false;
    }

    if (this.content.length === 0) {
      this.isFormValid = false;
    }


    console.log("Valid: " + this.isFormValid);
  }

  ngOnInit() {
    this.title = this.content = "";
  }
}

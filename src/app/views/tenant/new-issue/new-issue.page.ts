import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-issue",
  templateUrl: "./new-issue.page.html",
  styleUrls: ["./new-issue.page.scss"],
})
export class NewIssuePage implements OnInit {

  title: string;
  content: string;

  constructor() {
    
  }

  checkPressed() {
    console.log("Check!");
    console.log("title: " + this.title);
    console.log("content: " + this.content);
  }

  cancelPressed() {
    console.log("Cance!");
    console.log("title: " + this.title);
    console.log("content: " + this.content);
  }

  ngOnInit() {
  }

}

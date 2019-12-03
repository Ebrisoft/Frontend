import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
})
export class PageHeaderComponent implements OnInit {

  @Input()
  private title: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  selectIssue() {
    this.router.navigate(["landlord/house-select"]);
    console.log("navigating to house selector");
  }
}

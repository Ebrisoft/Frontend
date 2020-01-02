import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { mdiHomeGroup } from "@mdi/js";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
})
export class PageHeaderComponent implements OnInit {

  private mdiHomeGroup: string = mdiHomeGroup;

  @Input()
  private title: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  selectHouse() {
    this.router.navigate(["landlord/house-select"]);
    console.log("navigating to house selector");
  }
}

import { Component, OnInit } from "@angular/core";
import TenantCreateIssueAPIService from "src/app/services/api/tenant/create-issue-api-service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-new-issue",
  templateUrl: "./new-issue.page.html",
  styleUrls: ["./new-issue.page.scss"],
})
export class NewIssuePage implements OnInit {

  title: string;
  content: string;

  isFormValid: boolean;

  constructor(private tenantCreateIssueAPIService: TenantCreateIssueAPIService, public toastController: ToastController, private router: Router, private location: Location) {
    this.isFormValid = false;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "All fields must have a value",
      color: "danger",
      duration: 3000
    });
    toast.present();
  }

  async checkPressed(): Promise<void> {
    if (this.isFormValid) {
      const response = await this.tenantCreateIssueAPIService.createIssue(this.title, this.content);
      this.routeBack();
    } else {
      this.presentToast();
    }
  }

  routeBack() {
    this.location.back();
  }

  checkChange() {
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

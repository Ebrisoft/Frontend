import { Component, OnInit } from "@angular/core";
import CreateIssueService from "src/app/services/api/landlord/create-issue-service";
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

  constructor(private createIssueService: CreateIssueService, public toastController: ToastController, private router: Router, private location: Location) {
    this.isFormValid = false;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "All fields must be filled to submit an issue",
      duration: 2000
    });
    toast.present();
  }

  async checkPressed(): Promise<void> {
    if (this.isFormValid) {
    const response = await this.createIssueService.CreateIssue(this.title, this.content);
    this.routeBack();
    } else {
      this.presentToast();
    }
  }

  cancelPressed() {
    this.routeBack();
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

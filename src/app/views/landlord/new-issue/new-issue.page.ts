import { Component, OnInit } from "@angular/core";
import LandlordIssueAPIService from "src/app/services/api/landlord/issue-api-service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ToastController, PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { Priority } from "../../../utils/priority.enum";

@Component({
  selector: "app-new-issue",
  templateUrl: "./new-issue.page.html",
  styleUrls: ["./new-issue.page.scss"],
})
export class NewIssuePage implements OnInit {

  title: string;
  content: string;
  houseId: number;
  priority: number;

  priorityString: string;

  isFormValid: boolean;

  constructor(private landlordIssueAPIService: LandlordIssueAPIService, public toastController: ToastController, 
    private router: Router, private location: Location, private pickerCtrl: PickerController) {
      this.isFormValid = false;
  }

  async showPicker() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: "Done"
        }
      ],
      columns: [{
        name: "Priority",
        options: [
          {text: "Low", value: "0"},
          {text: "Medium", value: "1"},
          {text: "High", value: "2"},
        ]
      }]
    };

    const picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn("Priority");
      this.priority = +col.options[col.selectedIndex].value;
      this.priorityString = Priority[this.priority];
    });
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
      const response = await this.landlordIssueAPIService.createIssue(this.title, this.content, this.houseId, this.priority);
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
    this.houseId = 1;
    this.priority = 0;

    this.priorityString = Priority[this.priority];
  }
}

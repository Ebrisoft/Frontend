import { Component, OnInit } from "@angular/core";
import LandlordIssueAPIService from "src/app/services/api/landlord/issue-api-service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ToastController, PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { Priority } from "../../../utils/priority.enum";
import LandlordHouseAPIService from "src/app/services/api/landlord/houses-api.service";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";
import { CurrentHouseService } from "src/app/services/observables/current-house-service";
import { IssueFeedService } from "src/app/services/observables/issue-feed-service";

@Component({
  selector: "app-new-issue",
  templateUrl: "./new-issue.page.html",
  styleUrls: ["./new-issue.page.scss"],
})
export class NewIssuePage implements OnInit {

  private ready: boolean = false;

  private houses: IHouseResponse[];

  title: string;
  content: string;
  houseId: number;
  priority: number;

  priorityString: string;

  isFormValid: boolean;

  constructor(private landlordIssueAPIService: LandlordIssueAPIService,
    private houseApiService: LandlordHouseAPIService,
    private currentHouseService: CurrentHouseService,
    public toastController: ToastController, 
    private router: Router, 
    private location: Location, 
    private pickerCtrl: PickerController,
    private issueFeedService: IssueFeedService) {
      this.isFormValid = false;
  }

  async showPicker() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: "Done"
        }
      ],
      columns: [
        {
          name: "Priority",
          options: [
            { text: "Low", value: "0" },
            { text: "Medium", value: "1" },
            { text: "High", value: "2" }
          ]
        }
      ]
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
      await this.landlordIssueAPIService.createIssue(this.title, this.content, this.houseId, this.priority);
      this.issueFeedService.triggerUpdate();
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
    if (!this.title || !this.content || !this.houseId || !this.priority) {
      this.isFormValid = false;
    }
  }

  async ngOnInit() {
    const fetchHouses = await this.houseApiService.getHouses();
    this.houses = fetchHouses.payload;

    this.title = this.content = "";
    this.priority = 1;
    if (this.currentHouseService.getCurrentHouse()) {
      this.houseId = this.currentHouseService.getCurrentHouse().id;
    }
    
    this.priorityString = Priority[this.priority];
    this.ready = true;
  }
}

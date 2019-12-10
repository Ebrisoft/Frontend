import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlertController } from "@ionic/angular";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import LandlordIssueAPIService from "../../../services/api/landlord/issue-api-service";
import { Priority } from "src/app/utils/priority.enum";

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.page.html",
  styleUrls: ["./issue-detail.page.scss"],
})
export class IssueDetailPage implements OnInit {

  private issue: IIssueResponse;
  private parsedDate: string;
  private secondaryColour: string;
  private priorityDisplay: string;

  constructor(private router: Router, 
              private activeRoute: ActivatedRoute, 
              private landlordIssueAPIService: LandlordIssueAPIService, 
              private location: Location, 
              private alertController: AlertController) { 

      this.activeRoute.params.subscribe((urlParameters) => {
        this.setIssueById(Number(urlParameters.id)).then(() => {
          this.parsedDate = new Date(this.issue.createdAt).toLocaleString();
          this.priorityDisplay = Priority[this.issue.priority];
          this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
        });
      });
  }

  ngOnInit() {
  }

  async setIssueById(id: number) {
    const fetchIssue = await this.landlordIssueAPIService.getIssueById(id);
    if (fetchIssue.statusCode === 200) {
      this.issue = fetchIssue.payload;
    }
  }

  async confirmMarkAsResolved() {
    const detailView = this;

    const alert = await this.alertController.create({
      header: "Resolve Issue",
      message: "Are you sure you want to mark this issue as resolved?",
      buttons: [
        {
          text: "Cancel",
          cssClass: "secondary",
          handler: () => { }
        }, {
          text: "Mark Resolved",
          cssClass: "bold",
          handler: async () => {
            detailView.landlordIssueAPIService.closeIssue(detailView.issue.id).then(() => {
              detailView.setIssueById(detailView.issue.id);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  backPressed() {
    this.routeBack();
  }

  routeBack() {
    this.location.back();
  }
}

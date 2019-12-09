import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AlertController } from "@ionic/angular";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";
import TenantIssueAPIService from "../../../services/api/tenant/issue-api-service";

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.page.html",
  styleUrls: ["./issue-detail.page.scss"],
})
export class IssueDetailPage implements OnInit {

  private issue: IIssueResponse;
  private parsedDate: string;
  private secondaryColour: string;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private tenantIssueAPIService: TenantIssueAPIService,
    private location: Location,
    private alertController: AlertController) {

    this.activeRoute.params.subscribe((urlParameters) => {
      this.setIssueById(Number(urlParameters.id)).then(() => {
        this.parsedDate = new Date(this.issue.createdAt).toLocaleString();
        this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
      });
    });
  }

  ngOnInit() {
    if (this.issue) {
      this.parsedDate = new Date(this.issue.createdAt).toLocaleString();
      this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
    }
  }

  async setIssueById(id: number) {
    const fetchIssue = await this.tenantIssueAPIService.getIssueById(id);
    if (fetchIssue.statusCode === 200) {
      this.issue = fetchIssue.payload;
    }
  }

  async presentAlertConfirm() {
    const detailView = this;

    const alert = await this.alertController.create({
      header: "Close Issue",
      message: "Are you sure you want to close this issue?",
      buttons: [
        {
          text: "Cancel",
          cssClass: "secondary",
          handler: () => { }
        }, {
          text: "Close Issue",
          cssClass: "bold",
          handler: async () => {
            await detailView.tenantIssueAPIService.closeIssue(detailView.issue.id);
            detailView.setIssueById(detailView.issue.id);
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

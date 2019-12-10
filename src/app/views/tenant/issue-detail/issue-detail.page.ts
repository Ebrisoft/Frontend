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
  private loggedInUserEmail: string;
  private isOwner: boolean = false;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private tenantIssueAPIService: TenantIssueAPIService,
    private location: Location,
    private alertController: AlertController) {

    this.activeRoute.params.subscribe((urlParameters) => {
      this.setIssueById(Number(urlParameters.id)).then(() => {
        this.parsedDate = new Date(this.issue.createdAt).toLocaleString();
        this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
        this.isOwner = this.loggedInUserEmail === this.issue.author.email;
      });
    });
  }

  ngOnInit() {
    this.loggedInUserEmail = localStorage.getItem("userEmail");
  }

  async setIssueById(id: number) {
    const fetchIssue = await this.tenantIssueAPIService.getIssueById(id);
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

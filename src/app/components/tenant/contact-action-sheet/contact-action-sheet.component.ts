import { Component } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-contact-action-sheet",
  templateUrl: "./contact-action-sheet.component.html",
  styleUrls: ["./contact-action-sheet.component.scss"],
})
export class ContactActionSheetComponent {

  constructor(private actionSheetController: ActionSheetController) { }

  async presentActionSheet(contactName: string) {
    const actionSheet = await this.actionSheetController.create({
      header: contactName,
      buttons: [{
        text: "Cancel",
        role: "cancel",
        icon: "close",
        handler: () => {
          console.log("Cancel clicked");
        }
      }, {
        text: "Call",
        icon: "call",
        handler: () => {
          console.log("Call clicked");
        }
      }, {
        text: "Email",
        icon: "mail",
        handler: () => {
          console.log("Mail clicked");
        }
      }]
    });
    await actionSheet.present();
  }
}

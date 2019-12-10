import { Component } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { CallNumber } from "@ionic-native/call-number/ngx";

@Component({
  selector: "app-contact-action-sheet",
  templateUrl: "./contact-action-sheet.component.html",
  styleUrls: ["./contact-action-sheet.component.scss"],
})
export class ContactActionSheetComponent {

  constructor(private actionSheetController: ActionSheetController, private callNumber: CallNumber) { }

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
          this.call();
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

  call() {
    this.callNumber.callNumber("07538955566", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}

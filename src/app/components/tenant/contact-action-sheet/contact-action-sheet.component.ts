import { Component} from "@angular/core";
import { ActionSheetController, ToastController } from "@ionic/angular";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";

@Component({
  selector: "app-contact-action-sheet",
  templateUrl: "./contact-action-sheet.component.html",
  styleUrls: ["./contact-action-sheet.component.scss"],
})
export class ContactActionSheetComponent {

  constructor(private actionSheetController: ActionSheetController, private callNumber: CallNumber, private emailComposer: EmailComposer) {}

  async presentActionSheet(contactName: string, contactNumber: string, contactEmail: string) {
    const emailButton = {
      text: "Email",
      icon: "mail",
      handler: () => {
        console.log("Mail clicked");
        this.email(contactEmail);
      }
    };

    const phoneButton = {
      text: "Call",
      icon: "call",
      handler: () => {
        console.log("Call clicked");
        this.call(contactNumber);
      }
    };

    const contactButtons = [];

    if (contactNumber) {
      contactButtons.push(phoneButton);
    }
    
    if (contactEmail) {
      contactButtons.push(emailButton);
    }
    
    const actionSheet = await this.actionSheetController.create({
      header: contactName,
      buttons: [{
        text: "Cancel",
        role: "cancel",
        icon: "close",
        handler: () => {
          console.log("Cancel clicked");
        }
      },
        ...contactButtons
      ]
    });

    await actionSheet.present();
  }

  call(contactNumber) {
    this.callNumber.callNumber(contactNumber, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }

  email(contactEmail) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        const email = {
          to: contactEmail,
          cc: "",
          bcc: ["", ""],
          attachments: [

          ],
          subject: "",
          body: "<br><br>Sent from Habitat",
          isHtml: true
        };

        this.emailComposer.open(email);
      }
    });
  }
}

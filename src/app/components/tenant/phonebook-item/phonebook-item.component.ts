import { Component, OnInit, Input } from "@angular/core";
import IPhonebookResponse from "src/app/models/response/landlord/phonebook-response.interface";
import { ContactActionSheetComponent } from "../contact-action-sheet/contact-action-sheet.component";

@Component({
  selector: "app-phonebook-item",
  templateUrl: "./phonebook-item.component.html",
  styleUrls: ["./phonebook-item.component.scss"],
})
export class PhonebookItemComponent implements OnInit {

  @Input()
  private contact: IPhonebookResponse;

  contactSubtitle: string;
  
  constructor(private actionSheet: ContactActionSheetComponent) {
  }

  ngOnInit() {
    if (this.contact.email) {
      this.contactSubtitle = this.contact.email;
    } else {
      this.contactSubtitle = this.contact.phoneNumber;
    }
  }

  clickContact() {
    this.actionSheet.presentActionSheet(this.contact.name, this.contact.phoneNumber, this.contact.email);
  }

}

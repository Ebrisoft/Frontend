import { Component, OnInit, Input } from "@angular/core";
import IPhonebookResponse from "src/app/models/response/tenant/phonebook-response.interface";
import { ContactActionSheetComponent } from "../contact-action-sheet/contact-action-sheet.component";

@Component({
  selector: "app-phonebook-item",
  templateUrl: "./phonebook-item.component.html",
  styleUrls: ["./phonebook-item.component.scss"],
})
export class PhonebookItemComponent implements OnInit {

  @Input()
  private contact: IPhonebookResponse;
  
  constructor(private actionSheet: ContactActionSheetComponent) { }

  ngOnInit() {
  }

  clickContact() {
    this.actionSheet.presentActionSheet(this.contact.name);
  }

}

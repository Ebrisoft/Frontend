import { Component, OnInit, Input } from "@angular/core";
import IPhonebookResponse from "src/app/models/response/tenant/phonebook-response.interface";

@Component({
  selector: "app-phonebook-item",
  templateUrl: "./phonebook-item.component.html",
  styleUrls: ["./phonebook-item.component.scss"],
})
export class PhonebookItemComponent implements OnInit {

  @Input()
  private contact: IPhonebookResponse;

  constructor() { }

  ngOnInit() {
    console.log("Hello");
  }

}

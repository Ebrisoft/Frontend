import { Component, OnInit, Inject } from "@angular/core";
import LandlordPhonebookAPIService from "src/app/services/api/landlord/phonebook-api.service";
import IPhonebookResponse from "src/app/models/response/landlord/phonebook-response.interface";

@Component({
  selector: "app-phonebook",
  templateUrl: "./phonebook.page.html",
  styleUrls: ["./phonebook.page.scss"],
})
export class PhonebookPage implements OnInit {

  contacts: IPhonebookResponse[];

  constructor(@Inject(LandlordPhonebookAPIService) private phonebookService: LandlordPhonebookAPIService) {

  }

  async getContacts() {
    const response = await this.phonebookService.getContacts();
    this.contacts = response.payload;
  }

  ngOnInit() {
    this.getContacts();
  }

}

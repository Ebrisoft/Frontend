import { Component, OnInit, Inject } from "@angular/core";
import TenantPhonebookAPIService from "src/app/services/api/tenant/phonebook-api.service";
import IPhonebookResponse from "src/app/models/response/tenant/phonebook-response.interface";

@Component({
  selector: "app-phonebook",
  templateUrl: "./phonebook.page.html",
  styleUrls: ["./phonebook.page.scss"],
})
export class PhonebookPage implements OnInit {

  contacts: IPhonebookResponse[];

  constructor(@Inject(TenantPhonebookAPIService) private phonebookService: TenantPhonebookAPIService) {

  }

  async getContacts() {
    const response = await this.phonebookService.getContacts();
    this.contacts = response.payload;
  }

  ngOnInit() {
    this.getContacts();
  }

}

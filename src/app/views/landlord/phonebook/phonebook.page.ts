import { Component, OnInit, Inject } from "@angular/core";
import LandlordPhonebookAPIService from "src/app/services/api/landlord/phonebook-api.service";
import IPhonebookResponse from "src/app/models/response/landlord/phonebook-response.interface";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";
import { CurrentHouseService } from "src/app/services/observables/current-house-service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-phonebook",
  templateUrl: "./phonebook.page.html",
  styleUrls: ["./phonebook.page.scss"],
})
export class PhonebookPage implements OnInit {

  pageTitle: string;
  contacts: IPhonebookResponse[] = [];
  currentHouse: IHouseResponse;
  subscription: Subscription;

  constructor(@Inject(LandlordPhonebookAPIService) private phonebookService: LandlordPhonebookAPIService, private currentHouseService: CurrentHouseService) {
    this.currentHouse = this.currentHouseService.getCurrentHouse();
    this.setPageTitle(this.currentHouse);
    this.subscription = this.currentHouseService.getSubject().subscribe(currentHouse => {
      this.setPageTitle(currentHouse);
    });
    
  }

  async getContacts() {
    const response = await this.phonebookService.getContacts();
    this.contacts = response.payload;
  }

  ngOnInit() {
    this.getContacts();
  }

  setPageTitle(currentHouse) {
    if (currentHouse) {
      this.currentHouse = currentHouse;
      this.pageTitle = "Contacts in " + this.currentHouse.name;
    } else {
      this.currentHouse = null;
      this.pageTitle = "Contacts in All Houses";
    }
  }

}

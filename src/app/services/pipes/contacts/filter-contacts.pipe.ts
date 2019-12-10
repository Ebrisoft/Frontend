import { Pipe, PipeTransform } from "@angular/core";
import IHouseResponseLandlord from "src/app/models/response/landlord/house-response.interface";
import IPhonebookResponseLandlord from "src/app/models/response/landlord/phonebook-response.interface";

@Pipe({ name: "FilterContacts" }) 
export class FilterContacts implements PipeTransform {
  transform(contacts: IPhonebookResponseLandlord[], currentHouse: IHouseResponseLandlord) {
    if (currentHouse == null) {
      return contacts;
    }
    return contacts.filter((element, index, array) => element.houseId === currentHouse.id);
  }
}

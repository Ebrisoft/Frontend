import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HouseSelectPage } from "./house-select.page";
import LandlordHouseAPIService from "src/app/services/api/landlord/houses-api.service";
import { HouseListItemComponent } from "src/app/components/landlord/house-list-item/house-list-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: HouseSelectPage}])
  ],
  providers: [ LandlordHouseAPIService ],
  declarations: [
    HouseSelectPage,
    HouseListItemComponent]
})
export class HouseSelectPageModule {}

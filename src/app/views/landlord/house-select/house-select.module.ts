import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HouseSelectPage } from "./house-select.page";
import LandlordHouseAPIService from "src/app/services/api/landlord/houses-api.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: HouseSelectPage}])
  ],
  providers: [ LandlordHouseAPIService ],
  declarations: [HouseSelectPage]
})
export class HouseSelectPageModule {}

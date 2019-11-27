import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PinboardPage } from "./pinboard.page";
import TenantPinBoardAPIService from "src/app/services/api/tenant/pinboard-api-service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: PinboardPage}])
  ],
  providers: [ TenantPinBoardAPIService ],
  declarations: [
    PinboardPage
  ]
})
export class PinboardPageModule {}

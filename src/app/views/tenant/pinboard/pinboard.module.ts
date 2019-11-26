import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PinboardPage } from "./pinboard.page";
import TenantPinBoardService from 'src/app/services/api/tenant/pinboard-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: "", component: PinboardPage}])
  ],
  providers: [ TenantPinBoardService ],
  declarations: [
    PinboardPage
  ]
})
export class PinboardPageModule {}

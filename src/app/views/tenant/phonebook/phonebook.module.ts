import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PhonebookPage } from "./phonebook.page";
import { PageHeaderModule } from "src/app/components/tenant/page-header/page-header.module";
import { PhonebookItemComponent } from "src/app/components/tenant/phonebook-item/phonebook-item.component";
import TenantPhonebookAPIService from "src/app/services/api/tenant/phonebook-api.service";
import { ContactActionSheetComponent } from 'src/app/components/tenant/contact-action-sheet/contact-action-sheet.component';

const routes: Routes = [
  {
    path: "",
    component: PhonebookPage
  }
];

@NgModule({
  imports: [
    PageHeaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [ 
    TenantPhonebookAPIService,
    ContactActionSheetComponent
  ],
  declarations: [
    PhonebookItemComponent,
    ContactActionSheetComponent,
    PhonebookPage,
  ]
})
export class PhonebookPageModule {}

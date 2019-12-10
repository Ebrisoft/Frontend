import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PhonebookPage } from "./phonebook.page";
import { PageHeaderModule } from "src/app/components/landlord/page-header/page-header.module";
import { PhonebookItemComponent } from "src/app/components/landlord/phonebook-item/phonebook-item.component";
import LandlordPhonebookAPIService from "src/app/services/api/landlord/phonebook-api.service";
import { ContactActionSheetComponent } from "src/app/components/landlord/contact-action-sheet/contact-action-sheet.component";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";

@NgModule({
  imports: [
    PageHeaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: PhonebookPage }])
  ],
  providers: [ 
    LandlordPhonebookAPIService,
    ContactActionSheetComponent,
    CallNumber,
    EmailComposer,
  ],
  declarations: [
    PhonebookItemComponent,
    ContactActionSheetComponent,
    PhonebookPage,
  ]
})
export class PhonebookPageModule {}

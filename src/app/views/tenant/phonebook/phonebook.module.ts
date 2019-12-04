import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { PhonebookPage } from "./phonebook.page";
import { PageHeaderModule } from "src/app/components/tenant/page-header/page-header.module";

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
  declarations: [
    PhonebookPage,
  ]
})
export class PhonebookPageModule {}

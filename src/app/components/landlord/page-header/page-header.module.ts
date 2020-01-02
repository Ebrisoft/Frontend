import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageHeaderComponent } from "./page-header.component";
import { IonicModule } from "@ionic/angular";
import { IconModule } from "../../shared/icon/icon.module";

@NgModule({
  declarations: [ PageHeaderComponent ],
  imports: [  
    CommonModule,
    IonicModule,
    IconModule
  ],
  exports: [ PageHeaderComponent ]
})
export class PageHeaderModule { }

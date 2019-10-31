import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.page';


@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }])
  ]
})
export class LoginModule { }

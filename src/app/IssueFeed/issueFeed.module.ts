import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueFeed } from './issueFeed.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: IssueFeed }])
  ],
  declarations: [IssueFeed]
})
export class IssueFeedModule {}

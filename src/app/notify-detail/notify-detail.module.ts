import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyDetailPageRoutingModule } from './notify-detail-routing.module';

import { NotifyDetailPage } from './notify-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifyDetailPageRoutingModule
  ],
  declarations: [NotifyDetailPage]
})
export class NotifyDetailPageModule {}

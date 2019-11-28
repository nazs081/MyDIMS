import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenedsheltersDetailPageRoutingModule } from './openedshelters-detail-routing.module';

import { OpenedsheltersDetailPage } from './openedshelters-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenedsheltersDetailPageRoutingModule
  ],
  declarations: [OpenedsheltersDetailPage]
})
export class OpenedsheltersDetailPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenedsheltersDetailPage } from './openedshelters-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OpenedsheltersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenedsheltersDetailPageRoutingModule {}

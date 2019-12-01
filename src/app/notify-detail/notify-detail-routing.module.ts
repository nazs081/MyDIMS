import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifyDetailPage } from './notify-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NotifyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifyDetailPageRoutingModule {}

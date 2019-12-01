import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyCommentPageRoutingModule } from './notify-comment-routing.module';

import { NotifyCommentPage } from './notify-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifyCommentPageRoutingModule
  ],
  declarations: [NotifyCommentPage]
})
export class NotifyCommentPageModule {}

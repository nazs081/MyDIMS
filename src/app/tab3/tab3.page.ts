import { NotifyService } from './../service/notification/notify.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(public notification: NotifyService,
              public loadingController: LoadingController) {}

  notify: any;

  async getNotifys() {
  const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  await loading.present();
  await this.notification.getNotifys()
    .subscribe(res => {
      this.notify = res.record;
      console.log(this.notify);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  ngOnInit(){
    this.getNotifys();
  }

}

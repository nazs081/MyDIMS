import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NotifyService } from './../service/notification/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from '../notify';
import { NotifyComment } from '../notifyComment';


@Component({
  selector: 'app-notify-detail',
  templateUrl: './notify-detail.page.html',
  styleUrls: ['./notify-detail.page.scss'],
})
export class NotifyDetailPage implements OnInit {

  currentURL: string;

  constructor(public apinotify: NotifyService,
              public alertController: AlertController,
              public route: ActivatedRoute,
              public router: Router) { }

  notify: Notify = { f110broadcastid: '', f110title: '', f110broadcasttext: '', f110createdon: null,
                     f110createdby: '', f110lastupdatedon: null, f110lastupdatedby:'' };

  isLoadingResults = false;

  async getNotify() {
  if (this.route.snapshot.paramMap.get('id') === 'null') {
    this.presentAlertConfirm('Sila Pilih Notifikasi');
  } else {
    this.isLoadingResults = true;
    await this.apinotify.getNotify(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.notify = res.record;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    }
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['']);
          }
        }
      ]
    });
      await alert.present();
  }

  ngOnInit() {
    this.getNotify();
  }

  notifyComment(id: any) {
  this.router.navigate([ '/notify-comment', id ]);
  }

}

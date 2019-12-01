import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NotifyService } from './../service/notification/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyComment } from '../notifyComment';

@Component({
  selector: 'app-notify-comment',
  templateUrl: './notify-comment.page.html',
  styleUrls: ['./notify-comment.page.scss'],
})
export class NotifyCommentPage implements OnInit {

  currentURL: string;

  constructor(public apinotify: NotifyService,
              public alertController: AlertController,
              public route: ActivatedRoute,
              public router: Router) { }

  notifycomment: NotifyComment[] = [];

  isLoadingResults = false;

  async getNotifyComment() {
  if (this.route.snapshot.paramMap.get('id') === 'null') {
    this.presentAlertConfirm('hebahan komen tiada dalam senarai ');
  } else {
    this.isLoadingResults = true;
    await this.apinotify.getNotifyComment(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.notifycomment = res.record;
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
    this.getNotifyComment();
  }


}

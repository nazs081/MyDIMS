import { OpenedSheltersService } from './../service/shelters/opened-shelters.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Shelters } from '../shelters';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public openedSheltersService: OpenedSheltersService,
              public loadingController: LoadingController,
              public router: Router,
              public route: ActivatedRoute) { }

  shelters: Shelters[] = [];

  async getShelters() {
  const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  await loading.present();
  await this.openedSheltersService.getShelters()
    .subscribe(res => {
      this.shelters = res;
      console.log(this.shelters);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

  ngOnInit(){
    this.getShelters();
  }

}

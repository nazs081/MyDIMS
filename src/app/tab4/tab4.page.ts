import { ReportingService } from './../service/reporting/reporting.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Reporting } from '../reporting';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public report: ReportingService,
              public loadingController: LoadingController,
              private iab: InAppBrowser) { }

  // reporting: Reporting[] = [];
  reporting: any;
  url: any;

  async getReporting() {
  const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  await loading.present();
  await this.report.getReporting()
    .subscribe(res => {
      this.reporting = res.record;
      console.log(this.reporting);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

  ngOnInit(){
    this.getReporting();
  }

  launchURL(link)
  {

    this.url = `https://mydims.nadma.gov.my/Modules/Reports/LaporanTerkini/publicview.php?idLaporan=${link}`;
    this.iab.create(this.url,'_system','location=yes');
  }

}

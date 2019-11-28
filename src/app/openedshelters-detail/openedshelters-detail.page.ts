import { OpenedSheltersService } from './../service/shelters/opened-shelters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-openedshelters-detail',
  templateUrl: './openedshelters-detail.page.html',
  styleUrls: ['./openedshelters-detail.page.scss'],
})

export class OpenedsheltersDetailPage implements OnInit {

  shelter: any;
  currentURL: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.shelter = this.activatedRoute.snapshot.paramMap.get("shelters");
    this.currentURL = this.router.url;

    console.log(this.shelter);


  }
}

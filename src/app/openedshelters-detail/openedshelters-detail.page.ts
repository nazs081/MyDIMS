import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Shelters } from '../shelters';


@Component({
  selector: 'app-openedshelters-detail',
  templateUrl: './openedshelters-detail.page.html',
  styleUrls: ['./openedshelters-detail.page.scss'],
})

export class OpenedsheltersDetailPage implements OnInit {

  //shelter: Shelters [];
  shelter: any;
  currentURL: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.shelter = this.activatedRoute.snapshot.params;
    this.currentURL = this.router.url;

    console.log(this.shelter);


  }
}

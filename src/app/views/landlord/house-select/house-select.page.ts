import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-house-select',
  templateUrl: './house-select.page.html',
  styleUrls: ['./house-select.page.scss'],
})
export class HouseSelectPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  routeBack() {
    this.location.back();
  }
}

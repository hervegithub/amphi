import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.page.html',
  styleUrls: ['./prices.page.scss'],
})
export class PricesPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.2,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkoutDone: boolean = false;
  itemsCheckout: any;
  totalPrice: any;

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.itemsCheckout = this.globalService.getItemList().length;
    this.totalPrice = this.globalService.getTotalPrice();
    this.checkoutDone = this.itemsCheckout > 0 ? true : false;
  }
}

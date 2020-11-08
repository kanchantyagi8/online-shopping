import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-landing',
  templateUrl: './checkout-landing.component.html',
  styleUrls: ['./checkout-landing.component.scss']
})
export class CheckoutLandingComponent implements OnInit {
  totalItems = [];
  totalPrice: number = 0;

  constructor(public globalService: GlobalService, private router: Router) {
  }

  ngOnInit(): void {
    this.totalItems = this.globalService.getItemList();
    this.totalItems.forEach((e) => {
      this.totalPrice = this.totalPrice + e.price * e.quantity;
    });
    this.globalService.setTotalPrice(this.totalPrice);
  }

  addItem(item) {
    this.totalPrice = this.totalPrice + item.price;
    this.globalService.setTotalPrice(this.totalPrice);
    this.globalService.setItemList(item);
    return item;
  }

  removeItem(item, remove) {
    this.totalPrice = this.totalPrice - item.price*item.quantity;
    this.globalService.setTotalPrice(this.totalPrice);
    this.globalService.setItemList(item, remove);
    this.totalItems = this.globalService.getItemList();
  }

  checkout() {
    this.router.navigate(['']);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  itemList = [];
  totalItems = [];
  totalPrice = 0;

  constructor() { }

  setTotalItems(allItems) {
    this.totalItems = allItems;
  }

  getTotalItems() {
    return this.totalItems;
  }

  setTotalPrice(price) {
    this.totalPrice = price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  setItemList(item, value?) {
    let itemAvailable = false;
    if(value === 'remove') {
      this.itemList = this.itemList.filter((e) => e.id !== item.id)
    } else {
      this.itemList.map((e) => {
        if(e.id === item.id) {
          e.quantity++;
          itemAvailable = true;
        }
      });
      if(!itemAvailable) {
        this.itemList.push(item)
      }
    }
  }

  getItemList() {
    return this.itemList;
  }
}

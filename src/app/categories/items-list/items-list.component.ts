import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  itemList = [];
  showSpinner: boolean = true;

  constructor(
    public globalService: GlobalService,
    public categoryService: CategoryService
  ) 
  { }

  ngOnInit() {
    this.itemList = this.globalService.getTotalItems();
    if(this.itemList.length > 0) {
      this.showSpinner = false;
      return
    } else {
      this.categoryService.getItemsList().subscribe((res) => {
        this.itemList = res;
        this.showSpinner = false;
        this.globalService.setTotalItems(this.itemList);
      }, (error) => {
        console.log("Something went wrong", error);
      })
    }
  }

  addToCart(item) {
    item.quantity = 1;
    this.globalService.setItemList(item);
  }

}

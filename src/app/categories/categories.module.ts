import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [ItemsListComponent, ItemComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})

export class CategoriesModule { 
  constructor() {
    console.log("CategoriesModule");
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutLandingComponent } from './checkout-landing/checkout-landing.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [CheckoutLandingComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { 
  constructor() {
    console.log("CheckoutModule")
  }
}

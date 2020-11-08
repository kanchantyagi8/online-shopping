import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutLandingComponent } from './checkout-landing/checkout-landing.component';

const routes: Routes = [
    { 
        path: '', 
        component: CheckoutLandingComponent 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheckoutRoutingModule { }

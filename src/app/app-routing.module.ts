import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(
      m => m.CategoriesModule
    )
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(
      m => m.CheckoutModule
    )
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

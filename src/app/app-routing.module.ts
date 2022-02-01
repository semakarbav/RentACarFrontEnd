import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CustomerCardDetailComponent } from './components/customer-card-detail/customer-card-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { RentComponent } from './components/rent/rent.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CustomersComponent } from './components/customers/customers.component';


const routes: Routes = [
  {path:"cars",component:CarComponent},
 {path:"cars/color/:colorId",component:CarComponent},
 {path:"cars/brand/:brandId",component:CarComponent},
 {path:"cars/segment/:segmentId",component:CarComponent},
 {path:"cars/car-detail/:id",component:CarDetailComponent},
 {path:"car-detail/rent/:id",component:RentComponent},
 {path:"cars/brand-add",component:BrandAddComponent},
 {path:"cars/car-add",component:CarAddComponent},
 {path:"cars/color-add",component:ColorAddComponent},
 {path: "rent/:id", component: RentComponent},
 {path:"payment/:id", component:PaymentComponent},
 {path:"customer", component:CustomersComponent},
 {path:"customer-card-detail/:id", component:CustomerCardDetailComponent},
 {path:"invoice/:id", component:InvoiceComponent},
 {path:"",component:DashboardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

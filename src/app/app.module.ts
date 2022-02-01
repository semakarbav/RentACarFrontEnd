import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {DataViewModule} from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {TabViewModule} from 'primeng/tabview';
import { ListboxModule } from 'primeng/listbox';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CardModule, } from 'primeng/card';
import { RentComponent } from './components/rent/rent.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import {DialogModule} from 'primeng/dialog';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CalendarModule } from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import { CustomersComponent } from './components/customers/customers.component';
import { IndividualCustomersComponent } from './components/customers/individual-customers/individual-customers.component';
import { CorporateCustomersComponent } from './components/customers/corporate-customers/corporate-customers.component';
import {PasswordModule} from 'primeng/password';
import { NaviComponent } from './components/navi/navi.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {TableModule} from 'primeng/table';
import {StepsModule} from 'primeng/steps';
import {InputMaskModule} from 'primeng/inputmask';
import { CustomerCardDetailComponent } from './components/customer-card-detail/customer-card-detail.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import {MenuModule} from 'primeng/menu';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {DragDropModule} from 'primeng/dragdrop';
import {CarouselModule} from 'primeng/carousel';
import { FooterComponent } from './footer/footer.component';
import { UserCommentComponent } from './components/user-comment/user-comment.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { SegmentComponent } from './components/segment/segment.component';
@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    CarAddComponent,
    RentComponent,
    BrandAddComponent,
    ColorAddComponent,
    CustomersComponent,
    IndividualCustomersComponent,
    CorporateCustomersComponent,
    NaviComponent,
    PaymentComponent,
    CustomerCardDetailComponent,
    InvoiceComponent,
    DashboardComponent,
    FooterComponent,
    UserCommentComponent,
    CampaignComponent,
    SegmentComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    ListboxModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ToastrModule.forRoot(),
    DialogModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    TabViewModule,
    PasswordModule,
    MultiSelectModule,
    OrderListModule,
    TableModule,
    StepsModule,
    InputMaskModule,
    MenuModule,
    DragDropModule,
    CarouselModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

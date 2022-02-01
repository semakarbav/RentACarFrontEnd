import { RentalListModel } from './../../models/rentalsModels/rentalListModel';
import { PaymentListModel } from './../../models/paymentModels/paymentListModel';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from './../../services/paymentService/payment.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAddForm:FormGroup;
  rentalId: number ;
  totalPrice: number;
  paymentDate: Date;
  payment:PaymentListModel;

  constructor(private paymentService:PaymentService, private router: Router,
    private formBuilder: FormBuilder,private toastrService: ToastrService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getRouteRentalId();
    this.getTotalPrice();
    this.createPaymentAddForm();
    
  }
  createPaymentAddForm(){
    this.paymentAddForm=this.formBuilder.group({
      rentalId: [this.rentalId,Validators.required],
      paymentDate: [this.paymentDate],
      promotionId: [''],
      totalPrice:[this.totalPrice]
    })
  }
  getRouteRentalId(){
    
    this.activatedRoute.params.subscribe(params => { 
      this.rentalId = params["id"]
      
    })
  }
  getTotalPrice(){
    this.paymentService.getTotalSumByRentalId(this.rentalId).subscribe(params=>{
      this.totalPrice = params.data;
    })
  }

  addPayment(){
    if(this.paymentAddForm.valid){
      let paymentModel :PaymentListModel =Object.assign({},this.paymentAddForm.value);
      paymentModel.paymentDate=new Date();
      console.log(paymentModel.paymentDate=new Date())
      this.paymentService.addPayments(paymentModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı")
        
        this.router.navigateByUrl('/customer-card-detail/'+this.rentalId);

      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat");
    }
  }
 

}

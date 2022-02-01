import { RentalListModel } from './../../models/rentalsModels/rentalListModel';
import { PaymentListModel } from './../../models/paymentModels/paymentListModel';
import { ToastrService } from 'ngx-toastr';
import { CardDetailService } from './../../services/cardDetailServices/card-detail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-card-detail',
  templateUrl: './customer-card-detail.component.html',
  styleUrls: ['./customer-card-detail.component.css']
})
export class CustomerCardDetailComponent implements OnInit {
  cardDetailForm: FormGroup;
  rentalId: RentalListModel ;
  paymentId:number;
  constructor(private formBuilder: FormBuilder,private router: Router,private activatedRoute:ActivatedRoute,
    private cardDetailService:CardDetailService,private toastrService:ToastrService) { }
   
  createCardDetailForm(){
   this.cardDetailForm = this.formBuilder.group({
      cardHoldName:['',Validators.required],
      cardNo: ['',Validators.required],
      year: ['',Validators.required],
      month: ['',Validators.required],
      cvv: ['',Validators.required],
      customerId: ['',Validators.required],
    })
  }
  ngOnInit(): void {
    this.getRoutePaymentId()
    this.createCardDetailForm();
  }
  getRoutePaymentId(){
    
    this.activatedRoute.params.subscribe(params => { 
      this.paymentId = params["id"]
      
    })
  }
  addCardDetail(){
    if(this.cardDetailForm.valid)
    {
      let cardModel=Object.assign({},this.cardDetailForm.value)
      this.cardDetailService.addCardDetail(cardModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı")

        this.router.navigateByUrl('/invoice/'+ this.paymentId);
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMEssage,"Doğrulama Hatası")
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat");
    }
  }

}

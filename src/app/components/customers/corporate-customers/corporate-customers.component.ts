import { ToastrService } from 'ngx-toastr';
import { CorporateCustomerService } from './../../../services/corporateCustomerService/corporate-customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-customers',
  templateUrl: './corporate-customers.component.html',
  styleUrls: ['./corporate-customers.component.css']
})
export class CorporateCustomersComponent implements OnInit {
  corporateCustomerForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private corporateCustomerService :CorporateCustomerService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCorporateCustomerForm()
  }

  createCorporateCustomerForm(){
    this.corporateCustomerForm=this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
    companyName: ['',Validators.required],
    taxNumber: ['',Validators.required]
    })
  }
  addCorporateCustumer(){
    console.log(this.corporateCustomerForm.value);
    
    if(this.corporateCustomerForm?.valid){
      let corporateCustomerModel= Object.assign({},this.corporateCustomerForm.value)
      this.corporateCustomerService.addCorporateCustomer(corporateCustomerModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }   
        } 
      })
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }

}

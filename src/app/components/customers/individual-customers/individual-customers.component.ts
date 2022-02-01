import { ToastrService } from 'ngx-toastr';
import { IndividualCustomerService } from './../../../services/individualCustomerService/individual-customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-customers',
  templateUrl: './individual-customers.component.html',
  styleUrls: ['./individual-customers.component.css']
})
export class IndividualCustomersComponent implements OnInit {
  individualCustomerAddForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private individualCustomerService :IndividualCustomerService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createIndividualCustomerForm();
  }
  createIndividualCustomerForm(){
    this.individualCustomerAddForm=this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      birthDate: ['',Validators.required],
      tcNumber: ['',Validators.required]
    })}
    addIndividualCustomer(){
      if(this.individualCustomerAddForm.valid){
        let individualCustomerModel=Object.assign({},this.individualCustomerAddForm.value);
        this.individualCustomerService.addIndividualCustomer(individualCustomerModel).subscribe((response)=>{
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

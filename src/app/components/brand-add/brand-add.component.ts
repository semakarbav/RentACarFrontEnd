import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateBrandRequest } from '../../models/brandModels/createBrandRequest';
import { BrandService } from '../../services/brandService/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup |any ; 
  constructor(private brandService:BrandService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }
  display: boolean = false;
  createBrandForm(){
    this.brandAddForm= this.formBuilder.group({
      name:['',Validators.required]
    })
  }


  ngOnInit(): void {
    this.createBrandForm();
  }
  addBrand(){
    console.log("marka");
    
    if(this.brandAddForm?.valid){
      let brandModel=Object.assign({},this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı")
        console.log("marka1");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")}       
        }
      })  
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }

}

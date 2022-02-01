import { CarListModel } from '../../models/carModels/carList';
import { SegmentService } from './../../services/segmentService/segment.service';
import { ColorService } from './../../services/colorService/color.service';
import { BrandService } from '../../services/brandService/brand.service';
import { ColorListModel } from '../../models/colorModels/colorList';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/carService/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandListModel } from 'src/app/models/brandModels/brandList';
import { SegmentListModel } from 'src/app/models/segmentList';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm :FormGroup | any;
  constructor(private formBuilder:FormBuilder,private segmentsService:SegmentService,private colorService:ColorService,private carService:CarService,private brandService:BrandService ,private toastrService:ToastrService) { }
   brands: BrandListModel[] =[];
   colors: ColorListModel [] =[];
   segments: SegmentListModel [] =[];
    brand ?: BrandListModel;
    color?: ColorListModel;
    car?: CarListModel;
  createProductAddForm(){
  this.carAddForm =this.formBuilder.group({
    dailyPrice:['',Validators.required],
    modelYear: ['',Validators.required],
    description: ['',Validators.required],
    findexScore: ['',Validators.required] ,
    kilometer: ['',Validators.required],
     brandId: ['',Validators.required],
     colorId: ['',Validators.required],
    minAge: ['',Validators.required],
    segmentId: ['',Validators.required]
  })}
  ngOnInit(): void {
    this.createProductAddForm();
    this.getSegments()
    this.getBrands()
    this.getColors()
  }
  getBrands(){
  this.brandService.getBrands().subscribe((response)=>{
  this.brands=response.data;
})
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
    this.colors=response.data;
  })
    }
  getSegments(){
    this.segmentsService.getSegments().subscribe((response)=>{
      this.segments=response.data;
    })
  }
  addCar(){
    console.log(this.carAddForm.value);
    
    if(this.carAddForm?.valid){
      let carModel= Object.assign({},this.carAddForm.value)
      this.carService.addCar(carModel).subscribe((response)=>{
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
  setCurrentBrand(brand: BrandListModel){
    console.log(brand.name)
    this.brand=brand;
  }
  setCurrentColor(color: ColorListModel){
    console.log(color.name)
    this.color=color;
  }
  setCurrentCar(car: CarListModel){
    console.log(car.id)
    this.car=car;
  }

}

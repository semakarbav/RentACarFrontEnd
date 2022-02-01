import { AdditionalServiceService } from './../../services/additionalServiceService/additional-service.service';
import { RentalListModel } from './../../models/rentalsModels/rentalListModel';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalService } from './../../services/rentalService/rental.service';
import { ToastrService } from 'ngx-toastr';
import { CarListModel } from '../../models/carModels/carList';
import { CarService } from './../../services/carService/car.service';
import { CityListModel } from './../../models/cityList';
import { CityService } from './../../services/cityService/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdditionalServiceListModel } from 'src/app/models/additionalServiceModels/additionalServiceList';
import { CreateRentRequest } from 'src/app/models/rentalsModels/createRentRequest';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  rentAddForm:FormGroup |any;
  cities: CityListModel[]=[];
  city: CityListModel | any;
  cars: CarListModel[]=[];
  car ?: CarListModel;
  carId: number | any;
  rental:RentalListModel;
  additionalService: AdditionalServiceListModel;
  selectedAdditionalServices: AdditionalServiceListModel[] = []
  additionalServices: AdditionalServiceListModel[] = [];
  constructor(private formBuilder:FormBuilder,private cityService:CityService,private carService:CarService,private additionalServiceService:AdditionalServiceService,
    private rentalService:RentalService, private router : Router, private toastrService: ToastrService, private activatedRoute: ActivatedRoute ) { }
  createRentAddForm(){
    this.rentAddForm=this.formBuilder.group({
      rentDate:['',Validators.required],
      returnDate:['',Validators.required],
      rentedKilometer: ['',Validators.required],
      returnedKilometer: ['',Validators.required],
      customerId: ['',Validators.required],
      carId: [this.carId,Validators.required],
      pickUpCityId: ['',Validators.required],
      returnCityId: ['',Validators.required],
    })
  }
  
  getRouteCarId(){
    
    this.activatedRoute.params.subscribe(params => { 
      this.carId = params["id"]
    })
  }

  ngOnInit(): void {
    this.getRouteCarId();
    this.getCities()
    this.createRentAddForm()
    this.getAdditionalServices();
    
  }

  getAdditionalServices() {
    this.additionalServiceService.getAdditionalService().subscribe((response) => {
      this.additionalServices = response.data;
    })
  }
  getCities(){
    return this.cityService.getCities().subscribe((response)=>{
      this.cities=response.data;
    })
  }
  getCars(){
    return this.carService.getCars().subscribe((response)=>{
      this.cars=response.data;
    })
  }

  addRentalCorporateCustomer(){
    
    if(this.rentAddForm?.valid){

      let rentalModel : CreateRentRequest = Object.assign({},this.rentAddForm.value)
      rentalModel.additionalServices = [];
      this.selectedAdditionalServices.map( x => rentalModel.additionalServices.push(x.id) );
      
      this.rentalService.addForCorporateCustomer(rentalModel).subscribe((response)=>{
      this.toastrService.success(response.message,"Başarılı")
      console.log(response.data);
      
      this.rental = response.data
      this.router.navigateByUrl('/payment/'+this.rental.id);
      
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

  addRentalIndividualCustomer(){
   
    if(this.rentAddForm?.valid){
      let rentalModel: CreateRentRequest = Object.assign({},this.rentAddForm.value)
      rentalModel.additionalServices = [];
      this.selectedAdditionalServices.map( x => rentalModel.additionalServices.push(x.id) );
     
      this.rentalService.addForIndividualCustomer(rentalModel).subscribe((response)=>{
      this.toastrService.success(response.message,"Başarılı")
      console.log(response.data);
      
      this.rental = response.data

      this.router.navigateByUrl('/payment/'+this.rental.id);
     
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

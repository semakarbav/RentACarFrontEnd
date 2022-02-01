import { CarListModel } from '../../models/carModels/carList';
import { CarService } from './../../services/carService/car.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars:CarListModel[]=[];
  car ?:CarListModel;
  dataLoaded=false;
  sortOptions: SelectItem[] | undefined;
  sortOrder: number | undefined;
  sortField: string | undefined;
  constructor(private carService:CarService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];
 this.getCars();
  this.activatedRoute.params.subscribe(params=>{
    if(params["colorId"])
    {
      this.getCarByColorId(params["colorId"]);
    }
    else if(params["brandId"]){
      this.getCarByBrandId(params["brandId"])
    }
    else{
      this.getCars();
    }
  })
  }
  getCars(){
    this.carService.getCars().subscribe((response)=>{
        this.dataLoaded= false;
        this.cars=response.data;
        this.dataLoaded=true;
    })
  }
  getCarByColorId(colorId:number){
    this.carService.getCarByColorId(colorId).subscribe((response)=>{  
      this.cars=response.data;
      console.log(response.data);
    })
  }
  getCarByBrandId(brandId:number){
    this.carService.getCarByBrandId(brandId).subscribe((response)=>{
      this.cars=response.data;
      console.log(response.data);
    })

  }
  carAdd(cars: CarListModel){
    this.carService.addCar(cars);
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}

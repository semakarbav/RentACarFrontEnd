import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/carService/car.service';
import { CarListModel } from '../../models/carModels/carList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car ?:CarListModel
  constructor(private carService:CarService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params)=>{
     console.log(params["id"]);
     
     this.getCarById(params["id"])
   })
  
  }
   getCarById(carId:number){
    this.carService.getCarById(carId).subscribe((response)=>{
      console.log(response.data);
      this.car=response.data;
    })

  }

}

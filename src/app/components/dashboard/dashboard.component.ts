import { CarService } from './../../services/carService/car.service';
import { CarListModel } from './../../models/carModels/carList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars: CarListModel[];
  car ?:CarListModel;

	responsiveOptions;
  constructor(private carService:CarService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    this.carService.getCars().subscribe((response)=>{
        
        this.cars=response.data;
       
    })
  }

}

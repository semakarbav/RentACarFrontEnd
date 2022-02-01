import { SingleResponseModel } from '../../models/responseModels/singleResponseModel';
import { CarListModel } from '../../models/carModels/carList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModels/responseModel';
import { CreateCarRequest } from 'src/app/models/carModels/createCarRequest';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "http://localhost:8080/api/cars/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarListModel>>{
      let newPath=this.apiUrl+"getall";
      return this.httpClient.get<ListResponseModel<CarListModel>>(newPath)
                                 
  }
  getCarByColorId(colorId: number):Observable<ListResponseModel<CarListModel>>{
    let newPath=this.apiUrl+"getCarByColorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }
  getCarByBrandId(brandId:number):Observable<ListResponseModel<CarListModel>>{
    let newPath=this.apiUrl+"getCarByBrandId?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }
  getCarById(carId:number){
    let newPath=this.apiUrl+"getCarById?carId="+carId;
    return this.httpClient.get<SingleResponseModel<CarListModel>>(newPath);
  }
  addCar(car:CreateCarRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",car)
  }
}

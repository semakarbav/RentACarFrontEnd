import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';
import { RentalListModel } from '../../models/rentalsModels/rentalListModel';
import { SingleResponseModel } from './../../models/responseModels/singleResponseModel';
import { ResponseModel } from 'src/app/models/responseModels/responseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRentRequest } from 'src/app/models/rentalsModels/createRentRequest';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl: string = "http://localhost:8080/api/rentals/";
  constructor(private httpClient:HttpClient) { }

  addRental(rental: CreateRentRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",rental);
  }
  addForIndividualCustomer(rental:CreateRentRequest): Observable<SingleResponseModel<RentalListModel>>{ 
    return this.httpClient.post<SingleResponseModel<RentalListModel>>(this.apiUrl+"addIndividualCustomer",rental)
  }
  addForCorporateCustomer(rental:CreateRentRequest): Observable<SingleResponseModel<RentalListModel>>{ 
    return this.httpClient.post<SingleResponseModel<RentalListModel>>(this.apiUrl+"addCorporateCustomer",rental)
  }
  getRentals(): Observable<ListResponseModel<RentalListModel>>{
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl+"getall");
  }
}

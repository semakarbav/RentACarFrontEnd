import { ListResponseModel } from '../../models/responseModels/listResponseModel';
import { ResponseModel } from '../../models/responseModels/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateIndividualCustomerRequest } from 'src/app/models/individualCustomerModels/createIndividualCustomerRequest';


@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {
  apiUrl: string = "http://localhost:8080/api/individualCustomer/";
  constructor(private httpClient:HttpClient) { }

  // getIndividualCustomers():Observable<ListResponseModel<IndividualCustomerListModel>>{
  //   let newPath=this.apiUrl+"getall";
  //   return this.httpClient.get<ListResponseModel<IndividualCustomerListModel>>(newPath)
  // }

  addIndividualCustomer(individualCustomer: CreateIndividualCustomerRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",individualCustomer);
  }
}

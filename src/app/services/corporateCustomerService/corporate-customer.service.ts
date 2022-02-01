import { ResponseModel } from '../../models/responseModels/responseModel';
import { CreateCorporateCustomerRequest } from './../../models/createCorporateCustomerRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {
  apiUrl: string = "http://localhost:8080/api/corporateCustomer/";
  constructor(private httpClient:HttpClient) { }

  addCorporateCustomer(corporateCustomer: CreateCorporateCustomerRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",corporateCustomer);
  }
}

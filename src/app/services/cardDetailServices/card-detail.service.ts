import { CustomerCardDetailListModel } from './../../models/customerCardDetailModels/CustomerCardDetailListModel';
import { SingleResponseModel } from './../../models/responseModels/singleResponseModel';
import { Observable } from 'rxjs';
import { CreateCustomerCardDetailRequest } from './../../models/customerCardDetailModels/createCustomerCardDetailRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {
  apiUrl:string="http://localhost:8080/api/customerCardDetails/"
  constructor(private httpClient:HttpClient) { }

  addCardDetail(cardDetail:CreateCustomerCardDetailRequest): Observable<SingleResponseModel<CustomerCardDetailListModel>>{ 
    return this.httpClient.post<SingleResponseModel<CustomerCardDetailListModel>>(this.apiUrl+"add",cardDetail);
  }
}

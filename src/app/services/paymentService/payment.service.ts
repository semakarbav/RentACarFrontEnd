import { CreatePaymentRequest } from 'src/app/models/paymentModels/createPaymentRequest';
import { PaymentListModel } from './../../models/paymentModels/paymentListModel';
import { SingleResponseModel } from './../../models/responseModels/singleResponseModel';
import { ResponseModel } from 'src/app/models/responseModels/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl: string="http://localhost:8080/api/payments/"
  constructor(private httpClient: HttpClient) { }

  addPayments(payment: CreatePaymentRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",payment);
  }
  getPaymentByRentalId(rentalId: number):Observable<SingleResponseModel<PaymentListModel>>{
    let newPath=this.apiUrl+"getByRentalId/"+rentalId;
    return this.httpClient.get<SingleResponseModel<PaymentListModel>>(newPath);
  }

  getTotalSumByRentalId(rentalId: number){
    let newPath=this.apiUrl+"gettotalsumbyrentalid/"+rentalId;
    return this.httpClient.get<SingleResponseModel<number>>(newPath);
  }
  
  
}

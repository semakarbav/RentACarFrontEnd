import { InvoiceCorporateListModel } from './../../models/invoiceModels/invoiceCorporateListModel';
import { SingleResponseModel } from './../../models/responseModels/singleResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
 apiUrl: string="http://localhost:8080/api/invoices/getInvoiceForCorporateCustomer/"
  constructor(private httpClient: HttpClient) { }

  getInvoiceForCorporateCustomer(rentalId: number):Observable<SingleResponseModel<InvoiceCorporateListModel>>{
    return this.httpClient.get<SingleResponseModel<InvoiceCorporateListModel>>(this.apiUrl+rentalId)
  }
}

import { CreateAdditionalServiceList } from './../../models/additionalServiceModels/createAdditionalServiceList';
import { AdditionalServiceListModel } from './../../models/additionalServiceModels/additionalServiceList';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {
 apiUrl: string="http://localhost:8080/api/additionalservice/"
  constructor(private httpClient:HttpClient) { }

  getAdditionalService():Observable<ListResponseModel<AdditionalServiceListModel>>{
    return this.httpClient.get<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl+"getall");
  }
  
  add(services: CreateAdditionalServiceList[]): Observable<ListResponseModel<AdditionalServiceListModel>> {
    return this.httpClient.post<ListResponseModel<AdditionalServiceListModel>>(
      this.apiUrl+'add',services);
  }

}

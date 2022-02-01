import { CityListModel } from './../../models/cityList';
import { ListResponseModel } from '../../models/responseModels/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl: string = "http://localhost:8080/api/cities/";
  constructor(private httpClient:HttpClient) { }

  getCities():Observable<ListResponseModel<CityListModel>>{
    return this.httpClient.get<ListResponseModel<CityListModel>>(this.apiUrl+"getall")
  }
}

import { ResponseModel } from '../../models/responseModels/responseModel';
import { CreateColorRequest } from '../../models/colorModels/createColorRequest';
import { ColorListModel } from '../../models/colorModels/colorList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:8080/api/colors/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<ColorListModel>>{
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl+"getall");
  }
  addColor(color: CreateColorRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",color);
  }
}

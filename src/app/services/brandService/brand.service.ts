import { CreateBrandRequest } from '../../models/brandModels/createBrandRequest';
import { ResponseModel } from '../../models/responseModels/responseModel';
import { BrandListModel } from '../../models/brandModels/brandList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "http://localhost:8080/api/brands/";
  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+"getall");
  }
  addBrand(brand:CreateBrandRequest):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",brand);
  }
}

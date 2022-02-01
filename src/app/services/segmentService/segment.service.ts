import { ListResponseModel } from '../../models/responseModels/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { SegmentListModel } from './../../models/segmentList';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  apiUrl: string = "http://localhost:8080/api/segments/";
  constructor(private httpClient:HttpClient) { }
  getSegments(): Observable<ListResponseModel<SegmentListModel>>{
    console.log("listeler");
    return this.httpClient.get<ListResponseModel<SegmentListModel>>(this.apiUrl+"getall");
   
  }
}

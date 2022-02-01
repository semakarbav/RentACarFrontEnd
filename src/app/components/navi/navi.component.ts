import { SegmentListModel } from 'src/app/models/segmentList';
import { SegmentService } from './../../services/segmentService/segment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private segmentsService:SegmentService) { }
 
  ngOnInit(): void {
    
  }
 

}

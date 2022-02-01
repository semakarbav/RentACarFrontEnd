import { SegmentService } from './../../services/segmentService/segment.service';
import { SegmentListModel } from './../../models/segmentList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  
  segment ?: SegmentListModel;
  segments: SegmentListModel[]=[]
  
  selectedSegment?: SegmentListModel[];
  constructor(private segmentService:SegmentService) { }

  ngOnInit(): void {
    this.getSegments()
  }

  getSegments(){
    this.segmentService.getSegments().subscribe((response)=>{
        
        this.segments=response.data;
      
    })
  }
  setCurrentSegment(segment: SegmentListModel){
    console.log(segment.name)
    this.segment=segment;
  }

}

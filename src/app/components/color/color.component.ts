import { PrimeNGConfig } from 'primeng/api';
import { ColorService } from './../../services/colorService/color.service';
import { ColorListModel } from '../../models/colorModels/colorList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
   colors: ColorListModel[]=[];
   dataLoaded= false;
   color ?:ColorListModel; 
  constructor(private colorService:ColorService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getColors();
    this.primengConfig.ripple = true;
  }
  getColors(){
     this.colorService.getColors().subscribe((response)=>{
      this.dataLoaded= false;
      this.colors=response.data;
      this.dataLoaded=true;
    })
}
setCurrentColor(color: ColorListModel){
  console.log(color.name)
  this.color=color;
}
}
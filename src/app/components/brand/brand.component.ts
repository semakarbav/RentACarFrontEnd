import { BrandListModel } from '../../models/brandModels/brandList';
import { BrandService } from '../../services/brandService/brand.service';
import { Component, OnInit } from '@angular/core';
import {ListboxModule} from 'primeng/listbox';
import { PrimeNGConfig } from 'primeng/api';

@Component({  //decoration:bir classın angularda ne işe yaradığını anlatırız.
  selector: 'app-brand', //componenti hangi tag ile çağrırız
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brand ?: BrandListModel;
  brands: BrandListModel[]=[]
  dataLoaded: boolean= false;
  selectedBrand?: BrandListModel[];
  
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();

  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
        this.dataLoaded= false;
        this.brands=response.data;
        this.dataLoaded=true;
    })
  }
  setCurrentBrand(brand: BrandListModel){
    console.log(brand.name)
    this.brand=brand;
  }

}

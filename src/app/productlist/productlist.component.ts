import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productdetails=[]
  constructor(public prod :ProductService) { }

  ngOnInit() {

    
  }
  getProductName()
  {
    this.productdetails=this.prod.getProductDetails()
  }


}

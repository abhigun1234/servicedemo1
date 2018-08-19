import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css'],
  providers:[ProductService]
})
export class ProductinfoComponent implements OnInit {
  
  productdetails=[]

  constructor(private prodservice :ProductService) { }

  ngOnInit() {
    
  }
  getProductDetails()
  {
   this.productdetails=this.prodservice.getProductDetails()
   console.log(this.productdetails)

  }

}

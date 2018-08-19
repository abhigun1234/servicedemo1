import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[{name:"addidas",price:2345,
  description:"addidas sport shoes"},
  {name:"nike",price:2343,
  description:"nike sport shoes"},
  {name:"rebook",price:2643,
  description:"rebook sport shoes"}]
  constructor() { }

  public getProductDetails()
  {

    return this.productDetails
  }
}

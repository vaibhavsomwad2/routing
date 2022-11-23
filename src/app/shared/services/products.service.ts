import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray:Iproducts[]=[
  {
    pId:1,
    pName:'Samsung',
    pStatus: 'In Progress',
    pCanEdit:1
  },
  {
    pId:2,
    pName:'Nokia',
    pStatus: 'Disptched',
    pCanEdit:1
  },
  {
    pId:3,
    pName:'Iphone',
    pStatus: 'Delivered',
    pCanEdit:0
  }
]
  constructor() { }
  getAllProducts(): Iproducts[]{
    return this.productsArray
  }

  getProducts(id:number){
    return this.productsArray.find(p => p.pId === id)
  }
  
}

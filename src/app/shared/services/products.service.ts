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
    pStatus: 'In Progress'
  },
  {
    pId:2,
    pName:'Nokia',
    pStatus: 'Disptched'
  },
  {
    pId:3,
    pName:'Iphone',
    pStatus: 'Delivered'
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

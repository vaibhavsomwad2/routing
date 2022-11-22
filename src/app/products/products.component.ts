import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../shared/model/products';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productArray:Iproducts[] =[];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productArray = this.productsService.getAllProducts()
  }

}

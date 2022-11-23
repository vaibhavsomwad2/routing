import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from '../shared/model/products';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productArray:Iproducts[] =[];
ActiveId:number = 1;
  constructor(private productsService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productArray = this.productsService.getAllProducts()
  }

}

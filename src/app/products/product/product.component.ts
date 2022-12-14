import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productObj:Iproducts | undefined;
productId:number = 1
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productObj = this.productsService.getProducts(this.productId)
  }

}

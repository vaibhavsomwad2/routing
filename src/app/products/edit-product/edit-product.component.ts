import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productObj:Iproducts | undefined;
  pId:number = 1
  constructor(private productsServices:ProductsService, private route :ActivatedRoute) { }

  ngOnInit(): void {
        // this.pId = +this.route.snapshot.params['id']
      this.route.params.subscribe((myParams:Params)=>{
      this.pId = +myParams['id']
      this.productObj = this.productsServices.getProducts(this.pId)
    })
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : '', component:HomeComponent
  },
  {
    path : 'products', component : ProductsComponent
  },
  {
    path : 'products/:id', component : EditProductComponent
  },
  {
    path:'users', component : UsersComponent
  },
  {
    path:'users/:id', component : UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

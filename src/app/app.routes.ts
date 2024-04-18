import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  { path : "home" , component : HomeComponent},
  { path : "dashboard" , component : DashboardComponent},
  { path : "products" , component : ProductsComponent},
  { path : "newProduct" , component : NewProductComponent},
  { path : "editProduct/:id" , component : EditProductComponent},
  { path : "" , redirectTo : "/home", pathMatch : "full"}
];

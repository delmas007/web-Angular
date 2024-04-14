import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Product} from "../model/product.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  productFormGroup! : FormGroup;
  productId! : number;
  constructor( private productService : ProductService, private activatedRoute : ActivatedRoute,private fb: FormBuilder){
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.productFormGroup = this.fb.group({
          id: this.fb.control(product.id),
          name: this.fb.control(product.name),
          price: this.fb.control(product.price),
          checked : this.fb.control(product.checked),
        });
      },
      error : err =>{
        console.log(err)
      }
    })
    }
  updateProduct(){
    let product : Product = this.productFormGroup.value;
    this.productService.updateProduct(product).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error : err =>{
        console.log(err)
      }
    })
  }
  }



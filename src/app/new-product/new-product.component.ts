import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{

  public productForm!: FormGroup;
  constructor(public fb: FormBuilder,private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control(null,Validators.required),
      price: this.fb.control(null,[Validators.required,Validators.min(1)]),
      checked : this.fb.control(false),

    });

  }

  saveProduct() {
    let product = this.productForm.value;
  this.productService.saveProduct(product).subscribe({
    next: value => {
      alert(JSON.stringify(value));
    },
    error: error => {
      console.log(error);
    }
  })


  }
}

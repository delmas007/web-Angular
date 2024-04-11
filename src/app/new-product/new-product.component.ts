import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{

  public productForm!: FormGroup;
  constructor(public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control(''),
      price: this.fb.control(''),
      checked : this.fb.control(false),

    });
    
  }

}

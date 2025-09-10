import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product as ProductModel } from '../../../shared/models/product.model'; 
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
@Input({required: true}) product!: ProductModel;

@Output() addToCart = new EventEmitter();

addToCartHandler(){
    this.addToCart.emit(this.product);
}
}

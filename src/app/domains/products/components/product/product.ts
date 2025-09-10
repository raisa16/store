import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product as ProductModel } from '../../../shared/models/product.model'; 
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, UpperCasePipe ],
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

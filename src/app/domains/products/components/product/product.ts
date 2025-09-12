import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product as ProductModel } from '../../../shared/models/product.model'; 
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '../../../shared/pipes/reverse-pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago-pipe';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe,TimeAgoPipe, UpperCasePipe, ReversePipe ],
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

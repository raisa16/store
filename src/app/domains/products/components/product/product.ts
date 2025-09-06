import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
@Input({required: true}) img: string = '';
@Input({required: true}) title: string = '';
@Input({required:true}) price: number = 0;

@Output() addToCart = new EventEmitter();
addToCartHandler(){
    console.log('Click from child'); 
    this.addToCart.emit("Este es un mensaje del hijo" + this.title);
}
}

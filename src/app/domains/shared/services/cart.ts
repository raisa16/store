import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cart = signal<Product[]>([]);
  total = computed(() =>{
    return this.cart().reduce((total, product) => total + product.price, 0);
  });

  addToCart(product: Product) {
    this.cart.update((products) => [...products, product]);
  }
}

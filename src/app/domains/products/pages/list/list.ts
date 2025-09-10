import { Component,signal, WritableSignal } from '@angular/core';
import { Product } from '../../components/product/product';
import { Product as ProductModel } from '../../../shared/models/product.model';  
import { Header } from '../../../shared/components/header/header';
@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  products: WritableSignal<ProductModel[]> = signal([]);
  cart: WritableSignal<ProductModel[]> = signal([]);
  

  constructor() {
    const initProducts = [
      { id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=232'
      }, 
      { id: Date.now(), 
        title: 'Product 2', 
        price: 200, 
        image: 'https://picsum.photos/640/640?r=233' 
      },
      { id: Date.now(),
        title: 'Product 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=223'
      }, 
      { id: Date.now(), 
        title: 'Product 4', 
        price: 200, 
        image: 'https://picsum.photos/640/640?r=234' 
      },
      { id: Date.now(),
        title: 'Product 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=235'
      }, 
      { id: Date.now(), 
        title: 'Product 6', 
        price: 200, 
        image: 'https://picsum.photos/640/640?r=236' 
      }
    ];
    
    this.products.set(initProducts);
  }
  
  addToCart(product: ProductModel) {
    this.cart.update(prevEstate => [...prevEstate, product]);
    
}
}

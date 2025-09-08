import { Component,signal, WritableSignal } from '@angular/core';
import { Product } from '../../components/product/product';
import { Product as ProductModel } from '../../../shared/models/product.model';  

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  products: WritableSignal<ProductModel[]> = signal([]);

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
      }
    ];
    
    this.products.set(initProducts);
  }
  
  fromChild(event: string) {
    console.log("este es el padre");
    console.log(event);
}
}

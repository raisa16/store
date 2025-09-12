import { Component,inject,signal, WritableSignal } from '@angular/core';
import { Product } from '../../components/product/product';
import { Product as ProductModel } from '../../../shared/models/product.model';  
//import { Header } from '../../../shared/components/header/header';
import { Cart } from '../../../shared/services/cart';
import { Product as ProductService } from '../../../shared/services/product';
@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  products: WritableSignal<ProductModel[]> = signal([]);
  private cart = inject(Cart);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products);
        }, error: (error: any) => {
      console.error(error);
    }
  });
  }
  
  addToCart(product: ProductModel) {
    this.cart.addToCart(product);
    
}
}

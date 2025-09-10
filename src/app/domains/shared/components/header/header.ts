import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];
  total = signal(0);

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calculateTotal());
    }
  }
  calculateTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}

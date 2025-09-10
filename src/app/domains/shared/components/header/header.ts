import { Component, Input, signal, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  hideSideMenu = signal(true);
  private cartService = inject(Cart);
  cart = this.cartService.cart;
  total = this.cartService.total
  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}

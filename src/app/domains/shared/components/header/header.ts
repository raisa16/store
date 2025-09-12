import { Component, signal, inject } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive, RouterModule } from '@angular/router';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive,RouterModule],
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

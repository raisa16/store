import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Product } from '../../../shared/services/product';
import { Product as ProductModel } from '../../../shared/models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../../../shared/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export default class ProductDetail {
  @Input() id?: string;
  product = signal<ProductModel | null>(null);
  selectedImage = signal<string | null>(null);

  private productService = inject(Product);
  private cart = inject(Cart);

  selectImage(image: string) {
    this.selectedImage.set(image);
  }

  ngOnInit() {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (item: any) => {
          this.product.set(item);
          if (item.images.length > 0) {
            this.selectedImage.set(this.product()?.images[0] || null);
          }
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    }
  }
  selectCoverImage(img: string) {
    this.selectedImage.set(img);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cart.addToCart(product);
    }
  }
}

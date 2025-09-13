import { Component, inject, Input, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { Product } from '../../components/product/product';
import { Product as ProductModel } from '../../../shared/models/product.model';
import { Cart } from '../../../shared/services/cart';
import { Product as ProductService } from '../../../shared/services/product';
import { Category } from '../../../shared/services/category';
import { Category as CategoryModel } from '../../../shared/models/Category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [Product, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {
  products: WritableSignal<ProductModel[]> = signal([]);
  categories: WritableSignal<CategoryModel[]> = signal([]);

  private cart = inject(Cart);
  private productService = inject(ProductService);
  private categoryService = inject(Category);

  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }
  addToCart(product: ProductModel) {
    this.cart.addToCart(product);
  }
  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}

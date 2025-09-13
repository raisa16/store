import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product as ProductModel } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);

  getProducts(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<ProductModel[]>(url.toString()).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          images: product.images.map((image) => this.cleanAndParseImageUrl(image)),
        }))
      )
    );
  }

  private cleanAndParseImageUrl(image: string): string {
    let cleanedImage = image.replace(/^\["?|"?]$/g, '');
    try {
      cleanedImage = JSON.parse(cleanedImage);
    } catch (error) {
      //
    }
    return cleanedImage;
  }
  getProduct(id: string) {
    return this.http.get<ProductModel>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}

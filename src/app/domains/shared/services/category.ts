import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category as CategoryModel } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class Category {
  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<CategoryModel[]>('https://api.escuelajs.co/api/v1/categories');
  }
}

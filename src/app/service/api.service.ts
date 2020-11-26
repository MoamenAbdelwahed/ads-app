import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from '../model/category.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/categories/';

  getCategories() {
    return this.http.get(this.baseUrl);
  }

  getCategoryById(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  createCategory(category: Category) {
    return this.http.post(this.baseUrl, category);
  }

  updateCategory(category: Category) {
    return this.http.put(this.baseUrl + category.id, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}

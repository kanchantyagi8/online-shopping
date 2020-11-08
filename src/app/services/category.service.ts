import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getItemsList() {
      return this.http.get<any>('https://fakestoreapi.com/products', {responseType: 'json'});
  }
}

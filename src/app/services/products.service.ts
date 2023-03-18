import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get<any[]>('../../assets/json/products.json');
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>('../../assets/json/products.json');
  }
}

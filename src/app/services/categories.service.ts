import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories() {
    return this.httpClient.get<any[]>('../../assets/json/categories.json');
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>('../../assets/json/categories.json');
  }
}

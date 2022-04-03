import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'http://localhost:4201'

  sub: Subject<Product[]> = new Subject();

//Per chiamare la lista prodotti: `${this.baseUrl}/products`
//Per chiamare un prodotto in dettaglio: `${this.baseUrl}/products/${id}`

  constructor(private http: HttpClient) { }

caricaProdotti(){
  return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
  metodoDettagli(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }
}

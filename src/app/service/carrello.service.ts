import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root',
})
export class CarrelloService {
    carrello: Product[] =  [];
    contatore = new Subject<number>();
    counterNum = 0



    constructor() {}

    visualizzaCarrello() {
        return this.carrello;
    }

    aggiungiProdotto(prodotto: Product) {
        this.carrello = [...this.carrello,prodotto];
        this.contatore.next(this.carrello.length);

    }

    svuotaCarrello() {
        this.carrello = [];
        this.contatore.next(0);
        this.counterNum = 0
    }

    carrelloCounter(){
        this.counterNum++
        this.contatore.next(this.counterNum)
    }
}

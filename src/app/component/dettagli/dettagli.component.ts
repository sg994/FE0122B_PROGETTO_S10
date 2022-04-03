import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CarrelloService } from 'src/app/service/carrello.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
    mioProdotto!: Product

    constructor(
        private prodottiSrv: ProductsService,
        private router: ActivatedRoute,
        private carrelloSrv : CarrelloService

    ) {}

    ngOnInit(): void {
        this.router.params.subscribe(async(params) => {
            const id = +params['id'];
            this.prodottiSrv.metodoDettagli(id).subscribe((prodotto) => {
                this.mioProdotto = prodotto;
            });
        });
    }

    aggiungiCarello(){
        this.carrelloSrv.aggiungiProdotto(this.mioProdotto as Product)
        this.carrelloSrv.carrelloCounter()
        console.log(this.carrelloSrv)
    }


}

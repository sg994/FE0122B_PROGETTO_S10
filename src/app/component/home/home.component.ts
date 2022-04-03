import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
prodottiInArrivo!: Product[]
  constructor(private router: Router, private  productSrv: ProductsService) {}

  ngOnInit(){
    this.productSrv.caricaProdotti().subscribe((prodarrivato) => {
    this.prodottiInArrivo = prodarrivato;
    console.log(this.prodottiInArrivo);
  });
 }
}

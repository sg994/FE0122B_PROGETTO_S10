import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/service/carrello.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

totale : number = 0

  constructor(private carrelloSrv : CarrelloService) {}

  ngOnInit(): void {
      this.carrelloSrv.contatore.subscribe((conta)=>{
          this.totale = conta
      })
  }

}

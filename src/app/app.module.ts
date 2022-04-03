import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Route } from '@angular/router';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { DettagliComponent } from './component/dettagli/dettagli.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const Routes: Route[] = [
  { path:'', component: HomeComponent},
  { path: 'carrello' , component: CarrelloComponent},
  { path: 'dettagli/:id', component: DettagliComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrelloComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GrillaHomeComponent } from './components/grilla-home/grilla-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AboutComponent } from './components/about/about.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { RouterModule } from '@angular/router';

import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarroComprasComponent } from './components/carro-compras/carro-compras.component';
import { ItemCarroComprasComponent } from './components/item-carro-compras/item-carro-compras.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    GrillaHomeComponent,
    FooterComponent,
    TiendaComponent,
    AboutComponent,
    CuentaComponent,
    ListaProductosComponent,
    ItemProductoComponent,
    CarroComprasComponent,
    ItemCarroComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path: 'about', component: AboutComponent},
        {path: 'home', component: GrillaHomeComponent},
        {path: 'tienda', component: TiendaComponent},
        {path: 'cuenta', component: CuentaComponent},
        {path: 'carrito', component: CarroComprasComponent},
        {path: 'lista-productos', component: ListaProductosComponent}
      ]
    ),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

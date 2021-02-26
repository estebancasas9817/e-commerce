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

// import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
// import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
// import { CarroComprasComponent } from './components/carro-compras/carro-compras.component';
// import { ItemCarroComprasComponent } from './components/item-carro-compras/item-carro-compras.component';
// import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
// import { CartComponent } from './components/shopping-cart/cart/cart.component';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
// import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';



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
    ShoppingCartComponent,
    CartComponent,
    CartItemComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    
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
        {path: 'carrito', component: CartComponent},
        // {path: 'lista-productos', component: ListaProductosComponent}
      ]
    ),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

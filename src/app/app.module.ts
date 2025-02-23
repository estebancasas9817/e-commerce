import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GrillaHomeComponent } from './components/grilla-home/grilla-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AboutComponent } from './components/about/about.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/cuenta/login/login.component';
import { RegistroComponent } from './components/cuenta/registro/registro.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { VerCarritoComponent } from './components/shopping-cart/ver-carrito/ver-carrito.component';
import { VerCarritoItemComponent } from './components/shopping-cart/ver-carrito/ver-carrito-item/ver-carrito-item.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { ListadoComprasComponent } from './components/listado-compras/listado-compras.component';
import { PanelAdminComponent } from './components/administrador/panel-admin/panel-admin.component';
import { CrudAdminComponent } from './components/administrador/crud-admin/crud-admin.component';
import { ReporteVentasAdminComponent } from './components/administrador/reporte-ventas-admin/reporte-ventas-admin.component';
import { CuentaAdminComponent } from './components/administrador/cuenta-admin/cuenta-admin.component';
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
    PageNotFoundComponent,
    LoginComponent,
    RegistroComponent,
    VerCarritoComponent,
    VerCarritoItemComponent,
    PagarComponent,
    DetalleCompraComponent,
    ListadoComprasComponent,
    PanelAdminComponent,
    CrudAdminComponent,
    ReporteVentasAdminComponent,
    CuentaAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      [
        {path:'', redirectTo:'/home', pathMatch:'full'},
        {path: 'about', component: AboutComponent},
        {path: 'home', component: GrillaHomeComponent},
        {path: 'tienda', component: TiendaComponent},
        {path: 'cuenta', component: CuentaComponent},
        {path: 'carrito', component: CartComponent},
        {path: 'productos', component: ShoppingCartComponent},
        {path: 'verCarro', component: VerCarritoComponent},
        {path: 'pagar', component: PagarComponent},
        {path: 'detalle-compra', component:DetalleCompraComponent},
        {path: 'listado-compras', component:ListadoComprasComponent},
        {path: 'reporte-ventas', component:ReporteVentasAdminComponent},
        {path: 'crud-admin', component:CrudAdminComponent},
        {path: 'panel-admin', component:PanelAdminComponent},
        {path: 'cuenta-admin', component:CuentaAdminComponent},
        {path: 'reportes-admin', component:ReporteVentasAdminComponent},
        {path: '**', component: PageNotFoundComponent},
        
      ]
    ),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

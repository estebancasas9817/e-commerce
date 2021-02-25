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
import { CuentaAdminComponent } from './cuenta-admin/cuenta-admin.component';
import { BeachwearComponent } from './beachwear/beachwear.component';
import { TopComponent } from './components/top/top.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { BuzosComponent } from './components/buzos/buzos.component';
import { GorrasComponent } from './components/gorras/gorras.component';


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
    CuentaAdminComponent,
    BeachwearComponent,
    TopComponent,
    ShortsComponent,
    CamisetasComponent,
    BuzosComponent,
    GorrasComponent
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
        {path: 'admin', component: CuentaAdminComponent},
        {path: 'beachwear', component: BeachwearComponent},
        {path: 'top', component: TopComponent},
        {path: 'shorts', component: ShortsComponent},
        {path: 'camisetas', component: CamisetasComponent},
        {path: 'buzos', component: BuzosComponent},
        {path: 'gorras', component: GorrasComponent}
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

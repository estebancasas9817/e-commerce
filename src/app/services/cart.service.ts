import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cart } from 'src/app/models/cart';
import { cartUrl } from 'src/config/api';
import {listadoUrl} from 'src/config/api';
import {detalleUrl} from 'src/config/api';
import { Product } from '../models/product';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import {EventEmitter, Output} from '@angular/core'

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {
  allEmployee: Cart[];

  mockUrl: string = 'http://localhost:3000/cart';
  mockListaUrl: string = 'http://localhost:3000/compras';
  mockDetalleUrl: string = 'http://localhost:3000/detalle-compra';
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService) { }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            const tiempo = new Date();
            const fecha =tiempo.getDate()+'/'+(tiempo.getMonth())+'/'+(tiempo.getFullYear());
            const usuario = document.querySelector(".textoUsuario");
            cartItems.push(new Cart(item.id, item.product,1,fecha,usuario.textContent));
          }
        }

        return cartItems;
      })
    );
  }

  getListadoItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(listadoUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            const tiempo = new Date();
            const fecha =tiempo.getDate()+'/'+(tiempo.getMonth())+'/'+(tiempo.getFullYear());
            const usuario = document.querySelector(".textoUsuario");
            cartItems.push(new Cart(item.id, item.product,1,fecha,usuario.textContent));
          }
        }

        return cartItems;
      })
    );
  }


  getDetalleItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(detalleUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {

              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            const tiempo = new Date();
            const fecha =tiempo.getDate()+'/'+(tiempo.getMonth())+'/'+(tiempo.getFullYear());
            const usuario = document.querySelector(".textoUsuario");
            cartItems.push(new Cart(item.id, item.product,1,fecha,usuario.textContent));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

  addProductToList(product: Product): Observable<any> {
    return this.http.post(listadoUrl, { product });
  }
  addProductToDetalle(product: Product): Observable<any> {
    return this.http.post(detalleUrl, { product });
  }
  eliminarCarro(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  }

  eliminarCarros(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  }

  eliminarLista(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockListaUrl + '/' + id, headerOption);
  }

  eliminarDetalle(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockDetalleUrl + '/' + id, headerOption);
  }

  getAllEmployee() {
    this.ngxSpinnerService.show();
    return this.http.get<Cart[]>(this.mockUrl, headerOption).subscribe(
      (data: Cart[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  getLista() {
    this.ngxSpinnerService.show();
    return this.http.get<Cart[]>(this.mockListaUrl, headerOption).subscribe(
      (data: Cart[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
        // console.log(this.allEmployee.length);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
        return this.allEmployee.length;
      });  
  }
}

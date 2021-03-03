import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cart } from 'src/app/models/cart';
import { cartUrl } from 'src/config/api';
import {listadoUrl} from 'src/config/api';
import { Product } from '../models/product';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


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
            cartItems.push(new Cart(item.id, item.product));
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
            cartItems.push(new Cart(item.id, item.product));
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
  eliminarCarro(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  }

  eliminarCarros(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  }

  eliminarLista(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockListaUrl + '/' + id, headerOption);
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
}

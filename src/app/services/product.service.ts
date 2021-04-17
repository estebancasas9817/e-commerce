import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { NgxSpinnerService } from "ngx-spinner";
import { map } from 'rxjs/operators';


const apiUrl = "http://localhost:3000/products";

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  // allProducts: Product[];
  // mockUrl: string = 'http://localhost:3000/products';

  // currentProduct: Product = {
  //   nombre: '',
  //   descripcion: '',
  //   precio: null,
  //   id: null,
  //   fotos: ''
  // }  
  constructor(private http:HttpClient) { }
  recuperarListaProductoRemoto():Observable<any>{
    return this.http.get<any>("http://localhost:10/getlistaproductos");
  }

  agregarProductoRemoto(product: Product):Observable<any>{
    return this.http.post<any>('http://localhost:10/crearproducto',product);

  }

  modificarProductoRemoto(product: Product): Observable<any>{
    return this.http.post<any>('http://localhost:10/modificarproducto',product);
  }

  recuperarListaProductoPorId(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:10/getlistaproductosporid/'+id);
  }
  eliminarProductoPorId(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:10/eliminarproducto/' + id);
  }



  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(apiUrl);
  // }

  // createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.mockUrl, product, headerOption);
  // }

  // updateProduct(product: Product): Observable<Product> {
  //   return this.http.put<Product>(this.mockUrl + '/' + product.id, product, headerOption);
  // }

  // getAllEmployee() {
  //   this.ngxSpinnerService.show();
  //   return this.http.get<Product[]>(this.mockUrl, headerOption).subscribe(
  //     (data: Product[]) => {
  //       this.allProducts = data;
  //       console.table(this.allProducts);
  //       setTimeout(() => {
  //         this.ngxSpinnerService.hide();
  //       }, 500);
  //     });
  // }

  // deleteProduct(id: Number): Observable<Product> {
  //   return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  // }

  // getProductItems(): Observable<Product[]> {
  //   return this.http.get<Product[]>(apiUrl).pipe(
  //     map((result: any[]) => {
  //       let productItems: Product[] = [];

  //       for (let item of result) {
  //         let productExists = false

  //         for (let i in productItems) {
  //           if (productItems[i].id === item.product.id) {
  //             productExists = true
  //             break;
  //           }
  //         }
  //       }

  //       return productItems;
  //     })
  //   );
  // }
}

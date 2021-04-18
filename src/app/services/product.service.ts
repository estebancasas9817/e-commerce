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

}

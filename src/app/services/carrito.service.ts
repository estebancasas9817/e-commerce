import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import db from 'src/app/files/db.json'
import { Ventaa } from '../models/ventaa';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public productosApp: Product[] =[]; 
  public listadoProductosCarrito: Product[] =[];
  public listadoProductosComprados: Product[] =[];
  public listadoProductosHistorial: Product[] =[];
  public listaproductos: { id: number, nombre: string, descripcion: string, precio: number, fotos: string }[] = db;


  
  constructor(private http:HttpClient) { 
    
  }

  public agregarItemCarrito(producto: Product){
    this.listadoProductosCarrito.push(producto);
    this.getProductosCarrito();
  }

  getProductosCarrito(){
    return (this.listadoProductosCarrito);
  }


  agregarVenta(venta:Ventaa):Observable<any>{
    
    console.log(venta);
    return this.http.post<any>('http://localhost:10/crearventa',venta);

  }

  

 


  public eliminarItemCarrito(producto: Product){
    var listadoProductosCarritoActualizado: Product[] =[];

    for(let i=0; i < this.listadoProductosCarrito.length;i++){
      if(this.listadoProductosCarrito[i] != producto){
        listadoProductosCarritoActualizado.push(this.listadoProductosCarrito[i]);
      }
    }
    this.listadoProductosCarrito=listadoProductosCarritoActualizado;
  }

  public setListadoProductosComprados(productos:Product[]){
    var j=this.listadoProductosComprados.length;
    for ( let i = 0; i < productos.length; i++ ) {
      this.listadoProductosComprados[ j ] = productos[ i ];
      j++;
   }
  }



}

import { Injectable } from '@angular/core';
import {Producto} from 'src/app/models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[] = [
    new Producto(1,"Producto 1","Descripcion producto 1",100),
    new Producto(2,"Producto 2","Descripcion producto 2",200),
    new Producto(3,"Producto 3","Descripcion producto 3",300),
    new Producto(4,"Producto 4","Descripcion producto 4",400),
    new Producto(5,"Producto 5","Descripcion producto 5",500),
    new Producto(6,"Producto 6","Descripcion producto 6",600)
  ]
  constructor() { }
  getProductos(): Producto[]{
    return this.productos;
  }
}

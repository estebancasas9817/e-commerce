import { Product } from './product';

export class Cart {
  id: number;
  productId: number;
  productnombre: string;
  productImage: string;
  qty: number;
  precio: number;
  date:string;
  usuario:string;

  constructor(id: number, product: Product, qty = 1,date:string,usuario: string) {
    this.id = id;
    this.productId = product.id;
    this.productnombre = product.nombre;
    this.productImage = product.fotos;
    this.precio = product.precio;
    this.qty = qty;  
    this.date = date;
    this.usuario = usuario;
  }
}
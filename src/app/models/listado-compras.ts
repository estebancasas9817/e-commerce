import { Product } from './product';
export class ListadoCompras {
  id: number;
  productId: number;
  productnombre: string;
  productImage: string;
  qty: number;
  precio: number;
  date:string;

  constructor(id: number, product: Product, qty = 1,date) {
    this.id = id;
    this.productId = product.id;
    this.productnombre = product.nombre;
    this.productImage = product.fotos;
    this.precio = product.precio;
    this.qty = qty;
    this.date = date;
  }
}

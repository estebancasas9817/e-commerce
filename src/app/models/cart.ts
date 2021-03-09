import { Product } from './product';

export class Cart {
  id: number;
  productId: number;
  productName: string;
  productImage: string;
  qty: number;
  price: number;
  date:string;
  usuario:string;

  constructor(id: number, product: Product, qty = 1,date:string,usuario: string) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.productImage = product.imageUrl;
    this.price = product.price;
    this.qty = qty;  
    this.date = date;
    this.usuario = usuario;
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CarritoService } from 'src/app/services/carrito.service';
import db from 'src/app/files/db.json'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  public productos: Product[] = [];
  public productosDestacados: Product[] = [];
  public listaproductos: { id: number, nombre: string, descripcion: string, precio: number, fotos: string }[] = db;


  public productosCarrito: Product[] = [];

  cartItems = [];

  cartTotal = 0
  
  public cantItems:number;
  public totalCarrito: number;

  constructor(
    private msg: MessengerService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {

    
    
  }

  handleAddToCart(producto: Product) {
    this.carritoService.agregarItemCarrito(producto);
    // this.productosCarrito=this.carritoService.getProductosCarrito();
    this.mostrarCarro();
    
  }

  mostrarCarro(){
    console.log("sdsdsdsd");
    this.productosCarrito=this.carritoService.getProductosCarrito();
    
    
    this.cantItems=this.productosCarrito.length;
    if(this.cantItems !=0){
    let j = 0;
    for(let i=0;i<this.productosCarrito.length;i++){
      j= j+ Number (this.productosCarrito[i].precio);
    }
    this.totalCarrito = j;
    }
  }

  eliminarCarro(producto:Product){
    console.log("eliminado",producto);
    this.carritoService.eliminarItemCarrito(producto);
    this.mostrarCarro();
    this.cantItems=this.productosCarrito.length;

  }

  hola(){
    this.mostrarCarro();
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
// import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import {CarritoService} from 'src/app/services/carrito.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: Product
  public productosCarrito: Product[] = [];
  public cantItems:number;
  public totalCarrito: number;

  constructor(private msg: MessengerService,
    private carritoService: CarritoService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    
  }

  eliminarCarro(producto:Product){
    console.log("eliminado",producto);
    this.carritoService.eliminarItemCarrito(producto);
    this.mostrarCarro();
    this.cantItems=this.productosCarrito.length;

  }

  mostrarCarro(){
    console.log("entra");
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

}

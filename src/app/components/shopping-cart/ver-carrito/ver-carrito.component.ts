import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { Cart } from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service'
import db from 'src/app/files/db.json'
@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent implements OnInit {
  public productosCarrito: Product[] = [];
  public cantItems:number;
  public totalCarrito: number;

  public productos: Product[] = [];
  public productosDestacados: Product[] = [];
  public listaproductos: { id: number, nombre: string, descripcion: string, precio: number, fotos: string }[] = db;


  // public productosCarrito: Product[] = [];

  @Input() cartItem: any
  
  constructor(private msg: MessengerService,
    private carritoService: CarritoService) { }

  ngOnInit(): void {
    // this.productosCarrito = this.carritoService.getProductosCarrito();
    // console.log(this.productosCarrito);
    
    // this.cantItems=this.productosCarrito.length;
    // if(this.cantItems !=0){
    // let j = 0;
    // for(let i=0;i<this.productosCarrito.length;i++){
    //   j= j+ Number (this.productosCarrito[i].precio);
    // }
    // this.totalCarrito = j;
    // }

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

  eliminarCarro(producto: Product){
    console.log("aca",producto);
    this.carritoService.eliminarItemCarrito(producto);
    this.mostrarCarro();
    this.cantItems=this.productosCarrito.length;
    
  }

  

  

}

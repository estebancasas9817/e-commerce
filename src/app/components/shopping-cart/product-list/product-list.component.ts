import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import {CarritoService} from 'src/app/services/carrito.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  cartItems = [];

  cartTotal = 0
  public productosCarrito: Product[] = [];
  public cantItems:number = 0;
  public totalCarrito: number;

  constructor(private productService: ProductService,
    private carritoService: CarritoService) { }

  ngOnInit() {
    this.productService.recuperarListaProductoRemoto().subscribe(products =>{
      this.productList = products;
    const usuario = localStorage.getItem('usuario');
    const textoUsuario = document.querySelector(".textoUsuario");
    const logOut = document.querySelector(".contenedor__logOut");
    const verListado = document.querySelector(".contenedor__verListado");
      if(usuario != null)
      {
      textoUsuario.textContent = usuario; 
      if(logOut.classList.contains("hidden") === true)
      {
        logOut.classList.toggle("hidden");
        verListado.classList.toggle("hidden");
      }
      
      }
      console.log(this.productList[0].nombre);
    })
  }

  mostrarCarro(){
    console.log("sdsdsdsd");
    this.productosCarrito=this.carritoService.getProductosCarrito();
    
    
    this.cantItems=this.productosCarrito.length;
    console.log(this.cantItems);
    if(this.cantItems !=0){
    let j = 0;
    for(let i=0;i<this.productosCarrito.length;i++){
      j= j+ Number (this.productosCarrito[i].precio);
    }
    this.totalCarrito = j;
    }
  }

  handleAddToCart(producto: Product) {
    this.carritoService.agregarItemCarrito(producto);
    // this.productosCarrito=this.carritoService.getProductosCarrito();
    this.mostrarCarro();
    
  }

  p(){
    console.log(this.cantItems);
  }

  eliminarCarro(producto:Product){
    console.log("eliminado",producto);
    this.carritoService.eliminarItemCarrito(producto);
    this.mostrarCarro();
    this.cantItems=this.productosCarrito.length;

  }

}

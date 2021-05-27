import { Component, OnInit } from '@angular/core';
import {CarritoService} from 'src/app/services/carrito.service';
import {Ventaa} from 'src/app/models/ventaa';
import { Product } from 'src/app/models/product';
import { Admin } from 'src/app/models/admin';
import { Usuario } from 'src/app/models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {
  MiVenta: Ventaa;
  venta: Ventaa;
  admin: Admin;
  productList: Product[] = []
  public productosCarrito: Product[] = [];
  constructor(private carritoService: CarritoService,
    private router: Router) { }
  public miVenta: Ventaa[] = []
  ngOnInit(): void {
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
        // verListado.classList.toggle("hidden");
      }
      
      }
  }

  pagar(){
    const usuario = localStorage.getItem('usuario');
    if(usuario != null)
      {
        this.productosCarrito=this.carritoService.getProductosCarrito();
        let cartItems: Ventaa;
        let idAdmin :Admin;
        idAdmin = new Admin(1);
        let idUsuario = new Usuario(7);
        // console.log("mi Venta",this.productosCarrito);
        cartItems = new Ventaa(this.productosCarrito,idUsuario,idAdmin);
        // console.log(cartItems);
        this.carritoService.agregarVenta(cartItems).subscribe(
          data =>{
            
          },
          error =>{
            console.log(error);
          }
        )
          for ( let i = 0; i < this.productosCarrito.length; i++) {
            this.carritoService.eliminarItemCarrito(this.productosCarrito[i]);
        }
      }  
      else {
        alert("Inicia sesión para comprar");
        this.router.navigate(['/cuenta']);
      }  
  }

}

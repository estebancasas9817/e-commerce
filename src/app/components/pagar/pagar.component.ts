import { Component, OnInit } from '@angular/core';
import {CarritoService} from 'src/app/services/carrito.service';
import {Ventaa} from 'src/app/models/ventaa';
import { Product } from 'src/app/models/product';
import { Admin } from 'src/app/models/admin';
import { Usuario } from 'src/app/models/usuario';

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
  constructor(private carritoService: CarritoService) { }
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
        verListado.classList.toggle("hidden");
      }
      
      }
  }

  pagar(){
    
    this.productosCarrito=this.carritoService.getProductosCarrito();
    // this.MiVenta.producto = this.productosCarrito;
    // console.log(this.productosCarrito);
    // this.MiVenta.idUsuario = 7;
    // this.MiVenta.nomAdmin = 1;
    let cartItems: Ventaa;
    let idAdmin :Admin;
    idAdmin = new Admin(1);
    let idUsuario = new Usuario(7);
    cartItems = new Ventaa(this.productosCarrito,idUsuario,idAdmin);
    // console.log(cartItems);
    this.carritoService.agregarVenta(cartItems).subscribe(
      data =>{
        
      },
      error =>{
        console.log("paila ñero");
      }
    )
  }

}

import { Component, OnInit,Input } from '@angular/core';

import { Cart } from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() cartItem: any;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    
  }

  logOut(){
    console.log("entra por aca");
    sessionStorage.removeItem("token");
    localStorage.clear();

    const usuario = localStorage.getItem('usuario');
    const textoUsuario = document.querySelector(".textoUsuario");
    const logOut = document.querySelector(".contenedor__logOut");
    const verListado = document.querySelector(".contenedor__verListado");
      if(usuario != null)
      {
      textoUsuario.textContent = usuario; 
      if(logOut.classList.contains("hidden") === true)
      {
        
        // verListado.classList.toggle("hidden");
      }
    }
    else {
      logOut.classList.toggle("hidden");
      textoUsuario.textContent = "usuario";
    }
  }

  

    // const logOut = document.querySelector(".logOut__Link");
    // const usuario = document.querySelector(".textoUsuario");
    // const contenedorLogout = document.querySelector(".contenedor__logOut");
    // const contenedor__verListado = document.querySelector(".contenedor__verListado");

    //   contenedorLogout.classList.toggle("hidden");
    //   contenedor__verListado.classList.toggle("hidden");
    //   usuario.textContent = "Usuario";
      
  }

  

  

  



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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

}

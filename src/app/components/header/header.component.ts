import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const logOut = document.querySelector(".logOut__Link");
    console.log(logOut);
    const usuario = document.querySelector(".textoUsuario");
    const contenedorLogout = document.querySelector(".contenedor__logOut");
    const contenedor__verListado = document.querySelector(".contenedor__verListado");
    logOut.addEventListener("click",function(){
      console.log("entra");
      contenedorLogout.classList.toggle("hidden");
      contenedor__verListado.classList.toggle("hidden");
      usuario.textContent = "Usuario";
    })
  }

}

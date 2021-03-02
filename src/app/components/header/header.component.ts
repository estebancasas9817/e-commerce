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
    const usuario = document.querySelector(".textoUsuario");
    const contenedorLogout = document.querySelector(".contenedor__logOut");
    logOut.addEventListener("click",function(){
      contenedorLogout.classList.toggle("hidden");
      usuario.textContent = "Usuario";
    })
  }

}

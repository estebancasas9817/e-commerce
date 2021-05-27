import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-home',
  templateUrl: './grilla-home.component.html',
  styleUrls: ['./grilla-home.component.css']
})
export class GrillaHomeComponent implements OnInit {

  constructor() { }

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
    var imagen1 = document.getElementById("imagen1");
    var imagen2 = document.getElementById("imagen2");
    var imagen3 = document.getElementById("imagen3");
    var imagen4 = document.getElementById("imagen4");
    var imagen5 = document.getElementById("imagen5");
    var imagen6 = document.getElementById("imagen6");
    imagen1.addEventListener("click", function()
    {
      location.href= "productos";
    })
    imagen2.addEventListener("click", function()
    {
      location.href= "productos";
    })
    imagen3.addEventListener("click", function()
    {
      location.href= "productos";
    })
    imagen4.addEventListener("click", function()
    {
      location.href= "productos";
    })
    imagen5.addEventListener("click", function()
    {
      location.href= "productos";
    })
    imagen6.addEventListener("click", function()
    {
      location.href= "productos";
    })
  }

}

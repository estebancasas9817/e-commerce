import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})


export class CuentaComponent implements OnInit {
 

  constructor(private __usuarioService: UsuariosService) { }

  ngOnInit(): void {
    // const usuario = localStorage.getItem('usuario');
    // const textoUsuario = document.querySelector(".textoUsuario");
    // const logOut = document.querySelector(".contenedor__logOut");
    // const verListado = document.querySelector(".contenedor__verListado");
    //   if(usuario != null)
    //   {
    //   textoUsuario.textContent = usuario; 
    //   if(logOut.classList.contains("hidden") === true)
    //   {
    //     logOut.classList.toggle("hidden");
    //     verListado.classList.toggle("hidden");
    //   }
      
    //   }
  }

  




}

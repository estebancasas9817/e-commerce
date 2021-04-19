import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {Usuarios} from 'src/app/models/usuarios'
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios = new Usuarios();
  constructor(private builder:FormBuilder,private msg: MessengerService,
    private usuarioService: UsuariosService) { }



  ngOnInit(): void {
    
  }

  agregarUser() {
    this.usuarioService.agregarUsuario(this.usuarios).subscribe
(
  data =>{
    console.log("Usuario Añadido correctamente....");
  },
  error =>console.log(error)
)
  }

  

  register() {
    // const textoUsuario = document.querySelector(".textoUsuario");
    // const logOut = document.querySelector(".contenedor__logOut");
    // const verListado = document.querySelector(".contenedor__verListado");
    // const usuario = localStorage.getItem('usuario');
    // if(usuario == null)
    // {

    // textoUsuario.textContent = this.registerForm.value.nombre;
    // logOut.classList.toggle("hidden");
    // verListado.classList.toggle("hidden");
    // }else{
    //   alert("primero cierre la sesion activa para crear un nuevo usuario");
    // }
  }

}

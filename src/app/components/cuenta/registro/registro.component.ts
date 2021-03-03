import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private builder:FormBuilder,private msg: MessengerService,
    private usuarioService: UsuariosService) { }



  ngOnInit(): void {
    this.buildForm();
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

  agregarUser() {
    this.usuarioService.agregarUsuarios(this.registerForm.value).subscribe(() => {
      this.msg.sendMsg(this.registerForm.value)
    })
  }

  buildForm(){
    this.registerForm = this.builder.group({
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
    })
  }

  register() {
    const textoUsuario = document.querySelector(".textoUsuario");
    const logOut = document.querySelector(".contenedor__logOut");
    const verListado = document.querySelector(".contenedor__verListado");
    const usuario = localStorage.getItem('usuario');
    if(usuario == null)
    {

    textoUsuario.textContent = this.registerForm.value.nombre;
    logOut.classList.toggle("hidden");
    verListado.classList.toggle("hidden");
    }else{
      alert("primero cierre la sesion activa para crear un nuevo usuario");
    }
  }

}

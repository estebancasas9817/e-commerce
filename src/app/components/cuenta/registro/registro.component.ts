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

    textoUsuario.textContent = this.registerForm.value.nombre;
    logOut.classList.toggle("hidden");
    verListado.classList.toggle("hidden");
  }

}

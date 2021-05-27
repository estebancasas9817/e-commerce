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
    const textoUsuario = document.querySelector(".textoUsuario");
    const logOut = document.querySelector(".contenedor__logOut");
    const verListado = document.querySelector(".contenedor__verListado");
    const miNombre = <HTMLInputElement>document.querySelector(".miNombre");
    textoUsuario.textContent = miNombre.value;
    logOut.classList.toggle("hidden");
    
    localStorage.setItem("usuario",miNombre.value);
    // verListado.classList.toggle("hidden");
    console.log(data);
    
      
    
  },
  error =>console.log(error)
)
  }


}

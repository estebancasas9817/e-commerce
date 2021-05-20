import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { Usuarios } from 'src/app/models/usuarios';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaUsuarios: Usuarios[] = []
  
  model: any = {}
  credentials = {nombreUsuario: '', password: ''};
  constructor(private usuarioService: UsuariosService,
    private __autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    
    
    
  }

  login(){
    
    
    
    
  

    // this.usuarioService.getUsuarioPorNombre(nombre).subscribe(
    //   data=>{
    //     data === null ? location.href = "cuenta": bandera = true;
    //     this.usuarioService.getUsuarioPorClave(clave1).subscribe(
    //       data=>{

    //         if ( data === null ){
    //           location.href = "cuenta";
    //         }
    //         else {
    //           this.listaUsuarios = data;
              
              
    //           const textoUsuario = document.querySelector(".textoUsuario");
    //           const logOut = document.querySelector(".contenedor__logOut");
    //           const verListado = document.querySelector(".contenedor__verListado");
    //           textoUsuario.textContent = nombre; 
    //           if(logOut.classList.contains("hidden") === true)
    //           {
    //             logOut.classList.toggle("hidden");
    //             verListado.classList.toggle("hidden");
    //           }
              
    //         }
    //         data === null ? location.href = "cuenta": console.log("hola");

    //       }
    //     )
    //   }
    // )
  }
}

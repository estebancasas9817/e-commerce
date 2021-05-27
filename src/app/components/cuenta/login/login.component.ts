import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { Usuarios } from 'src/app/models/usuarios';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaUsuarios: Usuarios[] = []
  
  model: any = {}
  credentials = {nombreUsuario: '', clave: ''};
  constructor(private usuarioService: UsuariosService,
    private __autenticacionService: AutenticacionService,
    private router: Router) { }

  ngOnInit(): void {
    
    
    
  }

  login(){
    this.__autenticacionService.authenticate(this.credentials).subscribe(response => {
      console.log(response.headers.get("Authorization"));
      var token = response.headers.get("Authorization");
      var tokenizado = token.split(" ", 2); 
      console.log(tokenizado[1]);
      sessionStorage.setItem("token",tokenizado[1]);
      this.usuarioService.getUsuario(this.credentials.nombreUsuario).subscribe(data =>{
        var usuario = new  Usuarios();
        usuario.id = data.id;
        usuario.nombreUsuario=data.nombreUsuario;
        localStorage.setItem("usuario",usuario.nombreUsuario);
        this.__autenticacionService.autenticarUsuario(usuario);
        const textoUsuario = document.querySelector(".textoUsuario");
        const logOut = document.querySelector(".contenedor__logOut");
        const verListado = document.querySelector(".contenedor__verListado");
        textoUsuario.textContent = usuario.nombreUsuario; 
        if(logOut.classList.contains("hidden") === true)
        {
          logOut.classList.toggle("hidden");
          
              }
              this.router.navigate(['/productos']);
        

      }, error =>{
        console.log("no es",error);
      });
    },
    error =>{
      console.log("error",error);
    });
  }

  }


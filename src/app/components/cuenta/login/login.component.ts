import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listaUsuarios: Usuarios[] = []
  model: any = {}
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  login(){
    const textoUsuario = document.querySelector(".textoUsuario");
    const logOut = document.querySelector(".contenedor__logOut");
    const verListado = document.querySelector(".contenedor__verListado");
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      this.listaUsuarios = usuarios;    
      for(let i in this.listaUsuarios){
        if(this.listaUsuarios[i].email === this.model.userEmail && this.listaUsuarios[i].clave === this.model.userPassword) {
          textoUsuario.textContent = this.listaUsuarios[i].nombre;
          logOut.classList.toggle("hidden");
          verListado.classList.toggle("hidden");
        }
      }
    }) 
  }

  


    
    
    
  

}

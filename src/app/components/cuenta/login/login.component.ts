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
    let hola = {
      nombre:"",
      clave:"",
      email:""
    }

    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      this.listaUsuarios = usuarios;
      hola = usuarios[0];
      
      console.log(hola.nombre);
      
    })
  }


    
    
    
  

}

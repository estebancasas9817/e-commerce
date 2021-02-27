import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service'
import { Usuarios } from 'src/app/models/usuarios';
import {HttpClient} from '@angular/common/http';
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
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      this.listaUsuarios = usuarios;
    
      const prueba = new XMLHttpRequest();
      prueba.open('GET' , 'http://localhost:3000/usuarios' , true);
      prueba.send();
      prueba.onreadystatechange = function(){​​​​​​​
        if(this.readyState == 4 && this.status == 200){​​​​​​​
          let datos = JSON.parse(this.responseText);
          for(let item of datos){​​​​​​​
            console.log(item.usuario.email);
            console.log(item.usuario.clave);
          }​​​​​​​
        }​​​​​​​
      }​​​​​​​
    })    

  }


    
    
    
  

}

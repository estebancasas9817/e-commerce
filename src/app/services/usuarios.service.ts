import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuarios } from '../models/usuarios';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  mockUrl: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  // agregarUsuarios(usuario: Usuarios): Observable<Usuarios> {
  //   return this.http.post<Usuarios>(this.mockUrl, usuario, headerOption);
  // }

  agregarUsuario(usuario: Usuarios):Observable<any>{
    
    return this.http.post<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/crearusuario',usuario);

  }

  public getUsuario(nombreUsuario : String):Observable<any>{
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getusuario/"+nombreUsuario);
  }


  recuperarUsuario(id:number):Observable<any>{
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getusuarioporid"+id);
  }

  


  

  getUsuarioPorEmail(email:String): Observable<any[]> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getusuarioporemail/"+email);
  }

  getUsuarioPorNombre(nombre:String): Observable<any[]> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getusuariopornombre/"+nombre);
  }

  getUsuarioPorClave(clave:String): Observable<any[]> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getusuarioporclave/"+clave);
  }


  getCantidadUsuarios():Observable<any> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getcantidadusuarios")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuariosUrl } from 'src/config/api';
import { Usuarios } from '../models/usuarios';
const apiUrl = "http://localhost:3000/usuarios";
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
    return this.http.post<any>('http://localhost:10/crearusuario',usuario);

  }

  recuperarUsuario(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:10/getusuarioporid"+id);
  }

  

  getUsuarioPorEmail(email:String): Observable<any[]> {
    return this.http.get<any>("http://localhost:10/getusuarioporemail/"+email);
  }

  getUsuarioPorNombre(nombre:String): Observable<any[]> {
    return this.http.get<any>("http://localhost:10/getusuariopornombre/"+nombre);
  }

  getUsuarioPorClave(clave:String): Observable<any[]> {
    return this.http.get<any>("http://localhost:10/getusuarioporclave/"+clave);
  }
}

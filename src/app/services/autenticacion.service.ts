import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public usuarioAutenticado: Usuarios = null;


  constructor(private http:HttpClient) { }

  public authenticate(credentials) : Observable<HttpResponse<Object>>{
    return this.http.post<HttpResponse<Object>>("http://localhost:8080/login",credentials,{observe: 'response'});
  }

  public autenticarUsuario(usuario: Usuarios){
    this.usuarioAutenticado = usuario;
  }

  public getUsuarioAutenticado(){
    return this.usuarioAutenticado;
  }

  public vaciarUsuarioAutenticado(){
    sessionStorage.removeItem("token");
    this.usuarioAutenticado=null;
  }


}

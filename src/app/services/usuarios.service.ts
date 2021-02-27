import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuariosUrl } from 'src/config/api';
import { Usuarios } from '../models/usuarios';
const apiUrl = "http://localhost:3000/usuarios";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  agregarUsuarios(usuario: Usuarios): Observable<any> {
    return this.http.post(usuariosUrl, { usuario });
  }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(apiUrl);
  }
}

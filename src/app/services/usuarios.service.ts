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

  agregarUsuarios(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.mockUrl, usuario, headerOption);
  }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(apiUrl);
  }
}

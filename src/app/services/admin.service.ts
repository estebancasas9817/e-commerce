import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { adminUrl } from 'src/config/api';
import { Admin } from '../models/admin';
const apiUrl = "http://localhost:3000/admin";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminPorId(id: number): Observable<any> {
    // console.log(this.http.get<any>('http://localhost:10/getadminporid/'+id));
    return this.http.get<any>('http://localhost:10/getadminporid/'+id);
  }

  getAdminPorNombre(nombre: String): Observable<any> {
    
    return this.http.get<any>('http://localhost:10/getadminporusuario/'+nombre);
  }

  getAdminPorCorreo(correo: String): Observable<any> {
    return this.http.get<any>('http://localhost:10/getadminporemail/'+correo);
  }
}

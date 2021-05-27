import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminPorId(id: number): Observable<any> {
    // console.log(this.http.get<any>('http://localhost:10/getadminporid/'+id));
    return this.http.get<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getadminporid/'+id);
  }

  getAdminPorNombre(nombre: String): Observable<any> {
    
    return this.http.get<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getadminporusuario/'+nombre);
  }

  getAdminPorCorreo(correo: String): Observable<any> {
    return this.http.get<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getadminporemail/'+correo);
  }
}

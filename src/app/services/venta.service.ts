import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }


  getproductosvendidos():Observable<any> {
    return this.http.get<any>("http://localhost:10/getproductosvendidos")
  }

  getTotalVentas():Observable<any> {
    return this.http.get<any>("http://localhost:10/gettotalventa")
  }

  getAllVentas():Observable<any> {
    return this.http.get<any>("http://localhost:10/getmisventas")
  }


}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }


  getproductosvendidos():Observable<any> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getproductosvendidos")
  }

  getTotalVentas():Observable<any> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/gettotalventa")
  }

  getAllVentas():Observable<any> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getmisventas")
  }

  public ventas(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getmisventas?" + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
   
  }


}

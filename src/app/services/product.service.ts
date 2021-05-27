import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { NgxSpinnerService } from "ngx-spinner";
import { map } from 'rxjs/operators';




const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  constructor(private http:HttpClient) { }
  recuperarListaProductoRemoto():Observable<any>{
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getlistaproductos");
  }

  agregarProductoRemoto(product: Product):Observable<any>{
    return this.http.post<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/crearproducto',product);

  }

  modificarProductoRemoto(product: Product): Observable<any>{
    return this.http.post<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/modificarproducto',product);
  }

  recuperarListaProductoPorId(id: number): Observable<any> {
    return this.http.get<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getlistaproductosporid/'+id);
  }
  eliminarProductoPorId(id: number): Observable<any> {
    return this.http.delete<any>('http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/eliminarproducto/' + id);
  }

  public productos(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.http.get<any>("http://divante-env.eba-vf8h3gxz.us-east-1.elasticbeanstalk.com/getlistaproductos?" + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
    //return this.http.get<any>("http://onemile-env.eba-8pa9zyjf.us-east-1.elasticbeanstalk.com/producto/getproductoshome?" + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }


}

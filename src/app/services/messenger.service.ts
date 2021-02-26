import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {


  sujeto = new Subject();
  constructor() { }

  enviarMensaje(producto){
    this.sujeto.next(producto);
  }

  getMensaje(){
    return this.sujeto.asObservable();
  }
}

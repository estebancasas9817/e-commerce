import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import {MessengerService} from 'src/app/services/messenger.service';
@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {

  carroItems = [
    // {id: 1, productoId:1, productoNombre:"Producto 1", cantidad: 4, precio: 100},
    // {id: 2, productoId:2, productoNombre:"Producto 2", cantidad: 2, precio: 200},
    // {id: 3, productoId:3, productoNombre:"Producto 3", cantidad: 7, precio: 50},
    // {id: 4, productoId:4, productoNombre:"Producto 4", cantidad: 1, precio: 560}
  ];

  carroTotal = 0;
  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.msg.getMensaje().subscribe(producto =>{
      console.log(producto);
    })
    this.carroItems.forEach(item =>{
      this.carroTotal += (item.cantidad * item.precio);
    })
  }
    
  

}

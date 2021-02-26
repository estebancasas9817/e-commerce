import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import {MessengerService} from 'src/app/services/messenger.service';
@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  
  @Input() productoItem: Producto
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.msg.enviarMensaje(this.productoItem);
  }

}

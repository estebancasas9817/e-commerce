import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';

import { Cart } from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service'


@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {

  cartItems = [];
  productList: Product[] = []
  cartTotal = 0
  @Input() cartItem: any;
  @Input() fecha: string;

  constructor(private msg: MessengerService) { }

    

  ngOnInit(): void {
  }

  eliminarCarro(){
    
  }

  

}

  



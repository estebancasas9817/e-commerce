import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private listadoService: CartService,
    private detalleService: CartService
  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    const tiempo = new Date();
    const date =tiempo.getDate()+'/'+(tiempo.getMonth())+'/'+(tiempo.getFullYear());
    this.productItem
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })

    this.listadoService.addProductToList(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })

    this.detalleService.addProductToDetalle(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}


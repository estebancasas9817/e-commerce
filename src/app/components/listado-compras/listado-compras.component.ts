import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import {ListadoCompras} from 'src/app/models/listado-compras'
import { MessengerService } from 'src/app/services/messenger.service'
@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent implements OnInit {

  cartItems = [];

  cartTotal = 0
  @Input() cartItem: any

  constructor(private msg: MessengerService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    this.getAllEmployee();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getListadoItems().subscribe((items: ListadoCompras[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  getAllEmployee() {
    this.cartService.getAllEmployee();
  }

  eliminarCarro(id: number) {
    this.cartService.eliminarCarro(id).subscribe(
      (data) => {
        this.getAllEmployee();
      });
  }

}

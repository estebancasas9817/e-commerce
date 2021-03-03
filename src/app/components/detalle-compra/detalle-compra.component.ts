import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.css']
})
export class DetalleCompraComponent implements OnInit {

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
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
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

  eliminarCarro() {
    console.log("entra");
    for(let i = 1; i < 28; i ++) {
      this.cartService.eliminarCarros(i).subscribe(
        (data) => {
          this.getAllEmployee();
        });

      }
  }

}

  



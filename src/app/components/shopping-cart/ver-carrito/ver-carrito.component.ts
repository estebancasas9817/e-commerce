import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent implements OnInit {
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
      this.cartTotal += (item.qty * item.precio)
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
      this.cartService.eliminarLista(id).subscribe(
        (data) => {
          this.getAllEmployee();
        });
  
        this.cartService.eliminarDetalle(id).subscribe(
          (data) => {
            this.getAllEmployee();
          });
  }

}

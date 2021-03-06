import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor(private msg: MessengerService,
    private cartService: CartService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.getAllEmployee();
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

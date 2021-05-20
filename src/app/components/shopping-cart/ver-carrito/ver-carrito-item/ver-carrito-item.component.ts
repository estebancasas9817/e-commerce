import { Component, OnInit,Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

import { Cart } from 'src/app/models/cart';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ver-carrito-item',
  templateUrl: './ver-carrito-item.component.html',
  styleUrls: ['./ver-carrito-item.component.css']
})
export class VerCarritoItemComponent implements OnInit {

  @Input() cartItem: any

  constructor(private msg: MessengerService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    // this.getAllEmployee();
  }

  // getAllEmployee() {
  //   this.cartService.getAllEmployee();
  // }

  // eliminarCarro(id: number) {
  //   this.cartService.eliminarCarro(id).subscribe(
  //     (data) => {
  //       this.getAllEmployee();
  //     });
  // }

}

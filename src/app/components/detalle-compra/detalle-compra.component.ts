import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
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

  constructor(private msg: MessengerService,
    private cartService: CartService) { }

    

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    this.getAllEmployee();

    for(let i = 1; i < 30; i ++) {
      this.cartService.eliminarCarros(i).subscribe(
        (data) => {
          this.getAllEmployee();
        });

      }
      this.cartService.disparador.subscribe(data => {
        const fechaboton = data;
        console.log(fechaboton);
      })
    const usuario = localStorage.getItem('usuario');
    const textoUsuario = document.querySelector(".textoUsuario");

    
     
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getDetalleItems().subscribe((items: Cart[]) => {
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

  eliminarCarro(){
    for(let i = 1; i < 30; i ++) {
      this.cartService.eliminarDetalle(i).subscribe(
        (data) => {
          this.getAllEmployee();
        });

      }
  }

  

}

  



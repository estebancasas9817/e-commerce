import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems = [];
  productList: Product[] = []
  cartTotal = 0
  @Input() cartItem: any;

  constructor(private msg: MessengerService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    this.getAllEmployee();
  }

  eliminarCarro(){
    for(let i = 1; i < 30; i ++) {
      this.cartService.eliminarCarros(i).subscribe(
        (data) => {
          this.getAllEmployee();
        });

        this.cartService.eliminarDetalle(i).subscribe(
          (data) => {
            this.getAllEmployee();
          });

      }

    const logOut = document.querySelector(".logOut__Link");
    const usuario = document.querySelector(".textoUsuario");
    const contenedorLogout = document.querySelector(".contenedor__logOut");
    const contenedor__verListado = document.querySelector(".contenedor__verListado");

      contenedorLogout.classList.toggle("hidden");
      contenedor__verListado.classList.toggle("hidden");
      usuario.textContent = "Usuario";
      localStorage.clear();
  }

  getAllEmployee() {
    this.cartService.getAllEmployee();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getDetalleItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      
    })
  }

}

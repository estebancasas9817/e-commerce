import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { Usuarios } from 'src/app/models/usuarios';
import { MessengerService } from 'src/app/services/messenger.service'
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-reporte-ventas-admin',
  templateUrl: './reporte-ventas-admin.component.html',
  styleUrls: ['./reporte-ventas-admin.component.css']
})

export class ReporteVentasAdminComponent implements OnInit {

  mockListaUrl: string = 'http://localhost:3000/compras';
  mockUsuariosUrl: string = 'http://localhost:3000/usuarios';
  allEmployee: Cart[];
  cartItems = [];
  allUsuarios: Usuarios[];

  cartTotal = 0
  @Input() cartItem: any
  constructor(private msg: MessengerService,
    private http: HttpClient,
    private cartService: CartService,
    private ngxSpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    this.getAllPedidos();
    this.getAllUsuarios();
  
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getListadoItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
    const ganancia = document.querySelector(".ganancia");
    ganancia.textContent = this.cartTotal.toString()+ " USD";
    this.cartItems.forEach(item => {
    })
  }

  getAllPedidos() {
    const headerOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const pedidosTotales = document.querySelector(".pedidosTotales");
    this.ngxSpinnerService.show();
    return this.http.get<Cart[]>(this.mockListaUrl, headerOption).subscribe(
      (data: Cart[]) => {
        this.allEmployee = data;
        // console.log("aca fue: ",this.allEmployee.length);
        pedidosTotales.textContent = this.allEmployee.length.toString();
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
        
      });

      
  }

  getAllUsuarios() {
    const headerOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const clientesTotales = document.querySelector(".clientesTotales");
    this.ngxSpinnerService.show();
    return this.http.get<Usuarios[]>(this.mockUsuariosUrl, headerOption).subscribe(
      (data: Usuarios[]) => {
        this.allUsuarios = data;
        clientesTotales.textContent = this.allUsuarios.length.toString();
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
        
      });

      
  }

}

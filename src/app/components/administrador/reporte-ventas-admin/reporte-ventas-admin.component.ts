import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { VentaService } from 'src/app/services/venta.service';
import { Cart } from 'src/app/models/cart';
import { Usuarios } from 'src/app/models/usuarios';
import { MessengerService } from 'src/app/services/messenger.service'
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Ventaa } from 'src/app/models/ventaa';
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
  productList: Ventaa[] = []
  cartTotal = 0
  @Input() cartItem: any
  constructor(private msg: MessengerService,
    private http: HttpClient,
    private cartService: CartService,
    private ventaService: VentaService,
    private usuariosService: UsuariosService,
    private ngxSpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.handleSubscription();
    // this.loadCartItems();
    // this.getAllPedidos();
    this.getAllUsuarios();
    this.getAllVentas();
    this.getTotalVentas();
    this.getAllItems();
  
  }

  // handleSubscription() {
  //   this.msg.getMsg().subscribe((product: Product) => {
  //     this.loadCartItems();
  //   })
  // }

  // loadCartItems() {
  //   this.cartService.getListadoItems().subscribe((items: Cart[]) => {
  //     this.cartItems = items;
  //     this.calcCartTotal();
  //   })
  // }

  // calcCartTotal() {
  //   this.cartTotal = 0
  //   this.cartItems.forEach(item => {
  //     this.cartTotal += (item.qty * item.precio)
  //   })
  //   const ganancia = document.querySelector(".ganancia");
  //   ganancia.textContent = this.cartTotal.toString()+ " USD";
  //   this.cartItems.forEach(item => {
  //   })
  // }

  getAllItems(){
    this.ventaService.getAllVentas().subscribe(
      data=>{
        this.productList = data;
      }
    )
  }


  getTotalVentas(){
    this.ventaService.getTotalVentas().subscribe(
      data=>{
        console.log("respuesta cscdscwdcds");
        const ganancia = document.querySelector(".ganancia");
        ganancia.textContent = `${data} USD`;
        
      },
      error=>console.log("error recivido")
    )
  }

  // getAllPedidos() {
  //   const headerOption = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   const pedidosTotales = document.querySelector(".pedidosTotales");
  //   this.ngxSpinnerService.show();
  //   return this.http.get<Cart[]>(this.mockListaUrl, headerOption).subscribe(
  //     (data: Cart[]) => {
  //       this.allEmployee = data;
  //       // console.log("aca fue: ",this.allEmployee.length);
  //       pedidosTotales.textContent = this.allEmployee.length.toString();
  //       setTimeout(() => {
  //         this.ngxSpinnerService.hide();
  //       }, 500);
        
  //     });

      
  // }

  getAllUsuarios() {
    this.usuariosService.getCantidadUsuarios().subscribe(
      data=>{
        console.log(data);

        const clientesTotales = document.querySelector(".clientesTotales");
        clientesTotales.textContent = data;
      },
      error=>{
        console.log(error);
      }
    )

      
  }

  getAllVentas(){
    this.ventaService.getproductosvendidos().subscribe(
      data=>{
        console.log(data);
        const pedidosTotales = document.querySelector(".pedidosTotales");
        pedidosTotales.textContent = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

}

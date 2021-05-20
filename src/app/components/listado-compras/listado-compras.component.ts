import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
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
  itemsfechas = [];
  total = 0;
  tiempo = new Date();
  fecha = this.tiempo.getDate()+'/'+(this.tiempo.getMonth())+'/'+(this.tiempo.getFullYear());
  cartTotal = 0
  tempo = "7/03/2021";
  @Input() cartItem: any
  @Input() botonfecha = document.querySelector(".btn");

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    const textoUsuario = document.querySelector(".textoUsuario");
    const logOut = document.querySelector(".contenedor__logOut");
    const verListado = document.querySelector(".contenedor__verListado");
      
      if(usuario != null)
      {
      textoUsuario.textContent = usuario; 
      if(logOut.classList.contains("hidden") === true)
      {
        logOut.classList.toggle("hidden");
        verListado.classList.toggle("hidden");
      }
      
      }
   
    this.calcCartTotal();
    
  
    const tiempo = new Date();
    const fecha =tiempo.getDate()+'/'+(tiempo.getMonth())+'/'+(tiempo.getFullYear());
    //console.log(fecha);
  }

  

  

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.precio)
    })
  }

  

  

  verdetalle(){
    const hiddenImg = document.querySelector(".hiddenImg");
    const hiddenProd = document.querySelector(".hiddenProd");
    const hiddenPrec = document.querySelector(".hiddenPrec");
    const hiddenCant = document.querySelector(".hiddenCant");
    const hidden4 = document.querySelector(".hidden-4");
    const hidden1 = document.querySelector(".hidden-1");
    const hidden2 = document.querySelector(".hidden-2");
    const hidden3 = document.querySelector(".hidden-3");
    const btnVer = document.querySelector(".btnVer");

    hiddenImg.classList.toggle("hidden");
    hiddenProd.classList.toggle("hidden");
    hiddenPrec.classList.toggle("hidden");
    hiddenCant.classList.toggle("hidden");
    hidden4.classList.toggle("hidden");
    hidden1.classList.toggle("hidden");
    hidden2.classList.toggle("hidden");
    hidden3.classList.toggle("hidden");
    if(hiddenImg.classList.contains("hidden")){
      btnVer.textContent = "Ver Detalles";
    }
    else{
      btnVer.textContent = "Ver Listado";

    }
  }

}

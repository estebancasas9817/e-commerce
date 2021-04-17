import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProducts().subscribe(products =>{
    //   this.productList = products;
    // const usuario = localStorage.getItem('usuario');
    // const textoUsuario = document.querySelector(".textoUsuario");
    // const logOut = document.querySelector(".contenedor__logOut");
    // const verListado = document.querySelector(".contenedor__verListado");
    //   if(usuario != null)
    //   {
    //   textoUsuario.textContent = usuario; 
    //   if(logOut.classList.contains("hidden") === true)
    //   {
    //     logOut.classList.toggle("hidden");
    //     verListado.classList.toggle("hidden");
    //   }
      
    //   }
    //   console.log(this.productList[0].nombre);
    // })
  }

}

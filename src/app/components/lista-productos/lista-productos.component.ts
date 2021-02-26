import { Component, OnInit } from '@angular/core';
import {ProductoService} from 'src/app/services/producto.service';
import {Producto} from 'src/app/models/producto';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productosLista: Producto[] = []
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productosLista = this.productoService.getProductos();
  }

}

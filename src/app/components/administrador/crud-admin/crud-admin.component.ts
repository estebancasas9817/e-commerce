import { Component, OnInit,Input } from '@angular/core';
import {Product} from 'src/app/models/product'
import {ProductService} from 'src/app/services/product.service'
import { MessengerService } from 'src/app/services/messenger.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent implements OnInit {

  productList: Product[] = []

  producto = new Product();
  productoEditar = new Product();

  registroForm: FormGroup;
  @Input() productItem: any
  // constructor(private productService: ProductService,private builder:FormBuilder,private msg: MessengerService,
  //   private toastrService: ToastrService) { }

  constructor(private productService: ProductService,private builder:FormBuilder){}

  ngOnInit(): void {
    
    // this.productService.getProducts().subscribe(products =>{
    //   this.productList = products;

    this.productService.recuperarListaProductoRemoto().subscribe(
      data=>{
        console.log("respuesta recivida");
        this.productList = data;
      },
      error=>console.log("error recivido")
    )

    
    
  }

  addProductformsubmit(){

    this.productService.agregarProductoRemoto(this.producto).subscribe
(
  data =>{
    console.log("Producto Añadido correctamente....");
  },
  error =>console.log("Error")
)
  }

  eliminar(producto: Product) {
    this.eliminarProduct(producto.id);
  }

  

  editar(){
    
    const inputNombreProducto = <HTMLInputElement>document.querySelector(".inputNombreProducto");
    const inputDescripcionProducto = <HTMLInputElement>document.querySelector(".inputDescripcionProducto");
    const inputPrecioProducto = <HTMLInputElement>document.querySelector(".inputPrecioProducto");
    const inputIdProducto = <HTMLInputElement>document.querySelector(".inputIdProducto");
    const inputImagenProducto = <HTMLInputElement>document.querySelector(".inputImagenProducto");
    this.productoEditar.nombre = inputNombreProducto.value;
    this.productoEditar.descripcion = inputDescripcionProducto.value;
    this.productoEditar.fotos = inputImagenProducto.value;
    this.productoEditar.id = parseInt(inputIdProducto.value);
    this.productoEditar.precio = parseInt(inputPrecioProducto.value);
    console.log(this.productoEditar);
    console.log(this.productoEditar.nombre);

    this.productService.modificarProductoRemoto(this.productoEditar).subscribe(
      data =>{
        console.log("Producto modificado correctamente....");
        
      }
    )
    
    

  }

  editProduct(producto: Product) {
    
    const inputNombreProducto = <HTMLInputElement>document.querySelector(".inputNombreProducto");
    const inputDescripcionProducto = <HTMLInputElement>document.querySelector(".inputDescripcionProducto");
    const inputPrecioProducto = <HTMLInputElement>document.querySelector(".inputPrecioProducto");
    const inputIdProducto = <HTMLInputElement>document.querySelector(".inputIdProducto");
    const inputImagenProducto = <HTMLInputElement>document.querySelector(".inputImagenProducto");
    inputNombreProducto.value = producto.nombre.toString();
    inputDescripcionProducto.value = producto.descripcion;
    inputPrecioProducto.value = producto.precio.toString();
    inputIdProducto.value = producto.id.toString();
    inputImagenProducto.value = producto.fotos;
    // console.log(producto.precio.toString());
    
  }


  eliminarProduct(id :number) {
    this.productService.eliminarProductoPorId(id).subscribe(
      data=>{
        console.log("eliminado correctamente");
      }
    );
  }


  crud() {
  }

  

}

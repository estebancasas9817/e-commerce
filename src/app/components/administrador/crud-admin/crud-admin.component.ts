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
  productospaginacion: Array<any>;
  page = 0;
  size = 4;
  order = 'id';
  asc = true;
  isFirst = false;
  isLast = false;

  registroForm: FormGroup;
  @Input() productItem: any
  // constructor(private productService: ProductService,private builder:FormBuilder,private msg: MessengerService,
  //   private toastrService: ToastrService) { }

  constructor(private productService: ProductService,private builder:FormBuilder){}

  ngOnInit(): void {
    
    

    // this.productService.recuperarListaProductoRemoto().subscribe(
    //   data=>{
    //     this.productList = data;
    //     console.log(this.productList[1].fotos);
    //   },
    //   error=>console.log("error recivido")
    // )

    this.cargarProductos();

    
    
  }

  sort(): void {
    this.asc = !this.asc;
    this.cargarProductos();
  }

  rewind(): void {
    if(!this.isFirst){
      this.page--;
      this.cargarProductos();
    }
  }

  forward(): void {
    if(!this.isLast){
      this.page++;
      this.cargarProductos();
    }
  }

  public cargarProductos(){
    this.productService.productos(this.page,this.size,this.order,this.asc).subscribe(
      data => {
        this.productospaginacion = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        console.log(data);
      },
      err =>{
        console.log(err.error);
      });
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

    this.productService.modificarProductoRemoto(this.productoEditar).subscribe
    (
      data =>{
        console.log("Producto modificado correctamente....");
        
      },
      error =>{
        console.log(error);
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
    console.log("sddsd");
    this.productService.eliminarProductoPorId(id).subscribe(
      data=>{
        console.log("eliminado correctamente");
      }
    );
  }


  crud() {
  }

  

}

import { Component, OnInit,Input } from '@angular/core';
import {Product} from 'src/app/models/product'
import {ProductService} from 'src/app/services/product.service'
import { MessengerService } from 'src/app/services/messenger.service';
import { ToastrService } from 'ngx-toastr';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent implements OnInit {

  productList: Product[] = []

  registroForm: FormGroup;
  @Input() productItem: any
  constructor(private productService: ProductService,private builder:FormBuilder,private msg: MessengerService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.buildForm();
    this.productService.getProducts().subscribe(products =>{
      this.productList = products;

    })
    
  }

  

  eliminar(producto: Product) {
    this.eliminarProduct(producto.id);
  }

  agregar() {
    this.createProduct(this.registroForm.value);
  }

  editar(){
    const inputNombreProducto = <HTMLInputElement>document.querySelector(".inputNombreProducto");
    const inputDescripcionProducto = <HTMLInputElement>document.querySelector(".inputDescripcionProducto");
    const inputPrecioProducto = <HTMLInputElement>document.querySelector(".inputPrecioProducto");
    const inputIdProducto = <HTMLInputElement>document.querySelector(".inputIdProducto");
    const inputImagenProducto = <HTMLInputElement>document.querySelector(".inputImagenProducto");
    this.registroForm.value.name = inputNombreProducto.value;
    this.registroForm.value.description = inputDescripcionProducto.value;
    this.registroForm.value.price = parseInt(inputPrecioProducto.value);
    this.registroForm.value.id = parseInt(inputIdProducto.value);
    this.registroForm.value.imageUrl = inputImagenProducto.value;
    this.updateProduct(this.registroForm.value);

  }

  editProduct(producto: Product) {
    
    const inputNombreProducto = <HTMLInputElement>document.querySelector(".inputNombreProducto");
    const inputDescripcionProducto = <HTMLInputElement>document.querySelector(".inputDescripcionProducto");
    const inputPrecioProducto = <HTMLInputElement>document.querySelector(".inputPrecioProducto");
    const inputIdProducto = <HTMLInputElement>document.querySelector(".inputIdProducto");
    const inputImagenProducto = <HTMLInputElement>document.querySelector(".inputImagenProducto");
    inputNombreProducto.value = producto.name.toString();
    inputDescripcionProducto.value = producto.description;
    inputPrecioProducto.value = producto.price.toString();
    inputIdProducto.value = producto.id.toString();
    inputImagenProducto.value = producto.imageUrl;
  }

  

  buildForm(){
    this.registroForm = this.builder.group({
      name: "",
      description: "",
      price: null,
      imageUrl: "",
      id: null
    })
  }

  createProduct(emp: Product) {
    console.log("este es: ",emp);
    this.productService.createProduct(emp).subscribe(
      (result: Product) => {
        this.productService.getAllEmployee();
      });
  }

  updateProduct(emp: Product) {
    this.productService.updateProduct(emp).subscribe(
      (result: Product) => {
        this.productService.getAllEmployee();
      });
  }


  getAllEmployee() {
    this.productService.getAllEmployee();
  }

  eliminarProduct(id :number) {
    this.productService.deleteProduct(id).subscribe(
      (data: Product) => {
        this.productService.getAllEmployee();
      });
  }


  crud() {
  }

  

}

import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.registerForm = this.builder.group({
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
    })
  }

  register() {
    console.log(this.registerForm.value);
  }

}

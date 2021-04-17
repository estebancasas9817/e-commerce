import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service'

@Component({
  selector: 'app-cuenta-admin',
  templateUrl: './cuenta-admin.component.html',
  styleUrls: ['./cuenta-admin.component.css']
})
export class CuentaAdminComponent implements OnInit {
  listaAdmin: Admin[] = []
  model: any = {}
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    const textoAdmin = document.querySelector(".textoAdmin");
    this.adminService.getAdmin().subscribe(admin =>{
      this.listaAdmin = admin;
      for(let i in this.listaAdmin){
        
        if(this.listaAdmin[i].usuario === this.model.adminUsernombre && this.listaAdmin[i].correo === this.model.adminEmail && this.listaAdmin[i].clave === this.model.adminPassword) {
          textoAdmin.textContent = this.listaAdmin[i].usuario;

          location.href = "panel-admin";
        }
        else{
          location.href = "cuenta-admin";
          
        }
      }
    }) 
  }

}

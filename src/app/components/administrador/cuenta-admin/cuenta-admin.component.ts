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
    const clave1 = parseInt(this.model.adminPassword);
    const correo = this.model.adminEmail;
    const usuario = this.model.adminUsernombre;
    let bandera,bandera2,bandera3;
    
    this.adminService.getAdminPorId(clave1).subscribe(
      admin =>{
        this.adminService.getAdminPorCorreo(correo).subscribe(
          data=>{
            
            data === null ? location.href = "cuenta-admin": bandera = true;
            
            this.adminService.getAdminPorNombre(usuario).subscribe(
              userName=>{
                userName === null ? location.href = "cuenta-admin":location.href = "panel-admin";
        
                
              }
            )
          }
        )
    },
    error=>{
      location.href = "cuenta-admin";
    }
    ) 
  }

}

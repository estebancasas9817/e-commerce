import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-cuenta-admin',
  templateUrl: './cuenta-admin.component.html',
  styleUrls: ['./cuenta-admin.component.css']
})
export class CuentaAdminComponent implements OnInit {
  listaAdmin: Admin[] = []
  model: any = {}
  constructor(private adminService: AdminService,
    private router: Router) { }

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
        console.log(admin);
        this.adminService.getAdminPorCorreo(correo).subscribe(
          data=>{
            console.log(data);
            
            data === null ? location.href = "cuenta-admin": bandera = true;
            
            this.adminService.getAdminPorNombre(usuario).subscribe(
              userName=>{
                userName === null ? location.href = "cuenta-admin": this.router.navigate(['/panel-admin']);
        
                
              }
            )
          }
        )
    },
    error=>{
      this.router.navigate(['/cuenta-admin'])
    }
    ) 
  }

}

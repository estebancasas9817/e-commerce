import { Admin } from "./admin"
import { Product } from "./product"
import { Usuario } from "./usuario";

import { Usuarios } from "./usuarios"

export class Ventaa {
    // idVenta: number;
    producto:Product[]
    nomUsuario:Usuario;
    nomAdmin:Admin;

    constructor(producto:Product[],nomUsuario: Usuario,nomAdmin:Admin) {
        this.producto = producto;
        this.nomUsuario = nomUsuario;
        this.nomAdmin = nomAdmin;
      }

}

  
    

import { Admin } from "./admin"
import { Product } from "./product"
import { Usuario } from "./usuario";

import { Usuarios } from "./usuarios"

export class Ventaa {
    // idVenta: number;
    producto:Product[]
    idUsuario:Usuario;
    nomAdmin:Admin;

    constructor(producto:Product[],idUsuario: Usuario,nomAdmin:Admin) {
        this.producto = producto;
        this.idUsuario = idUsuario;
        this.nomAdmin = nomAdmin;
      }

}

  
    

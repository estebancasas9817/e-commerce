export class Admin {
  usuario:string;
  correo:string;
  clave:string;
  id:number;


  constructor(usuario, correo, clave,id) {
    this.usuario = usuario;
    this.correo = correo;
    this.clave = clave;
    this.id = id;
  }
}

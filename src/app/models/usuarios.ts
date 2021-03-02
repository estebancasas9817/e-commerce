export class Usuarios {
  nombre:string;
  apellido:string;
  email:string;
  clave:string;
  id:number;


  constructor(nombre, apellido, email, clave,id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clave = clave;
    this.id = id;
  }
}

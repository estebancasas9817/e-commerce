export class Usuarios {
  nombre:string;
  email:string;
  clave:string;

  constructor(nombre, email, clave) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
  }
}

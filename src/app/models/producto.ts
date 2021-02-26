export class Producto {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;

    constructor(id, titulo , descripcion = '' , precio = 0, imagen = "https://cdn.shopify.com/s/files/1/0311/9398/9260/products/true-bikini-top-leopard-1_720x720.jpg?v=1607521639" ){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const usuariosUrl = baseUrl +'/usuarios';
export const listadoUrl = baseUrl +'/compras';
export const adminUrl = baseUrl +'/admin';
export const detalleUrl = baseUrl +'/detalle-compra';
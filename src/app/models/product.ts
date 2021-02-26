export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, description = '', price = 0, imageUrl = 'https://cdn.shopify.com/s/files/1/0311/9398/9260/products/true-bikini-top-leopard-1_720x720.jpg?v=1607521639') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }
  
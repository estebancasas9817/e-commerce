import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { NgxSpinnerService } from "ngx-spinner";
import { map } from 'rxjs/operators';


const apiUrl = "http://localhost:3000/products";

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  allProducts: Product[];
  mockUrl: string = 'http://localhost:3000/products';

  currentProduct: Product = {
    name: '',
    description: '',
    price: null,
    id: null,
    imageUrl: ''
  }  
  constructor(
    private http:HttpClient,
    private ngxSpinnerService: NgxSpinnerService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.mockUrl, product, headerOption);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.mockUrl + '/' + product.id, product, headerOption);
  }

  getAllEmployee() {
    this.ngxSpinnerService.show();
    return this.http.get<Product[]>(this.mockUrl, headerOption).subscribe(
      (data: Product[]) => {
        this.allProducts = data;
        console.table(this.allProducts);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  deleteProduct(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.mockUrl + '/' + id, headerOption);
  }

  getProductItems(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl).pipe(
      map((result: any[]) => {
        let productItems: Product[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in productItems) {
            if (productItems[i].id === item.product.id) {
              productExists = true
              break;
            }
          }
        }

        return productItems;
      })
    );
  }
}

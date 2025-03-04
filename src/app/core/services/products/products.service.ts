import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from '../../custom_injection/api_url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
// api logic here
  constructor(private httpClient:HttpClient ,@Inject(api_url) private apiPath:string) { }



  getAllProducts():Observable<any>{
    return this.httpClient.get(this.apiPath +'/products');
  }
  getSpecificProducts(id:string):Observable<any>{
    return this.httpClient.get( this.apiPath +`/products/${id}`);
  }
}

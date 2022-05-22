import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map,} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getBooks() {
    throw new Error('Method not implemented.');
  }
  price: any;

  constructor(private http : HttpClient) { }

  getproduct(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/book/")
    .pipe(map((res:any)=>{
      return res;
    }))

  }
}

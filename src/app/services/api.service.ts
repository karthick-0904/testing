import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public search = new BehaviorSubject<string>("");
  public filter = new BehaviorSubject<any>([]);
  public price = new BehaviorSubject<any>([""]);
  constructor(private http: HttpClient) { }

  // categories$ = this.http.get<Category[]>("https://bookcart.azurewebsites.net/api/Book/GetCategoriesList").pipe(shareReplay(1));
  // books$ = this.getBooks().pipe(shareReplay(1));
  getBooks(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res
    }))
  }
}

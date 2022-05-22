import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {
  public AllBooks:any=[];
  public allbook:any=[];
  public rate:any;
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  getBooks(){
    this.data.getproduct().subscribe(((res: any)=>{
      this.AllBooks=res 
      this.allbook=res     
    }))
  }

  filter() {
    this.AllBooks= this.allbook
    .filter((a:any)=>{
      
      if(a.price<=this.rate){
        return a
      }
    })
    this.data.price.next(this.AllBooks);
  }

}

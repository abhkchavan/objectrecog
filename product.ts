import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product=[];

  constructor(private productservice:ProductserviceService) { }


  ngOnInit() {
    this.productservice.getallproducts().subscribe(data => this.product=data);
  }

}

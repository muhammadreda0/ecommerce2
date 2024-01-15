import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productCardComponent} from '../product-card/product-card.component';
import {FormsModule} from '@angular/forms';
import {ProductRequestService} from '../services/product-request.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [productCardComponent,FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
 
  title:string='';

  constructor(private productrequestService:ProductRequestService){}

  ngOnInit(){
    this.productrequestService.getproduct().subscribe((requestdata:any)=>this.products = requestdata['products'])
  }



}

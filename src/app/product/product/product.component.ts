import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  ngOnInit() {
    this.getProductList();
  }

  constructor(private service:ProductService,private router:Router){}

  productList!:Array<any>;

  prodList = new Product();

  getProductList(){
    this.service.fetchProductsList().subscribe(
      (data:any) => { 
        this.productList = data;
        console.log(data) },
      (error) => { console.log('error fetching the list',error) }
    );
  }

  goToAddProduct(){
    this.router.navigate(['product/addproduct'])
  }

  deleteproduct(id:number){
    return this.service.deleteProductById(id).subscribe(
      (success) => {
        alert('Product deleted succesfully');
        this.getProductList()
      },
      (error) => {
        console.log('Exception occured 2');
        this.getProductList();
      }
    )
  }

}

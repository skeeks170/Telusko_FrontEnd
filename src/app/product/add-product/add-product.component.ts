import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  newProduct = new Product();

  constructor(private service:ProductService, private router:Router){}

  ngOnInit() {  }

  addProduct(){
    this.service.addProductToDb(this.newProduct).subscribe(
      (data) => {
        console.log('response recieved');
        alert("Product Has Been Added");
        this.goToProductList()
      },
      (error) => console.log('exception ocured')
    )
  }

  goToProductList(){
    this.router.navigate(['product/productList'])
  }

}

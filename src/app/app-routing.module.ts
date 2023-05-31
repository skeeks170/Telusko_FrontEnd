import { QuizadminComponent } from './quiz/quizadmin/quizadmin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UrlShortComponent } from './urlShort/url-short/url-short.component';
import { QuizuserComponent } from './quiz/quizuser/quizuser.component';
import { QuizhomeComponent } from './quiz/quizhome/quizhome.component';

const routes: Routes = [
  {path:'product/productList',component:ProductComponent},
  {path:'product/addproduct',component:AddProductComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'urlShortner',component:UrlShortComponent},
  {path:'quiz/userquiz',component:QuizuserComponent},
  {path:'quiz/adminquiz',component:QuizadminComponent},
  {path:'quiz/homequiz',component:QuizhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UrlShortComponent } from './urlShort/url-short/url-short.component';
import { QuizhomeComponent } from './quiz/quizhome/quizhome.component';
import { QuizuserComponent } from './quiz/quizuser/quizuser.component';
import { QuizadminComponent } from './quiz/quizadmin/quizadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    UrlShortComponent,
    QuizhomeComponent,
    QuizuserComponent,
    QuizadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

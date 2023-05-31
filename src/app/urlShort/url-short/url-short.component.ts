import { Component, OnInit } from '@angular/core';
import { UrlShortService } from '../url-short.service';
import { UrlShort } from '../url-short';

@Component({
  selector: 'app-url-short',
  templateUrl: './url-short.component.html',
  styleUrls: ['./url-short.component.css']
})
export class UrlShortComponent implements OnInit {
  
  ngOnInit() {
    this.fetchUrlTableData();
   }

  constructor(private service:UrlShortService){}  

  newUrl = new UrlShort()

  shortenedUrl!: string; // New property to store the shortened URL

  urlTableData!: any[]; // New property to store the UrlTable data

  shortenUrl() {
    this.service.generateShortenedUrlFromRemote(this.newUrl.originalUrl).subscribe(
      (response: any) => {
        console.log('response received');
        this.shortenedUrl = response; // Assign the shortened URL to the property
      },
      (error) => {
        console.log('exception occurred:', error.message);
      }
    );
  }
  
  fetchUrlTableData() {
    this.service.getUrlTableData().subscribe(
      (response: any[]) => {
        this.urlTableData = response; // Assign the UrlTable data to the property
      },
      (error) => {
        console.log('exception occurred:', error.message);
      }
    );
  }  

}

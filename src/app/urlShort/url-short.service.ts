import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlShortService {
  
  constructor(private http:HttpClient) { }

  generateShortenedUrlFromRemote(originalUrl: string) {
    return this.http.post('http://localhost:8080/urlShort/generateShortenedUrl', originalUrl, { responseType: 'text' });
  }

  getUrlTableData():Observable<any> {
    return this.http.get('http://localhost:8080/urlShort/urlList')
  }
  
}

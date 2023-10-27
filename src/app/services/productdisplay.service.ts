import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdisplayService {
  apiUrl: string;

  constructor(private http: HttpClient) {}

  getProductDisplay(id: any) : Observable<any[]> {
    const test = id;
    const apiUrl = 'http://10.2.2.90:9023/ekutrade/rest/product/${test}';

    return this.http.get<any[]>(this.apiUrl, {responseType:'json'});
  }
}
 
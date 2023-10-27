import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private apiUrl = 'http://10.2.2.90:9023/camunda/rest/process/getall';

  constructor(private http: HttpClient) { }

  getAllProcesses() {
    return this.http.get(this.apiUrl);
  }
  
  startProcess(key: string): Observable<any> {
    const startUrl = `http://localhost:8080/engine-rest/process-definition/key/${key}/start`;
    console.log('start');
    // You can include any request data as needed (e.g., variables or form data)
    const requestData = {};
    console.log('start');
    // Define headers (modify as needed)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
      
    });

    console.log('start');
    const options = { headers };
    console.log('start');
    // Use pipe and switchMap to combine both HTTP requests
    return this.http.post(startUrl, requestData, options).pipe(
      
      switchMap((response) => {
        console.log('start');
        console.log("Process started successfully:", response);

        // Now make the GET request for instances and return that observable
        return this.http.get(startUrl, {responseType: 'json'});
      })
      
    );
    
  }
  
} console.log('start');

import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = 'http://localhost:8080/ecom/adminController';

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>>{
    let formData: FormData = new FormData;

    formData.append('file',file);

    const req = new HttpRequest('POST', `${this.baseUrl}/image`, formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  } 

  
}

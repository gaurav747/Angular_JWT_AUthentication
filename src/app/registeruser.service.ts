import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http: HttpClient) { }
  register(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/register`, data);

  }
}

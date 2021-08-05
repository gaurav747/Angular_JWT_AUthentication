import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {

  constructor(private http: HttpClient) { }
  profile(): Observable<any> {
    const session = sessionStorage.getItem('jwt');
    // console.log(session)
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${session}`
    // })

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session}`
      })
    };
    return this.http.get(`${baseUrl}/getuser`, httpOptions)
  }
}

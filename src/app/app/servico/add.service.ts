import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../features/user/login/interface/users';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  baseUrl = 'https://localhost:7282/api/User';

  constructor(public http: HttpClient) {}

  save(user: Users) {    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Users>(
      this.baseUrl + '/Post',
      user, {headers: headers}
    );
  }
}

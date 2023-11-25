import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface/users';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  baseUrl = 'https://localhost:7282/api/User';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/getById?id=${id}`);
  }

  update(user: Users): Observable<Users> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Users>(
      this.baseUrl + '/update',
      user, {headers: headers}
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  baseUrl = 'https://localhost:7282/api/User/getById?id=';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}${id}`);
  }

}

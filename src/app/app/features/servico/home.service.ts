import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/app/features/interface/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  baseUrl = 'https://localhost:7282/api/User';

  constructor(public http: HttpClient) { }

  allUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + '/getAll');
  }

}

import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Users } from '../interface/users';


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  baseUrl = 'https://localhost:7282/api/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(userName: any, password: any) {    
    return this.http.get<Users[]>(`${this.baseUrl}User/Login?userName=${userName}&password=${password}`)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          sessionStorage.setItem('userName', this.decodedToken.unique_name);
        }
      })
    );
  }
}

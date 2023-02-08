import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// creation de token
const AUTH_API = 'http://localhost:4000/enseignant/';
// const AUTH_APIEL = ' http://localhost:4000/eleve/';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', { userName, password }, httpOptions);
    }
  register(userName: string, email: string,password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', { userName, email, password}, httpOptions);
  }
}
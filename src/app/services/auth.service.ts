

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin() {
    throw new Error('Method not implemented.');
  }
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://localhost:5001/api/kullanicilar';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { eposta: email, sifre: password });
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  getKullaniciDetay(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/me`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {
  private apiUrl = 'https://localhost:5001/api/kullanicilar';

  constructor(private http: HttpClient) { }

  getKullanicilar(): Observable<Kullanici[]> {
    return this.http.get<Kullanici[]>(this.apiUrl);
  }

  updateKullanici(kullanici: Kullanici): Observable<Kullanici> {
    return this.http.put<Kullanici>(`${this.apiUrl}/${kullanici.id}`, kullanici);
  }

  deleteKullanici(kullaniciId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${kullaniciId}`);
  }
}

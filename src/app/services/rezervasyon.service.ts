import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rezervasyon } from '../models/rezervasyon';

@Injectable({
  providedIn: 'root'
})
export class RezervasyonService {
  private apiUrl = 'https://localhost:5001/api/rezervasyonlar';

  constructor(private http: HttpClient) { }

  createRezervasyon(rezervasyon: Rezervasyon): Observable<Rezervasyon> {
    return this.http.post<Rezervasyon>(this.apiUrl, rezervasyon);
  }

  getRezervasyonlar(): Observable<Rezervasyon[]> {
    return this.http.get<Rezervasyon[]>(this.apiUrl);
  }

  updateRezervasyon(rezervasyon: Rezervasyon): Observable<Rezervasyon> {
    return this.http.put<Rezervasyon>(`${this.apiUrl}/${rezervasyon.id}`, rezervasyon);
  }

  deleteRezervasyon(rezervasyonId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${rezervasyonId}`);
  }
}

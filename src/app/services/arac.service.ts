import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arac } from '../models/arac';

@Injectable({
  providedIn: 'root'
})
export class AracService {
  private apiUrl = 'https://localhost:5001/api/araclar';

  constructor(private http: HttpClient) { }

  getAraclar(): Observable<Arac[]> {
    return this.http.get<Arac[]>(this.apiUrl);
  }

  createArac(arac: Arac): Observable<Arac> {
    return this.http.post<Arac>(this.apiUrl, arac);
  }

  updateArac(arac: Arac): Observable<Arac> {
    return this.http.put<Arac>(`${this.apiUrl}/${arac.Id}`, arac);
  }

  deleteArac(aracId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${aracId}`);
  }
}

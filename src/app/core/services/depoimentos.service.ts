import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depoimento } from '../types/type';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  listarDepoimentos(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promocao } from '../types/type';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl; // replace with your API URL

  constructor(private http: HttpClient) { }

  listar(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Vivienda } from './vivienda';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  private apiUrl: string = environment.baseUrl + 'viviendas';

  constructor(private http: HttpClient) { }
  getViviendas(): Observable<Vivienda[]> {
    return this.http.get<Vivienda[]>(this.apiUrl);
  }
}

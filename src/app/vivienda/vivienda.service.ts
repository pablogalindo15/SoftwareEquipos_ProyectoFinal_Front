import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ViviendaDetail } from './viviendaDetail';

@Injectable({
  providedIn: 'root'
})

export class ViviendaService {

  private apiUrl: string = environment.baseUrl + 'viviendas';

  constructor(private http: HttpClient) { }

  getViviendas(): Observable<ViviendaDetail[]> {
    return this.http.get<ViviendaDetail[]>(this.apiUrl);
  }
}
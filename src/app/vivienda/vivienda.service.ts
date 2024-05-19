import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ViviendaDetail } from './vivienda-detail';
import { Vivienda } from './vivienda';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  private apiUrl: string = environment.baseUrl + 'viviendas';

  constructor(private http: HttpClient) { }

  getViviendas(): Observable<ViviendaDetail[]> {
    return this.http.get<ViviendaDetail[]>(this.apiUrl);
  }

  getVivienda(id: number): Observable<ViviendaDetail> {
    return this.http.get<ViviendaDetail>(this.apiUrl + '/' + id);
  }

  createVivienda(vivienda: ViviendaDetail): Observable<ViviendaDetail> {
    return this.http.post<ViviendaDetail>(this.apiUrl, vivienda);
  }

  createVivienda2(vivienda: Vivienda): Observable<Vivienda> {
    return this.http.post<Vivienda>(this.apiUrl, vivienda);
  }

  createLugarVivienda(idVivienda: number, idLugar: number) {
    return this.http.post(
      this.apiUrl + '/' + idVivienda + '/lugarDeInteres_cercano/' + idLugar,
      undefined
    );
  }

  createHabitanteActualVivienda(idVivienda: number, idHabitante: number) {
    return this.http.post(
      this.apiUrl + '/' + idVivienda + '/habitantes_actuales/' + idHabitante,
      undefined
    );
  }

  createHistorialVivienda(idVivienda: number, idHabitante: number) {
    return this.http.post(
      this.apiUrl + '/' + idVivienda + '/historial/' + idHabitante,
      undefined
    );
  }

}

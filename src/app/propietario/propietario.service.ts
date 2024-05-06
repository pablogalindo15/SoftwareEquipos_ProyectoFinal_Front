import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development'
import { Observable } from 'rxjs';
import { Propietario } from './propietario';
import { PropietarioDetail } from './propietario-detail';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private apiUrl: string = environment.baseUrl + 'propietarios';
  constructor(private http: HttpClient) { }

  getPropietarios(): Observable<PropietarioDetail[]> {
    return this.http.get<PropietarioDetail[]>(this.apiUrl);
  }
}

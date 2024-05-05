import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitante } from './habitante';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HabitanteService {

  private apiUrl: string = environment.baseUrl + 'habitantes';

  constructor(private http: HttpClient) { }
  getHabitantes(): Observable<Habitante[]> {
    return this.http.get<Habitante[]>(this.apiUrl);
  }
}

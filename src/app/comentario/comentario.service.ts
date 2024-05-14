import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';
import { ComentarioDetail } from './comentario-detail';

@Injectable({
 providedIn: 'root'
})
export class ComentarioService {
    private apiUrl: string = environment.baseUrl + 'comentario';
    constructor(private http: HttpClient) { }
    getComentarios(): Observable<ComentarioDetail[]> {
        return this.http.get<ComentarioDetail[]>(this.apiUrl);
      }
    }

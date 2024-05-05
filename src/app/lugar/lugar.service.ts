import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Lugar } from './lugar';
import { LugarDetail } from './lugar-detail';

@Injectable({
 providedIn: 'root'
})
export class LugarService {
    private apiUrl: string = environment.baseUrl + 'lugares';
    constructor(private http: HttpClient) { }
    getLugares(): Observable<LugarDetail[]> {
        return this.http.get<LugarDetail[]>(this.apiUrl);
      }

}

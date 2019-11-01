import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`);
  }
}

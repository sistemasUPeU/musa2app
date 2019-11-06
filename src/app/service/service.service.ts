import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ubigeo } from '../ComponentesVista/Configuracion/registrarubigeo/ubigeo';
import { Roles } from '../Modelo/Roles';
import { Vinculos } from '../Modelo/Vinculos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`);
  }

  searchUbigeo(codigo: number) {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/ubi/${ codigo }`);
  }

  postUbigeo(ubigeo: Ubigeo): Observable<number> {
    return this.http.post<number>(`${ environment.apiUrl }/add`, ubigeo);
  }
  getAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/`);
  }

  getVinculo(tipovinculo: number) : Observable<Vinculos[]> {
    return this.http.get<Vinculos[]>(`${ environment.apiUrl }/vinculos/lis/`+tipovinculo);
  }

}

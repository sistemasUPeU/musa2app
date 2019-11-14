import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ubigeo } from '../ComponentesVista/Configuracion/registrarubigeo/ubigeo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  deleteUbigeo(ubigeo: Ubigeo) {
    throw new Error("Method not implemented.");
  }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) {
    console.log('serviciode ubigeo funcionando');
   }

  getAllUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`);
  }

  searchUbigeo(codigo: number) {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/ubi/${ codigo }`);
  }

   postUbigeo(ubigeo: any): Observable<any> {
    return this.http.post<any>(`${ environment.apiUrl }/ubigeos/add`, ubigeo);
   }
   deleteUbige(id: number): Observable<Ubigeo> {
    return this.http.delete<Ubigeo>(`${ environment.apiUrl }/ubigeos/ubi/${ id }`);
 }
  //createUbigeo(ubigeo: Ubigeo): Observable<Ubigeo>{
   // return this.http.post<Ubigeo>(`${ environment.apiUrl }/unigeos/add`, ubigeo);
 // }
}


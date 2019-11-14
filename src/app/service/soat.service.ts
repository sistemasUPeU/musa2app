import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Soat } from '../Modelo/Soat';

@Injectable({
  providedIn: 'root'
})
export class SoatService {

  constructor(private http:HttpClient, private router:Router) { }

  listsoats(): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/`);
  }
  crearsoat(soat:Soat){
    return this.http.post<Soat>(`${ environment.apiUrl }/soats/add`,soat);
  }
  eliminarsoat(id:number){
    return this.http.delete<Soat>(`${ environment.apiUrl }/soats/`+id);
  }
  modificarsoat(soat:Soat){
    return this.http.put<Soat>(`${ environment.apiUrl }/soats/`+ soat.idsoat,soat);

  }
  listsoatid(id:number): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/`+ id);

  }
  buscarnro(nrodocumento:number): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/P/`+ nrodocumento);

  }
  listarestado(estado:number): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/Po/`+ estado);

  }


}

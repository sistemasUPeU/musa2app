import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MantAcciones } from '../Modelo/MantAcciones';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http:HttpClient, private router:Router) {}

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getAcciones(tipo:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/`+tipo);
  }

  createAcciones(accion:MantAcciones): Observable<MantAcciones>{
    return this.http.post<MantAcciones>(`${ environment.apiUrl }/acciones/`, accion, {headers: this.httpHeaders});
  }

  updateAcciones(accion:MantAcciones): Observable<MantAcciones>{
    return this.http.put<MantAcciones>(`${ environment.apiUrl }/acciones/edit/${accion.idmantacciones}`, accion, {headers: this.httpHeaders});
  }

  eliminarAcciones(id:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/state/`+id);
  }

}
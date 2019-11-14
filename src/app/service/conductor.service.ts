import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConductorComponent } from '../ComponentesVista/Conductores/conductor/conductor.component';
import { Observable } from 'rxjs';
import { Conductor } from '../Modelo/Conductor';


@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  constructor(private http:HttpClient, private router:Router) { }

  listConductor(): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(`${ environment.apiUrl }/conductores/`);
  }
  crearConductor(conductor:Conductor){
    return this.http.post<Conductor>(`${ environment.apiUrl }/conductores/add`,conductor);
  }
  deleteconductor(conductor:Conductor){
   return this.http.put<Conductor>(`${ environment.apiUrl }/conductores/D`, conductor);

  }
  editar(conductor:Conductor){
   return this.http.put<Conductor>(`${ environment.apiUrl }/conductores/ `+conductor.idconductor,conductor);
  
  }
  buscar(codigo:number): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(`${ environment.apiUrl }/conductores/P/` + codigo );

  }
  estado(estado:number): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(`${ environment.apiUrl }/conductores/Po/`+ estado);
  }
}

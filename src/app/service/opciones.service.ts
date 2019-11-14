import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OpcionesComponent } from '../ComponentesVista/Seguridad/opciones/opciones.component';
import { Observable } from 'rxjs';
import { Opciones } from '../Modelo/Opciones';


@Injectable({
  providedIn: 'root'
})
export class OpcionesService {
  listaropciones() {
    throw new Error("Method not implemented.");
  }
  constructor(private http:HttpClient, private router:Router) { }

  listopciones(): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/`);
  }
  crearopciones(opciones:Opciones){
    return this.http.post<Opciones>(`${ environment.apiUrl }/opciones/add`,opciones);
  }
  deleteopciones(idopciones:number){
    return this.http.delete<number>(`${ environment.apiUrl }/opciones/`+idopciones);

  }
  editar(opciones:Opciones){
   return this.http.put<Opciones>(`${ environment.apiUrl }/opciones/ `+opciones.idopciones,opciones);
  
  }
  buscar(tipo:number): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/P/` + tipo );

  }
  buscar1(idopciones:number): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/P/` + idopciones );

  }
  estado(estado:number): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/Po/`+ estado);
  }
}
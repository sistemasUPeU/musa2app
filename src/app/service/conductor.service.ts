import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConductorComponent } from '../ComponentesVista/Conductores/conductor/conductor.component';
import { Observable, throwError } from 'rxjs';
import { Conductor } from '../Modelo/Conductor';
import { LoginService } from 'src/app/service/login.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor(private http:HttpClient, private router:Router, private loginService:LoginService) { }
  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      //console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    
    return this.httpHeaders;
  }

  listConductor(): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(`${ environment.apiUrl }/conductores/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  crearConductor(conductor:Conductor){
    return this.http.post<Conductor>(`${ environment.apiUrl }/conductores/add`,conductor, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  deleteconductor(conductor:Conductor){
   return this.http.put<Conductor>(`${ environment.apiUrl }/conductores/D`, conductor, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));

  }
  editar(conductor:Conductor){
   return this.http.put<Conductor>(`${ environment.apiUrl }/conductores/ `+conductor.idconductor,conductor, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
  
  }
  buscar(codigo:number): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(`${ environment.apiUrl }/conductores/P/` + codigo , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  estado(estado:number): Observable<Conductor[]>{
    return this.http.get<Conductor[]>(`${ environment.apiUrl }/conductores/Po/`+ estado, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getAllPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${ environment.apiUrl }/conductores/Pers`, {headers: this.agregarAutorizacion()});
  }
  searchPersona(nrodoc: number){
    return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/per/${ nrodoc }`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
}

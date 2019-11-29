import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Soat } from '../Modelo/Soat';
import { Vehiculos } from '../Modelo/Vehiculos';
import { LoginService } from 'src/app/service/login.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SoatService {
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

  getVehiculos(): Observable<Vehiculos[]>{
    return this.http.get<Vehiculos[]>(` ${environment.apiUrl}/vehiculos/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
}


  listsoats(): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  crearsoat(soat:Soat){
    return this.http.post<Soat>(`${ environment.apiUrl }/soats/add`,soat, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  eliminarsoat(id:number){
    return this.http.delete<Soat>(`${ environment.apiUrl }/soats/`+id, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  modificarsoat(soat:Soat){
    return this.http.put<Soat>(`${ environment.apiUrl }/soats/`+ soat.idsoat,soat, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  listsoatid(id:number): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/`+ id, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  buscarnro(nrodocumento:number): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/P/`+ nrodocumento, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  listarestado(estado:number): Observable<Soat[]>{
    return this.http.get<Soat[]>(`${ environment.apiUrl }/soats/Po/`+ estado, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  buscarpadron(nro :number): Observable<Vehiculos[]>{
    return this.http.get<Vehiculos[]>(`${ environment.apiUrl }/vehiculos/nropadron/`+ nro, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }))
  }


}

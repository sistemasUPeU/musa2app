import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarjetac } from '../Modelo/Tarjetac';
import { LoginService } from 'src/app/service/login.service';
import { catchError } from 'rxjs/operators';
import { Vehiculos } from '../Modelo/Vehiculos';
@Injectable({
  providedIn: 'root'
})
export class TarjetacService {
  
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private agregarAutorizacion(){
     let token = this.loginService.token;
     if(token!=null){
       console.log("ESTE ES EL TOKEN "+token);
       return this.httpHeaders.append('Authorization','Bearer' + token);
     }
     
     return this.httpHeaders;
   }
  constructor(private http:HttpClient, private router:Router,private loginService:LoginService) { }

  listtarjeta(): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  buscarpadron(nro :number): Observable<Vehiculos[]>{
    return this.http.get<Vehiculos[]>(`${ environment.apiUrl }/vehiculos/nropadron/`+ nro, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }))
  }
  getVehiculos(): Observable<Vehiculos[]>{
    return this.http.get<Vehiculos[]>(` ${environment.apiUrl}/vehiculos/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
}
  creartarjeta(tarjetac:Tarjetac){
    return this.http.post<Tarjetac>(`${ environment.apiUrl }/tarjetac/add`,tarjetac, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  eliminartarjeta(idtarjetac:number){
    return this.http.delete<number>(`${ environment.apiUrl }/tarjetac/`+idtarjetac, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  modificartarjeta(tarjetac:Tarjetac){
    return this.http.put<Tarjetac>(`${ environment.apiUrl }/tarjetac/`+ tarjetac.idtarjetac,tarjetac, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  listtarjid(id:number): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/`+ id, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  buscarnro(nrodocumento:number): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/P/`+ nrodocumento, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  listarestado(estado:number): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/Po/`+ estado, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }

}
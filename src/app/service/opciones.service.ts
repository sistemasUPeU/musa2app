import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OpcionesComponent } from '../ComponentesVista/Seguridad/opciones/opciones.component';
import { Observable } from 'rxjs';
import { Opciones } from '../Modelo/Opciones';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class OpcionesService {
  listaropciones() {
    throw new Error("Method not implemented.");
  }

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http:HttpClient, private router:Router,private loginService:LoginService) { }

  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }

  listopciones(): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/`, {headers: this.agregarAutorizacion()});
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
import { Injectable } from '@angular/core';


import { Observable , throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../Modelo/Cursos';
import { map, catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { LoginService } from 'src/app/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private loginService:LoginService) { }
  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      //console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }

  getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${ environment.apiUrl }/cursos/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  uptCursos(curso:Cursos){
    console.log(curso)
    return this.http.delete<Cursos>(`${ environment.apiUrl }/cursos/upt/`+curso.idcursos , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }) );
  }
  createCurso(cursos: Cursos){
    return this.http.post<Cursos>(`${ environment.apiUrl }/cursos/add`, cursos, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  readcurso(id:number){
    return this.http.get<Cursos>(`${ environment.apiUrl }/cursos/`+id, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  editCurso(cursos: Cursos){

    return this.http.put<Cursos>(`${ environment.apiUrl }/cursos/`+cursos.idcursos , cursos, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getCursoN(e): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(`${ environment.apiUrl }/cursos/cur/`+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { LoginService } from 'src/app/service/login.service';
import { Observable , throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { VinculoCurso,VCpost, cur, con } from '../Modelo/VinculoCurso';
import { Conductores } from '../Modelo/Conductores';
import { map, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinculoCursoService {

  private httpHeaders = new HttpHeaders({   'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private loginService:LoginService) { }
  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }

  
  getVCursos(): Observable<VCpost[]> {
    return this.http.get<VCpost[]>(`${ environment.apiUrl }/vinculocurso/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getSelCur():Observable<VCpost[]>{
    return this.http.get<VCpost[]>(`${ environment.apiUrl }/vinculocurso/selcur/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getSelCon():Observable<VCpost[]>{
    return this.http.get<VCpost[]>(`${ environment.apiUrl }/vinculocurso/selccon/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  deleteVCursos(vinculo: VinculoCurso){
    
    return this.http.delete<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/upt/`+vinculo.idcurso+"/"+vinculo.idconductor , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  createVCurso(vinculocurso: VinculoCurso){
    return this.http.post<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/add`, vinculocurso, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  readVcurso(x:number,y:number){
    return this.http.get<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/`+x+"/"+y, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  editVCurso(x:number,y:number,vincurcur: VinculoCurso){

    return this.http.put<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/`+x+"/"+y , vincurcur, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getNombreConductor(): Observable<Conductores[]> {
    return this.http.get<Conductores[]>(`${ environment.apiUrl }/conductores/lis/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }

  getName(e): Observable<VCpost[]> {
    return this.http.get<VCpost[]>(`${ environment.apiUrl }/vinculocurso/nombre/`+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }

  getId(x:number , y:number): Observable<VinculoCurso[]>{
   return this.http.get<VinculoCurso[]>(`${ environment.apiUrl }/vinculocurso/`+x+"/"+y,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}

  }


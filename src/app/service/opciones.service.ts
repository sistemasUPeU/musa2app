import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OpcionesComponent } from '../ComponentesVista/Seguridad/opciones/opciones.component';
import { Observable, throwError } from 'rxjs';
import { Opciones } from '../Modelo/Opciones';
import { LoginService } from './login.service';
import { map, catchError, tap} from 'rxjs/operators';

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
      
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }

  listopciones(c:number): Observable<Opciones[]>{
   // console.log(c+" llega al SERVICE");
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/getOPC/`+c, {headers: this.agregarAutorizacion()});
  }
  listaropciones2(): Observable<Opciones[]>{
     return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/`, {headers: this.agregarAutorizacion()});
   }
  crearopciones(opciones:Opciones){
    return this.http.post<Opciones>(`${ environment.apiUrl }/opciones/add`,opciones, {headers: this.agregarAutorizacion()});
  }
  deleteopciones(opc:Opciones){
    return this.http.put<Opciones>(`${ environment.apiUrl }/opciones/Opc/`+opc ,{headers: this.agregarAutorizacion()});

  }
  editar(opciones:Opciones){
   return this.http.put<Opciones>(`${ environment.apiUrl }/opciones/ `+opciones.IDOPCION,opciones,{headers: this.agregarAutorizacion()});
  
  }
  buscar(idopcion:number): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/` + idopcion, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    )
  }
  estado(estado:number): Observable<Opciones[]>{
    return this.http.get<Opciones[]>(`${ environment.apiUrl }/opciones/est/`+ estado,{headers: this.agregarAutorizacion()});
  }
}
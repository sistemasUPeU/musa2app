import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personas } from 'src/app/Modelo/Personas'
import { LoginService } from 'src/app/service/login.service';
import { map, catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class PersonaService {
  postPersona(personas: Persona) {
    throw new Error("Method not implemented.");
  }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(private http: HttpClient, private loginService:LoginService) {
      //console.log('servicio de persona funcionando');
     }
     private agregarAutorizacion(){
      let token = this.loginService.token;
      if(token!=null){
        //console.log("ESTE ES EL TOKEN "+token);
        return this.httpHeaders.append('Authorization','Bearer' + token);
      }
      console.log("NO LLEGA EL TOKEN");
      return this.httpHeaders;
    }
    getAllPersona(): Observable<Persona[]> {
      return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/`);
    }
    searchPersona(nrodoc: number){
      return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/per/${ nrodoc }`);
    }
    getAllPersonaId(){
      return this.http.get<Personas[]>(`${ environment.apiUrl }/personas/id` ,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
    }  
    deletePerson(id: number){
      return this.http.delete<Personas[]>(`${ environment.apiUrl }/personas/per/${id}`);
    } 
    postPersonas(personas: Personas): Observable<number> {
      return this.http.post<number>(`${ environment.apiUrl }/personas/add`, personas);
    }
  }
  
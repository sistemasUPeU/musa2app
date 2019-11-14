import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personas } from 'src/app/Modelo/Personas'

@Injectable({
    providedIn: 'root'
  })
  export class PersonaService {
  postPersona(personas: Persona) {
    throw new Error("Method not implemented.");
  }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(private http: HttpClient) {
      console.log('servicio de persona funcionando');
     }

    getAllPersona(): Observable<Persona[]> {
      return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/`);
    }
    searchPersona(nrodoc: number){
      return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/per/${ nrodoc }`);
    }
    getAllPersonaId(){
      return this.http.get<Personas[]>(`${ environment.apiUrl }/personas/id`);
    }  
    deletePerson(id: number){
      return this.http.delete<Personas[]>(`${ environment.apiUrl }/personas/per/${id}`);
    } 
    postPersonas(persona: Personas): Observable<number> {
      return this.http.post<number>(`${ environment.apiUrl }/personas/add`, persona);
    }
  }
  
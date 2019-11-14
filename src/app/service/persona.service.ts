import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

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
     postPersonas(personas:any):Observable<any>{
     return this.http.post<any>(`${ environment.apiUrl }/personas/add`, personas);
  }
 deletePerson(id:number): Observable<Persona> {
return this.http.delete<Persona>(`${ environment.apiUrl }/personas/per/${ id }`);
 }
//  updatePersona(persona: Persona){
  // return this.http.put<Persona>(`${ environment.apiUrl }/personas/pe/${ id }`);
// }
  }
  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class PersonaService {
    constructor(private http: HttpClient) { }

    getAllPersona(): Observable<Persona[]> {
      return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/`);
    }
    searchPersona(nrodoc: number){
      return this.http.get<Persona[]>(`${ environment.apiUrl }/personas/P/${ nrodoc }`);
    }
  }
  
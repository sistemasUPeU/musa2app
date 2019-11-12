import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../Modelo/Cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private http: HttpClient) { }

  getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${ environment.apiUrl }/cursos/`);
  }
  uptCursos(cursos: Cursos){
    console.log(cursos)
    return this.http.put<Cursos>(`${ environment.apiUrl }/cursos/upt/` , cursos);
  }
}

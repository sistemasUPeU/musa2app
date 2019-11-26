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
  uptCursos(id: number, curso:Cursos){
    console.log(id)
    return this.http.put<Cursos>(`${ environment.apiUrl }/cursos/upt/`+ id,curso );
  }
  createCurso(cursos: Cursos){
    return this.http.post<Cursos>(`${ environment.apiUrl }/cursos/add`, cursos);
  }
  readcurso(id:number){
    return this.http.get<Cursos>(`${ environment.apiUrl }/cursos/`+id);
  }
  editCurso(cursos: Cursos){

    return this.http.put<Cursos>(`${ environment.apiUrl }/cursos/`+cursos.idcursos , cursos);
  }
}

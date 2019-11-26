import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VinculoCurso,VCpost } from '../Modelo/VinculoCurso';
import { Conductores } from '../Modelo/Conductores';

@Injectable({
  providedIn: 'root'
})
export class VinculoCursoService {

  constructor(private http: HttpClient) { }
  
  getVCursos(): Observable<VCpost[]> {
    return this.http.get<VCpost[]>(`${ environment.apiUrl }/vinculocurso/`);
  }
  uptVCursos(vincurcur: VinculoCurso){
    console.log(vincurcur)
    return this.http.put<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/upt/` , vincurcur);
  }
  createVCurso(vinculocurso: VinculoCurso){
    return this.http.post<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/add`, vinculocurso);
  }
  readVcurso(x:number,y:number){
    return this.http.get<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/`+x+"/"+y);
  }
  editVCurso(vincurcur: VinculoCurso,x:number,y:number){

    return this.http.put<VinculoCurso>(`${ environment.apiUrl }/vinculocurso/`+x+"/"+y , vincurcur);
  }
  getNombreConductor(): Observable<Conductores[]> {
    return this.http.get<Conductores[]>(`${ environment.apiUrl }/conductores/lis/`);
  }
}

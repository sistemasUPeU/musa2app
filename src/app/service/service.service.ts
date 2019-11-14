import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ubigeo } from '../ComponentesVista/Configuracion/registrarubigeo/ubigeo';
import { Roles } from '../Modelo/Roles';
import { Vinculos, Vinculo, VincuRequi,Contador, Vinupd } from '../Modelo/Vinculos';
import { Conductores } from '../Modelo/Conductores';
import { Propietarios, Propietario } from '../Modelo/Propietarios';
import { Vehiculos } from '../Modelo/Vehiculos';
import { Requisitos } from '../Modelo/Requisitos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`);
  }

  searchUbigeo(codigo: number) {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/ubi/${ codigo }`);
  }

  postUbigeo(ubigeo: Ubigeo): Observable<number> {
    return this.http.post<number>(`${ environment.apiUrl }/add`, ubigeo);
  }
  getAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/`);
  }


  ///// Vinculossss -------------- ///
  
  getVinculo(tipovinculo: number,estado:number) : Observable<Vinculos[]> {
    return this.http.get<Vinculos[]>(`${ environment.apiUrl }/vinculos/lis/`+tipovinculo+"/"+estado);
  }

  getNombreConductor(): Observable<Conductores[]> {
    return this.http.get<Conductores[]>(`${ environment.apiUrl }/conductores/lis/`);
  }

  getNombrePropietario(): Observable<Propietarios[]> {
    return this.http.get<Propietarios[]>(`${ environment.apiUrl }/propietarios/lis/`);
  }

  getVinculoid(id:number): Observable<Vinculos> {
    return this.http.get<Vinculos>(`${ environment.apiUrl }/vinculos/`+id);
  }

  getNombreVeh(): Observable<Vehiculos[]> {
    return this.http.get<Vehiculos[]>(`${ environment.apiUrl }/vehiculos/lis/`);
  }

  getRequisitos(tipovinculo: number): Observable<Requisitos[]> {
    return this.http.get<Requisitos[]>(`${ environment.apiUrl }/requisitos/lis/`+tipovinculo);
  }

  CreateVinRequi(tipo:number,vincurequi: VincuRequi) {
    return this.http.post<VincuRequi[]>(`${ environment.apiUrl }/vinrequi/add/` + tipo, vincurequi);
  }

  createvinculo(vinculo: Vinculo){
    return this.http.post<Vinculo>(`${ environment.apiUrl }/vinculos/add`, vinculo);
  }

  getcontvin(){
    return this.http.get<Contador[]>(`${ environment.apiUrl }/vinculos/conta`);
  }

  uptVinculo(vinculo: Vinculo){
    console.log(vinculo)
    return this.http.put<Vinculo>(`${ environment.apiUrl }/vinculos/upd` , vinculo);
  }

  uptEstadovin(vincu: Vinupd) {
    return this.http.put<Vinupd>(`${ environment.apiUrl }/vinculos/stado/` , vincu);
  }

  DeleteVinculo(id: number){
    return this.http.delete<Vinculo[]>(`${ environment.apiUrl }/vinculos/`+ id);
  }
  //******PROPIETARIOS */
  getPropietarios(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(`${ environment.apiUrl }/propietarios/`);
  }
  deletePropietarios( propietario:Propietario){
    console.log(propietario)
     return this.http.put<Propietario>(`${ environment.apiUrl }/propietarios/modif/`, propietario);
  }
}


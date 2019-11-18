import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MantAcciones } from '../Modelo/MantAcciones';
import { Mantenimientos } from '../Modelo/Mantenimientos';
import { Vehiculos } from "../Modelo/Vehiculos";
import { Conductores } from "../Modelo/Conductores";
import { MantAccionMantenimiento } from "../Modelo/MantAccionMantenimiento";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http:HttpClient, private router:Router) {}

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getAcciones(tipo:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/`+tipo);
  }

  createAcciones(accion:MantAcciones): Observable<MantAcciones>{
    return this.http.post<MantAcciones>(`${ environment.apiUrl }/acciones/`, accion, {headers: this.httpHeaders});
  }

 

  eliminarAcciones(id:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/state/`+id);
  }

  getById(id:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/edit/`+id);
  }

  getByCat(){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/cat`);
  }

  updateAcciones(accion:MantAcciones): Observable<MantAcciones>{
    return this.http.put<MantAcciones>(`${ environment.apiUrl }/mantenimiento/${accion.idmantacciones}`, accion, {headers: this.httpHeaders});
  }

  getMantsByType(type:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/readallbytype=`+type);
  }

  createMantenimiento(mant:Mantenimientos): Observable<Mantenimientos>{
    return this.http.post<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/create`, mant, {headers: this.httpHeaders});
  }

  updateMantenimiento(mant:Mantenimientos): Observable<Mantenimientos>{
    return this.http.put<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/update${mant.idmantenimiento}`, mant, {headers: this.httpHeaders});
  }

  getMantById(id:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/read=`+id);
  }

  getDetalle(id:number){
    return this.http.get<MantAccionMantenimiento>(`${ environment.apiUrl }/mantenimiento/readalldeta=`+id);
  }

  validarJefeOper(id:number, idJefe:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=pendiente/man=`+id+`/emp=`+idJefe);
  }

  validarJefeMant(id:number, idJefe:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=enproceso/man=`+id+`/emp=`+idJefe);
  }

  validarFinalizado(id:number, idEmp:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=finalizado/man=`+id+`/emp=`+idEmp);
  }

  deleteMantenimiento(id:number, idEmp:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=delete/man=`+id+`/emp=`+idEmp);
  }

  addDetalle(id:number, idAcc:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/add/detalle/man=`+id+`/acc=`+idAcc);
  }

  deleteDetalle(id:number, idAcc:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/delete/detalle/man=`+id+`/acc=`+idAcc);
  }

  getVehiculos(){
    return this.http.get<Vehiculos>(`${ environment.apiUrl }/mantenimiento/readVehiculos`);
  }
  
  getConductores(){
    return this.http.get<Conductores>(`${ environment.apiUrl }/conductores/lis/`);
  }


}
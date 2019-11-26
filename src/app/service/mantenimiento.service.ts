import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MantAcciones } from '../Modelo/MantAcciones';
import { Mantenimientos } from '../Modelo/Mantenimientos';
import { Vehiculos } from "../Modelo/Vehiculos";
import { Conductores } from "../Modelo/Conductores";
import { empleado } from "../Modelo/empleados";
import { MantAccionMantenimiento } from "../Modelo/MantAccionMantenimiento";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http:HttpClient, private router:Router,private loginService:LoginService) {}

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }

  getAcciones(tipo:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/`+tipo, {headers: this.agregarAutorizacion()});
  }

  createAcciones(accion:MantAcciones): Observable<MantAcciones>{
    return this.http.post<MantAcciones>(`${ environment.apiUrl }/acciones/`, accion, {headers: this.agregarAutorizacion()});
  }

 

  eliminarAcciones(id:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/state/`+id, {headers: this.agregarAutorizacion()});
  }

  getById(id:number){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/edit/`+id, {headers: this.agregarAutorizacion()});
  }

  getByCat(){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/cat`, {headers: this.agregarAutorizacion()});
  }

  updateAcciones(accion:MantAcciones): Observable<MantAcciones>{
    return this.http.put<MantAcciones>(`${ environment.apiUrl }/acciones/${accion.idmantacciones}`, accion, {headers: this.agregarAutorizacion()});
  }

  getMantsByType(type:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/readallbytype=`+type, {headers: this.agregarAutorizacion()});
  }

  createMantenimiento(mant:Mantenimientos): Observable<Mantenimientos>{
    return this.http.post<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/create`, mant, {headers: this.agregarAutorizacion()});
  }

  updateMantenimiento(mant:Mantenimientos): Observable<Mantenimientos>{
    return this.http.put<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/update${mant.idMantenimiento}`, mant, {headers: this.agregarAutorizacion()});
  }

  getMantById(id:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/read=`+id, {headers: this.agregarAutorizacion()});
  }

  getDetalle(id:number){
    return this.http.get<MantAccionMantenimiento>(`${ environment.apiUrl }/mantenimiento/readalldeta=`+id, {headers: this.agregarAutorizacion()});
  }

  validarJefeOper(id:number, idJefe:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=pendiente/man=`+id+`/emp=`+idJefe, {headers: this.agregarAutorizacion()});
  }

  validarJefeMant(id:number, idJefe:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=enproceso/man=`+id+`/emp=`+idJefe, {headers: this.agregarAutorizacion()});
  }

  validarFinalizado(id:number, idEmp:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=finalizado/man=`+id+`/emp=`+idEmp, {headers: this.agregarAutorizacion()});
  }

  deleteMantenimiento(id:number, idEmp:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/validar=delete/man=`+id+`/emp=`+idEmp, {headers: this.agregarAutorizacion()});
  }

  addDetalle(id:number, idAcc:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/add/detalle/man=`+id+`/acc=`+idAcc, {headers: this.agregarAutorizacion()});
  }

  updateDetalle(id:number, idAcc:number, sta:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/update/detalle/man=`+id+`/acc=`+idAcc+`/sta=`+sta, {headers: this.agregarAutorizacion()});
  }

  deleteDetalle(id:number, idAcc:number){
    return this.http.get<Mantenimientos>(`${ environment.apiUrl }/mantenimiento/delete/detalle/man=`+id+`/acc=`+idAcc, {headers: this.agregarAutorizacion()});
  }

  getVehiculos(){
    return this.http.get<Vehiculos>(`${ environment.apiUrl }/mantenimiento/readVehiculos`, {headers: this.agregarAutorizacion()});
  }
  
  getConductores(){
    return this.http.get<Conductores>(`${ environment.apiUrl }/conductores/lis/`, {headers: this.agregarAutorizacion()});
  }

  getEmpleados(){
    return this.http.get<empleado>(`${ environment.apiUrl }/empleado/lis`, {headers: this.agregarAutorizacion()});
  }

}
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Modelo/Usuario';
import { Rol_Usuarios } from '../Modelo/Rol_Usuario';
import { Ubigeo } from '../ComponentesVista/Configuracion/registrarubigeo/ubigeo';
import { Vinculos, Vinculo, VincuRequi,Contador, Vinupd, VincuRequis } from '../Modelo/Vinculos';
import { Roles, RolesF } from '../Modelo/Roles';
import { Conductores } from '../Modelo/Conductores';
import { Propietarios, Propietario } from '../Modelo/Propietarios';
import { Vehiculos } from '../Modelo/Vehiculos';
import { Requisitos } from '../Modelo/Requisitos';
import { Usuarios_Opciones } from '../Modelo/Usuarios_Opciones';
import { Configuracion_Grupos } from '../Modelo/Configuracion_Grupos';
import { BusesR } from '../Modelo/Buses_Reportes';
import { UsuarioR } from '../Modelo/Usuario_Reportes';
import { Conductor } from '../Modelo/Conductor';
import { ConductoresRegR } from '../Modelo/ConductoresReg_Reporte';
import { OpcRolR } from '../Modelo/OpcRolR';
import { UserRolR } from '../Modelo/UserRol';
import { PedidosReg } from '../Modelo/PedidosReg';
import { PedidoEs } from '../Modelo/PedidoEsR';
import { PediAproR } from '../Modelo/PediAproR';
import { VinculoPropi } from '../Modelo/VinculoPropi';
import { Propi } from '../Modelo/Propi';
import { ManTReg } from '../Modelo/MantReg';
import { MantVal } from '../Modelo/MantVal';
import { RevDiarias } from '../Modelo/RevDiarias';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { LoginService } from 'src/app/service/login.service';
import { map, catchError, tap} from 'rxjs/operators';
import { Caja } from '../Modelo/Caja';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private loginService:LoginService) { }
  Url = 'http://localhost:8081/roles/'
  Url2 = 'http://localhost:8081/usuarios/'
  Url3 = 'http://localhost:8081/ru'
  Url4 = 'http://localhost:8081/usop/'
  Url5 = 'http://localhost:8081/cg/'
  Url6 = 'http://localhost:8081/reporte/'
  roles:RolesF;

  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }

  searchUbigeo(codigo: number) {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/ubi/${ codigo }`);
  }

  postUbigeo(ubigeo: Ubigeo): Observable<number> {
    return this.http.post<number>(`${ environment.apiUrl }/ubigeos/add`, ubigeo);
  }
  getAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    )
  }
  deleteUbigeo(id: number){

  }
  getAllUser(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${ environment.apiUrl }/usuarios/user/`);
  }
  getRolesN(e): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/nombre/`+e);
  }
  getRolesE(e): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/estado/`+e);
  }
  createRoles(x){
    return this.http.post<Roles[]>(this.Url+'add',x);   
  }
  getAllUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));

  }
  ////////////////////EMPLEADOSSS
  //getEmple() : Observable<empleado[]> {
   // return this.http.get<empleado[]>(`${ environment.apiUrl }/empleado/lis`);
 // }


  ///// Vinculossss -------------- ///
  
  getVinculo(tipovinculo: number, estado:number) : Observable<Vinculos[]> {
    return this.http.get<Vinculos[]>(`${ environment.apiUrl }/vinculos/lis/`+tipovinculo+"/"+estado , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getNombreConductor(): Observable<Conductores[]> {
    return this.http.get<Conductores[]>(`${ environment.apiUrl }/vinculos/lisc/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getNombrePropietario(): Observable<Propietarios[]> {
    return this.http.get<Propietarios[]>(`${ environment.apiUrl }/vinculos/lisp/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getVinculoid(id:number): Observable<Vinculos> {
    return this.http.get<Vinculos>(`${ environment.apiUrl }/vinculos/`+id, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getNombreVeh(): Observable<Vehiculos[]> {
    return this.http.get<Vehiculos[]>(`${ environment.apiUrl }/vinculos/lisv/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getRequisitos(tipovinculo: number): Observable<Requisitos[]> {
    return this.http.get<Requisitos[]>(`${ environment.apiUrl }/vinculos/lis/`+tipovinculo, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  getrequisitos_vinculo(idvinculo: number): Observable<Requisitos[]> {
    return this.http.get<Requisitos[]>(`${ environment.apiUrl }/vinrequi/`+idvinculo, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  uptrequisitos(idvinculo:number,idrequisito:number){
    var x = new VincuRequis(idvinculo,idrequisito);
    console.log(x)
    return this.http.put<VincuRequis>(`${ environment.apiUrl }/vinrequi/upt/`+ idrequisito, x);
  }
  CreateVinRequi(tipo:number,vincurequi: VincuRequi) {
    return this.http.post<VincuRequi[]>(`${ environment.apiUrl }/vinrequi/add/` + tipo, vincurequi);
  }

  createvinculo(vinculo: Vinculo){
    return this.http.post<Vinculo>(`${ environment.apiUrl }/vinculos/add`, vinculo);
  }

  getcontvin(){
    return this.http.get<Contador[]>(`${ environment.apiUrl }/vinculos/conta/`);
  }

  uptVinculo(vinculo: Vinculo){
    console.log(vinculo)
    return this.http.put<Vinculo>(`${ environment.apiUrl }/vinculos/upd` , vinculo);
  }

  uptEstadovin(vincu: Vinupd) {
    return this.http.put<Vinupd>(`${ environment.apiUrl }/vinculos/stado/` , vincu);
  }

  DeleteVinculo(idvinculo: number){
    return this.http.delete<Vinculo[]>(`${ environment.apiUrl }/vinrequi/`+ idvinculo);
  }

  //******VENTASSS */


  //******CAJAAA */

  CreateCaja(caja: Caja){
    return this.http.post<Caja>(`${ environment.apiUrl }/caja/add`, caja , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  //******PROPIETARIOS */
  getPropietarios(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(`${ environment.apiUrl }/propietarios/`,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  deletePropietarios( propietario:Propietario){
    console.log(propietario)
     return this.http.put<Propietario>(`${ environment.apiUrl }/propietarios/modif/`, propietario);
  }
  crearPropietarios(propietarioc:Propietario){
    console.log(`(asdasdasdasdasdasd)`)
    console.table(propietarioc)
     return this.http.post<Propietario>( `${ environment.apiUrl }/propietarios/add`, propietarioc);
  }
  getPropietarioId(id:number){
     return this.http.get<Propietario[]>( `${ environment.apiUrl }/propietarios/`+ id);
  }

  updatePropietarios(propietario:Propietario){
    return this.http.put<Propietario>(`${ environment.apiUrl }/propietarios/`, propietario);
  }
  buscarnombre(nombre:String){
     return this.http.get<Propietario[]>(`${ environment.apiUrl }/propietarios/nombre/`+ nombre);
  }
  /* FIN DEL CRUD PROPIETARIOS */

  deleteRoles(roles:Roles){
    return this.http.delete<Roles>(this.Url+roles.idrol);
  } 
 

  ///////////////FINPropietarios
  updateRoles(x:number,roles:Roles){
    return this.http.put<Roles>(this.Url+x, roles);
  }
  //getRolesIdE(x:number): Observable<Roles[]>{
 //   alert(x+ "hola");
   // return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/`+x);
 // }
  getRolesIdE(id) {
    return this.http.get<Roles>(this.Url+id);
}


///////////////PRUEBA
updateLibro(x,roles:Roles){
  return this.http.put<Roles>(this.Url+x,roles);
}   
getLibroIdL(idlibro:number){
  return this.http.get<Roles>(this.Url+idlibro);
}
updatePersona(roles: Roles){
  return this.http.put<Roles>(this.Url + roles.idrol, roles);
}
getPersonaId(idrol: number): Observable<Roles[]> {
  return this.http.get<Roles[]>(this.Url+idrol);
}


////////////////////////////

getUsuario(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  })
  )
}
getUsuarioN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+ "nombre/"+e);
}
getUsuarioE(e): Observable<Roles[]>{
  return this.http.get<Roles[]>(this.Url2+ "estado/"+e);
}
getUserPer(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2 + "per/");
}
getUserPerN(e): Observable<Roles[]>{
  return this.http.get<Roles[]>(this.Url2+ "per/"+e);
}
createUsuario(user:Usuario){
  return this.http.post<Usuario[]>(this.Url2+'add',user);   
}
createRU(rolus:Rol_Usuarios){
  return this.http.post<Rol_Usuarios[]>(this.Url3+'/ru/add',rolus);   
}
deleteUsuario(user:Usuario){
  return this.http.delete<Usuario>(this.Url2+user.idusuario);
} 
updateUsuario(user: Usuario){
  return this.http.put<Usuario>(this.Url2 + user.idusuario, user);
}
getUsuarioId(idusuario: Number): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.Url2+idusuario);
}


getUse(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+"use/");
}
getRolus(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+"rolus/");
}
getRolusN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url3+ "/rol1/"+e);
}
getUserN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+ "use/"+e);
}
getRolusE(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url3+ "/rol/"+e);
}

///////////////////////////////////// USUARIOS - OPCIONES

getUsOp(): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4);
}
getUsOpN(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "nombre/"+e);
}
getUsOpE(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "estado/"+e);
}
getOpc1(): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "opcion1/");
}
getOpc2(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "opc2/"+e);
}
getOpc3(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "op3/"+e);
}

createOpc(userop:Usuarios_Opciones){
  return this.http.post<Usuarios_Opciones[]>(this.Url4+'add',userop);   
}
deleteUsOp(usop: Usuarios_Opciones){
  return this.http.put<Usuarios_Opciones>(this.Url4+"des/"+usop.idusuario+"/"+usop.idopcion,usop.user_modify);
} 
activarUsOp(usop: Usuarios_Opciones){
  return this.http.put<Usuarios_Opciones>(this.Url4+usop.idusuario+"/"+usop.idopcion,usop.user_modify);
} 
deleteUsr(usr: Rol_Usuarios){
  return this.http.put<Usuario>(this.Url3+"/des/"+usr.idrol+"/"+usr.idusuario, usr.user_modify);
} 
activarUsr(usr: Rol_Usuarios){
  return this.http.put<Rol_Usuarios>(this.Url3 +"/"+usr.idrol+"/"+usr.idusuario, usr.user_modify);
}

/////////////////////////////////////////////


getConfiP(e): Observable<Configuracion_Grupos[]>{
  return this.http.get<Configuracion_Grupos[]>(this.Url5 + "paradero/"+e);
}

createConfi(x){
  return this.http.post<Configuracion_Grupos[]>(this.Url5+'add',x);   
}
getConfiUNO(): Observable<Configuracion_Grupos[]>{
  return this.http.get<Configuracion_Grupos[]>(this.Url5 + "1");
}
getConfiDOS(): Observable<Configuracion_Grupos[]>{
  return this.http.get<Configuracion_Grupos[]>(this.Url5 + "2");
}
createUNO(x){
  return this.http.post<Configuracion_Grupos[]>(this.Url5+'add/1',x);   
}
createDOS(x){
  return this.http.post<Configuracion_Grupos[]>(this.Url5+'add/2',x);   
}

/////////////////////////////////////// REPORTES ///////////////////////////////////
getBuses(): Observable<BusesR[]>{
  return this.http.get<BusesR[]>(this.Url6+"bus");
}
getUsi(): Observable<UsuarioR[]>{
  return this.http.get<UsuarioR[]>(this.Url6+"user");
}
getConductor(): Observable<ConductoresRegR[]>{
  return this.http.get<ConductoresRegR[]>(this.Url6+"conductor");
}
getOR(): Observable<OpcRolR[]>{
  return this.http.get<OpcRolR[]>(this.Url6+"opr");
}
getUR(): Observable<UserRolR[]>{
  return this.http.get<UserRolR[]>(this.Url6+"usro");
}
getPedidosR(): Observable<PedidosReg[]>{
  return this.http.get<PedidosReg[]>(this.Url6+"pedr");
}
getPedidosE(): Observable<PedidoEs[]>{
  return this.http.get<PedidoEs[]>(this.Url6+"pede");
}
getPedidosA(): Observable<PediAproR[]>{
  return this.http.get<PediAproR[]>(this.Url6+"peda");
}
getVnc(): Observable<VinculoPropi[]>{
  return this.http.get<VinculoPropi[]>(this.Url6+"vinculo");
}
getPro(): Observable<Propi[]>{
  return this.http.get<Propi[]>(this.Url6+"propietario");
}
getMantr(): Observable<ManTReg[]>{
  return this.http.get<ManTReg[]>(this.Url6+"mantr");
}
getMantv(): Observable<MantVal[]>{
  return this.http.get<MantVal[]>(this.Url6+"mantv");
}
getRevd(): Observable<RevDiarias[]>{
  return this.http.get<RevDiarias[]>(this.Url6+"revd");
}

}


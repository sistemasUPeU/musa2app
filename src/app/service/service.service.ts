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
  Url = `${ environment.apiUrl }/roles/`
  Url2 =`${ environment.apiUrl }/usuarios/`
  Url3 =`${ environment.apiUrl }/ru/`
  Url4 =`${ environment.apiUrl }/usop/`
  Url5 =`${ environment.apiUrl }/cg/`
  Url6 =`${ environment.apiUrl }/reporte/`
  roles:RolesF;
  private agregarAutorizacion1(){
    let token = this.loginService.token;
    if(token!=null){
      console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    
    return this.httpHeaders;
  }
  getAllUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    )
  }

  deleteUbige(id: number){
    return this.http.delete<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/ubi/${ id}`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    )
  }

  searchUbigeo(codigo: number) {
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/ubi/${ codigo }`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    )
  }
  postUbigeo(ubigeo: Ubigeo): Observable<number> {
    return this.http.post<number>(`${ environment.apiUrl }/ubigeos/add`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    )
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
    return this.http.get<Usuario[]>(`${ environment.apiUrl }/usuarios/user/`, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  private agregarAutorizacion(){
    let token = this.loginService.token;
    if(token!=null){
      console.log("ESTE ES EL TOKEN "+token);
      return this.httpHeaders.append('Authorization','Bearer' + token);
    }
    console.log("NO LLEGA EL TOKEN");
    return this.httpHeaders;
  }
  getRolesN(e): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/nombre/`+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getRolesE(e): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/estado/`+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  createRoles(x){
    return this.http.post<Roles[]>(this.Url+'add',x, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));   
  }

  ////////////////////EMPLEADOSSS
  //getEmple() : Observable<empleado[]> {
   // return this.http.get<empleado[]>(`${ environment.apiUrl }/empleado/lis`);
 // }


  ///// Vinculossss -------------- ///
  
  getVinculo(tipovinculo: number, estado:number) : Observable<Vinculos[]> {
    return this.http.get<Vinculos[]>(`${ environment.apiUrl }/vinculos/lis/`+tipovinculo+"/"+estado ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getNombreConductor(): Observable<Conductores[]> {
    return this.http.get<Conductores[]>(`${ environment.apiUrl }/vinculos/lisc/`,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getNombrePropietario(): Observable<Propietarios[]> {
    return this.http.get<Propietarios[]>(`${ environment.apiUrl }/vinculos/lisp/`,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getVinculoid(id:number): Observable<Vinculos> {
    return this.http.get<Vinculos>(`${ environment.apiUrl }/vinculos/`+id ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getNombreVeh(): Observable<Vehiculos[]> {
    return this.http.get<Vehiculos[]>(`${ environment.apiUrl }/vinculos/lisv/`,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getRequisitos(tipovinculo: number): Observable<Requisitos[]> {
    return this.http.get<Requisitos[]>(`${ environment.apiUrl }/vinculos/lis/`+tipovinculo ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  getrequisitos_vinculo(idvinculo: number): Observable<Requisitos[]> {
    return this.http.get<Requisitos[]>(`${ environment.apiUrl }/vinrequi/`+idvinculo ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  /*uptrequisitos(idvinculo:number,idrequisito:number, archivo: File){
    var x = new VincuRequis(idvinculo,idrequisito,archivo);
    let formData = new FormData();
    console.log(x);
    formData.append("archivo", archivo);
    formData.append("idr", idrequisito.toString());
    formData.append("idv", idvinculo.toString());
    console.log(x)
    return this.http.post<VincuRequis>(`${ environment.apiUrl }/vinrequi/upload`,formData ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }*/
  acturequisitos(idvinculo:number,idrequisito:number){
    var x = new VincuRequis(idvinculo,idrequisito,"opcion no disponible");
    let formData = new FormData();
    console.log(x);
    console.log(x)
    return this.http.put<VincuRequis>(`${ environment.apiUrl }/vinrequi/actua/`+x.idvinculo+"/"+x.idrequisito, x,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  CreateVinRequi(tipo:number,id: number) {
    return this.http.post<VincuRequi[]>(`${ environment.apiUrl }/vinrequi/add/` + tipo + '/'+ id,VincuRequis ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  createvinculo(vinculo: Vinculo){
    return this.http.post<Vinculo>(`${ environment.apiUrl }/vinculos/add`, vinculo ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  getcontvin(){
    return this.http.get<Contador[]>(`${ environment.apiUrl }/vinculos/conta/`,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  uptVinculo(vinculo: Vinculo){
    console.log(vinculo)
    return this.http.put<Vinculo>(`${ environment.apiUrl }/vinculos/upd` , vinculo ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  uptEstadovin(vincu: Vinupd) {
    return this.http.put<Vinupd>(`${ environment.apiUrl }/vinculos/stado/` , vincu ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }

  DeleteVinculo(idvinculo: number){
    return this.http.delete<Vinculo[]>(`${ environment.apiUrl }/vinrequi/`+ idvinculo ,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
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
    return this.http.get<Propietario[]>(`${ environment.apiUrl }/propietarios/`,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    })
    );
  }
  deletePropietarios(id:number){
     return this.http.put<Propietario>(`${ environment.apiUrl }/propietarios/modif/`+id, Propietario, {headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  crearPropietarios(propietarioc:Propietario){
    console.log(`(asdasdasdasdasdasd)`)
    console.table(propietarioc)
     return this.http.post<Propietario>( `${ environment.apiUrl }/propietarios/add`, propietarioc,{headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getPropietarioId(id:number){
     return this.http.get<Propietario[]>( `${ environment.apiUrl }/propietarios/`+ id, {headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }

  updatePropietarios(propietario:Propietario){
    return this.http.put<Propietario>(`${ environment.apiUrl }/propietarios/`, propietario, {headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  buscarnombre(nombre:String){
     return this.http.get<Propietario[]>(`${ environment.apiUrl }/propietarios/nombre/`+ nombre, {headers: this.agregarAutorizacion1()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
  }
  getP
  /* FIN DEL CRUD PROPIETARIOS */

  deleteRoles(roles:Roles){
    return this.http.delete<Roles>(this.Url+roles.idrol ,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e);
    }));
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
  return this.http.put<Roles>(this.Url + roles.idrol, roles ,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getPersonaId(idrol: number): Observable<Roles[]> {
  return this.http.get<Roles[]>(this.Url+idrol  ,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}


////////////////////////////

getUsuario(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  })
  )
} 
getUsuarioN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+ "nombre/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUsuarioE(e): Observable<Roles[]>{
  return this.http.get<Roles[]>(this.Url2+ "estado/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUserPer(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2 + "per/", {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUserPerN(e): Observable<Roles[]>{
  return this.http.get<Roles[]>(this.Url2+ "per/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
createUsuario(user:Usuario){
  return this.http.post<Usuario[]>(this.Url2+'add',user, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }) );   
}
createRU(rolus:Rol_Usuarios){
  return this.http.post<Rol_Usuarios[]>(this.Url3+'ru/add',rolus, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));   
}
deleteUsuario(user:Usuario){
  return this.http.delete<Usuario>(this.Url2+user.idusuario, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
} 
updateUsuario(user: Usuario){
  return this.http.put<Usuario>(this.Url2 + user.idusuario, user, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUsuarioId(idusuario: Number): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.Url2+idusuario, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}


getUse(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+"use/", {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getRolus(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+"rolus/", {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getRolusN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url3+ "rol1/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUserN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+ "use/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getRolusE(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url3+ "rol/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}

///////////////////////////////////// USUARIOS - OPCIONES

getUsOp(): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUsOpN(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "nombre/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUsOpE(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "estado/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getOpc1(): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "opcion1/", {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getOpc2(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "opc2/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getOpc3(e): Observable<Usuarios_Opciones[]>{
  return this.http.get<Usuarios_Opciones[]>(this.Url4+ "op3/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}

createOpc(userop:Usuarios_Opciones){
  return this.http.post<Usuarios_Opciones[]>(this.Url4+'add',userop, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));   
}
deleteUsOp(usop: Usuarios_Opciones){
  return this.http.put<Usuarios_Opciones>(this.Url4+"des/"+usop.idusuario+"/"+usop.idopcion,usop.user_modify, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
} 
activarUsOp(usop: Usuarios_Opciones){
  return this.http.put<Usuarios_Opciones>(this.Url4+usop.idusuario+"/"+usop.idopcion,usop.user_modify, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
} 
deleteUsr(usr: Rol_Usuarios){
  return this.http.put<Usuario>(this.Url3+"des/"+usr.idrol+"/"+usr.idusuario, usr.user_modify, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
} 
activarUsr(usr: Rol_Usuarios){
  return this.http.put<Rol_Usuarios>(this.Url3 +usr.idrol+"/"+usr.idusuario, usr.user_modify, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}

/////////////////////////////////////////////


getConfiP(e): Observable<Configuracion_Grupos[]>{
  return this.http.get<Configuracion_Grupos[]>(this.Url5 + "paradero/"+e, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}

createConfi(x){
  return this.http.post<Configuracion_Grupos[]>(this.Url5+'add',x, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));   
}
getConfiUNO(): Observable<Configuracion_Grupos[]>{
  return this.http.get<Configuracion_Grupos[]>(this.Url5 + "1", {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getConfiDOS(): Observable<Configuracion_Grupos[]>{
  return this.http.get<Configuracion_Grupos[]>(this.Url5 + "2", {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
createUNO(x){
  return this.http.post<Configuracion_Grupos[]>(this.Url5+'add/1',x, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));   
}
createDOS(x){
  return this.http.post<Configuracion_Grupos[]>(this.Url5+'add/2',x, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));   
}

/////////////////////////////////////// REPORTES ///////////////////////////////////
getBuses(): Observable<BusesR[]>{
  return this.http.get<BusesR[]>(this.Url6+"bus" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUsi(): Observable<UsuarioR[]>{
  return this.http.get<UsuarioR[]>(this.Url6+"user" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getConductor(): Observable<ConductoresRegR[]>{
  return this.http.get<ConductoresRegR[]>(this.Url6+"conductor" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getOR(): Observable<OpcRolR[]>{
  return this.http.get<OpcRolR[]>(this.Url6+"opr" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getUR(): Observable<UserRolR[]>{
  return this.http.get<UserRolR[]>(this.Url6+"usro" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getPedidosR(): Observable<PedidosReg[]>{
  return this.http.get<PedidosReg[]>(this.Url6+"pedr" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getPedidosE(): Observable<PedidoEs[]>{
  return this.http.get<PedidoEs[]>(this.Url6+"pede" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getPedidosA(): Observable<PediAproR[]>{
  return this.http.get<PediAproR[]>(this.Url6+"peda" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getVnc(): Observable<VinculoPropi[]>{
  return this.http.get<VinculoPropi[]>(this.Url6+"vinculo" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getPro(): Observable<Propi[]>{
  return this.http.get<Propi[]>(this.Url6+"propietario" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getMantr(): Observable<ManTReg[]>{
  return this.http.get<ManTReg[]>(this.Url6+"mantr" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getMantv(): Observable<MantVal[]>{
  return this.http.get<MantVal[]>(this.Url6+"mantv" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}
getRevd(): Observable<RevDiarias[]>{
  return this.http.get<RevDiarias[]>(this.Url6+"revd" , {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
    return throwError(e);
  }));
}

}


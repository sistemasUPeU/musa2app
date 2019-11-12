import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles, RolesF } from '../Modelo/Roles';
import { Usuario } from '../Modelo/Usuario';
import { Rol_Usuarios } from '../Modelo/Rol_Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8081/roles/'
  Url2 = 'http://localhost:8081/usuarios/'
  Url3 = 'http://localhost:8081/ru'
  roles:RolesF;

  getAllRoles(): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${ environment.apiUrl }/roles/`);
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
    return this.http.get<Ubigeo[]>(`${ environment.apiUrl }/ubigeos/`);
  }
  deleteRoles(roles:Roles){
    return this.http.delete<Roles>(this.Url+roles.idrol);
  } 
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
  return this.http.get<Usuario[]>(this.Url2);
}
getUsuarioN(e): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.Url2+ "/nombre/"+e);
}
getUsuarioE(e): Observable<Roles[]>{
  return this.http.get<Roles[]>(this.Url2+ "/estado/"+e);
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
}

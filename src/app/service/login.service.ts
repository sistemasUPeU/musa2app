import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Personas } from '../Modelo/Personas';
@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    
    private _usuario: Usuario;
    private _token : string;
    private _persona: Personas;

    constructor(private http:HttpClient) { }
    public get personas() :Personas{
      if(this._persona!=null){
           return this._persona;
      }else if (this._persona== null && sessionStorage.getItem("personas")!=null) {
        this._persona == JSON.parse(sessionStorage.getItem('personas')) as Personas;
        return this._persona;
      }
      return new Personas();
    }

    public get token():string{
      if(this._token!=null){
        return this._token;
       } else if(this._token==null && sessionStorage.getItem("token")!=null){
          this._token = sessionStorage.getItem('token');
          return this._token;
        }
        return null;
    }

    login(usuario:Usuario):Observable<any>{
        const urlEndpoint = 'http://localhost:8081/oauth/token';

        const credenciales = btoa('musa'+':'+'1234567');

        const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization':'Basic '+credenciales});
     let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username',usuario.login);
    params.set('password',usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
    }
    guardarUsuario(accesToken:String):void{
        let datos = JSON.parse(atob(accesToken.split(".")[1]));
        this._persona = new Personas();
        this._persona.nombre = datos.NOMBRES;
        this._persona.apellido = datos.APELLIDOS;
        this._persona.rol= datos.ROL;
        this._persona.idusuario= datos.IDUSUARIO;
        this._persona.login=datos.LOGIN;
        sessionStorage.setItem('personas',JSON.stringify(this._persona));
        
      }

      guardarToken(accesToken:string):void{
        this._token = accesToken;
        sessionStorage.setItem('token',accesToken);
      }

      obtenerDatosToken(accesToken:string):any{
        if(accesToken!=null){
          return JSON.parse(atob(accesToken.split(".")[1]));
        }
        
        return null;
      }

      isAuthenticated():boolean{
        let payload = this.obtenerDatosToken(this.token);
        if(payload !=null && payload.user_name && payload.user_name.length>0){
          return true;
        }
        return false;
      }

      logout():void{
       
        this._token = null;
        this._usuario = null;
        sessionStorage.clear();
       // sessionStorage.removeItem('token');
       console.log(sessionStorage);
      }
    }
 

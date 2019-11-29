import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/service/login.service';
import { map, catchError, tap} from 'rxjs/operators';
import { Vehiculosc , Veh_categoria, Veh_modelo, Veh_marca} from 'src/app/Modelo/Vehiculos'

@Injectable({
    providedIn: 'root'
  })

 export class VehiculoService{
   private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient, private loginService:LoginService) { }
    private agregarAutorizacion(){
      let token = this.loginService.token;
      if(token!=null){
        //console.log("ESTE ES EL TOKEN "+token);
        return this.httpHeaders.append('Authorization','Bearer' + token);
      }
      
      return this.httpHeaders;
    }
    getVehiculos(): Observable<Vehiculosc[]>{
          return this.http.get<Vehiculosc[]>(` ${environment.apiUrl}/vehiculos/`,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
            return throwError(e);
          }));
    }

    crearVehiculos(vehiculosc:Vehiculosc){
       console.log(vehiculosc);
       return this.http.post<Vehiculosc>(`${environment.apiUrl}/vehiculos/add`, vehiculosc,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
    }
    getVehCategoria(){
       return this.http.get<Veh_categoria[]>(`${environment.apiUrl}/vehiculos/categoria/`,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
    }
    getVehModelo(){
       return this.http.get<Veh_modelo[]>(`${environment.apiUrl}/vehiculos/modelo/`,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
    }
    getVehMarca(){
       return this.http.get<Veh_marca[]>(`${environment.apiUrl}/vehiculos/marca/`,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
    }
    deleteVehiculos(id:number){
      return this.http.put<Vehiculosc>(` ${environment.apiUrl}/vehiculos/delete/`+id, Vehiculosc,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
    } 
    /*getPropietarioId(id:number){
     return this.http.get<Propietario[]>( `${ environment.apiUrl }/propietarios/`+ id);
  }

  updatePropietarios(propietario:Propietario){
    return this.http.put<Propietario>(`${ environment.apiUrl }/propietarios/`, propietario);
  }*/

   getVehiculosId(id:number){
        return this.http.get<Vehiculosc[]>(` ${environment.apiUrl}/vehiculos/` + id,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
          return throwError(e);
        }));
   }
   updateVehiculos(vehiculos:Vehiculosc){
       return this.http.put<Vehiculosc>(` ${environment.apiUrl}/vehiculos/update/`, vehiculos,{headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
        return throwError(e);
      }));
   }
   buscarNroPadron(nropadron:number){
     return this.http.get<Vehiculosc[]>(` ${environment.apiUrl}/vehiculos/nropadron/` + nropadron, {headers: this.agregarAutorizacion()}).pipe(catchError(e =>{
      
      return throwError(e + "errorsito");
    }));
   }
 } 
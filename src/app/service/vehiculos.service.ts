import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculosc } from 'src/app/Modelo/Vehiculos'

@Injectable({
    providedIn: 'root'
  })

 export class VehiculoService{
     
    constructor(private http: HttpClient) { }

    getVehiculos(): Observable<Vehiculosc[]>{
          return this.http.get<Vehiculosc[]>(` ${environment.apiUrl}/vehiculos/`);
    }

    crearVehiculos(vehiculosc:Vehiculosc){
       console.log(vehiculosc);
       return this.http.post<Vehiculosc>(`${environment.apiUrl}/vehiculos/add`, vehiculosc);
    }
 } 
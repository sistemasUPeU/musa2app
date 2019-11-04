import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MantAcciones } from '../Modelo/MantAcciones';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http:HttpClient, private router:Router) {}

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getAcciones(){
    return this.http.get<MantAcciones>(`${ environment.apiUrl }/acciones/3`);
  }

}

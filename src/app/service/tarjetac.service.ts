import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarjetac } from '../Modelo/Tarjetac';
@Injectable({
  providedIn: 'root'
})
export class TarjetacService {

  constructor(private http:HttpClient, private router:Router) { }

  listtarjeta(): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/`);
  }
  creartarjeta(tarjetac:Tarjetac){
    return this.http.post<Tarjetac>(`${ environment.apiUrl }/tarjetac/add`,tarjetac);
  }
  eliminartarjeta(idtarjetac:number){
    return this.http.delete<number>(`${ environment.apiUrl }/tarjetac/`+idtarjetac);
  }
  modificartarjeta(tarjetac:Tarjetac){
    return this.http.put<Tarjetac>(`${ environment.apiUrl }/tarjetac/`+ tarjetac.idtarjetac,tarjetac);

  }
  listtarjid(id:number): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/`+ id);

  }
  buscarnro(nrodocumento:number): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/P/`+ nrodocumento);

  }
  listarestado(estado:number): Observable<Tarjetac[]>{
    return this.http.get<Tarjetac[]>(`${ environment.apiUrl }/tarjetac/Po/`+ estado);

  }

}
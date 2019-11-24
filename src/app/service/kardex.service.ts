import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kardex } from '../ComponentesVista/GestionarAlmacen/entradadeproducto/kardex';

@Injectable({
  providedIn: 'root'
})
export class KardexService {
deleteKardex(kardex: Kardex){
  throw new Error("Method not implemented.");
}
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
constructor(private http: HttpClient) {
  console.log('servicio de persona funcionando');
 }
 getAllKardex():Observable<Kardex[]>{
   return this.http.get<Kardex[]>(`${ environment.apiUrl }/kardes/`);
 }
 searchKardex(nrocomprobante: number){
   return this.http.get<Kardex[]>(`${ environment.apiUrl }/kardes/kar/${ nrocomprobante }`);
 }
 postKardex(kardex: any): Observable<any>{
 return this.http.post<any>(`${ environment.apiUrl }/kardes/add`, kardex);
  }
}
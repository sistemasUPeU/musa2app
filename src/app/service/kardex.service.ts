import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kardex, KardexProducto } from '../ComponentesVista/GestionarAlmacen/entradadeproducto/kardex';
import { Producto, _Producto } from '../ComponentesVista/GestionarAlmacen/entradadeproducto/Producto';

@Injectable({
  providedIn: 'root'
})
export class KardexService {

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

  getAllProducto(): Observable<_Producto[]> {
    return this.http.get<_Producto[]>(`${ environment.apiUrl }/kardexproducto/listar-todos-productos`);
  }

  
  deleteKarde(id: number){
    return this.http.delete<Kardex[]>(`${ environment.apiUrl }/kardes/kar/${ id}`);
  }

  postProductoKardex(pkardex: KardexProducto) {
    return this.http.post<any>(`${ environment.apiUrl }/kardexproducto/add-kardex-producto`, pkardex);
  }

  getProductosByKardex(idKardex: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ environment.apiUrl }/kardexproducto/listar-prod-kardex/${ idKardex }`);
  }
 // deleteKardeProd(idKardex:number){
   // return this.http.delete<KardexProducto[]>(`${ environment.apiUrl }/kardexproducto/kard/${ idKardex}`);
  //}
}
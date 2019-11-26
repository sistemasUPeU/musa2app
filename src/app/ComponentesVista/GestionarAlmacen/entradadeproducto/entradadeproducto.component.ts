import { Component, OnInit, ɵConsole } from '@angular/core';
import { KardexService } from 'src/app/service/kardex.service';
import { NgForm } from '@angular/forms';
import { Kardex, KardexProducto } from './kardex';
import { asapScheduler } from 'rxjs';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Producto, _Producto } from './Producto';

@Component({
  selector: 'app-entradadeproducto',
  templateUrl: './entradadeproducto.component.html',
  styleUrls: ['./entradadeproducto.component.css']
})
export class EntradadeproductoComponent implements OnInit {
  productos: _Producto[] = [];
  kardex: Kardex = new Kardex();
  kardexLista: Kardex[] = [];
  nrocomprobante: number;
  idkardex: String;
  Kardex: Kardex[];
  router: any;
  service: any;
  
  karProd: KardexProducto = new KardexProducto();
  precio_total: number = 0.0;  
  idKardex: number;
  productoByKadex: Producto[] = [];

  constructor(
    private kardexService: KardexService,
    private datePipe: DatePipe) {}

  ngOnInit() {
    this.getAllKardex();
    this.getAlProductos();
  }

  getAllKardex(){
    this.kardexService.getAllKardex().subscribe(
     (data) => {
       this.kardexLista = data['P_CURSOR'];
      //  console.log(this.kardexLista)
     } 
    );
  }

  searchKardex(){
    if(this.nrocomprobante != null && this.nrocomprobante > 0){
      this.kardexService.searchKardex(this.nrocomprobante).subscribe(
        (data) => {
       this.kardexLista = data['P_CURSOR'];
        }
      );
    }
    else{
      this.getAllKardex();
    }
  }
  hola() {
    console.log("asd");
  }

  agregarKardex() {

    for ( var key in this.kardex ) {
      //console.log( this.kardex[`${key}`]+ " " + key);
      this.kardex[`${key.toLowerCase()}`] = this.kardex[`${key}`];
      delete this.kardex[`${key}`];  
    
    }

    this.cambiarTipoAtributos();
    this.kardex["idpedido"] = 1;
    this.kardex["idempleado"] =  2;
    
    console.log(this.kardex);
    this.kardexService.postKardex(this.kardex).subscribe( (response) => {
        alert("registrado correctamente.....!!");
       
        console.log(response)
        this.getAllKardex();
      },error => {
        alert("Error al registrar");
       console.log(error);
    })
   
 }
  cambiarTipoAtributos(){
    this.kardex["concepto"] = +this.kardex["concepto"];
    this.kardex["estado"] = +this.kardex["estado"];
    this.kardex["nrocomprobante"] = +this.kardex["nrocomprobante"];
    this.kardex["idtipocomprobante"] = +this.kardex["idtipocomprobante"];
    this.kardex["nroserie"] = +this.kardex["nroserie"];

    //Convertir fecha a String resta un día
    let fecha = new Date(this.kardex['fecha']) ;
    //Agregar formato a la fecha  ------------                  Sumarle un día perdido
    let fechaFormato = this.datePipe.transform(fecha.setDate(fecha.getDate() + 1),"dd/MM/yyyy")
    this.kardex['fecha'] = fechaFormato;  

  }
 documentoProductos(idKardex: number,numeroComprobante: number) {
    this.idKardex = idKardex;
    this.getProductosByKardex(idKardex);
 }

 getAlProductos() {
   this.kardexService.getAllProducto().subscribe(
     (data) => this.productos = data["P_CURSOR"]
   );
 }
 Eliminar(id: number){
   console.log(id)
   this.kardexService.deleteKarde(id).subscribe(data => {
     alert("Se Elimino un Registro ::::!!!");
     console.log(data)
     this.ngOnInit();
   })
 }


 //Eliminares(id: number){
   //console.log(id)
   //this.kardexService.deleteKardeProd(id).subscribe(data => {
    // alert("se elimino del kardeProd");
//console.log(data)
//this.ngOnInit();
  // })
 //}

 getProductosByKardex(idKardex: number) {
  this.kardexService.getProductosByKardex(idKardex).subscribe(
    (data) => this.productoByKadex = data["P_CURSOR"]
  )
 }

 calcularPrecioTotal() {
   console.log("asdasd")
   if(this.karProd.CANTIDAD) {
     this.precio_total = +this.karProd.CANTIDAD;
   }

   if(this.karProd.PRECIOUNITARIO) {
    this.precio_total = this.precio_total * +this.karProd.PRECIOUNITARIO;
  }
 }

 registrarKadexProducto(  ) {   
   this.karProd.PRECIOTOTAL = this.precio_total;
   this.karProd.IDKARDEX = this.idKardex;


    for ( var key in this.karProd ) {
      this.karProd[`${key.toLowerCase()}`] = this.karProd[`${key}`];
      delete this.karProd[`${key}`];  
    }

   this.kardexService.postProductoKardex(this.karProd).subscribe();
    this.getProductosByKardex(this.idKardex);
 }
}
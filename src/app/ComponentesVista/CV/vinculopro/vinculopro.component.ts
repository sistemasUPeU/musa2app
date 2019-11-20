import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vinculos, Vinculo, Vinupd } from 'src/app/Modelo/Vinculos';
import { ServiceService } from 'src/app/service/service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-vinculopro',
  templateUrl: './vinculopro.component.html',
  styleUrls: ['./vinculopro.component.css']
})
export class VinculoproComponent implements OnInit {
  
/////// Arraysss

listavinculos:Vinculos[];
  

/////// Variablesss
fechai:Array<string>
fechaf:String
tipo: number;
estado : number;
/////// Objetossssss

vincu : Vinupd = new Vinupd();

constructor(private service: ServiceService, private router: Router) { }

ngOnInit() {
  
  this.tipo=2;
  this.estado = 1;
  this.listar();
}
listar(){
  var x = 0
  this.service.getVinculo(this.tipo, this.estado).subscribe(
    (data) => {
      this.listavinculos = data['P_CUR_VINCULOS']
      
      console.log(this.listavinculos);  
    }
    );
    this.cambiarfecha
    //alert("hola")
    //console.log(this.listavinculos);
    //this.listavinculos.forEach(function(val){
      /*this.fechai.push(String(val.FECHAINICIO).substr(0,10))
      console.log(this.fechai)*/
      //console.log(val.IDVINCULO)
      //val.FECHAFIN
    //})
}
cambiarfecha(){
  console.log(this.listavinculos[0].APELLIDO + "hola") 
}
/// Metodo que envia idvinculo, tipo para el modificar

valor(tipo2:number,id:number){
  console.log(tipo2);
  console.log(id);
  localStorage.setItem("idvinculo",id.toString());
  localStorage.setItem("tipo",tipo2.toString());
  this.router.navigate(['/home/vinculomod']);
}

/// Metodo para redireccionar a ingresar a Nuevo Vinculo

Modo(){   
  localStorage.setItem("tipo",'2');
  this.router.navigate(['/home/vinculoopc']);
 }
 

 /// Metodo para modificar el estado de vinculo 

 eliminar(idvinculo: number, estadito: number){
   alert(estadito + " " + idvinculo)
   this.vincu.estado = estadito;
   this.vincu.idvinculo= idvinculo;
   this.service.uptEstadovin(this.vincu).subscribe(data => {
     console.log(this.vincu)
     alert(data["P_MSGERROR"])
     alert("lo lograste")
     this.listar()
   })
 }
 
}
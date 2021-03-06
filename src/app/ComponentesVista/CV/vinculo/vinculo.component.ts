import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vinculos, Vinculo, Vinupd } from 'src/app/Modelo/Vinculos';
import { ServiceService } from 'src/app/service/service.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {

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
    function myFunction() {
       var x = (<HTMLElement>document.getElementById('buscar1'));
      
    }
    this.tipo=1;
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
    localStorage.setItem("tipo",'1');
    this.router.navigate(['/home/vinculoopc']);
   }
   

   /// Metodo para modificar el estado de vinculo 

   eliminar(idvinculo: number, estadito: number){
     this.vincu.estado = estadito;
     this.vincu.idvinculo= idvinculo;
     this.service.uptEstadovin(this.vincu).subscribe(data => {
       console.log(this.vincu)
       this.listar()
     })
   }
   alerta(idvinculo: number, estadito: number){

    if(estadito == 0){
      Swal.fire({
        title: 'Seguro desea Renovar Vinculo?',
        text: "Ingeniero baboso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, renovar !'
      }).then((result) => {
        if (result.value) {
          this.eliminar(idvinculo, estadito)
          Swal.fire(
            'Vinculo Renovado!',
            'Accion realizada con exito.',
            'success'
          )
        }
        
      })
    }else{
      Swal.fire({
        title: 'Seguro desea Anular Vinculo?',
        text: "Ingeniero baboso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular !'
      }).then((result) => {
        if (result.value) {
          this.eliminar(idvinculo, estadito)
          Swal.fire(
            'Vinculo anulado!',
            'Accion realizada con exito.',
            'success'
          )
        }
        
      })
    }
    
   }
   
}

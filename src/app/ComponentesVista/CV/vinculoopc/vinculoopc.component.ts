import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Conductores } from 'src/app/Modelo/Conductores';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import { Propietarios } from 'src/app/Modelo/Propietarios';
import { Vinculo, VincuRequi, Contador } from 'src/app/Modelo/Vinculos';
import { Requisitos } from 'src/app/Modelo/Requisitos';

@Component({
  selector: 'app-vinculoopc',
  templateUrl: './vinculoopc.component.html',
  styleUrls: ['./vinculoopc.component.css']
})
export class VinculoopcComponent implements OnInit {

  
  
  
  constructor(private router: Router, private service: ServiceService) {
    
   }

  ////// Objetossss

  vin:Vinculo = new Vinculo();
  vinrequi:VincuRequi = new VincuRequi();
  ///// Variables

  mostrarpropietario: boolean;
  mostrarconductor: boolean;
  cont:number;
  titulo = "";
  tipo:number;
   /// Arraysss

  vincurequi: VincuRequi[];  
  lisRequisitos: Requisitos[]; 
  lisConduc: Conductores[];
  lisVehic: Vehiculos[];
  lisPropie: Propietarios[];

  ngOnInit() {
    this.getConductor();
    this.getPropietario();
    this.getVehiculo();
    this.titulo="NUEVO VINCULO";
    console.log(this.tipo);
    this.service.getcontvin().subscribe(
      (data) => {
        this.cont = data[0].CONTADOR; 
        this.cont++
        alert(this.cont)
      }
      );
  }

  
  activar2() : void{
    this.mostrarpropietario = true;
    this.mostrarconductor = false

  }
  activar() : void{
    this.mostrarpropietario = false;
    this.mostrarconductor = true

  }

  ///// Listado de Conductores 

  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.lisConduc = data['p_conductor'];
        console.log(this.lisConduc)
      }
    );
  }

   ///// Listado de Propietarios 

  getPropietario() {
    this.service.getNombrePropietario().subscribe(
      (data) => {
        this.lisPropie = data['P_CURSOR'];
        console.log(this.lisPropie)
      }
    );
  }

   ///// Listado de Vehiculos

  getVehiculo() {
    this.service.getNombreVeh().subscribe(
      (data) => {
        this.lisVehic = data['P_CUR_VEHICULOS'];
        console.log(this.lisVehic)
      }
    );
  } 

   ///// Listado de Requisito

  getRequisito(id: number) {
    this.service.getRequisitos(id).subscribe(
      (data) => {
        this.lisRequisitos = data['P_CUR_REQUISITOS'];
        console.log(this.lisRequisitos)
      }
    );
  }

  ////// Metodo para seleccionar tipo de vinculo

  Tipo(){
    var v_tipo=(<HTMLSelectElement>document.getElementById('tipo')).value;
    if (v_tipo == '1') {
      this.titulo="NUEVO VINCULO CONDUCTOR";
      this.getRequisito(Number(v_tipo));
    (<HTMLElement>document.getElementById('forconductor')).style.display="block";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="none";
      
    }
    if (v_tipo== '2') {
      this.titulo="NUEVO VINCULO PROPIETARIO";
      this.getRequisito(Number(v_tipo));
    (<HTMLElement>document.getElementById('forconductor')).style.display="none";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="block";  
    }  
  }

  /////  Metodo de crear Vinculo

   crear(){
   }
   siguiente(){
     
    var v_tipo=(<HTMLSelectElement>document.getElementById('tipo')).value;
    this.service.createvinculo(this.vin).subscribe(data => {
      alert("se registro el vinculo"); 
      this.vinrequi.idvinculo=this.cont;
      console.log(this.vinrequi)
      this.service.CreateVinRequi(+Number(v_tipo),this.vinrequi).subscribe(data =>{
      alert("se reguistro los requisitos del vinculo");
    }
      );
    });
    (<HTMLElement>document.getElementById('caja2')).style.display="none";
    (<HTMLElement>document.getElementById('next')).style.display="none";
    (<HTMLElement>document.getElementById('paso2')).style.display="block";
    (<HTMLElement>document.getElementById('back')).style.display="block";
   }
   regresar(){
    (<HTMLElement>document.getElementById('caja2')).style.display="block";
    (<HTMLElement>document.getElementById('next')).style.display="block";
    (<HTMLElement>document.getElementById('paso2')).style.display="none";
    (<HTMLElement>document.getElementById('back')).style.display="none";
    this.elimininar(this.cont);
   }
   elimininar(id: number){
     console.log("delete")
     this.service.DeleteVinculo(id).subscribe(data => {
        alert("se borro")
     })
   }
   sumador(){
     this.cont+1;
   }
}




import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Conductores } from 'src/app/Modelo/Conductores';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import { Propietarios } from 'src/app/Modelo/Propietarios';
import { Vinculo, VincuRequi, Vinculos } from 'src/app/Modelo/Vinculos';
import { Requisitos } from 'src/app/Modelo/Requisitos';
import * as moment from 'moment';

@Component({
  selector: 'app-vinculomod',
  templateUrl: './vinculomod.component.html',
  styleUrls: ['./vinculomod.component.css']
})
export class VinculomodComponent implements OnInit {
  
  mostrarpropietario: boolean;
  mostrarconductor: boolean;
  id:number;
  fechai:Date;
  fechaf:Date;

  constructor(private router: Router, private service: ServiceService, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.id=Number(localStorage.getItem("idvinculo"));
    this.getConductor();
    this.getPropietario();
    this.getVehiculo();
    this.titulo="MODIFICAR VINCULO";
    this.tipo = Number(localStorage.getItem("tipo"));
    this.Tipo();
    console.log(this.tipo);
    this.read(this.id)
  }

  ///// Arraysss

  vinculos:Vinculo[];
  vincurequi: VincuRequi[]; 
  lisRequisitos: Requisitos[];
  lisConduc: Conductores[];
  lisVehic: Vehiculos[];
  lisPropie: Propietarios[];

  ////// Objetosssss
  

  ////// Variablesssssss   

  titulo = "";
  tipo:number;

  ///// Listar conductoressssssssss
  
  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.lisConduc = data['p_conductor'];
        console.log(this.lisConduc)
      }
    );
  }
  
  //////Listar Propietariosssssssss

  getPropietario() {
    this.service.getNombrePropietario().subscribe(
      (data) => {
        this.lisPropie = data['P_CURSOR'];
        console.log(this.lisPropie)
      }
    );
  }

  //////// Listar Vehiculossssssss

  getVehiculo() {
    this.service.getNombreVeh().subscribe(
      (data) => {
        this.lisVehic = data['P_CUR_VEHICULOS'];
        console.log(this.lisVehic)
      }
    );
  } 

  ////////// Listar Requisitosssssss

  getRequisito(id: number) {
    this.service.getRequisitos(id).subscribe(
      (data) => {
        this.lisRequisitos = data['P_CUR_REQUISITOS'];
        console.log(this.lisRequisitos)
      }
    );
  }

  //////////// Autoseleccion de Tipo Vinculo (desde la Vista Vinculo) 
/*
  Tipo2(){
    var v_tipo1=this.tipo;
    alert(this.tipo)
    if (v_tipo1 == 1) {
      this.titulo="MODIFICAR VINCULO CONDUCTOR";
      this.getRequisito(v_tipo1);
    (<HTMLElement>document.getElementById('forconductor')).style.display="block";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="none";
    localStorage.setItem("tipo",'-1');
    }
    if (v_tipo1== 2) {
      this.titulo="MODIFICAR VINCULO PROPIETARIO";
      this.getRequisito(v_tipo1);
    (<HTMLElement>document.getElementById('forconductor')).style.display="none";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="block";  
    localStorage.setItem("tipo",'-1');
    }
  }
*/
  ////// Seleccionar Tipo Vinculo para actualizar (desde la Vista Vinculo Modificar)

  Tipo(){
    /*var v_tipo=(<HTMLSelectElement>document.getElementById('tipo')).value;
    alert(v_tipo)*/
    if (this.tipo == 1) {
      this.titulo="MODIFICAR VINCULO CONDUCTOR";
      this.getRequisito(Number(this.tipo));
      
    }
    if (this.tipo== 2) {
      this.titulo="MODIFICAR VINCULO PROPIETARIO";
      this.getRequisito(Number(this.tipo));
    }
  }
  
  ///////// Llena datos a las cajassss 

   read(id: number){
    this.service.getVinculoid(id).subscribe(
      (data) => {
        this.vinculos = data['P_CUR_VINCULOS'];
        var x = String(moment(this.vinculos[0].fechainicio).format());
        this.fechai = new Date(x.substr(0,10));
        console.log(this.fechai)
        console.log(this.vinculos)
      }
    );
   }

   //////// Modifica los datosssss

   modificar(vinculos: Vinculo){
     alert("hola")
    this.service.uptVinculo(this.vinculos[0]).subscribe(
      (data) => {

        alert(data["p_msgerror"])
      }
    );
   }
   
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Conductores } from 'src/app/Modelo/Conductores';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import { Propietarios } from 'src/app/Modelo/Propietarios';
import { Vinculo, VincuRequi } from 'src/app/Modelo/Vinculos';
import { Requisitos } from 'src/app/Modelo/Requisitos';

@Component({
  selector: 'app-vinculomod',
  templateUrl: './vinculomod.component.html',
  styleUrls: ['./vinculomod.component.css']
})
export class VinculomodComponent implements OnInit {
  
  mostrarpropietario: boolean;
  mostrarconductor: boolean;
  id:number;
  constructor(private router: Router, private service: ServiceService, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.getConductor();
    this.getPropietario();
    this.getVehiculo();
    this.titulo="MODIFICAR VINCULO";
    this.tipo = Number(localStorage.getItem("tipo"));
    alert(this.tipo)
    this.Tipo2();
    console.log(this.tipo);
    
  }
  vinculo:Vinculo = new Vinculo();
  vinculos:Vinculo[];

  vincurequi: VincuRequi[]; 
   
  lisRequisitos: Requisitos[]; 

  conductor: Conductores;
  lisConduc: Conductores[];

  titulo = "";

  vehiculo: Vehiculos;
  lisVehic: Vehiculos[];
  
  tipo:number;

  propietario: Propietarios;
  lisPropie: Propietarios[];
  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.lisConduc = data['P_CONDUCTOR'];
        console.log(this.lisConduc)
      }
    );
  }

  getPropietario() {
    this.service.getNombrePropietario().subscribe(
      (data) => {
        this.lisPropie = data['P_CURSOR'];
        console.log(this.lisPropie)
      }
    );
  }

  getVehiculo() {
    this.service.getNombreVeh().subscribe(
      (data) => {
        this.lisVehic = data['P_CUR_VEHICULOS'];
        console.log(this.lisVehic)
      }
    );
  } 

  getRequisito(id: number) {
    this.service.getRequisitos(id).subscribe(
      (data) => {
        this.lisRequisitos = data['P_CUR_REQUISITOS'];
        console.log(this.lisRequisitos)
      }
    );
  }
  Tipo2(){
    var v_tipo1=this.tipo;
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
  Tipo(){
    
    
    
    var v_tipo=(<HTMLSelectElement>document.getElementById('tipo')).value;
    if (v_tipo == '1') {
      this.titulo="MODIFICAR VINCULO CONDUCTOR";
      this.getRequisito(Number(v_tipo));
    (<HTMLElement>document.getElementById('forconductor')).style.display="block";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="none";
      
    }
    if (v_tipo== '2') {
      this.titulo="MODIFICAR VINCULO PROPIETARIO";
      this.getRequisito(Number(v_tipo));
    (<HTMLElement>document.getElementById('forconductor')).style.display="none";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="block";  
    }
  }
  
   read(id: number){
    this.service.getVinculoid(id).subscribe(
      (data) => {
        this.vinculo = data['P_CUR_VINCULOS'];
        console.log(this.vinculo)
      }
    );
   }
   modificar(id: number){
     alert(id)
    this.service.getVinculoid(id).subscribe(
      (data) => {
        this.vinculo = data['P_CUR_VINCULOS'];
        console.log(this.vinculo)
      }
    );
   }
   
}

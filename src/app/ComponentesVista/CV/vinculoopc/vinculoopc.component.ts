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

  
  mostrarpropietario: boolean;
  mostrarconductor: boolean;
  
  constructor(private router: Router, private service: ServiceService) {
    
   }

  vinculo: Vinculo[];
  vin:Vinculo = new Vinculo();
  cont:number;
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

  ngOnInit() {
    this.getConductor();
    this.getPropietario();
    this.getVehiculo();
    this.titulo="MODIFICAR VINCULO";
    this.tipo = Number(localStorage.getItem("tipo"));
    console.log(this.tipo);
    this.service.getcontvin().subscribe(
      (data) => {
        
        this.cont = data[0].CONTADOR; 
        console.log(this.cont)
      }
      );
  }

  
  

  getConductor() {
    
    this.service.getNombreConductor().subscribe(
      (data) => {
        this.lisConduc = data['P_CONDUCTOR'];
        console.log(this.lisConduc)
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
   crear(){
    this.service.createvinculo(this.vin).subscribe(data => {
      alert("holaa");
      this.router.navigate(['/home/vinculo'])
    })
   }
}




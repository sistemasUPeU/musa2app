import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Conductores } from 'src/app/Modelo/Conductores';
import { Vehiculos } from 'src/app/Modelo/Vehiculos';
import { Propietarios } from 'src/app/Modelo/Propietarios';
import { Vinculo, VincuRequi, Contador } from 'src/app/Modelo/Vinculos';
import { Requisitos } from 'src/app/Modelo/Requisitos';
import { empleado } from 'src/app/Modelo/empleados';



@Component({
  selector: 'app-vinculoopc',
  templateUrl: './vinculoopc.component.html',
  styleUrls: ['./vinculoopc.component.css']
})
export class VinculoopcComponent implements OnInit {

  
  

  
  constructor(private router: Router, private service: ServiceService) {
    
    
   }

  ////// Objetossss
   cargar:boolean;
   paso1:boolean;
   loading:boolean;
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
  lisEmple: empleado[];
  ngOnInit() {
    this.loading = false
    this.paso1 = true
    this.cargar = false;
    this.tipo = Number(localStorage.getItem("tipo"));
    this.Tipo(this.tipo)
    alert(this.tipo)
    this.getConductor();
    this.getPropietario();
    this.getVehiculo();
    //this.getempleado()
    this.titulo="NUEVO VINCULO";
    this.service.getcontvin().subscribe(
      (data) => {
        this.cont = data[0].CONTADOR; 
        this.cont++
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
  /////// Listar empleados 
  /*getempleado(){
    this.service.getEmple().subscribe(
      (data) => {
        this.lisEmple = data
      }
    )
  }*/


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

  Tipo(v_tipo:number){
    this.vin.tipovinculo=v_tipo
    if (v_tipo == 1) {

      this.titulo="NUEVO VINCULO CONDUCTOR";
      this.getRequisito(Number(v_tipo));
    (<HTMLElement>document.getElementById('forconductor')).style.display="block";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="none";
      
    }
    if (v_tipo== 2) {
      this.titulo="NUEVO VINCULO PROPIETARIO";
      this.getRequisito(Number(v_tipo));
    (<HTMLElement>document.getElementById('forconductor')).style.display="none";
    (<HTMLElement>document.getElementById('forpropietario')).style.display="block";  
    }  
  }

  /////  Metodo de crear Vinculo

   crear(){
    var x = 1;
    if(this.tipo = x){
    this.service.CreateVinRequi(+this.tipo,this.vinrequi).subscribe(data =>{
      this.router.navigate(['/home/vinculo']);
     // this.router.navigate(['/home/vinculo']);
      }
    );
    }
   }
   siguiente(){
     this.loading=true
     this.paso1 = false
    this.tipo=Number((<HTMLSelectElement>document.getElementById('tipo')).value);
    this.vin.idempleado=2
    console.log(this.vin.idempleado)
    console.log(this.vin)
    this.service.createvinculo(this.vin).subscribe(data => {
      this.vinrequi.idvinculo=this.cont;
      console.log(this.vinrequi)
      this.loading=false
      this.cargar=true
    });
   }
   regresar(){
    this.paso1 = true
    this.loading=false
    this.cargar=false
    this.elimininar(this.cont);
   }
   elimininar(id: number){
     console.log("delete")
     this.service.DeleteVinculo(+id).subscribe(data => {
        alert("se borro")
     })
   }
   sumador(){
     this.cont+1;
   }
   
}

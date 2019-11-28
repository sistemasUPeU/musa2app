import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opciones } from 'src/app/Modelo/Opciones';
import { OpcionesService } from 'src/app/service/opciones.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  opciones :Opciones =new Opciones();
  opcion:Opciones=new Opciones();
  ops:Opciones=new Opciones();
  o : Opciones=new Opciones();

  ah:number=1;
  opciones1: Opciones[] = []
  service: any;

  constructor(private opcionesService:OpcionesService,) { }
  
  ngOnInit() {
    
    this.opcionesService.listopciones(1).subscribe(
      (data) => {
        this.opciones1=data['P_CUR_OPCION'];
    
        console.log(this.opciones1);
      }
    );
  }
  crearopciones(){
    this.opcionesService.crearopciones(this.opciones).subscribe(
      (data) =>{ 
        this.ngOnInit();
       }
    );
  }
  Eliminar(opciones:Opciones){
    this.opcionesService.deleteopciones(opciones.idopciones).subscribe((data)=>{
      alert(opciones.idopciones)
      this.ngOnInit();

    });
  }
  Editar(opcion:Opciones){
    console.log(opcion)
    this.opcionesService.editar(opcion).subscribe((data)=>{
      
      this.ngOnInit();
    });
  }
  Actualizar(opc:Opciones){
    this.opcion=opc;
    console.log(opc)
  }

  Buscar(){
    this.opcionesService.buscar(this.ops.tipo).subscribe((data)=>{
      console.log(this.ops.tipo)
      console.log(data)
      this.opciones1=data['p_opcion'];
      (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      
      
    });

  }
  Buscar1(){
    this.opcionesService.buscar1(this.ops.idopciones).subscribe((data)=>{
      console.log(this.ops.idopciones)
      console.log(data)
      this.opciones1=data['p_opcion'];
      (<HTMLInputElement>document.getElementById("buscar1")).value = "";
      
      
    });

  }
    Estado(){
    this.opcionesService.estado(this.o.estado).subscribe((data)=>{
      this.opciones1=data['p_opciones'];
      
    })

  }
  Limpiar(){
    this.ngOnInit();
    (<HTMLSelectElement>document.getElementById("inputGroupSelect01")).value ="";
  }
}



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
      })
  }
  guardar(opciones: Opciones) {
    this.opcionesService.crearopciones(opciones).subscribe(
      (data) => {
        this.ngOnInit();
      }
    );
    (<HTMLInputElement>document.getElementById("user1")).value ="";
    (<HTMLInputElement>document.getElementById("user1")).disabled=false;
    (<HTMLInputElement>document.getElementById("user")).value ="";
  
  }
  crearopciones(){
    this.opcionesService.crearopciones(this.opciones).subscribe(
      (data) =>{ 
        this.ngOnInit();
       }
    );
  }
  Eliminar(opciones:Opciones){
    console.log(opciones)
    this.opcionesService.deleteopciones(opciones).subscribe((data)=>{
      alert(opciones.IDOPCION)
      this.ngOnInit();

    });
  }
  Editar(opcion:Opciones){
    this.opcionesService.editar(opcion).subscribe((data)=>{
    console.log(opcion.IDOPCION)
      this.ngOnInit();
    });
  }
  

  Buscar(){
    this.opcionesService.buscar(this.o.IDOPCION).subscribe((data)=>{
      console.log(this.o.IDOPCION)
      console.log(data)
      this.opciones1=data['p_opcion'];
      (<HTMLInputElement>document.getElementById("buscar")).value = "";
      
      
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
  limpiar2(){
    (<HTMLInputElement>document.getElementById("user1")).value ="";
    (<HTMLInputElement>document.getElementById("user1")).disabled=false;

  }
  Actualizar(id: number){
    this.opcionesService.buscar(id).subscribe((data) =>{
      this.opciones = data['P_CUR_OPCION'];
      console.log(this.opciones)
    }) 
  }
}



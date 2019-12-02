import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/service/conductor.service';
import { Conductor } from 'src/app/Modelo/Conductor';
import {Per} from 'src/app/Modelo/Per'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
  conductor: Conductor = new Conductor();
  conductores: Conductor[] = [];
  cond: Conductor = new Conductor();
  c:Conductor=new Conductor();

  personas:Per [] =[];
  p:Per=new Per();



  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    this.conductorService.estado(1).subscribe((data)=>{
      this.conductores=data['p_conductor']
    })
    
  }
  guardar(conductor: Conductor) {
    console.log(conductor)
    this.conductorService.crearConductor(conductor).subscribe(
      (data) => {
       
        this.ngOnInit();
      }
    );
   
  }
  eliminar(conductor: Conductor) {
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Elminar!'
    }).then((result) => {
      if (result.value) {
        this.conductorService.deleteconductor(conductor).subscribe((data) => {
          console.log(conductor.idconductor);
          this.ngOnInit();
          Swal.fire(

            'Eliminado  con exito!',
            
          )
          this.ngOnInit();
        });
        }else{
        this.ngOnInit();
      }
    })
   

  }
  actualizar(conductor: Conductor) {
    this.cond = conductor;
    console.log(conductor)

  }
  editar(cond:Conductor){
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Modificar!'
    }).then((result) => {
      if (result.value) {
        this.conductorService.editar(cond).subscribe((data)=>{
          console.log(cond.idconductor)
          Swal.fire(

            'Modificado  con exito!',
            
          )
          this.ngOnInit();
    
        });
    
       
      }else{
        this.ngOnInit();
      }
    })
   
  }
  buscar(){
    this.conductorService.buscar(this.c.codigo).subscribe((data)=>{
      this.conductores=data['p_conductor'];
      (<HTMLInputElement>document.getElementById("buscar1")).value = "";
    })
  }
  estado(){
    this.conductorService.estado(this.c.estado).subscribe((data)=>{
      this.conductores=data['p_conductor']
    })
  }
  Limpiar(){
    this.ngOnInit();
    
  }
  getpersonas(){
    this.conductorService.getAllPersona().subscribe((data)=>{
           this.personas=data["p_persona"]
           console.log(this.personas)
    })
  }
  Add(nro:number){
    (<HTMLInputElement>document.getElementById("user1")).value =""+nro;
    console.log(nro);
    (<HTMLInputElement>document.getElementById("user1")).disabled=true;
    this.conductor.idpersona=nro;
    
  }
  Todos(){
    this.conductorService.listConductor().subscribe(
      (data) => {
        this.conductores = data['p_conductor'];
        console.log(this.conductores);
      }
    );
  }
  serachp(){
     this.conductorService.searchPersona(this.p.nrodoc).subscribe((data)=>{
      this.personas=data["P_CURSOR"]
     });
     (<HTMLInputElement>document.getElementById("bus")).value = "";
  }
  limpiar2(){
    (<HTMLInputElement>document.getElementById("user1")).value ="";
    (<HTMLInputElement>document.getElementById("user1")).disabled=false;
    
  }


}

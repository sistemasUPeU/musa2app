import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/service/conductor.service';
import { Conductor } from 'src/app/Modelo/Conductor';

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



  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    this.conductorService.listConductor().subscribe(
      (data) => {
        this.conductores = data['p_conductor'];
        console.log(this.conductores);
      }
    );
  }
  guardar(conductor: Conductor) {
    this.conductorService.crearConductor(conductor).subscribe(
      (data) => {
        this.ngOnInit();
      }
    );
  }
  eliminar(conductor: Conductor) {
    this.conductorService.deleteconductor(conductor).subscribe((data) => {
      console.log(conductor.idconductor);
      this.ngOnInit();

    });

  }
  actualizar(conductor: Conductor) {
    this.cond = conductor;
    console.log(conductor)

  }
  editar(cond:Conductor){
    this.conductorService.editar(cond).subscribe((data)=>{
      console.log(cond.idconductor)
      this.ngOnInit();

    });

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
    (<HTMLSelectElement>document.getElementById("inputGroupSelect01")).value ="";
  }


}

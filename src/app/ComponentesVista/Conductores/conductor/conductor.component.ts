import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/service/conductor.service';
import { Conductor } from 'src/app/Modelo/Conductor';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
  conductor:Conductor = new Conductor();
  conductores:Conductor[] =[];

  

  constructor(private conductorService:ConductorService) { }

  ngOnInit() {
    this.conductorService.listConductor().subscribe(
      (data) => {
        this.conductores=data['P_CONDUCTOR'];
        console.log(this.conductores);
      }
    );
  }
  crearConductor(){
    this.conductorService.crearConductor(this.conductor).subscribe(
      (data) =>{  }
    );
  }

}

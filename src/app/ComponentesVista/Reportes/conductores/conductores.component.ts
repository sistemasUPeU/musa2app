import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { ConductoresRegR } from 'src/app/Modelo/ConductoresReg_Reporte';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {
  listarcond: ConductoresRegR[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getConductor().subscribe(
      (data) => {
        this.listarcond = data['P_CURSOR'];
        console.log(this.listarcond)
      }
    );
  }

}

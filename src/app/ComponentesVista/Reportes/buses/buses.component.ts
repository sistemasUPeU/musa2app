import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { BusesR } from 'src/app/Modelo/Buses_Reportes';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  buses: BusesR;
  listarbus: BusesR[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getBuses().subscribe(
      (data) => {
        this.listarbus = data['P_CURSOR'];
        console.log(this.listarbus)
      }
    );
  }

}

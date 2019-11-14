import { Component, OnInit } from '@angular/core';
import { Vehiculosc } from 'src/app/Modelo/Vehiculos';
import { VehiculoService } from 'src/app/service/vehiculos.service';
import { Router , ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculo:Vehiculosc = new Vehiculosc();
  vehiculos:Vehiculosc[]= [];
  constructor(private vehiculosservice:VehiculoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(){
    this.vehiculosservice.getVehiculos().subscribe(
      (data) => {
        this.vehiculos = data['P_CURSOR'];
        console.log(this.vehiculos);
      }
    );
  }

}

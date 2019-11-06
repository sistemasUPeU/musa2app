import { Component, OnInit } from '@angular/core';
import { MantAcciones } from 'src/app/Modelo/MantAcciones';
import { MantenimientoService } from 'src/app/service/mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  mantAcciones: MantAcciones[];
  requests:any;

  constructor(private accionesService:MantenimientoService, private router:Router) { }

  ngOnInit() {
    this.accionesService.getAcciones().subscribe(
      (data: MantAcciones) => {
        this.requests = data.p_cursor;
        console.log(this.requests);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { MantAcciones } from 'src/app/Modelo/MantAcciones';
import { MantenimientoService } from 'src/app/service/mantenimiento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  private mantAcciones: MantAcciones = new MantAcciones();
  requests:MantAcciones[];
  getid: any;
  tipo:number;
  

  constructor(private accionesService:MantenimientoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarAcciones();
  }

  cargarAcciones(): void{
    this.activatedRoute.params.subscribe(params => {
      let tipo = params['tipo']
      if(tipo){
        this.accionesService.getAcciones(tipo).subscribe(
          (data) => {
            this.requests = data['p_cursor'];
            this.tipo = tipo;
          }
        )}
    })
  }

  actualizar(accion:MantAcciones):void{
    this.accionesService.updateAcciones(accion).subscribe(data => {
      this.router.navigate([`home/acciones/`+this.tipo]);
      console.log(accion);
      this.cargarAcciones();
    });
  }

  eliminar(accion:MantAcciones):void{
    this.accionesService.eliminarAcciones(accion.idmantacciones).subscribe(response=>{
      this.requests = this.requests.filter(req=>req!==accion)
    });
  }

  public crearAccion(): void{
    this.mantAcciones.tipo=this.tipo;
    this.accionesService.createAcciones(this.mantAcciones).subscribe(data => {
      this.router.navigate([`home/acciones/`+this.tipo]);
      this.cargarAcciones();
    });
    this.mantAcciones.nombre="";
    this.mantAcciones.tipo=null;
    this.mantAcciones.descripcion="";
    this.mantAcciones.orden=null;
  }

  cargarId(id: number){
    this.accionesService.getById(id).subscribe(
      (data) => {
        this.getid = data['p_cursor'];
        console.log(this.getid);
      }
    );
  }

}

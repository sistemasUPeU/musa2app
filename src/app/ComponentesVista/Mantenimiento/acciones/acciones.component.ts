import { Component, OnInit, ɵConsole } from '@angular/core';
import { MantAcciones } from 'src/app/Modelo/MantAcciones';
import { MantenimientoService } from 'src/app/service/mantenimiento.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  private mantAcciones: MantAcciones = new MantAcciones();
  requests:MantAcciones[];
  getid: any;
  getcat: any;
  tipo:number;

  constructor(private accionesService:MantenimientoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarAcciones();
    this.cargarCat();
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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha actualizado con exito!',
      showConfirmButton: false,
      timer: 2500
    });
  }

  eliminar(accion:MantAcciones):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.accionesService.eliminarAcciones(accion.idmantacciones).subscribe(response=>{
          this.requests = this.requests.filter(req=>req!==accion)
        });
        Swal.fire(
          'Eliminado!',
          'La accion ha sido eliminada',
          'success'
        )
      }
    })
  }

  public crearAccion(): void{
    this.mantAcciones.tipo=this.tipo;
    this.accionesService.createAcciones(this.mantAcciones).subscribe(data => {
      this.router.navigate([`home/acciones/`+this.tipo]);
      this.cargarAcciones();
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha creado con exito!',
      showConfirmButton: false,
      timer: 2500
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

  cargarCat(){
    this.accionesService.getByCat().subscribe(
      (data) => {
        this.getcat = data['p_cursor'];
        console.log(this.getcat);
      }
    );
  }

}

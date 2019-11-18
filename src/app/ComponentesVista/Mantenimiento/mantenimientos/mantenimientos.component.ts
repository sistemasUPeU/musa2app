import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from "src/app/Modelo/Mantenimientos";
import { MantenimientoService } from "src/app/service/mantenimiento.service";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MantAccionMantenimiento } from 'src/app/Modelo/MantAccionMantenimiento';



@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  requests: Mantenimientos[];
  detalles: MantAccionMantenimiento[];
  detalle: MantAccionMantenimiento[];
  getconds: any;
  getbuces: any;
  getbus: any;
  getcond: any;
  getmant:any;
  getacts:any;
  private mantenimientos: Mantenimientos = new Mantenimientos();
  tipo: number;

  constructor(private accionesService: MantenimientoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  
  addNewAction(){
    
  }

  ngOnInit() {
    this.cargarMantenimientos();
    this.cargarBuces();
    this.cargarConductores();
    this.cargarActions(this.tipo);
  }
  

  cargarActions(type:number): void{
    this.accionesService.getAcciones(type).subscribe(
      (data) => {
        this.getacts = data['p_cursor'];
        console.log(this.getacts);
      }
    );
  }

  cargarBuces() {
    this.accionesService.getVehiculos().subscribe(
      (data) => {
        this.getbuces = data['P_CURSOR'];
        console.log(this.getbuces);
      }
    );
  }

  cargarConductores() {
    this.accionesService.getConductores().subscribe(
      (data) => {
        this.getconds = data['p_conductor'];
        console.log(this.getconds);
      }
    );
  }

  cargarMantenimientos(): void {
    this.activatedRoute.params.subscribe(params => {
      let tipo = params['type']
      if (tipo) {
        this.accionesService.getMantsByType(tipo).subscribe(
          (data) => {
            this.requests = data['p_cursor'];
            this.tipo = tipo;
            console.log(this.tipo);
          }
        )
      }
    })
  }

  actualizar(accion: Mantenimientos): void {
    this.accionesService.updateMantenimiento(accion).subscribe(data => {
      this.router.navigate([`home/mantenimientos/` + this.tipo]);
      console.log(accion);
      this.cargarMantenimientos();
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha actualizado con exito!',
      showConfirmButton: false,
      timer: 2500
    });
  }
  eliminarMantenimiento(accion: Mantenimientos): void {
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
        //accion.idempleado = (dame el id del usuario)
        this.accionesService.deleteMantenimiento(accion.idmantenimiento, accion.idempleado).subscribe(response => {
          this.requests = this.requests.filter(req => req !== accion)
        });
        Swal.fire(
          'Eliminado!',
          'el mantenimiento ha sido eliminado',
          'success'
        )
      }
    })
  }
  public crearAccion(): void {
    
    this.mantenimientos.tipomantenimiento = this.tipo;
    this.accionesService.createMantenimiento(this.mantenimientos).subscribe(data => {
      this.router.navigate([`home/mantenimientos/` + this.tipo]);
      this.cargarMantenimientos();
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha creado con exito!',
      showConfirmButton: false,
      timer: 2500
    });
    this.mantenimientos.idconductor = null;
    this.mantenimientos.idvehiculo = null;
    this.mantenimientos.detalle = "";
    this.mantenimientos.fechainicio = null;

  }
  public crearDiaria(): void {
    this.mantenimientos.tipomantenimiento = this.tipo;
    this.accionesService.createMantenimiento(this.mantenimientos).subscribe(data => {
      this.router.navigate([`home/mantenimientos/` + this.tipo]);
      this.cargarMantenimientos();
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha creado con exito!',
      showConfirmButton: false,
      timer: 2500
    });
    this.mantenimientos.idconductor = null;
    this.mantenimientos.idvehiculo = null;
    this.mantenimientos.detalle = "";
    this.mantenimientos.fechainicio = null;

  }


  public crearTecnico(): void {
    this.mantenimientos.tipomantenimiento = this.tipo;
    this.accionesService.createMantenimiento(this.mantenimientos).subscribe(data => {
      this.router.navigate([`home/mantenimientos/` + this.tipo]);
      this.cargarMantenimientos();
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha creado con exito!',
      showConfirmButton: false,
      timer: 2500
    });
    this.mantenimientos.idconductor = null;
    this.mantenimientos.idvehiculo = null;
    this.mantenimientos.detalle = "";
    this.mantenimientos.fechainicio = null;

  }

}

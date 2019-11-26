import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from "src/app/Modelo/Mantenimientos";
import { empleado } from "src/app/Modelo/empleados";
import { MantenimientoService } from "src/app/service/mantenimiento.service";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MantAccionMantenimiento } from 'src/app/Modelo/MantAccionMantenimiento';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  requests: Mantenimientos[];
  detalles: MantAccionMantenimiento[];
  getemps: any;
  getconds: any;
  getbuces: any;
  getmant: any;
  getacts: any;
  getactshijos: any;
  newid: number;



  p_estado: any;
  p_msg: any;
  private mantenimientos: Mantenimientos = new Mantenimientos();
  tipo: number;

  constructor(private accionesService: MantenimientoService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.cargarMantenimientos();
    this.cargarBuces();
    this.cargarConductores();
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.accionesService.getEmpleados().subscribe(
      (data) => {
        this.getemps = data;
        console.log(this.getemps);
      }
    );
  }
  cargarActions(type: number): void {
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
  public eliminarMant(accion: any): void {
    console.log(accion);
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

  public cambiarUserCreate(name: String) {
    this.mantenimientos.userCreate = name;
  }

  public crearMant(): void {

    this.mantenimientos.tipoMantenimiento = this.tipo;
    this.accionesService.createMantenimiento(this.mantenimientos).subscribe(data => {
      this.newid = data["p_idmantenimiento"];
      this.p_estado = data["p_error"];
      this.p_msg = data["p_msgerror"];
      console.log(this.newid);
      this.addDetalle();
      this.router.navigate([`home/mantenimientos/` + this.tipo]);
      this.cargarMantenimientos();
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: (this.p_estado == 1 ? 'Se ha creado con exito' : this.p_msg),
      showConfirmButton: false,
      timer: 2500
    });
    this.mantenimientos.idConductor = null;
    this.mantenimientos.idVehiculo = null;
    this.mantenimientos.idEmpleado = null;
    this.mantenimientos.Detalle = "";
    this.mantenimientos.fechaInicio = null;

  }

  public addDetalle(): void {
    this.getacts.forEach(a => {
      if (a.idaccionpadre == null || a.estado == 0) { }
      else {
        if (a.tipo == 3) {
          let n1: string = 'option_one_' + a.idmantacciones;
          let n2: string = 'option_two_' + a.idmantacciones;
          let n3: string = 'option_three_' + a.idmantacciones;
          var e1 = document.getElementById(n1) as HTMLInputElement;
          var e2 = document.getElementById(n2) as HTMLInputElement;
          var e3 = document.getElementById(n3) as HTMLInputElement;
          if (e1 != null && e2 != null && e3 != null) {
            if (e1.checked == true) {
              this.accionesService.addDetalle(this.newid, a.idmantacciones).subscribe(data => {
                console.log(data);
                this.accionesService.updateDetalle(this.newid, a.idmantacciones, 1).subscribe(data => {
                  console.log(data);
                });
              });
            }
            if (e2.checked == true) {
              this.accionesService.addDetalle(this.newid, a.idmantacciones).subscribe(data => {
                console.log(data);
                this.accionesService.updateDetalle(this.newid, a.idmantacciones, 2).subscribe(data => {
                  console.log(data);
                });
              });
            }
            if (e2.checked == true) {
              this.accionesService.addDetalle(this.newid, a.idmantacciones).subscribe(data => {
                console.log(data);
                this.accionesService.updateDetalle(this.newid, a.idmantacciones, 3).subscribe(data => {
                  console.log(data);
                });
              });
            }
          }
        } else {
          console.log('for del detalle: ' + a.idmantacciones);
          let n: string = 'acc_' + a.idmantacciones;
          console.log('n: ' + n);
          var e = document.getElementById(n) as HTMLInputElement;
          console.log(e);
          if (e != null) {
            if (e.checked == true) {
              this.accionesService.addDetalle(this.newid, a.idmantacciones).subscribe(data => {
                console.log(data);
                this.accionesService.updateDetalle(this.newid, a.idmantacciones, 1).subscribe(data => {
                  console.log(data);
                });
              });
            }
          }
        }
      }
    });
  }

  public validarMant(accion: any): void {
    console.log(accion);
    Swal.fire({
      title: 'Estas seguro que desea cambiar la condicion del mantenimiento?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        //accion.idempleado = (dame el id del usuario)
        if (accion.estado == 1) {
          this.accionesService.validarJefeOper(accion.idmantenimiento, accion.idempleado).subscribe(response => {
            this.requests = this.requests.filter(req => req !== accion)
          });
          Swal.fire(
            'Validado!',
            'el mantenimiento ha cambiado a estado: pendiente',
            'success'
          )
        }if (accion.estado == 2) {
          this.accionesService.validarJefeMant(accion.idmantenimiento, accion.idempleado).subscribe(response => {
            this.requests = this.requests.filter(req => req !== accion)
          });
          Swal.fire(
            'Validado!',
            'el mantenimiento ha cambiado a estado: en proceso',
            'success'
          )
        }if (accion.estado == 3) {
          this.accionesService.validarFinalizado(accion.idmantenimiento, accion.idempleado).subscribe(response => {
            this.requests = this.requests.filter(req => req !== accion)
          });
          Swal.fire(
            'Finalizado!',
            'el mantenimiento ha cambiado a estado: finalizado',
            'success'
          )
        }
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Caja } from 'src/app/Modelo/Caja';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-registrarcaja',
  templateUrl: './registrarcaja.component.html',
  styleUrls: ['./registrarcaja.component.css']
})
export class RegistrarcajaComponent implements OnInit {
  montcierre:number
  usuario : Usuario[];
  caja : Caja = new Caja();
  abrir:boolean
  cerrar:boolean
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.abrir=true
    this.cerrar=false
  }
  alerta(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro desea Aperturar caja?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, aperturar !' ,
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.crear();
        this.cerrar=true
        this.abrir=false
        swalWithBootstrapButtons.fire(
          
          'Caja Aperturada!',
          'Acaba de inicar caja '
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Apertura Cancelada :)',
          
        )
      }
    })
  }
  crear(){

    this.service.CreateCaja(this.caja).subscribe(data =>{
      this.caja.tipo=1;
      this.caja.idempleado=2;
      var x = localStorage.getItem("user")
      this.caja.usercreate = x;
    })
  }
  cerradita(){

    this.service.CreateCaja(this.caja).subscribe(data =>{
      this.caja.tipo=2;
      this.caja.idempleado=2;
      var x = localStorage.getItem("user")
      this.caja.montocierre=30;
      this.caja.usercreate = x;
    })
  }
  alerta1(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro desea Cerrar caja?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Cerrar !' ,
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.abrir=true
        this.cerrar=false
        this.cerradita();
        swalWithBootstrapButtons.fire(
          
          'Caja Cerrada!',
          'Acaba de cerrar caja '
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cierre Cancelado :)',
          
        )
      }
    })
  }
}


import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Ubigeo } from './ubigeo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrarubigeo',
  templateUrl: './registrarubigeo.component.html',
  styleUrls: ['./registrarubigeo.component.css']
})
export class RegistrarubigeoComponent implements OnInit {
 ubi: Ubigeo = new Ubigeo();
  ubigeosLista: Ubigeo[] = [];
  codigo: number;
  idubigeo: string;
  ubigeos: Ubigeo[];
  router: any;
  ubigeo: Ubigeo = new Ubigeo();
  service: any;
  ubigeoEditar: Ubigeo = new Ubigeo();
  constructor(private serviceService: ServiceService) {
    this.ubigeo = new Ubigeo()
  }

  ngOnInit() {
    this.getAllUbigeo();
  }

  getAllUbigeo() {
    this.serviceService.getAllUbigeo().subscribe(
      (data) => {
        this.ubigeosLista = data['P_CURSOR'];
      }
    );
  }

  searchUbigeo() {

    if (this.codigo != null && this.codigo > 0) {
      this.serviceService.searchUbigeo(this.codigo).subscribe(
        (data) => {
          this.ubigeosLista = data['P_CURSOR'];
        }
      );
    } else {
      this.getAllUbigeo();
    }
  }

  save(){
    alert(this.ubi.CODUBIGEO)
    this.serviceService.postUbigeo(this.ubi).subscribe( response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  alert("registrado correctamente...")
  console.log(Response)
  this.ngOnInit();
   }
  

Eliminar(id: number){
  console.log(id)
  this.serviceService.deleteUbige(id).subscribe(data => {
     alert('Registro eliminado correctamente');
     console.log(data)
    this.ngOnInit();
  })

 }
editar(ubigeo: Ubigeo){
  console.log("ubige editart:", ubigeo)
  this.ubigeoEditar = ubigeo;
  alert("Modificado Correcto");
}
  }

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
  ubigeosLista: Ubigeo[] = [];
  codigo: number;
  idubigeo: string;
  ubigeos: Ubigeo[];
  router: any;
  ubigeo: Ubigeo = new Ubigeo();
  service: any;

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

  // deleteUbigeo(ubigeo: Ubigeo){
  // if(!ubigeo) return;
  // this.serviceService.delUbigeo(ubigeo.IDUBIGEO).subscribe(
  // (data) => {
  // this.ubigeosLista = data['P_CURSOR'].filter(h=> h !==ubigeo);

  //  }     );
  // }}
  //addUbigeo(): void{
  //this.router.navigate(['add-ubigeo']);
  // }
  buscar(f: NgForm) {
    this.serviceService.postUbigeo(f.value).subscribe( response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
alert("registrado correctamente...")
  }

/*
Eliminar(id: number){
  console.log(id)
  this.serviceService.deleteUbige(id).subscribe(data => {
     alert('Registro eliminado correctamente');
     console.log(data)
    this.ngOnInit();
  })

 }
*/
  }

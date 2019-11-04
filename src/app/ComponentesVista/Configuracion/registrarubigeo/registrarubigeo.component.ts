import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Ubigeo } from './ubigeo';

@Component({
  selector: 'app-registrarubigeo',
  templateUrl: './registrarubigeo.component.html',
  styleUrls: ['./registrarubigeo.component.css']
})
export class RegistrarubigeoComponent implements OnInit {
  ubigeosLista: Ubigeo[] = [];
  codigo: number;
  ubigeo: Ubigeo = new Ubigeo;

  constructor(private  serviceService:ServiceService) { }

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

  guardar() {
    this.serviceService.postUbigeo(this.ubigeo).subscribe();
  }
}

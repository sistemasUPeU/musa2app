import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-registrarubigeo',
  templateUrl: './registrarubigeo.component.html',
  styleUrls: ['./registrarubigeo.component.css']
})
export class RegistrarubigeoComponent implements OnInit {
  ubigeo: Ubigeo;
  ubigeosLista: Ubigeo[] = [];
  constructor(private  serviceService:ServiceService) { }

  ngOnInit() {
    this.getAllUbigeo();
  }

  getAllUbigeo() {
    this.serviceService.getAllUbigeo().subscribe(
      (data) => {
        this.ubigeosLista = data['P_CURSOR'];
        console.log(this.ubigeosLista)
      }
    );
  }

  postUbigeo() {
    //this.serviceService.postUbigeo(this.ubigeo).subscribe();
  }
}

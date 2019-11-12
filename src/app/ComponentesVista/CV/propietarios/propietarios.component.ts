import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service'
import { Propietario } from 'src/app/Modelo/Propietarios'

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {

  propietario:Propietario = new Propietario();
  propietarios:Propietario[] = [];
  constructor(private propietarioservice:ServiceService) { }

  ngOnInit() {
    this.propietarioservice.getPropietarios().subscribe(
       (data) => {
         this.propietarios = data ['P_CURSOR'];
         console.log(this.propietarios);
       }
    );
  }

}

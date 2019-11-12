import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service'
import { Propietario } from 'src/app/Modelo/Propietarios'
import { Router } from '@angular/router'

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {

  propietario:Propietario = new Propietario();
  propietarios:Propietario[] = [];
  constructor(private propietarioservice:ServiceService, private router:Router) { }

  ngOnInit() {
    this.getpropietario();
  }
  getpropietario(){
    this.propietarioservice.getPropietarios().subscribe(
       (data) => {
         this.propietarios = data ['P_CURSOR'];
         console.log(this.propietarios);
       }
    );
  }
  delete(prop:Propietario){
    alert('hola perra')
    this.propietarioservice.deletePropietarios(prop).subscribe( data => {
         console.log(this.propietario)
         this.getpropietario();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Propietario } from 'src/app/Modelo/Propietarios';
import { Personas } from 'src/app/Modelo/Personas';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {
  persona:Personas = new Personas();
  personas:Personas[] = []; 
  propietarioc: Propietario = new Propietario();
  propietario:Propietario = new Propietario();
  propietarios:Propietario[] = [];
  constructor(private propietarioservice:ServiceService, private router:Router, private personasservice:PersonaService) { }

  ngOnInit() {
    this.getpropietario();
    this.getPersonasId();
  }
  getpropietario(){
    this.propietarioservice.getPropietarios().subscribe(
       (data) => {
         this.propietarios = data ['P_CURSOR'];
         console.log(this.propietarios);
       }
    );
  }
  getPersonasId(){
    this.personasservice.getAllPersonaId().subscribe(
      (data) => {
        this.personas = data ['P_CUR_IDPERSONA'];
        console.log(this.personas);
      }
    )
  }
  delete(prop:Propietario){
    alert('hola mundo')
    this.propietarioservice.deletePropietarios(prop).subscribe( data => {
         console.log(this.propietario);
         this.getpropietario();
    })
  }
  
  /*crearPropietarios(){
    this.propietarioservice.crearPropietarios(this.propietarioc).subscribe(
      (data) =>{  
        this.getpropietario(); 
      }
    )
  }*/
  
}
